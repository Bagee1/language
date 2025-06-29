const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Word {
    id: ID!
    text_en: String!
    text_mn: String
    lesson_id: ID
    level: String
  }

  type Query {
    getAllWords: [Word]
    getWord(id: ID!): Word
  }

  input WordInput {
    id: ID!
    text_en: String!
    text_mn: String
    lesson_id: ID
    level: String
  }

  type Mutation {
    createWord(word: WordInput!): Word
    updateWord(id: ID!, word: WordInput!): Word
    deleteWord(id: ID!): String
  }
`);
