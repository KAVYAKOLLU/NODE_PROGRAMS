const http=require('http')
const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    return res.send("Hi Home Page")
})
app.get('/about/:id',(req,res)=>{
    return res.send(`Hi ${req.query.name}  and rollNumber is ${req.query.rollNo} welcome to about page`)

})

app.listen(8000,()=>{
    console.log("server Started")
})