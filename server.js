const express = require('express')
const app = express();
const dbdata = require('./db')

app.use(express.json());
app.use(express.urlencoded({ extended : false}))

app.get(('/submit/:pnr'),(req,res)=>{
    const found = dbdata.some(member=>member.pnr === req.params.pnr)
    if (found) {
        res.json(dbdata.filter(member=>member.pnr === req.params.pnr));
    }else{
        res.status(400).send('Data NOT FOUND')
    }
})

app.post(('/add'),(req,res)=>{
    const newUser = {
         pnr : req.body.pnr,
     user_name : req.body.user_name,
     seat_number :req.body.seat_number,
     birth_number : req.body.birth_number,
     from : req.body.from,
     to : req.body.to,
     date_of_departure : req.body.date_of_departure,
     date_of_arrival : req.body.date_of_arrival,
     time_of_arrival : req.body.time_of_arrival,
     time_of_departure : req.body.time_of_departure,

    }
    var found = false;
    dbdata.forEach(element => {
        if (element.pnr=== newUser.pnr) {
            found =true;
        }
    });
  
     if (found) {
        res.status(200).send('User already Exist')
     }else{
        dbdata.push(newUser)
        res.json(dbdata)
     }
    
})

app.delete(('/delete/:pnr'),(req,res)=>{
    const found = dbdata.some(member=>member.pnr === req.params.pnr)
if (found) {
    res.json({msg:'deleted user',User:dbdata.filter(member=>member.pnr!==req.params.pnr)})
}else{
    res.status(400).send('Data NOT FOUND')
}
})

app.get(('*'),(req,res)=>{
res.status(404).send('fuckk off')
})

app.listen(5000,()=>{
    console.log('listening to port 5000')
})