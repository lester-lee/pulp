var keystone = require('keystone');
var Page = keystone.list('Page');

exports = module.exports = function (req, res){
  let view = new keystone.View(req, res);

  // Init locals
  var locals = res.locals;
  locals.filters = {
    page: req.params.page,
  };

  // Load page
  view.on('init', function(next){
    var q = Page.model.findOne({
      url: locals.filters.page,
    });
    q.exec(function (err, result){
      locals.page = result;
      locals.title = result ? result.title : "404"; // TODO: fix
      next(err);
    });
  });

  view.render('page');
};