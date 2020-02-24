const {Model, DataTypes} = require('sequelize');

class Address extends Model {
    //padrão do sequelize
    static init(connection) {
        super.init({
            zipcode: DataTypes.STRING, 
            street: DataTypes.STRING,
            number: DataTypes.INTEGER, 
            user_id: DataTypes.INTEGER
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Address;