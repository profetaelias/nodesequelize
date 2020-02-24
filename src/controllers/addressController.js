const Address = require('../model/Address');
const Users = require('../model/Users');

module.exports = {
    async store(req, res) {
        const {user_id} = req.params
        const {zipcode, street, number} = req.body;
        
        const user = Users.findByPk(user_id);
        if (user) {
            const address = await Address.create(
                {
                    zipcode, 
                    street, 
                    number, 
                    user_id
                }
            );

            return res.json(address);
        }        
        return res.status(400).json({error: 'User not found'});
    },

    async findAll(req, res) {
        const {user_id} = req.params;

        const user = await Users.findByPk(user_id, {
            include: {association: 'addresses'}
        });

        return res.json(user);
    }
}