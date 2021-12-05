const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    price: String,
  }
)

const Foods = mongoose.model('Food', foodSchema)

module.exports = Foods;
