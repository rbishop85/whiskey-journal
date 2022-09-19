const router = require('express').Router();
const { User } = require('../../models');

// Check to see if new username being registered already exists in the database
router.get('/available/:username', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.params.username }
    });

    if (!userData) {
      res.status(404).json({ message: 'No User found with this username!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Creates a new user using provided data and logs that user in
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.user_id = userData.id;
    req.session.logged_in = true;
    req.session.save(() => {
     
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logs a user in using provided credentials
router.post('/login', async (req, res) => {
  try {
    // Verifies that provided user is in database
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // Checks provided password against database user's password
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // Logs user in
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    req.session.save(() => {
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logs user out by destroying their session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
