const express = require("express");
const app = express();
// const mysql = require("mysql");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./crypto"));

app.use("/userMember", require("./routes/api/userMember"));

app.listen(5000, () => {
  console.log("listening to port 5000");
});
