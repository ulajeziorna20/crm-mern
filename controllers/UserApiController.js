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

    login: async (req, res) => {
        await User.findOne({ email: req.body.email })
            .catch(() => res.json({ error: 'error' }))
            .then((user) => {
                if (!user) {
                    res.json({
                        error: true,
                        message: "User doesn't exist"
                    });
                    return;
                } else {
                    if (req.body.password === user.password) {
                        const token = user.generateAuthToken(user);

                        res.json({
                            email: user.email,
                            jwt: token
                        });
                    } else {
                        res.json({
                            error: true,
                            message: "Incorrect login or password"
                        });
                        return;
                    }
                }
            })
    }

};