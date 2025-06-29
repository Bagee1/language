
const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Word', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 // ← энэ мөрийг нэмнэ

    },
    text_en: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text_mn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    level:{
        type: DataTypes.STRING,
        allowNull: true
    },
    lesson_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'lessons', // 'lessons' is the table name
        key: 'id'
      }
    },
  }, {
    tableName: 'words',
    timestamps: false
  });
};