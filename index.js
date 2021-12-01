//onde fica o codigo
const db = require('./database');
const express = require('express');

const app = express();
app.use(express.json());

app.post('/users', (request,response) => {
    return response.json({
        teste: 'ok',
        message: 'funcionou',
    })
});
app.listen(3333);//criando rota para fazer as requisicoes no insomnia

console.log('Comecou');//teste para saber se esta funcionando