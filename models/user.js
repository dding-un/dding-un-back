module.exports = (sequelize, DataTypes) => (
	sequelize.define('user', {
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pw: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      paranoid: true,
      timestamp: true,
			charset: 'utf8',
	    collate: 'utf8_general_ci'
  })
)