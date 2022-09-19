const router = require('express').Router();
const { User, Journal, Expression, Distillery } = require('../models');
const withAuth = require('../utils/auth');

// Load main page (only if logged in)
router.get('/', withAuth, async (req, res) => {

  try {
    // Find the logged in user's data based on the session data
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        { 
          model: Journal,
          include: [
            {
              model: Expression,
              attributes: ['name']
            },
            {
              model: Distillery,
              attributes: ['name']
            }
          ]
        }
      ],
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Load login page
router.get('/login', (req, res) => {
  // If a session already exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Load registration page
router.get('/register', (req, res) => {
  // If a session already exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('register');
});

// Load individual journal page (only if logged in)
router.get('/journal/:id', withAuth, async (req, res) => {
  try {
    // Find individual journal entry's data by the supplied journal id
    const journalData = await Journal.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Distillery
        },
        {
          model: Expression
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

// Load new journal entry page (only if logged in)
router.get('/newJournal', withAuth, async (req, res) => {
  try {
    // Pass the page a list of all available distilleries
    const distilleryData = await Distillery.findAll();

    const distilleries = distilleryData.map((distillery) => distillery.get({ plain: true }));

    console.log(distilleries);

    res.render('newEntry', { 
      distilleries, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
 
});

module.exports = router;
