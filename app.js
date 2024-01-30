const express = require("express");
const app = express();
const seeDb = require("./seed");
const mongoose = require("mongoose");
const apiRoute = require("./Apis/apiRoute");
const cors = require('cors')
require('dotenv').config()
const colors = require('colors/safe');
const PORT = 8080 || process.env.NO

async function connectDb() {
  await mongoose.connect(process.env.DB_URI);
  console.log(colors.yellow("connected to db"));
 
}
connectDb();
app.use(cors('https://data-visualiser-frontend.vercel.app/'))
app.use(apiRoute);

// seeDb();

app.listen(8080, () => {
  console.log(colors.red(`listening on port ${PORT}`));
});
