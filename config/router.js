const router = require('express').Router();
const venues = require('../controllers/venues');

router.route('/veunes')
  .post(venues.create);

module.exports = router;
