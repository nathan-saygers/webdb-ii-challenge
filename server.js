const express = require('express');

const db = require('./carsDB')

const server = express();

server.use(express.json());

server.get('/api/cars', (req, res) => {
  db.select('*').from('cars')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({message: "waaoaoow oh no"})
    })
})

server.post('/api/cars', (req, res) => {
  db('cars').insert(req.body)
    .then(newCar => {
      res.status(201).json(newCar)
    })
    .catch(error => {
      res.status(500).json({message: "waaoaoow oh no"})
    })
})

module.exports = server;