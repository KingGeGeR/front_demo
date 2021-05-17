module.exports = {
    //axios域代理，解决axios跨域问题
    
    devServer: {
        proxy: {
            '/greeting': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                ws: true,
                pathRewrite: {

                }
            }
        }
    }
}