//express requisition
const express =  require('express')
//mongoose requisition
const mongoose = require('mongoose')
//dotenv requisition
const dotenv = require('dotenv')
dotenv.config()
//require-dir requisition
const requireDir = require('require-dir')
//cors requisition
const cors = require('cors')

// Starting App
const app = express()
app.use(express.json())
app.use(cors())


//database connection
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true }

mongoose.connect(process.env.MONGO_URI, options)

mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err)
})
mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!')
})
mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!')
})


//Calling models
requireDir('./src/models')

//Routes
app.use('/api',require('./src/routes'))

//Make the app listen the given port in .env otherwise, listen 3001
app.listen(process.env.PORT || 3001)
