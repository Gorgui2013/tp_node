module.exports = (app) => {
	const Ctrl = require('./products.controller');

	app.route('/products')
		.get(Ctrl.findAll)
		.post(Ctrl.insertOne);

	app.route('/products/:id')
		.put(Ctrl.updateOne)
		.get(Ctrl.findOne)
		.get(Ctrl.deleteOne);
};