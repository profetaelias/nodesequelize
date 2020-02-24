const Techs = require('../model/Techs');
const Users = require('../model/Users');
const Users_Techs = require('../model/Users_Techs')

module.exports = {
    async store(req, res) {
        const {user_id} = req.params;
        const {name} = req.body;
        console.log(name);
    
        const user = await Users.findByPk(user_id);
        
        if (!user) {
            return res.status(400).json({error: 'User not found'})
        }

        const [tech, created] = await Techs.findOrCreate({
            where: {name}
        });
        
        //não foi possível vincular o user em Tech via addTechs
        //await user.addTechs(tech);
        Users_Techs.create({user_id: user_id, tech_id: tech.dataValues.id, name: name});

        return res.json(tech);
    },

    async delete(req, res) {
        const {user_id} = req.params;
        const {name} = req.body;
        console.log(name);
    
        const user = await Users.findByPk(user_id);
        
        if (!user) {
            return res.status(400).json({error: 'User not found'})
        }

        const tech = await Techs.findOne({
            where: {name}
        });
        
        if(!tech) {
            return res.status(400).json({error: 'Tech not found'})
        }

        await user.removeTech(tech);

        return res.json();        
    },

    async findAll(req, res) {
        const {user_id} = req.params;

        const user = await Users.findByPk(user_id, {
            include: {
                association: 'techs', 
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });

        return res.json(user);
    }
}