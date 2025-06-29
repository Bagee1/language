const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    id: {
      type: String,
      primaryKey: true,

    },
    name: DataTypes.STRING,
    email: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
    },
    level: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
};
