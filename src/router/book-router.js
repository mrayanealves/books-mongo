const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const controller = require('../controller/book-controller');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', controller.findAll);

router.get('/:id', controller.findById);

router.post('/', controller.save);

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router; 