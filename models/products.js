// Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

const productSchema = new mongoose.Schema ({
    name: String,
    sku: String,
    price: Number
});

// return model
module.exports = restful.model('Products', productSchema);
