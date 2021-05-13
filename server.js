const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const dbConfig = require('./db.js');

app.use(cors());

app.use(bodyParser.json());

app.get('/todolist' , (req , res) => {
    var sql = "SELECT * FROM todolist";
     dbConfig.query(sql, function(err , rows, fields){
         if(err){
            res.send({error : "Error In DB"});
        } 
        else{
            res.send(rows);
        }
     })
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});