const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('UserProgress', 
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4 // ← энэ мөрийг нэмнэ

            },
            user_id:{
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            lesson_id: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'lessons',
                    key: 'id'
                }
            },
            score: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            status: {
                type: DataTypes.STRING,
            },
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('NOW()')
            }
        }
    );
}