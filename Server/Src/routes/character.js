requiere('dotenv').config()
const express = require('express')
const router = express.Router();
const URL = process.env.API_URL
const { getChardById } = require('../controllers/getChardByID');

router.get(URL,getChardById)


module.export = router;