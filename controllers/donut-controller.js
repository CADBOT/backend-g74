let Donut = require('../models/Donut')

function getAllDonuts(req, res, next) {
  /*
  let donuts = Donut.getAllDonuts()
  res.json({data: donuts})
  */
  Donut.getAllDonuts()
    .then(donuts => {
      res.json(donuts)
    })
    .catch(err => next(err))
}

function getDonutById(req, res, next) {
  let id = req.params.id
  /*
  let donut = Donut.getDonutById(id)
  res.json({data: donut})
  */
  Donut.getDonutById(id)
    .then(donut => {
      res.json(donut)
    })
    .catch(err => next(err))
}

function createDonut(req, res, next) {
  let {type, price, brand, rating} = req.body
  //let donut = Donut.createDonut(type, price, brand, rating)
  Donut.createDonut(type, price, brand, rating)
    .then(donut => {
      res.json(donut)
    })
    .catch(err => next(err))

  //res.json({data: donut})
}

module.exports = {getAllDonuts, getDonutById, createDonut}
