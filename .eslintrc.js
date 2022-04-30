module.exports = {
    env: {
        node: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "no-console": "warn"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
