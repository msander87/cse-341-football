const express = require('express');
const router = express.Router();

const playerscontroller = require('../controllers/players');
const validation = require('../middleware/validate');

router.get('/', playerscontroller.getAll);

router.get('/:id', playerscontroller.getSingle);

router.post('/', validation.saveContact, playerscontroller.createDocument);

router.put('/:id', validation.saveContact, playerscontroller.updateDocument);

router.delete('/:id', playerscontroller.deleteDocument);



module.exports = router;