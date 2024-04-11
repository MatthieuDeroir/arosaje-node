const { Media } = require('../models');

const mediaController = {
    createMedia: async (req, res) => {
        try {
            const newMedia = await Media.create(req.body);
            res.status(201).json(newMedia);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create media' });
        }
    },

    getAllMedias: async (req, res) => {
        try {
            const mediaList = await Media.findAll();
            res.json(mediaList);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get media' });
        }
    },

    getMediaById: async (req, res) => {
        try {
            const media = await Media.findByPk(req.params.id);
            if (!media) {
                return res.status(404).json({ error: 'Media not found' });
            }
            res.json(media);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get media' });
        }
    },

    updateMedia: async (req, res) => {
        try {
            const [updated] = await Media.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedMedia = await Media.findByPk(req.params.id);
                res.json(updatedMedia);
            } else {
                res.status(404).json({ error: 'Media not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update media' });
        }
    },

    deleteMedia: async (req, res) => {
        try {
            const deleted = await Media.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.json({ message: 'Media deleted successfully' });
            } else {
                res.status(404).json({ error: 'Media not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete media' });
        }
    }
};

module.exports = mediaController;
