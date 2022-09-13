const router = require('express').Router();

const userRoutes = require('./userRoutes');
const distilleryRoutes = require('./distilleryRoutes');
const expressionRoutes = require('./expressionRoutes');
const journalRoutes = require('./journalRoutes');

router.use('/users', userRoutes);
router.use('/distilleries', distilleryRoutes);
router.use('/expressions', expressionRoutes);
router.use('/journals', journalRoutes);

module.exports = router;
