
var Example = require('../models/example')

var controller = {

  something: function(req, res) {
    console.log('example.something call from ctrl!')
    Example.find({}, function(err, examples) {
      res.json({ examples: examples })
    })
  }

}

module.exports = controller
