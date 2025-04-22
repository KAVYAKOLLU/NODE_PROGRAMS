const  express = require("express");
const router=express.Router()

router.get("/", (req, res) => {
    return res.send("received data from comments");
  });
router.post('/',(req,res)=>{
    return res.send("recived data from post request")
})
router.patch('/',(req,res)=>{
    return res.send("recived data from post request")
})
router.delete('/',(req,res)=>{
    return res.send("recived data from post request")
})
module.exports=router