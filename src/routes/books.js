const router = require("express").Router();
const loggerOne = require('../middlewares/loggerOne')

router.use(loggerOne)

const {
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  createBook
} = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:book_id", getBook);
router.post("/books", createBook);
router.patch("/books/:book_id", updateBook);
router.delete("/books/:book_id", deleteBook);

module.exports = router;
