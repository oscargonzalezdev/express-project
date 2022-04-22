const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        enum: ["white", "black", "blue", "red", "green"]
    },
    imageFile: {
        type: String,
        default: "default.png"
    },
    store: {
        type: [String],
        enum: ["online", "paris", "madrid", "london"]
    }
});

// create Model
  const Product = mongoose.model('Product', productSchema);

// export model
module.exports = Product;