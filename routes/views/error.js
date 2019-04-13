var keystone = require('keystone');

exports = module.exports = function (req,res){
    let view = new keystone.View(req, res);

    view.render('error404');
}