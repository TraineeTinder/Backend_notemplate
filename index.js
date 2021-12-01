//onde fica o codigo
const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


app.listen(4000, ()=>{
    console.log("APlicacao rodando na porta 4000")
});//criando rota para fazer as requisicoes no insomnia

app.get('/',(req,res)=>{
    res.send("SALverrrr")
})
