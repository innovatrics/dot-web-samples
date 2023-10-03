# vuejs-components-integration

## License

In order to use these components integrated in the samples you will need a license agreement. To obtain it, please contact support@innovatrics.com.

## Project setup

```
yarn
```

### Copy wasm folder

For detection to work `wasm` folder with web assembly files in it has to be present in `public` folder.
This script copies wasm folder from node modules into public folder. 

```
yarn copy-wasm
```

or do it manually:

Copy `wasm` folder from `node_modules/@innovatrics/dot-document-auto-capture` or or other auto-capture package to `vuejs-components-integration/public` folder.

### Compiles and hot-reloads for development

```
yarn start
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
