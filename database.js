//comunicacao com o banco de dados

async function connect ()
{
    if(global.connection && global.connection.state !== ' disconnected')
    {
        return global.connection;
    }
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:capacitacao_info@localhost:3306/Customers");//info do banco de dados: mysql://seu_userName:seu_password@qual_host_hospedado:port/nome_do_db(mysql workbench -> schemas -> nome_db)
    console.log("conectado!!!!");
    global.connection = connection
    return connection;
}
connect();

module.exports = {}