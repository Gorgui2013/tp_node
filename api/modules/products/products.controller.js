// list products
const products = [];

// 
module.exports.findAll = (req, res) => {
	res.json(products);
}

// 
module.exports.insertOne = (req, res) => {
	products.push(req.body);
	res.json(req.body);
}

// 
module.exports.findOne = (req, res) => {
	const id = req.params.id;
	const product = products.find(elt => elt.id == id)
	res.json(product);
}

// 
module.exports.updateOne = (req, res) => {
	const id = req.params.id;
    const index = products.findIndex((elt) => elt.id == id);
	products[index] = {...products[index], ...req.body};
	res.json(products[index]);
}

// 
module.exports.deleteOne = (req, res) => {
    const index = products.findIndex((elt) => elt.id == id);
    products.splice(index, 1);
    res.json({status: true});
}
