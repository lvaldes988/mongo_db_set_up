module.exports = function (app, passport) {
  // INITIALIZE MY AUTHENTICATION ROUTES
  require('./authentication')(app, passport);

  // INITIALIZE MY VIEWS ROUTES
  require('./views')(app, isLoggedIn);

  // INITIALIZE MY CALCULATOR ROUTES
  require('./calculator')(app, isLoggedIn);
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}