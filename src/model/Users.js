const {Model, DataTypes} = require('sequelize');

class User extends Model {
    //padrão do sequelize
    static init(connection) {
        super.init({
            name: DataTypes.STRING, 
            email: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'})
        this.belongsToMany(models.Techs, { foreignKey: 'user_id', through: 'Users_Techs', as: 'techs'})
    }
}

module.exports = User;