const http = require("http");

// function rqListener(req,res){

// }
// http.createServer(rqListener);

const server = http.createServer((req, res) => {
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
