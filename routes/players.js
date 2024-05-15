const express = require('express');
const router = express.Router();

const usersController = require('../controllers/players');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', usersController.createDocument);

router.put('/:id', usersController.updateDocument);

router.delete('/:id', usersController.deleteDocument);



module.exports = router;