import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
export default class CreateMessage extends Component{
	
	constructor(props) {
	    super(props);
	    this.state = { 
	    	body: '',
		 	chatId: '',
		 	sender: '',
		 }

	    this.handleChange = this.handleChange.bind(this);
	    this.send = this.send.bind(this);
  	}

	send(event) {
		if(this.state.body !==''&&this.state.chatId !==''&&this.state.sender !==''){
			 
		    api.post('/messages',{body:this.state.body, chatId:this.state.chatId, sender:this.state.sender },{header:{'Content-Type':'aplication/json'}}).then(response =>{
		    	console.log(response)
		    })
		    event.preventDefault();
		    this.props.history.push('/chats')

	    }else{
	    	alert('Nenhum campo pode estar vazio')
	    }
  	}

  	handleChange(event) {
    	this.setState({ [event.target.name]: event.target.value });
    	
  	}
  	

	render(){

		
		return (
			<div className="message-create">
				<form onSubmit={this.send}>
					<strong>Preencha todos os campos</strong>
					<p>ID conversa </p>
						<input className='text-area' type='text' name='chatId' value={this.state.chatId} onChange={this.handleChange} />
					<p>Remetente </p>
						<input className='text-area' type='text' name='sender' value={this.state.sender} onChange={this.handleChange} />
					<p>Mensagem </p>
						<input className='text-area' type='text' name='body' value={this.state.body} onChange={this.handleChange} />
					
					<input  type="submit" value="Salvar" />
				</form>
			</div>
		)
	}
}

