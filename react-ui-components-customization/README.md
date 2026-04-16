# UI component customization

This sample showcases how to implement your own UI for [Face Auto Capture Component](https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-face/latest/documentation/).

You are free to customize it in any way you want. The sample contains all the necessary UI elements to ensure full functionality of the [Face Auto Capture Component](https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-face/latest/documentation/).

## Getting Started with Vite React App

This project was bootstrapped with [Vite](https://vitejs.dev/).

When component (face or document) is initialized, sam.wasm file will be fetched from http://localhost:5173/sam.wasm.
That's why sam.wasm file need to be placed in root of public folder.

## License

In order to use these components integrated in the samples you will need a license agreement. To obtain it, please contact support@innovatrics.com.

## Available Scripts

In the project directory, you can run:

### `pnpm install`

Installs all dependencies needed for the project to run.

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

### `pnpm build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/build.html) for more information.

### `pnpm copy-assets` or `pnpm copy-assets-win`

In order to use the components, you need to copy the `dot-assets` folder from all `node_modules/@innovatrics/*` components to the `public` folder after all dependencies have been installed.
To do this, on linux/mac run:

```
pnpm copy-assets
```

or on windows run:

```
pnpm copy-assets-win
```

or do it manually.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://react.dev/).