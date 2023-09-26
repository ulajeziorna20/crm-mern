const express = require('express');
const router = express.Router();

const ActionApiControlles = require('../controllers/ActionApiController');

router.get('/', ActionApiControlles.index);
router.get('/:id', ActionApiControlles.byClient);
router.post('/:id/add', ActionApiControlles.addAction);

module.exports = router;