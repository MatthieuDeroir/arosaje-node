const express = require('express');
const commentController = require('../controllers/index').Comment;

const router = express.Router();

// Create a new comment
router.post('/', commentController.createComment);

// Get all comments
router.get('/', commentController.getAllComments);

// Get a specific comment by ID
router.get('/:id', commentController.getCommentById);

// Update a comment by ID
router.put('/:id', commentController.updateComment);

// Delete a comment by ID
router.delete('/:id', commentController.deleteComment);


module.exports = router;
