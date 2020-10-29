const path = require("path");
const createServer = require("../create-server");

createServer(
  path.join(__dirname, "index.html"),
  path.join(__dirname, "client.js")
);
