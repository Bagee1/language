const { buildSchema } = require('graphql');

module.exports = buildSchema(`

  type User {
    id: ID!
    name: String!
    email: String!
    level: String
    createdAt: String
  }
  input UserInput {
    id: ID!
    name: String!
    email: String!
    level: String
  }

  type UserProgress {
    id: ID!
    user_id: ID!
    lesson_id: ID!
    score: Int
    status: String
    updated_at: String
  }
  
  input UserProgressInput {
    id: ID
    user_id: ID!
    lesson_id: ID!
    score: Int
    status: String
    updated_at: String
  }

  type UserWords {
    id: ID!
    user_id: ID!
    word_id: ID!
    known: Boolean
  }

  input UserWordsInput {
    id: ID
    user_id: ID!
    word_id: ID!
    known: Boolean
  }
  type Quiz {
    id: ID!
    lesson_id: ID
    question: String!
    options: [String!]!
    correct: String!
  }

  input QuizInput {
    id: ID
    question: String!
    lesson_id: ID
    options: [String!]!
    correct: String!
  }

  type Lesson {
    id: ID!
    title: String!
    description: String
    level: String
  }

  input LessonInput {
    id: ID
    title: String!
    description: String
    level: String
  }

  type Word {
    id: ID!
    text_en: String!
    text_mn: String
    lesson_id: ID
    level: String
  }


  input WordInput {
    id: ID
    text_en: String!
    text_mn: String
    lesson_id: ID
    level: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    getAllLessons: [Lesson]
    getLesson(id: ID!): Lesson
    getAllWords: [Word]
    getWord(id: ID!): Word
    getWordsByLesson(lesson_id: ID!): [Word]
    getUserProgress(user_id: ID!): [UserProgress]
    getUserWords(user_id: ID!): [UserWords]
    getQuizByLesson(lesson_id: ID!): [Quiz]
    getAllQuizzes: [Quiz]
    getQuiz(id: ID!): Quiz
    getUser(id: ID!): User
    getAllUsers: [User]
    getUserProgressByLesson(user_id: ID!, lesson_id: ID!): UserProgress
    getUserWordsByWord(user_id: ID!, word_id: ID!): UserWords
  }

  type Mutation {
    createWord(word: WordInput!): Word
    updateWord(id: ID!, word: WordInput!): Word
    deleteWord(id: ID!): String
    createLesson(lesson: LessonInput!): Lesson
    updateLesson(id: ID!, lesson: LessonInput!): Lesson
    deleteLesson(id: ID!): String
    createUser(user: UserInput!): User
    updateUser(id: ID!, user: UserInput!): User
    deleteUser(id: ID!): String
    createUserProgress(userProgress: UserProgressInput!): UserProgress
    updateUserProgress(id: ID!, userProgress: UserProgressInput!): UserProgress
    deleteUserProgress(id: ID!): String
    createUserWords(userWords: UserWordsInput!): UserWords
    updateUserWords(id: ID!, userWords: UserWordsInput!): UserWords
    deleteUserWords(id: ID!): String
    createQuiz(quiz: QuizInput!): Quiz
    updateQuiz(id: ID!, quiz: QuizInput!): Quiz
    deleteQuiz(id: ID!): String
    login(email: String!, password: String!): AuthPayload
  }
`);
