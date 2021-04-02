const express = require('express')
const server = express()
const routes = require('./routes')

//Habilitar o ejs
server.set('view engine', 'ejs')

//Habilitar arquivos statics
server.use(express.static('public'))

//ROtas
server.use(routes)

server.listen(3000, 
    () => {
        console.log('Tá safe')
    }
)
