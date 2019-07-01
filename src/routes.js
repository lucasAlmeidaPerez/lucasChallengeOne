const express = require('express')
const routes = express.Router()

const BotsController = require('./controllers/BotsController')
const MessagesController = require('./controllers/MessagesController')

//Bots command routes
routes.get('/bots', BotsController.retrieveBots)
routes.get('/bots/:id', BotsController.showBot)
routes.post('/bots', BotsController.createBot)
routes.put('/bots/:id', BotsController.updateBot)
routes.delete('/bots/:id', BotsController.deleteBot)

//Message command routes
routes.post('/messages', MessagesController.createMessage)
routes.get('/messages', MessagesController.allMessages)
routes.get('/messages/:id', MessagesController.retrieveMessage)
routes.get('/messages/chat/:id', MessagesController.retrieveMessagesByChatId)
routes.delete('/messages/:id',  MessagesController.deleteMessage)

module.exports = routes