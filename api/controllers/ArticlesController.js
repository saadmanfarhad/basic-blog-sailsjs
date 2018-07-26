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
  }
};
