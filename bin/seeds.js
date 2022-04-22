const mongoose = require('mongoose');
const Product = require("../models/Product.model");

// establish connection with DB
mongoose
    .connect('mongodb://localhost/express-project-db')
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

const products = [
    {
        title: "Bike1",
        price: 700,
        imageFile: "bike1.jpeg",
    },
    {
        title: "Bike2",
        price: 900,
        imageFile: "bike2.jpeg"
    },
    {
        title: "Bike3",
        price: 1300,
        imageFile: "bike3.jpeg"
    },
    {
        title: "Bike4",
        price: 2100,
    }
];

Product.insertMany(products)
.then(response => {
    console.log("products inserted in db successfuly", response);
})
.catch(error => {
    console.log("error inserting products in db", error);
})
.finally( () => {
    mongoose.connection.close();
});