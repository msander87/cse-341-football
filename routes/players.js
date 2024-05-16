const express = require('express');
const router = express.Router();

const playerscontroller = require('../controllers/players');
const validation = require('../middleware/validate');

router.get('/', playerscontroller.getAll);

router.get('/:id', playerscontroller.getSingle);

router.post('/', validation.savePlayer, playerscontroller.createDocument);

router.put('/:id', validation.savePlayer, playerscontroller.updateDocument);

router.delete('/:id', playerscontroller.deleteDocument);



module.exports = router;