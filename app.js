const express = require('express');
require('dotenv').config();
// const Files = require('./api/utils/files');
const Files = require('gwalk-lib');

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

// Ajout des route de products
// require('./api/modules/products/products.routes')(app);

// autoloader
var routes = Files.walk(__dirname + '/api/modules');
// console.log(routes);
for(let i = 0; i < routes.length; i++) {
	if(routes[i].indexOf('routes') !== -1){
		// console.log(routes[i]);
		require(routes[i])(app);
	}
}

// demarer le serveur
app.listen(process.env.PORT, () => {
	console.log('Server listen in PORT :', process.env.PORT);
});
