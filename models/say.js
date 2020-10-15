module.exports = (sequelize, DataTypes) => (
	sequelize.define('say', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
      paranoid: true,
      timestamp: true,
			charset: 'utf8',
	    collate: 'utf8_general_ci'
  })
)