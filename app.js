console.log('hello, wordl!');

const express = require('express');
const { path } = require('express/lib/application');
const app = express();

// handelbars 
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// routes
app.get('/', (req, res, next)=>{
    // res.sendFile(__dirname+'/views/index.html');
    res.render('index');
} );

app.get('/about', (req, res, next)=>{
    // res.sendFile(__dirname+'/views/about.html');
    res.render('about');
} );

app.get('/contact', (req, res, next)=>{
    // res.sendFile(__dirname+'/views/contact.html');
    res.render('contact');
} );

// products


app.get("/bike1", (req, res, next) => {

    const data = {
        title: "Bike1",
        price: 700,
        imageFile: "bike1.jpeg",
        stores: ["Online", "Albacete", "Freiburg", "Amsterdam"]
    }

    res.render("product", data);
});

app.get("/bike2", (req, res, next) => {

    const data = {
        title: "Bike2",
        price: 900,
        imageFile: "bike2.jpeg"
    }

    res.render("product", data);
});

app.get("/bike3", (req, res, next) => {

    const data = {
        title: "Bike3",
        price: 1300,
        imageFile: "bike3.jpeg"
    }

    res.render("product", data);
});




app.listen(3000, () => {
    console.log('server listening to request...');
})
