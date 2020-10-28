/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./routes/api/user')
const auth = require('./routes/api/auth')
var cors = require('cors');
// Bodyparser Middleware
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// DB config 
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose
    .connect(db,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoBD Connected..'))
    .catch(err => console.log('error connect to db', err))

// User Routes
app.use('/api', users)
app.use('/api', auth)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))