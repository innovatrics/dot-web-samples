const http = require("http");
const https = require("https");

const CORE_SERVER_URL = "https://dot.innovatrics.com/core/api/v5/actuator/info";
const OCR_SERVER_URL = "https://dot.innovatrics.com/ocr/api/v3/actuator/info";

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

function getRequest(url) {
  return new Promise((resolve, reject) => {
    const request = url.startsWith("https://") ? https.request : http.request;
    console.log(`SENDING_REQUEST:GET:${url}`);
    const req = request(url, {}, (res) => {
      resolve(streamToBuf(res));
    });
    req.on("error", (e) => {
      reject(e);
    });

    req.end();
  });
}

async function getServerVersion(url) {
  const buf = await getRequest(url);
  const data = JSON.parse(buf.toString("utf8"));
  return data.build.version;
}

async function main() {
  const coreVersion = await getServerVersion(CORE_SERVER_URL);
  const ocrVersion = await getServerVersion(OCR_SERVER_URL);
  console.log(`core server version: ${coreVersion}`);
  console.log(`ocr server version: ${ocrVersion}`);
}

main();
