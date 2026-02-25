
const router = require('express').Router();
const Bid = require('../models/Bid');

router.post('/', async (req, res) => {
  const bid = new Bid(req.body);
  await bid.save();
  res.json(bid);
});

router.get('/:projectId', async (req, res) => {
  const bids = await Bid.find({ projectId: req.params.projectId });
  res.json(bids);
});

module.exports = router;
