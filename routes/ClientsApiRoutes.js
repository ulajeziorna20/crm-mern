const express = require('express');
const router = express.Router();

const ClientsApiController = require('../controllers/ClientsApiController');

const authHelper = require("../middlewares/AuthApiHelper");

router.get('/', authHelper, ClientsApiController.index);
router.get('/:id', authHelper, ClientsApiController.oneClient);

router.post('/', authHelper, ClientsApiController.addClient);
router.put('/:id', authHelper, ClientsApiController.edit);


router.delete('/:id', authHelper, ClientsApiController.delete);

module.exports = router;