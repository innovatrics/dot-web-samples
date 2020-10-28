const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");

const PORT = 8000;
const HOST = "127.0.0.1";
const DOT_SERVER = "https://dot.innovatrics.com/document";

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
function doRequest(url, body) {
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

http
  .createServer(async (req, res) => {
    const { url } = req;

    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fs.readFileSync(path.join(__dirname, "index.html")));
      return;
    }

    if (url === "/client.js") {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(fs.readFileSync(path.join(__dirname, "client.js")));
      return;
    }

    if (url.startsWith("/api/")) {
      // these requests we simply forward into the dot-core server
      let result = null;
      switch (req.method) {
        case "GET": {
          result = await doRequest(DOT_SERVER + url);
          break;
        }
        case "POST": {
          const bodyBuf = await streamToBuf(req);
          const body = JSON.parse(bodyBuf.toString("utf-8"));
          result = await doRequest(DOT_SERVER + url, body);
        }
      }

      if (result == null) {
        res.writeHead(405);
        res.end("Method Not allowed");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(result);
      }
      return;
    }

    res.writeHead(404);
    res.end("Not Found");
  })
  .listen(PORT, HOST);
