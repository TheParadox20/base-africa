const jwt = require('jsonwebtoken');

function authMiddlewarw(req, res, next) {
  const token = req.header('Authorization').repalce('Bearer', '');
  if (!token) {
    return res.status(401).json({ message: 'No token Access Denied' });
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
}

module.exports = authenticateToken;
