const { Word, Lesson, User, Quiz, UserProgress, UserWords } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Хэрвээ password hash хийсэн бол

module.exports = {
  getAllWords: async () => {
    return await Word.findAll();
  },

  getWord: async ({ id }) => {
    const w = await Word.findByPk(id);
    if (!w) throw new Error("Word not found");
    return w;
  },

  createWord: async ({ word }) => {
    return await Word.create(word);
  },

  updateWord: async ({ id, word }) => {
    const w = await Word.findByPk(id);
    if (!w) throw new Error("Word not found");
    await w.update(word);
    return w;
  },

  deleteWord: async ({ id }) => {
    const w = await Word.findByPk(id);
    if (!w) throw new Error("Word not found");
    await w.destroy();
    return "Deleted";
  },

  getAllLessons: async () => {
    return await Lesson.findAll();
  },

  getLesson: async ({ id }) => {
    const lesson = await Lesson.findByPk(id);
    if (!lesson) throw new Error("Lesson not found");
    return lesson;
  },

  createLesson: async ({ lesson }) => {
    return await Lesson.create(lesson);
  },

  updateLesson: async ({ id, lesson }) => {
    const l = await Lesson.findByPk(id);
    if (!l) throw new Error("Lesson not found");
    await l.update(lesson);
    return l;
  },

  deleteLesson: async ({ id }) => {
    const l = await Lesson.findByPk(id);
    if (!l) throw new Error("Lesson not found");
    await l.destroy();
    return "Deleted";
  },
  getAllUsers: async () => {
    return await User.findAll();
  },
  getUser: async ({ id }) => {
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    return user;
  },
  getUserProgress: async ({ user_id }) => {
    return await UserProgress.findAll({ where: { user_id } });
  },
  getUserWords: async ({ user_id }) => {
    return await UserWords.findAll({ where: { user_id } });
  },
  getQuizByLesson: async ({ lesson_id }) => {
    return await Quiz.findAll({ where: { lesson_id } });
  },
  getAllQuizzes: async () => {
    return await Quiz.findAll();
  },
  getQuiz: async ({ id }) => {
    const quiz = await Quiz.findByPk(id);
    if (!quiz) throw new Error("Quiz not found");
    return quiz;
  },
  getUserProgressByLesson: async ({ user_id, lesson_id }) => {
    return await UserProgress.findOne({ where: { user_id, lesson_id } });
  },
  getUserWordsByWord: async ({ user_id, word_id }) => {
    return await UserWords.findOne({ where: { user_id, word_id } });
  },
  createUserProgress: async ({ userProgress }) => {
    return await UserProgress.create(userProgress);
  },
  updateUserProgress: async ({ id, userProgress }) => {
    const up = await UserProgress.findByPk(id);
    if (!up) throw new Error("User Progress not found");
    await up.update(userProgress);
    return up;
  },
  deleteUserProgress: async ({ id }) => {
    const up = await UserProgress.findByPk(id);
    if (!up) throw new Error("User Progress not found");
    await up.destroy();
    return "Deleted";
  },
  createUser: async ({ user }) => {
    return await User.create(user);
  },
  updateUser: async ({ id, user }) => {
    const u = await User.findByPk(id);
    if (!u) throw new Error("User not found");
    await u.update(user);
    return u;
  },
  deleteUser: async ({ id }) => {
    const u = await User.findByPk(id);
    if (!u) throw new Error("User not found");
    await u.destroy();
    return "Deleted";
  },
  createUserWords: async ({ userWords }) => {
    return await UserWords.create(userWords);
  },
  updateUserWords: async ({ id, userWords }) => {
    const uw = await UserWords.findByPk(id);
    if (!uw) throw new Error("User Words not found");
    await uw.update(userWords);
    return uw;
  },
  deleteUserWords: async ({ id }) => {
    const uw = await UserWords.findByPk(id);
    if (!uw) throw new Error("User Words not found");
    await uw.destroy();
    return "Deleted";
  },
  createQuiz: async ({ quiz }) => {
    return await Quiz.create(quiz);
  },
  updateQuiz: async ({ id, quiz }) => {
    const q = await Quiz.findByPk(id);
    if (!q) throw new Error("Quiz not found");
    await q.update(quiz);
    return q;
  },
  deleteQuiz: async ({ id }) => {
    const q = await Quiz.findByPk(id);
    if (!q) throw new Error("Quiz not found");
    await q.destroy();
    return "Deleted";
  },
  getUserProgressById: async ({ id }) => {
    const up = await UserProgress.findByPk(id);
    if (!up) throw new Error("User Progress not found");
    return up;
  },
  getUserWordsById: async ({ id }) => {
    const uw = await UserWords.findByPk(id);
    if (!uw) throw new Error("User Words not found");
    return uw;
  },
  getUserById: async ({ id }) => {
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    return user;
  },
  getLessonById: async ({ id }) => {
    const lesson = await Lesson.findByPk(id);
    if (!lesson) throw new Error("Lesson not found");
    return lesson;
  },
  getWordById: async ({ id }) => {
    const word = await Word.findByPk(id);
    if (!word) throw new Error("Word not found");
    return word;
  },
  getQuizById: async ({ id }) => {
    const quiz = await Quiz.findByPk(id);
    if (!quiz) throw new Error("Quiz not found");
    return quiz;
  },
  getUserWordsByUserId: async ({ user_id }) => {
    return await UserWords.findAll({ where: { user_id } });
  },
  getUserProgressByUserId: async ({ user_id }) => {
    return await UserProgress.findAll({ where: { user_id } });
  },
  getQuizByLessonId: async ({ lesson_id }) => {
    return await Quiz.findAll({ where: { lesson_id } });
  },
  getAllUserProgress: async () => {
    return await UserProgress.findAll();
  },
  getAllUserWords: async () => {
    return await UserWords.findAll();
  },
  getAllQuizzes: async () => {
    return await Quiz.findAll();
  },
  getAllLessons: async () => {
    return await Lesson.findAll();
  },
  getAllWords: async () => {
    return await Word.findAll();
  },
  getAllUsers: async () => {
    return await User.findAll();
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("User not found");

    // Password-ийг шалгах (bcrypt ашигласан бол)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    // JWT үүсгэх
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return { token, user };
  },
};
