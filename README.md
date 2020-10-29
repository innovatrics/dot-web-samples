# compatibility

these samples are compatible with dot-server versions: `core=6.2.0`, `document=5.0.0`, `ocr=3.27.0`, `trust=1.3.1`. you can run the version-check sample (described below), to verify the version of the dot-servers.

# testing on mobile

the core-face-check-liveness-active sample requires a https-connection when not using on `localhost`. the simplest way to achieve this is use a solution that publishes the developer's `localhost` to some internet-facing server using a tunnel. for example using [ngrok](https://ngrok.com/), a command like `ngrok http 8000` will create the required tunnel. do make sure that you close the tunnel when you stop using the sample, otherwise the tunnel will keep publishing the developer's `localhost:8000` to a public internet address.

# production-mode

you need node12 installed.
the following commands start a web-server for the specific sample, and you can see it in a web-browser by going to `http://localhost:8000`

- `node core-face-detect/server.js`
- `node core-face-verify/server.js`
- `node core-face-check-liveness-active/server.js`
- `node document-ocr/server.js`
- `node ocr-process-document/server.js`
- `node ocr-classify/server.js`
- `node trust-evaluate/server.js`

the following command checks the version of the dot-servers, and reports it in the console:

- `node version-check/version-check.js`

# development-mode

you need node10 installed.
do a `yarn install` to install the dependencies.

the following commands will start the samples with an auto-reloading nodejs-server:

- `yarn run sample-core-face-detect`
- `yarn run sample-core-face-verify`
- `yarn run sample-core-face-check-liveness-active`
- `yarn run sample-document-ocr`
- `yarn run sample-ocr-process-document`
- `yarn run sample-ocr-classify`
- `yarn run sample-trust-evaluate`

the following command will run the version-check sample:

- `yarn run sample-version-check`

the following code-quality tools work:

- `yarn run prettier:check`
- `yarn run lint`
