const mongoose = require('mongoose')

const RequestSchema = {  
    lastName: String,
    firstName: String,
    ID: String,
    Level: String,
    Major: String,
    Email: String
}

module.exports = mongoose.model('Request', RequestSchema)