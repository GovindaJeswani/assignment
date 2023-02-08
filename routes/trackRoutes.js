const express  =require('express')
const TrackController = require('./../controllers/trackController')

const router = express.Router()

router.get('/trail',TrackController.trail);
router.get('/get',TrackController.getAllUser);
router.post('/new',TrackController.createUser);
router.post('/',TrackController.createTrack);

module.exports = router