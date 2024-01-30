const router = require("express").Router();

const sendData = require("../Controllers/dataController");

router.get("/api/jsondata", sendData);

module.exports = router;
