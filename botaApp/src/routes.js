import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from'./pages/main'
import MainChat from'./pages/mainChat'
import Home from'./pages/home'
import BotInfo from'./pages/botInfo'
import ChatInfo from'./pages/chatInfo'
import MessageInfo from './pages/messageInfo'
import CreateMessage from './pages/createMessage'
import CreateBot from './pages/createBot'

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/bots' component={Main} />
			<Route path='/bots/:id' component={BotInfo} />
			<Route exact path='/chats' component={MainChat} />
			<Route path='/chats/:id' component={ChatInfo} />
			<Route path='/messages/:id' component={MessageInfo} />
			<Route path='/createMessage' component={CreateMessage} />
			<Route path='/createBot' component={CreateBot} />
		</Switch>
	</BrowserRouter>
)

export default Routes;