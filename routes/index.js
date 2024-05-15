const router = require('express').Router();
router.use('/', require('./swagger'));
router.get('/', (req, res) => {
    //#swagger.tags=['Welcome to Football API']
    res.send('Welcome to Football API');
});
router.use('/players', require('./players'));

module.exports = router;