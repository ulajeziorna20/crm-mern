const Action = require('../models/ActionModel');

module.exports = {
    index: async (req, res) => {
        const actions = await Action.find().lean()
            .catch(() => res.json({ error: 'Get actions error' }))
        res.json(actions);
    },
    byClient: async (req, res) => {
        const actions = await Action.find({ with: req.params.id }).lean()
            .catch(() => res.json({ error: `Get client's actions error` }))
        res.json(actions);
    },
    addAction: async (req, res) => {
        const newAction = new Action({
            date: req.body.date,
            type: req.body.type,
            description: req.body.description,
            with: req.body.withWho
        });

        await newAction.save();
        try {
            res.json(newAction);
        } catch (error) {
            res.json({ error: "Add Action error" });
        }
    }
}