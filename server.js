const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const con = require("./db");

app.use(cors());

app.use(bodyParser.json());

// Add API
app.post("/add", (req, res) => {
  let task_title = req.body.task_title;
  let task_description = req.body.task_description;
  let task_status = req.body.task_status;
  let added_on = req.body.added_on;
  let task_priority = req.body.task_priority;

  let sql = `INSERT into todolist (task_title, task_description, task_status , added_on , task_priority) values ('${task_title}', '${task_description}', '${task_status}' , '${added_on}' , '${task_priority}')`;
  con.query(sql, (err) => {
    if (err) {
      throw err;
    } else {
      res.send("Success");
    }
  });
});


// Read DATA from DB 
app.get("/todolist", (req, res) => {
  con.query("SELECT * FROM todolist", (err, rows, fields) => {
    if (!err) {
     res.send(rows);
    } else {
    }
  });
});


// Read SINGLE DATA from DB 
app.get("/todolist/:id", (req, res) => {
  con.query(
    "SELECT * FROM todolist WHERE task_id = ?",
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send(err)

      }
    }
  );
});


// EDIT API

app.get("/edit/:id" , (req ,res) =>{
    con.query("SELECT * FROM todolist WHERE task_id = ?", [req.params.id] , (err , rows ) =>{
        if(!err){
            res.send(rows);
        }else{
            res.send(err)
        }
    }
        
    )
})

// UPDATE API

app.put('/update/:id' , (req ,res) => {

  console.log(req.body.added_on);
  
  let task_title = req.body.task_title;
  let task_description = req.body.task_description;
  let task_status = req.body.task_status;
  let added_on = req.body.added_on;
  let task_priority = req.body.task_priority;
  console.log(added_on);

con.query(`UPDATE todolist SET task_title = '${task_title}' , task_description = '${task_description}', task_status = '${task_status}', added_on = '${added_on}' , task_priority = '${task_priority}'   where task_id =?` , [req.params.id], (err , rows, fields)=>{
        if(err){
           throw err
        }
        else{
          res.send('success')
        }
    })
});


//Delete API  

app.delete("/delete/:id", (req, res) => {
  con.query(
    "DELETE from todolist WHERE task_id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    }
  );
});


app.listen(3000, function () {
  console.log("App is running on port 3000");
});
