const {Op} = require('sequelize');
const Users = require('../model/Users')

module.exports = {
    async usuarioPorEmail(req, res) {
        const {email, rua} = req.body;
        const users = await Users.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: `%${email}`
                }
            }, 
            include: [
                {
                    association: 'addresses', where: {street: `${rua}`}, 
                    required: false
                }
            ]
        })
        return res.json(users);
    }
}