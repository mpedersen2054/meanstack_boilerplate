
var examples = require('../controllers/examples')

function routes(app) {

  app.get('/api/something', examples.something)

}

module.exports = routes
