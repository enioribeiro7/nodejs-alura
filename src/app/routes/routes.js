module.exports = (app) => {

    app.get('/', function index(req, resp) {
        resp.send(`
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Rota Index  </h1>
                    </body> 
                </html>
            `);
    });
    
    
    app.get('/pedidos', function index(req, resp) {
        resp.send(`
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Tela de Pedido  </h1>
                    </body> 
                </html>
            `);
    
    });
};