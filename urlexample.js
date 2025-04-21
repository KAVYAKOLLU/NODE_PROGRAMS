const  http=require('http')
const fs=require('fs')
const url=require('url')
const { userInfo } = require('os')
const server=http.createServer((req,res)=>{
 const myurl=url.parse(req.url,true)
 console.log(myurl)
switch(myurl.pathname){
  case "/":
    res.end("home")
    case '/users':
        
        const username=myurl.query.username;
        res.end(`username is ${username}`)

    }
res.end("Hi from Server")
})
server.listen(8000,()=>{
    console.log("Server Started")
})
