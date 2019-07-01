import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
export default class CreateBot extends Component{
	
	constructor(props) {
	    super(props);
	    this.state = { 
	    	name: '',
		 }

	    this.handleChange = this.handleChange.bind(this);
	    this.send = this.send.bind(this);
  	}

	send(event) {
		if(this.state.name !==''){
			 
		    api.post('/bots',{name:this.state.name },{header:{'Content-Type':'aplication/json'}}).then(response =>{
		    	console.log(response)
		    })
		    event.preventDefault();
		    this.props.history.push('/bots')

	    }else{
	    	alert('Insira um nome para o Bot')
	    }
  	}

  	handleChange(event) {
    	this.setState({ [event.target.name]: event.target.value });
    	
  	}
  	

	render(){

		
		return (
			<div className="bot-create">
				<form onSubmit={this.send}>
					<strong>Qual será o nome do Bot?</strong>
					
					<p>Nome </p>
						<input className='text-area' type='text' name='name' value={this.state.name} onChange={this.handleChange} />
					
					<input  type="submit" value="Salvar" />
				</form>
			</div>
		)
	}
}

