const dbdata = require("../../db");

function get(req, res) {
  const found = dbdata.some((member) => member.pnr === req.params.pnr);
  if (found) {
    res.json(dbdata.filter((member) => member.pnr === req.params.pnr));
  } else {
    res.status(400).send("Data NOT FOUND");
  }
}
module.exports.get = get;
