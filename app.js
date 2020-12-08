const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const rUser=require('./Routers/rUser')

const dbUrl = "mongodb+srv://codingspace:codingspacedev@cluster0.4yk93.mongodb.net/fazil"

app.use(bodyParser.json());
app.use(cors());



mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err, docs) => {
    if (err) {
        console.log("DB not connect");
        console.log(err);
    }
    else {
        console.log("DB connect");
        console.log(docs);
    }
})

app.listen(3000, function (err, docs) {
    if (err) {
        console.log("Server not connect");
        console.log(err);
    }
    else {
        console.log("Server conncet");
    }
})