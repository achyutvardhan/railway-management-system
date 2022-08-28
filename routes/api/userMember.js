const express = require("express");
const dbdata = require("../../db");
const router = express.Router();
const postController = require("../../controller/userMember/postController");
const getController = require("../../controller/userMember/getController");
const delController = require("../../controller/userMember/deleteController");
const putController = require("../../controller/userMember/putController");

router.get("/submit/:pnr", getController.get);

router.post("/add", postController.add);

router.delete("/delete/:pnr", delController.delData);

router.put("/edit/:pnr", putController.put);
router.get("*", (req, res) => {
  res.status(404).send("Page not create ");
});
module.exports = router;
