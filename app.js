console.log('hello from app.js');

const { response } = require('express');
const express = require('express');
const { path } = require('express/lib/application');
const app = express();

const mongoose = require('mongoose');
const Product = require("./models/Product.model");

// establish connection with DB
mongoose
    .connect('mongodb://localhost/express-project-db')
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

// handelbars 
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// point to public directory
app.use(express.static('public'));


// create routes for pages
app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/contact', (req, res, next) => {
    res.render('contact');
});

app.get('/products', (req, res, next) => {

    let filter;
    const max = req.query.maxPrice;
    
    if(max === undefined){
        filter = {};
    } else {
        filter = {price: {$lte: max} };
    }
    Product.find(filter)
    .then(productsArr => {
        res.render('productList', {products: productsArr});
    })
    .catch(
        error => {
            console.log("error: ", error);
        });
});

// create route parameters for products
app.get("/products/:productId", (req, res, next) => {
    Product.findById(req.params.productId)
        .then(
            productDetails => {
                res.render("product", productDetails);
            })
        .catch(
            error => {
                console.log("error: ", error);
            })
});


app.listen(3000, () => {
    console.log('server running on port: 3000');
})
