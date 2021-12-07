// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;
require('dotenv').config();

const app = express();
const MONGODB_URI  = process.env.MONGODB_URI

// Connect to Mongo
mongoose.connect(MONGODB_URI  ,  { useNewUrlParser: true});
// mongoose.connect('mongodb://localhost:27017/homebaked')

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
mongoose.connection.once('open', () => {
  console.log('connected to mongod...');
})

app.use(express.json());
app.use(cors());

// Controller connection
const foodController = require('./controllers/food.js')
app.use('/homebaked', foodController)
app.get('/', (req, res) => {
  res.redirect('/homebaked')
})

// Listener and Mongoose connection
app.listen(process.env.PORT, () => {
  console.log('Listening to Homebaked app...');
})
// app.listen(3000, () => {
//   console.log('Listening to Homebaked app...');
// })
