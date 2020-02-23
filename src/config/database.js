module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'docker', 
    password: 'docker', 
    database: 'sqlnode',
    port: 25432, 
    defined: {
        timestamps: true, //created_at, updated_at
        underscored: true, // utiliza a nomenclatura no padrão snake_case
    },
}