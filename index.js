// model
let db = {
  donuts: [],
}
let uuid = require('uuid/v4')

function createDonut(type, price, brand, rating) {
  let donut = {
    id:uuid(),
    type,
    price,
    brand,
    rating
  }
  db.donuts.push(donut)
  return donut
}

function getAllDonuts() {
  return db.donuts
}

function getDonutById(id) {
  return db.donuts.find(donut => donut.id == id)
}


/* *tests*
createDonut('sprinkles', 5000, 'tasty', 5)
let allDonuts = getAllDonuts()
console.log('all donuts', allDonuts)
let donut = getDonutById(allDonuts[0].id)
console.log(donut)
*/
