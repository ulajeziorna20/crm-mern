const express = require('express');
const router = express.Router();

const ClientsApiController = require('../controllers/ClientsApiController');

const authHelper = require("../middlewares/AuthApiHelper");

router.get('/', authHelper, ClientsApiController.index);




module.exports = router;