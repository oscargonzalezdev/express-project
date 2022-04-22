console.log('Hello from temp-db.js');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// establish connection with DB
mongoose
    .connect('mongodb://localhost/example-db')
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));


// // create a query
//   Product.create({title: "bike2", price: "1300"})
//   .then(product => console.log("new prodcut created: ", product))
//   .catch(error => console.log("error creating a product in DB", error));

// // get information from the data base
// Product.find({price: {$gte:"700"}})
// .then(productsArr => console.log("this is the content of my DB: ", productsArr))
// .catch(error => console.log("error getting a product from DB", error));

// Product.findById("6261266bd2af988bc4495c48")
// .then(productsArr => console.log("this is the content of my DB: ", productsArr))
// .catch(error => console.log("error getting a product from DB", error));

// methods to update documents

// Product.updateMany({price: "1300"},{store: "paris"})
// .then(productsArr => console.log("products updated successfully: ", productsArr))
// .catch(error => console.log("error updating products from DB", error));

// Product.findByIdAndUpdate("6261266bd2af988bc4495c48",{price: "3000"}, {returnDocument: 'after'})
// .then(productsArr => console.log("products updated successfully: ", productsArr))
// .catch(error => console.log("error updating products from DB", error));

// methods to delete documents
Product.findByIdAndDelete ("6261266bd2af988bc4495c48")
.then(productsArr => console.log("products deleted successfully: ", productsArr))
.catch(error => console.log("error deleting products from DB", error));