const Venue = require('../models/venue');

function create(req, res, next) {
  Venue
    .create(req.body)
    .then(venue => res.json(venue))
    .catch(next);
}

module.exports = {
  create
};
