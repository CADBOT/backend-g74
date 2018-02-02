
// route
let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let app = express()
let morgan = require('morgan')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

let donutRouter = require('./routes/donut-routes.js')
app.use(donutRouter)
/*
app.get('/donuts', donutController.getAllDonuts)
app.get('/donuts/:id', donutController.getDonutById)
app.post('/donuts', donutController.createDonut)
*/
// dep injection version
//app.use(donutRouter)

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV == 'production') {
    // write to production log file
    return res.status(500).json({'msg': 'Server error! please reach out to technical support'})
  }
  next(err)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
