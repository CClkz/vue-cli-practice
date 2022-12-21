const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    filenameHashing: false, // 生成的静态资源包含hash 
    lintOnSave: false, // 在每次保存时 lint 代码,在 @vue/cli-plugin-eslint 被安装之后生效
    transpileDependencies: true, // babel-loader 转译 node_modules 中的文件，可传数组，转译部分依赖
    productionSourceMap: true, // 生产环境的 source map,true会影响构建性能
    crossorigin: undefined, // html-webpack-plugin 在构建时注入的标签的crossorigin属性：anonymous|use-credentials|""
    integrity: false, // html-webpack-plugin 在构建时注入的标签启用SRI（子资源完整性），启用时preload resource hints被禁用
    pages: {
        test1: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'test1.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Test1 Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        test2: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'test2.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Test2 Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'test2', 'hello']
        },
    },
    configureWebpack: {},
    chainWebpack(config) {
    },
    css: {
        // requireModuleExtension: false, // CSS Module文件是否需要扩展名[.module]
        extract: true, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,而不是动态注入到 JavaScript 中的 inline 代码
        sourceMap: false, // 是否为 CSS 开启 source map,true会影响构建的性能
        loaderOptions: {
            css:{},
            postcss:{},
            sass: {
                additionalData: '@import "./src/styles/global";',
            },
            less:{},
            stylus:{}
        }
    },
    devServer: { // 所有 webpack-dev-server 的选项都支持
        proxy: { // 代理
        },
    },
    parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader,在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
    pwa: {},
    pluginOptions: {}
})