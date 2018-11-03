module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ['error', 2],
        "no-unused-vars": 0,
        "no-multi-spaces": 2,
        "no-trailing-spaces": 2,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "key-spacing": [0, {
            "beforeColon": false,
            "afterColon": true
        }],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
    }
};