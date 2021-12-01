//conexao com o banco de dados
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',      //-> por padrão localhost
        user : 'root',       //-> por padrão root
        password : 'Pigmeu2002', // -> sua senha definida
        database : 'Customers'       //-> nome do seu banco criado
     }
});
module.exports = knex