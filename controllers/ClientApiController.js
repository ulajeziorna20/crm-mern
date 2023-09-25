const Client = require('../models/ClientModel');

module.exports = {
    index: async (req, res) => {
        const clients = await Client.find().lean()
            .catch(() => res.json({ error: 'Get clients error' }))
        res.json(clients);
    }
}