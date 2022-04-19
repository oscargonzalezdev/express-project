console.log('hello, wordl!');

const express = require('express');
const { path } = require('express/lib/application');
const app = express();

app.use(express.static('public'));

app.get('/home', (req, res, next)=>{
    res.sendFile(__dirname+'/views/index.html');
} );

app.get('/about', (req, res, next)=>{
    res.sendFile(__dirname+'/views/about.html');
} );

app.get('/contact', (req, res, next)=>{
    res.sendFile(__dirname+'/views/contact.html');
} );

app.listen(3000, () => {
    console.log('server listening to request...');
})
