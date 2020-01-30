const app = require('./src/config/custom-express'); // framework importada

app.listen('3000', function(){ //determinando a porta e retornando para p usuário
    console.log('Servidor rodando na porta 3000')
});
