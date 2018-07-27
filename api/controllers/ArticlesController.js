/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: function (req, res) {
    Articles.find({}).exec(function (err, articles) {
      if(!err){
        res.view('pages/list', {articles: articles});
      }
      else{
        res.status(500).send(err);
      }
    })
  },

  add:function (req, res) {
    res.view('pages/add');
  },

  create: function (req, res) {
    var title = req.body.title;
    var body = req.body.body;

    Articles.create({
      title: title,
      body: body
    }).exec(function (err) {
      if(!err){
        res.redirect('/articles/list');
      }
      else{
        res.status(500).send(err);
      }
    });
  },

  delete: function (req, res) {
    Articles.destroy({
      id: req.params.id
    }).exec(function (err) {
      if(!err){
        res.redirect('/articles/list');
      }
      else{
        res.status(500).send(err);
      }
    })

    return false;
  },

  edit: function (req, res) {
    Articles.findOne({
      id: req.params.id
    }).exec(function (err, article) {
      if(!err){
        res.view('pages/edit', {article: article});
      }
      else{
        res.status(500).send(err);
      }
    })
  }
};
