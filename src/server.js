const express = require('express'); //importar dependencias
const server = express() //iniciando express

//criando rota
server.get('/', (request, response) => {
    return response.send('olá mundo')
})

//ligar servidor
server.listen(5500)
