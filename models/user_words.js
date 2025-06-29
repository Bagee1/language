const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('UserWords', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4 // ← энэ мөрийг нэмнэ

        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        word_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'words',
                key: 'id'
            }
        },
        known: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};