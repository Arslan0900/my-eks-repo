const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/health") {
    res.writeHead(200);
    res.end("OK");
    return;
  }

  res.end("Hello from Backend dev arslan");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Backend running on http://0.0.0.0:3000");
});
