import React, { Component } from 'react';
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'

export default class MainChat extends Component {
	


	state = {
		messages: [],
		docInfo: {},
		page: 1,

	}

	//Load that values
	componentDidMount(){
		this.loadMessages()
	}

	//Fuction used to load all messages informations. note that we call docs in the data because we used
	//pagination in the api.
	loadMessages = async (page = 1) => {
		const response = await api.get(`/messages?page=${page}`)
		console.log(response.data)
		const {docs, ...docInfo } = response.data 
		this.setState({messages: docs, docInfo, page})
	}

	//Function used to go to next page * Same idea! Do nothing when the users are in the last page
	nextPage = () =>{
		const { page, docInfo} = this.state;

		if(page=== docInfo.pages) return

		const pageNumber = page + 1;

		this.loadMessages(pageNumber)
	}
	
	//Function used to go to previous page *Do nothing when the users are in the first page
	prevPage = () =>{
		const { page, docInfo} = this.state;

		if(page=== 1) return

		const pageNumber = page -1;

		this.loadMessages(pageNumber)
	}



	render(){
		const { messages, page, docInfo } = this.state
		
		return (
			<div className="messages-list">
				<article> 
					<Link to={`/createMessage`}> Registrar uma nova mensagem </Link>
				</article>
				{messages.map(messages =>(
					<article key={messages._id}>
						<strong>Conversa: {messages.chatId}</strong>
						<p>Corpo da mensagem: {messages.body}</p>
						<p>Remetente: {messages.sender}</p>
						<p>Enviada em {messages.createdAt}</p>
						<Link to={`/messages/${messages._id}`}> Ver Apenas essa mensagem </Link>
						<Link to={`/chats/${messages.chatId}`}> Ver todas as mensagens desta Conversa </Link>
					</article>
				))}

				<div className="actions">
					<button disabled={page === 1} onClick={this.prevPage}>
						Anterior
					</button>
					<button disabled={page === docInfo.pages} onClick={this.nextPage}>
						Próximo
					</button>
				</div>

			</div>
		)
	}
}