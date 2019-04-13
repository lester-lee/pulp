var keystone = require('keystone');

exports = module.exports = function (req,res){
    let view = new keystone.View(req, res);
    res.status(404);
    view.render('error404');
}