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
}