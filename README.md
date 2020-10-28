# compatibility

these samples are compatible with dot-server versions: `core=6.2.0` and `ocr=3.27.0`. you can run the version-check sample (described below), to verify the version of the dot-servers.

# testing on mobile

the active-liveness-check sample requires a https-connection when not using on `localhost`. the simplest way to achieve this is use a solution that publishes the developer's `localhost` to some internet-facing server using a tunnel. for example using [ngrok](https://ngrok.com/), a command like `ngrok http 8000` will create the required tunnel. do make sure that you close the tunnel when you stop using the sample, otherwise the tunnel will keep publishing the developer's `localhost:8000` to a public internet address.

# production-mode

you need node12 installed.
the following commands start a web-server for the specific sample, and you can see it in a web-browser by going to `http://localhost:8000`

- `node detect-face/server.js`
- `node verify-face/server.js`
- `node active-liveness-check/server.js`
- `node document-capture/server.js`
- `node document-classify/server.js`

the following command checks the version of the dot-servers, and reports it in the console:

- `node version-check/version-check.js`

# development-mode

you need node10 installed.
do a `yarn install` to install the dependencies.

the following commands will start the samples with an auto-reloading nodejs-server:

- `yarn run sample-detect-face`
- `yarn run sample-verify-face`
- `yarn run sample-active-liveness-check`
- `yarn run sample-document-capture`
- `yarn run sample-document-classify`

the following command will run the version-check sample:

- `yarn run sample-version-check`

the following code-quality tools work:

- `yarn run prettier:check`
- `yarn run lint`
