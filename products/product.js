// list products
const products = [
	{
		id: 1,
		name: 'Beurre',
		price: 300,
		description: "bla bla Beurre",
	},
	{
		id: 2,
		name: 'Lait',
		price: 300,
		description: "bli bli lait",
	},
	{
		id: 3,
		name: 'Sucre',
		price: 300,
		description: "blo blo sucre",
	}
];

// 
module.exports.findAll = () => {
	return products;
}

// 
module.exports.insertOne = (product) => {
	products.push(product);
	return product;
}

// 
module.exports.findOneById = (id) => {
	return products.find(elt => elt.id == id);
}

// 
module.exports.updateOne = (id, new_product) => {
    const index = products.findIndex((elt) => elt.id == id);
	products[index] = {...products[index], ...new_product};
	return products[index];
}

// 
module.exports.deleteOne = (id) => {
    const index = products.findIndex((elt) => elt.id == id);
    products.splice(index, 1);
    return true;
}
