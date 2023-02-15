var techlift =require('express')
const mongoose = require('mongoose');
var bodyParser=require("body-parser");
const userdata = require('./model');
var cors=require("cors")

var app=techlift();
const PORT=4000;


app.use(bodyParser.json())


app.use(cors())

//connecting database
mongoose.connect('mongodb://127.0.0.1:27017/Track-Exercise',{
    useNewUrlParser:true
})
//checking database connected 
mongoose.connection.once("open", ()=>{
    console.log("Database connected")
})

///API create data
app.post("/create", (req,res)=>{
    let user =userdata(req.body)
    user.save()
    .then ((used)=>{
        res.send(used)
    })
    .catch((err)=>{
        console.log("api fail")
    })
})


//api display
app.get("/show",(req,res)=>{
    userdata.find()
    .then((r)=>{
        res.send(r)
    })
    .catch((err)=>{
        res.status(200).send(err.message)
})
})

//update Data
app.put('/update/:id', (req, res) => {
    userdata.updateOne({ id: req.params.id }, { ...req.body, id: req.params.id })
      .then(() => res.status(200).json
      ({
        message: 'Object Update!'
    }))
      .catch(error => res.status(400).json({ error }));
  });


//delete DATA
app.delete('/delete/:id', (req, res) => {
    userdata.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json 
      ({ 
        message: 'Object Deleted!'
        }))
      .catch(error => res.status(400).json ({ error }));
  });

app.listen(PORT,()=>{
    console.log(`Port is connected http://localhost:${PORT}`)
})