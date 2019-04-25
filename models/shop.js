const mongoose = require('mongoose')

let shopSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true
    }, 
    address: {
        type: String, 
        require: true
    }, 
    latitude: {
        type: String, 
        require: false
    },
    longtitude: {
        type: String, 
        require: false
    }, 
    veg: {
        type: Boolean, 
        require: true
    },
    fruit: {
        type: Boolean, 
        require: true
    }, 
    dryGoods: {
        type: Boolean, 
        require: true
    },
    wine: {
        type: Boolean, 
        require: true
    },
    beautyProducts: {
        type: Boolean, 
        require: true
    },
    created_date: {
        type: Date, 
        default: Date.now
    }
})

let Shop = module.exports = mongoose.model('Shop', shopSchema)

module.exports.getShops = (callback)=>{
    Shop.find(callback)
}
module.exports.getShopById = (id, callback)=>{
    let query = {_id: id}
    Shop.findById(query, callback)
}
module.exports.addShop = (shop, callback)=>{
    Shop.create(shop, callback)
}
module.exports.updateShop = (id, shop, callback)=>{
    let query = {_id: id}
    let update = {$set: shop}
    Shop.findByIdAndUpdate(query, update, callback)
}
module.exports.deleteShop = (id, callback)=>{
    let query = {_id: id}
    Shop.remove(query, callback)
}