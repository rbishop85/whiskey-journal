const router = require('express').Router();
const { Expression } = require('../../models');

// Get a list of all expressions associated with a provided distillery ID
router.get('/list/:id', async (req, res) => {

    try {
      const expressionData = await Expression.findAll({
        where: { distillery_id: req.params.id }
        });
  
      if (!expressionData) {
        res.status(404).json({ message: 'No expressions found for this distillery!' });
        return;
      }
  
      const expressions = expressionData.map((expression) => expression.get({ plain: true }));
  
      res.status(200).json(expressions);
  
    } catch (err) {
      res.status(500).json(err);
    }
  
  });

module.exports = router;