const router = require('express').Router();

const userRoutes = require('./userRoutes');
const expressionRoutes = require('./expressionRoutes');
const journalRoutes = require('./journalRoutes');

router.use('/users', userRoutes);
router.use('/expressions', expressionRoutes);
router.use('/journals', journalRoutes);

module.exports = router;
