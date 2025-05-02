const http=require('http')
const server=http.createServer((request,responce)=>{
  //GET REQUEST  
    if(request.method==='GET'){
        if(request.url==='/getusers'){
            responce.end("Message from getusers")
        }
        if(request.url==='/getproducts'){
            responce.end("Message from getproducts")
        }
    }

    //POST REQUEST
    if(request.method==='POST'){
        responce.end("Message for post request")
    }

})
server.listen(3000,()=>console.log("server is running"))