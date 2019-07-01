import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
export default class BotInfo extends Component{
	
	constructor(props) {
	    super(props);
	    this.state = { bot: {},
		 	newName: ''};

	    this.handleChange = this.handleChange.bind(this);
	    this.send = this.send.bind(this);
  	}



	

	async componentDidMount(){
		const {id} = this.props.match.params

		const response =  await api.get('/bots/'+id)

		this.setState({ bot: response.data})
	}

	send(event) {
		if(this.state.newName !==''){
			const {id} = this.props.match.params
		    api.put('/bots/'+id,{name:this.state.newName},{header:{'Content-Type':'aplication/json'}}).then(response =>{
		    	console.log(response)
		    })
		    event.preventDefault();
		    this.setState({bot:{name:this.state.newName}})
	    }else{
	    	alert('O campo novo nome não pode estar vazio')
	    }
  	}

  	handleChange(event) {
    	this.setState({newName: event.target.value});
  	}

	render(){
		const { bot } = this.state

		
		return (
			<div className="bot-info">
				<form onSubmit={this.send}>
					<span> Nome atual: <strong>{bot.name}</strong></span>
					<p> Qual será o novo nome? </p>
					<input className='text-area' type='text' value={bot.newName} onChange={this.handleChange} />
					<input className type="submit" value="Salvar" />
				</form>
			</div>
		)
	}
}

