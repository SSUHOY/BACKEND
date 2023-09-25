const Book = require("../models/books");

const getBooks = async (request, response) => {
  try {
    const books = await Book.find({});
    response.status(200).send(books);
  } catch (error) {
    response.status(500).send(error.message);
  }
};
// Добавляем новую книгу

const getBook = async (request, response) => {
  try {
    const { book_id } = request.params;
    const findBookById = await Book.findById(book_id);
    if (!findBookById) {
      response.status(404).send("Book not found");
    } else {
      response.status(200).send(findBookById);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
  // Получаем конкретную книгу
};

const createBook = async (request, response) => {
  try {
    const postBook = await Book.create({ ...request.body });
    response.status(201).send(postBook);
  } catch (error) {
    response.status(500).send(error.message);
  }
  // Добавляем новую книгу
};

const updateBook = async (request, response) => {
  try {
    const { book_id } = request.params;
    const updateBookById = await Book.findByIdAndUpdate(book_id, {
      ...request.body,
    });
    if (!updateBookById) {
      response.status(404).send("Book not found");
    } else {
      response.status(200).send(updateBookById);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
  // Добавляем новую книгу уже в имеющеюся коллекцию
};

const deleteBook = async (request, response) => {
  try {
    const { book_id } = request.params;
    const deleteBookById = await Book.findByIdAndDelete(book_id);
    if (!deleteBookById) {
      response.status(404).send("Book not found");
    } else {
      response.status(200).send(deleteBookById);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
  // Отдаем книгу в библиотеку
};

module.exports = {
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  createBook,
};
