

const axios = require("axios");

const url = "https://dummyjson.com/todos";

async function fetchData() {
    try {
        const response = await axios.get(url);
        const data = response.data.todos; 
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Internal Server Error");
    }
}

module.exports = fetchData;
