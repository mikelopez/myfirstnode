
/*
 * GET home page.
 */

exports.test_index = function(req, res){
  res.render('test_index', { title: 'Test Index - Express' });
};