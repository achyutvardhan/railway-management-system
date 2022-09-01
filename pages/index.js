const detail = document.querySelector(".divDetail");
const container = document.querySelector(".container");
const newContainer = document.querySelector(".container-1");
detail.remove();
newContainer.remove();

async function showDetail() {
  //fetch function
  try {
    let input = document.getElementById("formGroupExampleInput").value;
    console.log(input);
    console.log(`http://localhost:80/userMember/submit/${input}`);
    var result = await fetch(`http://localhost:80/userMember/submit/${input}`, {
      mode: "no-cors",
    });
    try {
      let json = await result.json();
      console.log(json);
      input = document.getElementById("formGroupExampleInput").value;
      if (input == json.pnr) {
        container.innerHTML = ` <div class="divPnr">
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Enter PNR:</label>
              <input type="number" class="form-control" id="formGroupExampleInput" placeholder="123456789">
              <div class="flex-0">
                  <div class="col-auto">
                      <button type="submit" class="btn btn-primary" id="submit">Submit</button>
                    </div>
                    <div class="col-auto">
                      <button type="submit" class="btn btn-primary" id="add">Add</button>
                    </div>
              </div>
            </div>
      </div>
      <div class="divDetail" id="divDetail">
          <table class="table" id="table1">
              <thead>
                <tr>

                  <th scope="col">User Information</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>

                  <td>PNR:</td>
                  <td id="pnr">${json.pnr}</td>

                </tr>
                <tr>

                  <td>NAME:</td>
                  <td id="name">${json.name}</td>
                </tr>
                <tr>

                 <td>SEAT NO:</td>
                 <td id="seatNo">${json.seatno}</td>
                 <td>BIRTH NO:</td>
                  <td id="birthNo">${json.birthno}</td>
                </tr>
                <tr>
                  <td>FROM:</td>
                 <td id="from">${json.fromS}</td>
                 <td>TO:</td>
                  <td id="to">${json.toS}</td>
                </tr>
                <tr>
                  <td>DATE-DEPATRURE:</td>
                 <td id="dateDepart">${json.dateOfDeparture}</td>
                 <td>DATE-ARRIVAL:</td>
                  <td id=" dateArrival">${json.dateOfArrival}</td>
                </tr>
                <tr>
                  <td>TIME-DEPART:</td>
                 <td id="timeDepart">${json.timeOfArrival}</td>
                 <td>TIME-ARRIVAL:</td>
                  <td id="timeArrival">${json.timeOfDeparture}</td>
                </tr>
              </tbody>
            </table>
            <div class="flex-1">
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary" id="delete">Delete</button>
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary" id="edit">Edit</button>
                  </div>
            </div>
      </div>`;
        let submit = document.getElementById("submit");
        submit.addEventListener("click", showDetail);
        // add = document.getElementById("add");
        // add.remove();
      }
    } catch (err) {
      console.log(err);
      alert("PNR IS NOT REGISTER!");
    }
  } catch (err) {
    console.log(`Fetch problem: ${err.message}`);
  }
}

function enterDetail(e) {
  container.replaceWith(newContainer);

  const save = document.querySelector("#save1");
  console.log(save);
  save.addEventListener("click", saveDetail);

  function saveDetail(e) {
    var pnrN = document.getElementById("pnr").value;
    var name = document.getElementById("name").value;
    var seatNo = document.getElementById("seatNo").value;
    var birthNo = document.getElementById("birthNo").value;
    var fromS = document.getElementById("from").value;
    var toS = document.getElementById("to").value;
    var dateDepart = document.getElementById("dateDepart").value;
    var dateArrival = document.getElementById("dateArrival").value;
    var timeDepart = document.getElementById("timeDepart").value;
    var timeArrival = document.getElementById("timeArrival").value;

    async function postData(
      url = "http://localhost:80/userMember/add",
      data = {
        pnr: pnrN,
        user_name: name,
        seat_number: seatNo,
        birth_number: birthNo,
        from: fromS,
        to: toS,
        date_of_departure: dateDepart,
        date_of_arrival: dateArrival,
        time_of_departure: timeDepart,
        time_of_arrival: timeArrival,
      }
    ) {
      console.log(data);
      var response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status == 200) {
        alert("Registration Succesfull ");
      }
      if (response.status == 400) {
        let postResult = await response.json();
        console.log(postResult);
      }
    }

    if (postData()) {
      newContainer.replaceWith(container);
    }
  }
}
