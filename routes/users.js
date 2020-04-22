var express = require('express');
var router = express.Router();
var getPostsData = require('./get-posts.json');

/* GET users listing. */
router.get('/posts.json', function(req, res, next) {
  // res.send(getPostsData);
  res.status(200).json(getPostsData);
});

module.exports = router;
