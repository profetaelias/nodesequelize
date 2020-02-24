const {Model, DataTypes} = require('sequelize');

class Users_Techs extends Model {
    //padrão do sequelize
    static init(connection) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        //this.belongsToMany(models.User, { foreignKey: 'user_id', through: 'Users', as: 'user'})
        //this.belongsToMany(models.Tech, { foreignKey: 'tech_id', through: 'Techs', as: 'tech'})
    }
}

module.exports = Users_Techs