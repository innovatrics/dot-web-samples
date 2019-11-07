# compatibility
these samples are compatible with dot-server versions: `core=3.5.0` and `ocr=3.11.3`. you can run the version-check sample (described below), to verify the version of the dot-servers.

# production-mode
you need node12 installed.
the following commands start a web-server for the specific sample, and you can see it in a web-browser by going to `http://localhost:8000`
- `node detect-face/server.js`
- `node verify-face/server.js`
- `node liveness-check/server.js`
- `node document-capture/server.js`
- `node document-classify/server.js`

the following command checks the version of the dot-servers, and reports it in the console:
- `node version-check.version-check.js`

# development-mode
you need node10 installed.
do a `yarn install` to install the dependencies. the following commands will start the samples with an auto-reloading nodejs-server:
- `yarn run sample-detect-face`
- `yarn run sample-verify-face`
- `yarn run sample-liveness-check`
- `yarn run sample-document-capture`
the following command will run the version-check sample:
- `yarn run sample-version-check`

the following code-quality tools work:
- `yarn run prettier:check`
- `yarn run lint`

