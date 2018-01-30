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

// route
let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let app = express()

app.use(cors())
app.use(bodyParser.json())

// GET routes
app.get('/donuts', (req, res) => {
  let donuts = getAllDonuts()
  res.json({data: donuts})
})

app.get('/donuts/:id', (req, res) => {
  let id = req.params.id
  let donut = getDonutById(id)
  res.json({data: donut})
})

app.post('/donuts', (req, res) => {
  let {type, price, brand, rating} = req.body
  let donut = createDonut(type, price, brand, rating)
  res.json({data: donut})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
