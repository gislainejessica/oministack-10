const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebSocket } = require('./websocket')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

const server = http.Server(app)

mongoose.connect('mongodb+srv://jessica:omnijessica@cluster0-drnlm.mongodb.net/Devmap?retryWrites=true&w=majority', 
  {useNewUrlParser: true, useUnifiedTopology: true}
)

setupWebSocket(server)

server.listen(3333)