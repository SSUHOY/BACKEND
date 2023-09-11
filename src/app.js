const http = require("http");
const getUsers = require("./modules/users.js");

const server = http.createServer((request, response) => {
  if (request.url === "/favicon.ico") {
    response.status = 204;
    response.statusMessage = "OK";
    response.end();
    return;
  }

  if (request.url === "/users") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();

    return;
  }

  const url = new URL(request.url, "http://127.0.0.1:3003");
  let checkUrl = url.searchParams.get("hello");
  console.log(checkUrl);

  if (checkUrl) {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write(`Hello, ${checkUrl}`);
    response.end();
    return;
  }
  if (url.searchParams.has("hello")) {
    if (checkUrl === "") {
      response.status = 400;
      response.statusMessage = "Error";
      response.header = "Content-Type: text/plain";
      response.write("Enter a name");
      response.end();
      return;
    }
  }

  if (checkUrl === null) {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Hello, world!");
    response.end();
    return;
  } else {
    response.status = 500;
    response.statusMessage = "";
    response.end();
  }
});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
