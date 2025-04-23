

const fetchData = require("./test");

async function filterData(req, res) {
    try {
        const data = await fetchData();
        const id1 = parseInt(req.query.id1, 10);
        const id2 = parseInt(req.query.id2, 10);
        const filteredData = data.filter(item => item.id >= id1 && item.id <= id2);
        res.send(filteredData);
    } catch (error) {
        console.error("Error filtering data:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = filterData;
