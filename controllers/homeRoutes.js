const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {

if (req.session.logged_in) {
  res.redirect('/journal');
  return;
}

    res.render('homepage');
  
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/journal');
    return;
  }

  res.render('login');
});

router.get('/journal', withAuth, async (req, res) => {
  
  if (req.session.logged_in) {
    res.redirect('/journal');
    return;
  }

  res.render('login');
});

module.exports = router;
