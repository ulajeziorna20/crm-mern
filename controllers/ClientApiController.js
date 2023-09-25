const Client = require('../models/ClientModel');

module.exports = {
    index: async (req, res) => {
        const clients = await Client.find().lean()
            .catch(() => res.json({ error: 'Get clients error' }))
        res.json(clients);
    },

    oneClient: async (req, res) => {
        const client = await Client.findById(req.params.id).lean()
            .catch(() => res.json({ error: 'Get client error' }))
        res.json(client);
    },

    addClient: async (req, res) => {
        const newClient = new Client({
            name: req.body.name,
            company: req.body.company,
            address: req.body.address,
            nip: req.body.nip
        });

        await newClient.save();
        try {
            res.json(newClient);
        } catch (error) {
            res.json({ error: "Add Client error" });
        }
    },

    edit: async (req, res) => {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body)
            .catch(() => res.json({ error: "Edit Client error" }))
        res.json(updatedClient);
    },
}