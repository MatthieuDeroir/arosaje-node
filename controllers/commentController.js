// commentController.js

const Comment = require('../models/index').Comment;


const commentController = {
    // Get all comments
    getAllComments: async (req, res) => {
        try {
            const comments = await Comment.findAll();
            res.json(comments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single comment
    getCommentById: async (req, res) => {
        try {
            const comment = await Comment.findByPk(req.params.id);
            if (!comment) {
                return res.status(404).json({ message: 'Comment not found' });
            }
            res.json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Create a new comment
    createComment: async (req, res) => {
        const comment = new Comment({
            content: req.body.content,
            // Add other properties here
        });

        try {
            const newComment = await comment.create();
            res.status(201).json(newComment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Update a comment
    updateComment: async (req, res) => {
        try {
            const comment = await Comment.findByPk(req.params.id);
            if (!comment) {
                return res.status(404).json({ message: 'Comment not found' });
            }

            comment.content = req.body.content;
            // Update other properties here

            const updatedComment = await comment.save();
            res.json(updatedComment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a comment
    deleteComment: async (req, res) => {
        try {
            const comment = await Comment.findByPk(req.params.id);
            if (!comment) {
                return res.status(404).json({ message: 'Comment not found' });
            }
            res.json({ message: 'Comment deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = commentController;