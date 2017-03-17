
var mongoose = require('mongoose')

var exampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  otherStuff: { type: String, min: 2 }
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('Example', exampleSchema)
