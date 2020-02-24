const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../model/Users')
const Address = require('../model/Address')
const Techs = require('../model/Techs')
const Users_Techs = require('../model/Users_Techs')

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Techs.init(connection);
Users_Techs.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
Techs.associate(connection.models);
Users_Techs.associate(connection.models);

module.exports = connection;