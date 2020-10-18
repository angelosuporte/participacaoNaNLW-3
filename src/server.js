const express = require('express'); //importar dependencias
const path = require('path');

const server = express() //iniciando express

//criando rota
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//ligar servidor
server.listen(5500)
