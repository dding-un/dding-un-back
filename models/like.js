module.exports = (sequelize, DataTypes) => (
	sequelize.define('like', {
  }, {
      paranoid: true,
      timestamp: true,
			charset: 'utf8',
	    collate: 'utf8_general_ci'
  })
)