const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

//Habilitar o ejs
server.set('view engine', 'ejs')

//Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

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
