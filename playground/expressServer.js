const express = require("express");
const bodyParser = require("body-parser");
const responseTime = require("response-time");
const compression = require("compression");
const helmet = require("helmet");

const pino = require("pino")();
const expressPino = require("express-pino-logger")({
  logger: pino
});

const app = express();

app.use(helmet());
app.use(responseTime({}));
app.use(compression());
app.use(expressPino);
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", function(req, res) {
  res.send({ query: req.query, body: req.body });
});

app.listen(3000);
