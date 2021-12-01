const connection = require('../database/connection');//importanto conexao com o banco de dados
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');//importando o controler de clientes

router.post('/cadastro', customerController.newCustomer);//chama o funcao de cadastrar novo cliente dentro da rota

module.exports = router

