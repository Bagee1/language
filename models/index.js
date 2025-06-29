// models/index.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false }
    },
    logging: false
  }
);

// User model-оо энд import хийж бүртгүүлнэ
const User = require('./user')(sequelize);
const UserProgress = require('./user_progress')(sequelize);
const UserWords = require('./user_words')(sequelize);
const Lesson = require('./lesson')(sequelize);
const Word = require('./word')(sequelize);
const Quiz = require('./quizzes')(sequelize);

module.exports = {
    sequelize,
    Sequelize,
    User,
    UserProgress, 
    UserWords,
    Lesson,
    Word,
    Quiz
};
