
var express = require('express');
var router = express.Router()
var postController = require('../controllers/postController');

router.use('/posts.json',postController.getPostList);
router.use('/posts/-M3FmQy1BjEM9069EZv_.json',postController.getPostData01);
router.use('/posts/-M3Fmj4xCQscuk-mSY5-.json',postController.getPostData02);
router.use('/posts/-M3Fn-i1lbRpP-V7UsUs.json',postController.getPostData03);
router.use('/posts/-M4sXN9CmF-ZI-4LGlrP.json',postController.getPostData04);

module.exports = router;