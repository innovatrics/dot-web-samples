const http = require("http");
const https = require("https");

const CORE_SERVER_URL = "https://dot.innovatrics.com/core/api/v6/actuator/info";
const DOCUMENT_SERVER_URL =
  "https://dot.innovatrics.com/document/api/v5/actuator/info";
const OCR_SERVER_URL = "https://dot.innovatrics.com/ocr/api/v3/actuator/info";
const TRUST_SERVER_URL =
  "https://dot.innovatrics.com/trust/api/v1/actuator/info";

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
  const documentVersion = await getServerVersion(DOCUMENT_SERVER_URL);
  const ocrVersion = await getServerVersion(OCR_SERVER_URL);
  const trustVersion = await getServerVersion(TRUST_SERVER_URL);
  console.log(`core server version: ${coreVersion}`);
  console.log(`document server version: ${documentVersion}`);
  console.log(`ocr server version: ${ocrVersion}`);
  console.log(`trust server version: ${trustVersion}`);
}

main();
