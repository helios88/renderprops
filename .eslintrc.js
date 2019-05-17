module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": 0,
        "function-paren-newline": 0,
        "import/prefer-default-export": "off",
        "import/no-unresolved": "off",
        "react/prefer-stateless-function": "off",
        "react/prop-types": "off",
        "react/no-multi-comp": "off",
        "react/sort-comp": "off"
    }
};