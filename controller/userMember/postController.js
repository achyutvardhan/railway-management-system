const dbdata = require("../../db");
function add(req, res) {
  const newUser = {
    pnr: req.body.pnr,
    user_name: req.body.user_name,
    seat_number: req.body.seat_number,
    birth_number: req.body.birth_number,
    from: req.body.from,
    to: req.body.to,
    date_of_departure: req.body.date_of_departure,
    date_of_arrival: req.body.date_of_arrival,
    time_of_arrival: req.body.time_of_arrival,
    time_of_departure: req.body.time_of_departure,
  };
  var found = false;
  dbdata.forEach((element) => {
    if (element.pnr === newUser.pnr) {
      found = true;
    }
  });

  if (found) {
    res.status(200).send("User already Exist");
  } else {
    dbdata.push(newUser);
    res.json(dbdata);
  }
}
module.exports.add = add;
