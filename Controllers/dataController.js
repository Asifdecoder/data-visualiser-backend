const Json = require("../Models/JsonData");

async function sendData(req, res) {

    try {
        const foundData = await Json.find({}).limit(30);
        res.status(201).json(foundData);
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
 
}
module.exports = sendData;
