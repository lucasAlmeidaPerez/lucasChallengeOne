import React, { Component } from 'react';
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'

export default class Main extends Component {
	//save values from DB 
	state = {
		bots: [],
		docInfo: {},
		page: 1,

	}

	//Load that values
	componentDidMount(){
		this.loadBots()
	}

	//Fuction used to load bot informations. note that we call docs in the data because we used
	//pagination in the api.
	loadBots = async (page = 1) => {
		const response = await api.get(`/bots?page=${page}`)
		console.log(response.data)
		const {docs, ...docInfo } = response.data 
		this.setState({bots: docs, docInfo, page})
	}

	//Function used to go to next page * Same idea! Do nothing when the users are in the last page
	nextPage = () =>{
		const { page, docInfo} = this.state;

		if(page=== docInfo.pages) return

		const pageNumber = page + 1;

		this.loadBots(pageNumber)
	}
	
	//Function used to go to previous page *Do nothing when the users are in the first page
	prevPage = () =>{
		const { page, docInfo} = this.state;

		if(page=== 1) return

		const pageNumber = page -1;

		this.loadBots(pageNumber)
	}

	deleteBot(id){
		api.delete(`/bots/${id}`).then(response =>{
		    	alert('Bot deletado com sucesso')
		    	window.location.reload();
		    }).catch(function(error) {
            	alert('Opa, um erro ocorreu... Estamos Trabalhando nisso!')
            	console.log(error);
            })
		}
		
	



	render(){
		const { bots, page, docInfo } = this.state
		
		return (
			<div className="bots-list">
				<article> 
					<Link to={'/createBot'}> Criar um novo Bot </Link>
				</article>
				{bots.map(bot =>(
					<article key={bot._id}>
						<strong>{bot.name}</strong>
						<p>Criado em {bot.createdAt}</p>
						<Link to={`/bots/${bot._id}`}> Editar </Link>
						<button onClick={() => { this.deleteBot(bot._id) }}>
							Deletar
						</button>
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