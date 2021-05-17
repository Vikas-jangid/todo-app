const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const con = require('./db')

app.use(cors());

app.use(bodyParser.json());

app.get('/todolist' , (req , res) => {

    con.query("SELECT * FROM todolist", (err , rows, fields)=>{
        if(!err){
            res.send(rows)
        }
        else{
        }
    })
});

app.post('/add' , (req ,res) =>{ 
    
    
    let task_title = req.body.task_title
    let task_description =  req.body.task_description
    let task_status =  req.body.task_status
    let added_on =  req.body.added_on
    let task_priority =  req.body.task_priority
    

    let sql = `INSERT into todolist( task_title, task_description, task_status , added_on , task_priority) values ('${task_title}', '${task_description}', '${task_status}' , '${added_on}' , '${task_priority}')`;

    con.query(sql , (err)=>{
        if(err) {
            throw err
        }
        else {
            res.send('Success')
        }
    })
})

app.listen(3000, function(){
    console.log("App is running on port 3000");
});