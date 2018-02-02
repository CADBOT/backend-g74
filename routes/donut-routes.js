let express = require('express')
let router = express.Router()
let donutController = require('../controllers/donut-controller')

router.route('/donuts')
  .post(donutController.createDonut)
  .get(donutController.getAllDonuts)

router.route('/donuts/:id')
  .get(donutController.createDonut)

module.exports = router

/* Dep injection version
module.exports = router => {
  router.route('/donuts')
    .post(donutController.createDonut)
    .get(donutController.getAllDonuts)
  router.route('/donuts/:id')
    .get(donutController.createDonut)
}
*/
