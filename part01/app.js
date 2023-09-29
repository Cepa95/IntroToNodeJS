const http = require("http");
const fs = require("fs");

// function rqListener(req,res){

// }
// http.createServer(rqListener);

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Enter message </title></head>");
    res.write(
      '<body><form action="/message" method="POST"> <input type="text"name="message"><button type="submit">send</button> </form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () =>{
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFileSync("message.txt", message);
    })
    res.statusCode = 302; //redirection
    res.setHeader("Location", "/");
    return res.end();
  }
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> My first page</title></head>");
  res.write("<body> <h1> Hello from Node.js server </h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
