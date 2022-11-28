const express = require("express");

// instance of express in a variable (app)
var app = express();
// PORT
var PORT = process.env.PORT || 5000;
// app.get("/", (req, res) => {
//   res.send("");
// });

// middleware
const timeVerification = (req, res, next) => {
  const test = new Date();
  const hour = test.getHours();
  const day = test.getDay();

  if (day == 1 || day == 0 || hour > 17 || hour < 9) {
    res.send("close");
  } else next();
};
app.use(timeVerification);
app.use(express.static("pages"));

// callback funtion
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running in port ${PORT}`)
);
