const mongoose = require('mongoose')
//Import mongoose-paginate. It's usefull when the document have many data
const mongoosePaginate = require('mongoose-paginate')

const BotSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	createdAt:{
		type: Date,
		default: Date.now,
	}
})

BotSchema.plugin(mongoosePaginate)
mongoose.model('Bots', BotSchema)