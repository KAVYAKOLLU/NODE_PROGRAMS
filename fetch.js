
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const url = "https://jsonplaceholder.typicode.com/comments";


app.use(express.json());

async function testing(req, res) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        res.send(data); 
    } catch (error) {
        console.error("Fetch error:", error);
       
    }
}


app.get("/test", testing);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
