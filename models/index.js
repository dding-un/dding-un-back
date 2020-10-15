'use strict'

const path = require('path')
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const db = {}

let sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = require('./user')(sequelize, Sequelize)
db.Say = require('./say')(sequelize, Sequelize)
db.Like = require('./like')(sequelize, Sequelize)


db.User.hasMany(db.Say)
db.Say.belongsTo(db.User)

db.Say.hasMany(db.Like)
db.Like.belongsTo(db.Say)

db.User.hasMany(db.Like)
db.Like.belongsTo(db.User)

module.exports = db
