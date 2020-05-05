const getPostsData = require('../contracts/get-posts.json');
const getPostData01 = require('../contracts/posts/-M3FmQy1BjEM9069EZv_.json');
const getPostData02 = require('../contracts/posts/-M3Fmj4xCQscuk-mSY5-.json');
const getPostData03 = require('../contracts/posts/-M3Fn-i1lbRpP-V7UsUs.json');
const getPostData04 = require('../contracts/posts/-M4sXN9CmF-ZI-4LGlrP.json');

// Display list of all posts.
exports.getPostList = function (req, res) {
  try {
    // called service/db
    res.status(200).json(getPostsData);
  } catch (err) {
    res.status(500).json({ status: 500, message: 'err.message' });
  }
};
exports.getPostData01 = function (req, res) {
    try {
        // called service/db
        res.status(200).json(getPostsData01);
      } catch (err) {
        res.status(500).json({ status: 500, message: 'err.message' });
      }
};
exports.getPostData02 = function (req, res) {
    try {
        // called service/db
        res.status(200).json(getPostsData02);
      } catch (err) {
        res.status(500).json({ status: 500, message: 'err.message' });
      }
};
exports.getPostData03 = function (req, res) {
    try {
        // called service/db
        res.status(200).json(getPostsData03);
      } catch (err) {
        res.status(500).json({ status: 500, message: 'err.message' });
      }
};
exports.getPostData04 = function (req, res) {
    try {
        // called service/db
        res.status(200).json(getPostsData04);
      } catch (err) {
        res.status(500).json({ status: 500, message: 'err.message' });
      }
};
