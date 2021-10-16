const express = require('express')
const mongoose = require('mongoose')
const linkRouter = require('./routes/linkRouter')
const path = require('path')
const PORT = 8080
const dbName = 'redirectProject'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

mongoose.connect(`mongodb://localhost/${dbName}`)

const db = mongoose.connection

db.on('error', () => console.log('Houve um erro'))
db.once('open', () => console.log(`Banco de dados ${dbName} carregado`))

app.use('/', linkRouter)

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))