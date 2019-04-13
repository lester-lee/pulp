var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

keystone.set('404', function(req, res, next){
  res.status(404).render('errors/404');
});

var routes = {
  views: importRoutes('./views'),
};

exports = module.exports = function(app){
  app.get('/', routes.views.index);
  app.get('/:page', routes.views.page);
  app.get('*', routes.views.error);
};