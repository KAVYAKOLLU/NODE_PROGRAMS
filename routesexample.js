const express=require('express')
const app=express()
const userRoute=require('./routes/users')
const commentRoute=require('./routes/comments')



app.use('/users',userRoute)
app.use('/comments',commentRoute)

app.listen(7000,()=>{
    console.log("server Started")
})
