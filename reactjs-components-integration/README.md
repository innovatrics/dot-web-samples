# Getting Started with Vite React App

This project was bootstrapped with [Vite](https://vitejs.dev/).

When component (face or document) is initiliazed, sam.wasm file will be fetched from http://localhost:3000/sam.wasm.
That's why sam.wasm file need to be placed in root of public folder.

## License

In order to use these components integrated in the samples you will need a license agreement. To obtain it, please contact support@innovatrics.com.

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs all dependencies needed for the project to run.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/build.html) for more information.

### `yarn copy-assets` or `yarn copy-assets-win`

In order to use the components, you need to copy the `dot-assets` folder from all `node_modules/@innovatrics/*` components to the `src` folder after all dependencies have been installed.
To do this, on linux/mac run.

```
yarn copy-assets
```

or on windows run

```
yarn copy-assets-win
```

or do it manually.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).
