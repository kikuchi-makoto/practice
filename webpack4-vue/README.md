# webpack4-vue

## Vue.js開発環境

- webpack ^4.29.5
- webpack-dev-server
- eslint for Vue.js
- sideEffects: false
- resolve
    - extensions .js/.vue
    - alias vue$/`@`
- loader
    - vue
    - babel
    - scss
        - style(MiniCssExtractPlugin.loader)
        - css
        - postcss
        - sass
    - url
        - image file
- Chunks(all)
- minimize to style.css
- plugins
    - VueLoaderPlugin
    - MiniCssExtractPlugin
    - CopyWebpackPlugin
    - ImageminPlugin
    - HtmlWebpackPlugin

## 参考サイト

- [これから始めるwebpack](https://app.codegrid.net/series/2017-webpack-basics)
- [キャッチアップwebpack](https://app.codegrid.net/series/2018-catch-up-webpack)
- [How to set up ES Lint for Airbnb, Vue JS, and VS Code](https://medium.com/@agm1984/how-to-set-up-es-lint-for-airbnb-vue-js-and-vs-code-a5ef5ac671e8)
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
