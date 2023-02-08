const express  =require('express')
const eventController = require('./../controllers/eventController')

const router = express.Router()

router.get('/:id',eventController.getview);

module.exports = router