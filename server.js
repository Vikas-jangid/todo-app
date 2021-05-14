
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/todolist' , (req , res) => {

    con.query("SELECT * FROM todolist", (err , rows, fields)=>{
        if(!err){
            console.log('data loading')
            console.log(rows[0].task_title, "new");
            res.send(rows[0].task_title)
        //  console.log(fields);
        }
        else{
            console.log(err);
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