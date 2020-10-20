const express = require("express"); //importar dependencias
const path = require("path");
const pages = require("./pages.js");

const server = express(); //iniciando express
server
  //utilizar corpo da requisição
  .use(express.urlencoded({extended: true}))

  .use(express.static("public")) //arquivos estáticos

  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //rotas da aplicação
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

//ligar servidornp
server.listen(5500);
