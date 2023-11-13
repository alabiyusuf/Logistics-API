function customerOnly(req, res, next) {
  if (req.userDetails.role == 'customer') return next();
  res.status(401).send('Not a customer, only customers enabled.');
}

module.exports = customerOnly;
