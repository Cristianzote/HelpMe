export function requireLogin(req, res, next) {
  const token = req.cookies.token; // Get the token from the cookie

  if (token && isValidToken(token)) { // Implement token validation logic
    // User is authenticated, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, redirect to the login page
    res.redirect('/login');
  }
}

export default requireLogin;