const express = require('express')
let app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/unwrappedShop')
const db = mongoose.connection

const Shop = require('./models/shop') 


app.get('/', (req, res)=>{
    res.send('please use /api/shops')
})
app.get('/api/shops', (req, res)=>{
    Shop.getShops((err, shops)=>{
        err ? res.json(err) : res.json(shops)
    })
})
app.get('/api/shops/:_id', (req, res)=>{
    Shop.getShopById(req.params._id, (err, shops)=>{
        err ? res.json(err) : res.json(shops)
    })
})
app.post('/api/shops', (req, res)=>{
    let shop = req.body
    Shop.addShop(shop, (err, shop)=>{
        err ? res.json(err) : res.json(shop)
    })
})
app.put('/api/shops/:_id', (req, res)=>{
    let id = req.params._id
    let shop = req.body
    Shop.updateShop(id, shop, (err, shop)=>{
        err ? res.json(err) : res.json(shop)
    })
})
app.delete('/api/shops/:_id', (req, res)=>{
    let id = req.params._id
    Shop.deleteShop(id, (err, shop)=>{
        err ? res.json(err) : res.json(shop)
    })
})
app.listen(3000)
console.log('app is live on port 3000')