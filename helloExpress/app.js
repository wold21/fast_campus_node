const express = require("express");
const nunjucks = require("nunjucks");
const admin = require("./routes/admin");
const contact = require("./routes/contacts");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

// 미들웨어 세팅
app.use(logger("dev"));

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 정적파일
// url, 폴더명
app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  app.locals.isLogin = true;
  next();
});

app.get("/", (req, res) => {
  res.send("hello express");
});

//  // 미들웨어 테스트
// function vipMiddleware(req, res, next) {
//   console.log("최우선 미들웨어");
//   next();
// }

app.use("/admin", admin);

app.use("/contacts", contact);

// 400에러 처리
app.use((req, res, _) => {
  res.status(400).render("common/404.html");
});
app.use((req, res, _) => {
  res.status(500).render("common/500.html");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
