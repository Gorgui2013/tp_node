const express = require('express');
require('dotenv').config();
const Product = require('./products/product');

// init de app
const app = express();

// parser body
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// test
app.get('', (req, res) => {
	console.log('Bonjour le monde !');
	res.end();
});

// get all
app.get('/products', (req, res) => {
	const products = Product.findAll();
	res.send(products);
	res.end();
});

// insert one
app.post('/products', (req, res) => {
	const product = Product.insertOne(req.body)
	res.send(product);
	res.end();
});

// find one
app.get('/products/:id', (req, res) => {
	const product = Product.findOneById(req.params.id);
	res.send(product);
	res.end();
});

// update one
app.put('/products/:id', (req, res) => {
	const product = Product.updateOne(req.params.id, req.body);
	res.send(product);
	res.end();
});

// delete one
app.delete('/products/:id', (req, res) => {
	const result = Product.deleteOne(req.params.id);
	res.send(result);
	res.end();
});



// demarer le serveur
app.listen(process.env.PORT, () => {
	console.log('Server listen in PORT :', process.env.PORT);
});
