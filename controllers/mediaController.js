const Media = require('../models/index').Media;

// Get all media
const getAllMedia = async (req, res) => {
    try {
        const media = await Media.find();
        res.json(media);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single media by ID
const getMediaById = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Media not found' });
        }
        res.json(media);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new media
const createMedia = async (req, res) => {
    const media = new Media({
        // Set the properties of the media object based on the request body
        // Example: title: req.body.title, description: req.body.description
    });

    try {
        const newMedia = await media.save();
        res.status(201).json(newMedia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a media by ID
const updateMedia = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Media not found' });
        }

        // Update the properties of the media object based on the request body
        // Example: media.title = req.body.title; media.description = req.body.description;

        const updatedMedia = await media.save();
        res.json(updatedMedia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a media by ID
const deleteMedia = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Media not found' });
        }

        await media.remove();
        res.json({ message: 'Media deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllMedia,
    getMediaById,
    createMedia,
    updateMedia,
    deleteMedia
};