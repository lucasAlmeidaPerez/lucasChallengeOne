import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
export default class MessageInfo extends Component{
	
	state = { 
		message: {}
	}



	

	async componentDidMount(){
		const {id} = this.props.match.params

		const response =  await api.get('/messages/'+id)
		
		this.setState({ message: response.data})
	}



	render(){
		const { message } = this.state

		
		return (
			<div className="message-info">
				<article>
					<strong> ID: {message._id}</strong>
					<p>Corpo da Mensagem: {message.body}</p>
					<p>Remetente: {message.sender}</p>	
					<p>Enviada em: {message.createdAt}</p>
				</article>
			</div>
		)
	}
}

