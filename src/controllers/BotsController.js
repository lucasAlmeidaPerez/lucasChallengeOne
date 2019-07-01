const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
const Bot =  mongoose.model('Bots')

module.exports={
	/*Recover every bots that are in DB
	 *Bot.paginate({query},{options},{callback})
	*/
	async retrieveBots(req,res){
		//Get the page parameter in the request
		const { page = 1 } = req.query
		const bots = await Bot.paginate({},{page, limit: 10})

		return res.json(bots)
	},
	//Show only one bot
	async showBot(req,res){
		const bots = await Bot.findById(req.params.id,req.body)
		return res.json(bots)
	},
	//Create a Bot
	async createBot(req,res){
		const bots = await Bot.create(req.body)

		return res.json(bots)
	},
	//Update a bot
	async updateBot(req,res){
		const bots = await Bot.findByIdAndUpdate(req.params.id,req.body,{new:true})

		return res.json(bots)
	},
	//Delete a bot
	async deleteBot(req,res){
		await Bot.findByIdAndRemove(req.params.id)

		return res.send()
	},
}