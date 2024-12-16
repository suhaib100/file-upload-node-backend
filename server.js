const express = require('express');
const app = express();
require('dotenv').config();
const db = require("./db")

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT =  process.env.PORT || 3000;

// const { jwtAuthMiddleware} = require("./jwt");



db.connectTodb()


const studentRoutes = require('./routes/studentRoutes');


app.use('/student' , studentRoutes);


app.listen(PORT, () => {
    console.log("server is running on 3000");
});