const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

//settings
app.set('port', port)

//middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))

//global variables

//routes

//static files

module.exports = app
