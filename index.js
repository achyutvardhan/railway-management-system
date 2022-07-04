const detail = document.querySelector('.divDetail')
const container = document.querySelector('.container')
const newContainer = document.querySelector('.container-1')
detail.remove()
newContainer.remove()
const submit = document.querySelector('#submit')
submit.addEventListener('click',showDetail)
function showDetail(e) {
    container.innerHTML=` <div class="divPnr">
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
            <td id="pnr"></td>
           
          </tr>
          <tr>
           
            <td>NAME:</td>
            <td id="name"></td>
          </tr>
          <tr>
            
           <td>SEAT NO:</td>
           <td id="seatNo"></td>
           <td>BIRTH NO:</td>
            <td id="birthNo"></td>
          </tr>
          <tr>
            <td>FROM:</td>
           <td id="from"></td>
           <td>TO:</td>
            <td id="to"></td>
          </tr>
          <tr>
            <td>DATE-DEPATRURE:</td>
           <td id="dateDepart"></td>
           <td>DATE-ARRIVAL:</td>
            <td id=" dateArrival"></td>
          </tr>
          <tr>
            <td>TIME-DEPART:</td>
           <td id="timeDepart"></td>
           <td>TIME-ARRIVAL:</td>
            <td id="timeArrival"></td>
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
</div>`
}
const add = document.getElementById('add')
add.addEventListener('click',enterDetail)
function enterDetail(e) {
    
    container.replaceWith(newContainer)
}