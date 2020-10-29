const fs = require("fs");
const http = require("http");
const https = require("https");

const PORT = 8000;
const HOST = "127.0.0.1";
const SERVER_PREFIX = "https://dot.innovatrics.com";

// helper function
function streamToBuf(stream) {
  const parts = [];
  return new Promise((resolve, reject) => {
    stream.on("error", (e) => {
      reject(e);
    });
    stream.on("data", (part) => {
      parts.push(part);
    });
    stream.on("end", () => {
      resolve(Buffer.concat(parts));
    });
  });
}

// do a http-get-or-post-request with a json-body
// if we have a `body`, then it is POST
// otherwise it is GET
function sendRequest(url, body) {
  const hasBody = body != null;
  const options = hasBody
    ? {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    : {};

  return new Promise((resolve, reject) => {
    const request = url.startsWith("https://") ? https.request : http.request;
    console.log(`SENDING_REQUEST:${options.method || "GET"}:${url}`);
    const req = request(url, options, (res) => {
      resolve(streamToBuf(res));
    });
    req.on("error", (e) => {
      reject(e);
    });

    if (hasBody) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

function createServer(indexHTMLPath, clientJSPath) {
  http
    .createServer(async (req, res) => {
      const { url } = req;

      if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(fs.readFileSync(indexHTMLPath));
        return;
      }

      if (url === "/client.js") {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(fs.readFileSync(clientJSPath));
        return;
      }

      if (
        url.startsWith("/core") ||
        url.startsWith("/ocr") ||
        url.startsWith("/document") ||
        url.startsWith("/trust")
      ) {
        // these requests we simply forward into the dot-servers
        let result = null;
        switch (req.method) {
          case "GET": {
            result = await sendRequest(SERVER_PREFIX + url);
            break;
          }
          case "POST": {
            const bodyBuf = await streamToBuf(req);
            const body = JSON.parse(bodyBuf.toString("utf-8"));
            result = await sendRequest(SERVER_PREFIX + url, body);
            break;
          }
          default: {
            res.writeHead(405);
            res.end("Method Not Allowed");
            return;
          }
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(result);
        return;
      }

      res.writeHead(404);
      res.end("Not Found");
    })
    .listen(PORT, HOST);
}

module.exports = createServer;
