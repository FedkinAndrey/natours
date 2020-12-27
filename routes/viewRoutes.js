const express = require('express')
const viewController = require("../controllers/vievController")

const router = express.Router()

router.get('/', viewController.getOverview)
router.get('/tour', viewController.getTour)

module.exports = router