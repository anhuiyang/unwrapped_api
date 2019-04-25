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
        require: true
    }, 
    longitude: {
        type: String, 
        require: true
    }, 
    fruit: {
        type: Boolean,
        require: true
    },
    veg: {
        type: Boolean,
        require: true
    },
    dry_goods: {
        type: Boolean,
        require: true
    },
    beauty_products: {
        type: Boolean,
        require: true
    },
    wine: {
        type: Boolean,
        require: true
    },
})

let Shop = module.exports = mongoose.model('Shop', shopSchema)

