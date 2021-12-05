const express = require('express');
const router = express.Router();
const Foods = require('../models/food.js');

// Create
router.post('/', (req, res) => {
  Foods.create(req.body, (err, newFood) => {
    res.json(newFood)
  })
})

// Index
router.get('/', (req, res) => {
  Foods.find({}, (err, foundFood) => {
    res.json(foundFood)
  })
})

// Edit 
router.put('/:id', (req, res) => {
  Foods.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFood) => {
    res.json(updatedFood)
  })
})

// Delete
router.delete('/:id', (req, res) => {
  Foods.findByIdAndRemove(req.params.id, (err, deletedFood) => {
    res.json(deletedFood)
  })
})

module.exports = router;
