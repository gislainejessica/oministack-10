const { Router } = require('express')

const routes = Router()
const Devcontroller = require('./controllers/DevController')
const Searchcontroller = require('./controllers/SearchController')


routes.get('/devs', Devcontroller.index)
routes.get('/search', Searchcontroller.index)
routes.post('/devs', Devcontroller.store)

module.exports = routes