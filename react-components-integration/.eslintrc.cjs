module.exports  = {
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "react/button-has-type": "off",
    "no-alert": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-bind": "off"
  },
  ignorePatterns: [".eslintrc.cjs"]
};