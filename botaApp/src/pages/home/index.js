import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
export default class Home extends Component{

	render(){
		
		return (
			<div className='home'>
				<h3>Clique em Bots para utilizar as funções de Bot</h3>
				<h3>Clique em Chats para utilizar as funções de conversa e mensagem</h3>
				
			</div>
		)
	}
}

