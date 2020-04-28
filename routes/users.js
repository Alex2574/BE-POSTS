var express = require('express');
var router = express.Router();
var getPostsData = require('./get-posts.json');
var getPostData = require('./posts/-M3FmQy1BjEM9069EZv_.json');
var getPostData = require('./posts/-M3Fmj4xCQscuk-mSY5-.json');
var getPostData = require('./posts/-M3Fn-i1lbRpP-V7UsUs.json');
var getPostData = require('./posts/-M4sXN9CmF-ZI-4LGlrP.json');

/* GET users listing. */
router.get('/posts.json', function(req, res, next) {
  // res.send(getPostsData);
  res.status(200).json(getPostsData);
});

router.get('/posts/-M3FmQy1BjEM9069EZv_.json', function(req, res, next) {
  res.status(200).json(getPostData);
});

router.get('/posts/-M3Fmj4xCQscuk-mSY5-.json', function(req, res, next) {
  res.status(200).json(getPostData);
});
router.get('/posts/-M3Fn-i1lbRpP-V7UsUs.json', function(req, res, next) {
  res.status(200).json(getPostData);
});
router.get('/posts/-M4sXN9CmF-ZI-4LGlrP.json', function(req, res, next) {
  res.status(200).json(getPostData);
});

module.exports = router;
