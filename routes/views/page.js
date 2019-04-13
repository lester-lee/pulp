var keystone = require('keystone');
var Page = keystone.list('Page');

exports = module.exports = function (req, res) {
  let view = new keystone.View(req, res);

  // Init locals
  var locals = res.locals;
  locals.filters = {
    page: req.params.page,
  };

  // Find page
  let q = Page.model.findOne({
    url: locals.filters.page,
  });
  q.exec(function (err, result) {
    if (!result) {
      res.status(404);
      view.render('error404');
    } else {
      locals.page = result;
      locals.title = result.title;
      view.render('page');
    }
  });
};