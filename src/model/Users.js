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
}

module.exports = User;