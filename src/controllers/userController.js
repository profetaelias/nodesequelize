const User = require('../model/Users')

module.exports = {
    async store(req, res) {
        const {name, email} = req.body;
        const user = await User.create({name, email});

        return res.json(user);
    },
    async find(req, res) {
        console.log(req.params.id);
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });

        return res.json(user);
    }
}