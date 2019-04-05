var keystone = require('keystone');
var engine = require('express-handlebars');

keystone.init({
	'cookie secret': 'secure string goes here',
	'name': 'pulp',
	'user model': 'User',
	'static': 'public',
	'auto update': true,
	'auth': true,
	'views': 'views',
	'custom engine': engine({
		layoutsDir: 'views/layouts',
		defaultLayout: 'main',
	}),
	'view engine': 'handlebars',
});

keystone.import('models');

keystone.set('routes', require('./routes'));

keystone.start();