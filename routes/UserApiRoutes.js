const express = require('express');
const router = express.Router();

const userApiController = require('../controllers/UserApiController');

const authHelper = require("../middlewares/AuthApiHelper");

router.post('/signup', authHelper, userApiController.create);


module.exports = router;