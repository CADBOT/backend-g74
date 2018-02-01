
// route
let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let app = express()

app.use(cors())
app.use(bodyParser.json())

let Donut = require('./models/Donut')
let donutController = require('./controllers/donut-controller')

// GET routes
app.get('/donuts', donutController.getAllDonuts)
app.get('/donuts/:id', donutController.getDonutById)
app.post('/donuts', donutController.createDonut)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
