# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## License

In order to use these components integrated in the samples you will need a license agreement. To obtain it, please contact support@innovatrics.com.

## Install dependencies

Run `yarn`.

## Copy wasm folder

For detection to work `wasm` folder with web assembly files in it has to be present in `src` folder.
This script copies wasm folder from node modules into `src` folder. 

```
yarn copy-wasm
```

or do it manually:

Copy `wasm` folder from `node_modules/@innovatrics/dot-document-auto-capture` or other auto-capture package to `angular-components-integration/src` folder.

&nbsp;

> **_When creating new project:_** Add `src/wasm` under `assets` in your `angular.json` file.

## Tsconfig

In *tsconfig.json* enable following:

```
"compilerOptions": {
  "skipLibCheck": true
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
