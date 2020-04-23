const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use(
        '/api/item',
        createProxyMiddleware({
          target: 'https://localhost:3000',
            changeOrigin: true,
            secure: false
        })
        );
    
         app.use(
        '/api/item/delete',
        createProxyMiddleware({
          target: 'https://localhost:3001',
            changeOrigin: true,
            secure: false
        })
      );
};