const {Model, DataTypes} = require('sequelize');

class Techs extends Model {
    //padrão do sequelize
    static init(connection) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'Users_Techs', as: 'users'})
    }
}

module.exports = Techs