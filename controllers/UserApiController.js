const User = require('../models/UserModel');

module.exports = {
    create: (req, res) => {
        const newUser = new User(req.body);
        newUser.save()
            .then(() => {
                res.json({
                    login: newUser.login,
                    email: newUser.email,
                    password: newUser.password
                });
            })
            .catch((err) => {
                res.json({
                    error: true,
                    message: err
                });
            });
    },

};