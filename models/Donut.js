// model
/*
let db = {
  donuts: [],
}
*/
//let knex = require('knex')
let knex = require('../db')

function createDonut(type, price, brand, rating) {
  return knex('Donut')
         .insert({
           type,
           price,
           brand,
           rating           
         })
  /*
  let donut = {
    id:uuid(),
    type,
    price,
    brand,
    rating
  }
  db.donuts.push(donut)
  return donut
  */
}

function getAllDonuts() {
  //return db.donuts
  return knex('Donut')
}

function getDonutById(id) {
  //return db.donuts.find(donut => donut.id == id)
  return knex('Donut')
         .where('id', id)
         .first()
}

module.exports = {createDonut, getAllDonuts, getDonutById}
