const express = require('express')
const router = express.Router()

const countryService = require('./countryservice')

router.get('/', countryService.getdata)

module.exports = router
