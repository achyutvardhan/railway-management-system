const dbdata = require("../../db");
function delData(req, res) {
  const found = dbdata.some((member) => member.pnr === req.params.pnr);
  if (found) {
    res.json({
      msg: "deleted user",
      User: dbdata.filter((member) => member.pnr !== req.params.pnr),
    });
  } else {
    res.status(400).send("Data NOT FOUND");
  }
}
module.exports.delData = delData;
