const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Quiz', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4 // ← энэ мөрийг нэмнэ

        },
        lesson_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'lessons', // 'lessons' is the table name
                key: 'id'
            }
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        options: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        correct:DataTypes.STRING,
    }, {
        tableName: 'quizzes',
        timestamps: false
    });
}