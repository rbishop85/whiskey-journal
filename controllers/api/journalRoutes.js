const router = require('express').Router();
const { Journal } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates a new journal entry using provided information
router.post('/', withAuth, async (req, res) => {
  try {
    const newJournal = await Journal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJournal);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Deletes a journal entry associated with a provided id as long as it was created by the current user
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const journalData = await Journal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!journalData) {
      res.status(404).json({ message: 'No journal found with this id!' });
      return;
    }

    res.status(200).json(journalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;