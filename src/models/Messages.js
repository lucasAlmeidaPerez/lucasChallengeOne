const mongoose = require('mongoose')
//Import mongoose-paginate. It's usefull when the document have many data
const mongoosePaginate = require('mongoose-paginate')

const MessageSchema = new mongoose.Schema({
	body: {
		type: String,
		required: true,
	},
	chatId: {
		type: String,
		required: true,
	},
	sender: {
		type: String,
		required: true,
	},
	createdAt:{
		type: Date,
		default: Date.now,
	},
	
})

MessageSchema.plugin(mongoosePaginate)
mongoose.model('Messages', MessageSchema)