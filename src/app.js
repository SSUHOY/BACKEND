const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const booksRouter = require('./routes/books.js')
const loggerOne = require('./middlewares/loggerOne.js')
const bodyParser = require('body-parser')

dotenv.config();

const app = express();

app.use(bodyParser.json())
app.use(loggerOne)
app.use(booksRouter)
app.use(cors())
 

const { 
  PORT = 3005,
  API_URL = 'http://127.0.0.1',
  MONGO_URL = 'mongodb://127.0.0.1:27017/backend-hw'
} = process.env


app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
})

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));


// const server = http.createServer((request, response) => {
//   const url = new URL(request.url, "http://127.0.0.1:3006");
//   console.log(url.searchParams);
//   console.log(request.url);

//   if (request.url === "/users") {
//     response.writeHead(200, "OK", { "Content-Type": "application/json" });
//     response.write(getUsers());
//     response.end();
//     return;
//   }

//   if (url.searchParams.has("hello")) {
//     const name = url.searchParams.get("hello");
//     if (name === null || name === "") {
//       response.writeHead(400, "Bad Request", { "Content-Type": "text/plain" });
//       response.write(`Enter a name`);
//       response.end();
//     } else {
//       response.writeHead(200, "OK", { "Content-Type": "text/plain" });
//       response.write(`Hello, ${name}`);
//       response.end();
//       return;
//     }
//    } else if (request.url === "/?") {
//     response.writeHead(200, "OK", { "Content-Type": "text/plain" });
//     response.write("Hello World");
//     response.end();
//     return;
//   } else {
//     response.writeHead(500, "OK", { "Content-Type": "text/plain" });
//     response.write(" ");
//     response.end();
//   }

// });
// server.listen(3006, () => {
//   console.log(`Сервер запущен по адресу ${API_URL}:3006`);
// });


// app.get('/', (request, response) => {
//   response.status(200);
//   response.send('Hello, world!')
// })

// app.post('/', (request, response) =>{
//   response.status(200);
//   response.send('Hello from POST!')
// })

// app.get('/users/34',(request, response) => {
//   response.status(200)
//   response.send('Hello user with id: 34')
// })