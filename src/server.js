const express = require('express')
const server = express()
const routes = require('./routes')

//Habilitar o ejs
server.set('view engine', 'ejs')

//Habilitar arquivos statics
server.use(express.static('public'))

//USar o req
server.use(express.urlencoded({ extended: true }))

//Rotas
server.use(routes)

server.listen(3000, 
    () => {
        console.log('Tá safe')
    }
)
