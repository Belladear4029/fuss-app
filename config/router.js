const router = require('express').Router();
const venues = require('../controllers/venues');

router.route('/venues')
  .get(venues.index)
  .post(venues.create);

router.route('/venues/:id')
  .get(venues.show)
  .delete(venues.remove);

module.exports = router;
