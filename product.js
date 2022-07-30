const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<html><body><h1>Add Product</h1></body></html>' +
        '<form action="/product" method="POST">' +
        '<input type="text" name="title" placeholder="Product title">' +
        '<input type="number" name="price" placeholder="Product price">' +
        '<input type="text" name="description" placeholder="Product description">' +
        '<input type="number" name="stock" placeholder="Product stock">' +
        '<button type="submit">Add Product</button>' +
        '</form>')
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.send(req.body)
});

app.listen(3000)
console.log('Server is now listening on http://localhost:3000/add-product');