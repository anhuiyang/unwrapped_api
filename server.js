const express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shops');
let db = mongoose.connection

app.get('/api/shops', (err, res)=>{
    Shop.getshops((err, shops)=>{
        err ? res.json(err) : res.json(shops)
    })
})





app.listen(80);
console.log('app is live on port 80');
module.exports = app;