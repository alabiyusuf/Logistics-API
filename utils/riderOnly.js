function customerOnly(req, res, next) {
  if (req.userDetails.role == 'rider') return next();
  res.status(401).send('Not a rider; only riders are allowed!');
}

module.exports = customerOnly;
