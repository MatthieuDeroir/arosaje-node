const UpkeepStatus = require('../models/index').UpkeepStatus;

// Get all upkeep statuses
exports.getAllUpkeepStatuses = async (req, res) => {
    try {
        const upkeepStatuses = await UpkeepStatus.find();
        res.json(upkeepStatuses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single upkeep status by ID
exports.getUpkeepStatusById = async (req, res) => {
    try {
        const upkeepStatus = await UpkeepStatus.findById(req.params.id);
        if (!upkeepStatus) {
            return res.status(404).json({ message: 'Upkeep status not found' });
        }
        res.json(upkeepStatus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new upkeep status
exports.createUpkeepStatus = async (req, res) => {
    const upkeepStatus = new UpkeepStatus({
        // Set the properties of the upkeep status based on the request body
        // For example:
        // name: req.body.name,
        // description: req.body.description,
    });

    try {
        const newUpkeepStatus = await upkeepStatus.save();
        res.status(201).json(newUpkeepStatus);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing upkeep status
exports.updateUpkeepStatus = async (req, res) => {
    try {
        const upkeepStatus = await UpkeepStatus.findById(req.params.id);
        if (!upkeepStatus) {
            return res.status(404).json({ message: 'Upkeep status not found' });
        }

        // Update the properties of the upkeep status based on the request body
        // For example:
        // upkeepStatus.name = req.body.name;
        // upkeepStatus.description = req.body.description;

        const updatedUpkeepStatus = await upkeepStatus.save();
        res.json(updatedUpkeepStatus);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an upkeep status
exports.deleteUpkeepStatus = async (req, res) => {
    try {
        const upkeepStatus = await UpkeepStatus.findById(req.params.id);
        if (!upkeepStatus) {
            return res.status(404).json({ message: 'Upkeep status not found' });
        }

        await upkeepStatus.remove();
        res.json({ message: 'Upkeep status deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};