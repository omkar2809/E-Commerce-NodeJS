const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'node-complete', 
    'root', 'omkar2809', 
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

module.exports = sequelize