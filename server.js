const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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

app.post('/addedit' , (req ,res) =>{
    console.log(req);
    res.send('Hello World!')
})

app.listen(3000, function(){
    console.log("App is running on port 3000");
});