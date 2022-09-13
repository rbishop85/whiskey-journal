const router = require('express').Router();
const { User, Journal } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {

  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Journal}],
    });

    const user = userData.get({ plain: true });

    console.log(user);

    res.render('homepage', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/journal/:id', withAuth, async (req, res) => {
  try {
    const journalData = await Journal.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const journal = journalData.get({ plain: true });

    res.render('journal', {
      ...journal,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/journal/new', withAuth, async (req, res) => {
  try {
    const distilleryData = await Distillery.findAll();

    const distilleries = distilleryData.map((distillery) => distillery.get({ plain: true }));

    res.render('newEntry', { 
      distilleries, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
 
});

module.exports = router;
