const Poll = require('../models/pollModel');

// Create a new poll
exports.createPoll = async (req, res) => {
    try {
        const poll = await Poll.create(req.body);
        res.status(201).json({ success: true, data: poll });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Read all polls
exports.getPolls = async (req, res) => {
    try {
        const polls = await Poll.find();
        res.status(200).json({ success: true, data: polls });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Read a specific poll by ID
exports.getPollById = async (req, res) => {
    try {
        const poll = await Poll.findById(req.params.id);
        if (!poll) {
            return res.status(404).json({ success: false, message: 'Poll not found' });
        }
        res.status(200).json({ success: true, data: poll });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a poll by ID
exports.updatePoll = async (req, res) => {
    try {
        const poll = await Poll.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!poll) {
            return res.status(404).json({ success: false, message: 'Poll not found' });
        }
        res.status(200).json({ success: true, data: poll });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a poll by ID
exports.deletePoll = async (req, res) => {
    try {
        const poll = await Poll.findByIdAndDelete(req.params.id);
        if (!poll) {
            return res.status(404).json({ success: false, message: 'Poll not found' });
        }
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
