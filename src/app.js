const http = require("http");
const getUsers = require("./modules/users.js");

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1:3003");
  console.log(url.searchParams);
  console.log(request.url);

  if (request.url === "/users") {
    response.writeHead(200, "OK", { "Content-Type": "application/json" });
    response.write(getUsers());
    response.end();
    return;
  }

  if (url.searchParams.has("hello")) {
    const name = url.searchParams.get("hello");
    if (name === null || name === "") {
      response.writeHead(400, "Bad Request", { "Content-Type": "text/plain" });
      response.write(`Enter a name`);
      response.end();
    } else {
      response.writeHead(200, "OK", { "Content-Type": "text/plain" });
      response.write(`Hello, ${name}`);
      response.end();
      return;
    }
   } else if (request.url === "/?") {
    response.writeHead(200, "OK", { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
    return;
  } else {
    response.writeHead(500, "OK", { "Content-Type": "text/plain" });
    response.write(" ");
    response.end();
  }

});
server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
