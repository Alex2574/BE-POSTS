var express = require('express');
var router = express.Router();
const getPostsData = require('./get-posts.json');
const getPostData01 = require('./posts/-M3FmQy1BjEM9069EZv_.json');
const getPostData02 = require('./posts/-M3Fmj4xCQscuk-mSY5-.json');
const getPostData03 = require('./posts/-M3Fn-i1lbRpP-V7UsUs.json');
const getPostData04 = require('./posts/-M4sXN9CmF-ZI-4LGlrP.json');

/* GET users listing. */
router.get('/posts.json', function(req, res, next) {
  // res.send(getPostsData);
  res.status(200).json(getPostsData);
});

router.get('/posts/-M3FmQy1BjEM9069EZv_.json', function(req, res, next) {
  res.status(200).json(getPostData01);
});

router.get('/posts/-M3Fmj4xCQscuk-mSY5-.json', function(req, res, next) {
  res.status(200).json(getPostData02);
});
router.get('/posts/-M3Fn-i1lbRpP-V7UsUs.json', function(req, res, next) {
  res.status(200).json(getPostData03);
});
router.get('/posts/-M4sXN9CmF-ZI-4LGlrP.json', function(req, res, next) {
  res.status(200).json(getPostData04);
});

module.exports = router;
