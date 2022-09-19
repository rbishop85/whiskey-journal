// Helper function for seeing if the user has a logged in session, if not they're redirected to the main page
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
