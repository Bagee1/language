require('dotenv').config();
const { Sequelize } = require('sequelize'); // ← энэ мөрийг нэмнэ
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const routeValue = require('./graphql/resolvers');
const schema = require('./graphql/schema');
const auth = require('./middleware/auth'); // ← энэ мөрийг нэмнэ
const cors = require('cors'); // ← энэ мөрийг нэмнэ


const app = express();
// CORS тохиргоо
app.use(cors({ origin: '*', // эсвэл тодорхой домэйн
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // зөвшөөрөгдсөн HTTP арга
  allowedHeaders: ['Content-Type', 'Authorization'] // зөвшөөрөгдсөн толбор
}));
app.use(express.json());

// DB холболтыг шалгах
const db = require('./models');

db.sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Unable to connect to the database:', err));

app.use('/graphql', auth, graphqlHTTP({
  schema,
  rootValue: routeValue,
  graphiql: true, // GraphiQL UI-г идэвхжүүлнэ
}));

db.sequelize.sync({ alter: true }) // эсвэл { force: true } (болгоомжтой, бүх өгөгдлийг устгана)
  .then(() => console.log('All tables synced!'))
  .catch(err => console.error('Sync error:', err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
