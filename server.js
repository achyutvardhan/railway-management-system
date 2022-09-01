const express = require("express");
const app = express();
const con = require("./database/mysql");
const path = require("path");
if (con.getConnection) {
  console.log("Connected!");
}
app.use(express.static(path.join(__dirname, "pages")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("./crypto"));
app.use("/userMember", require("./routes/api/userMember"));
const cors = require("cors");
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.listen(80, () => {
  console.log("listening to port 80");
});
