const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Método Http:
  * 
  * GET: buscar/listar uma informação do backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informações no backend
  */
 /**
  * Tipos de parâmentros
  * 
  * Query: parâmetros nomeados enviados na rota após o simbolo de ? serve para (filtros e paginação)
  * Routes Params: Parametro utilizados para identificar recursos
  * Request body: Corpo da requisição utilizado utilizado para criar ou alterar recursos
  */
/**
 * SQL: MySQL, SQLlite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NOSQL: MongoDb, CouchDb
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where() 
  */

app.listen(3333);