
/*
 * GET Golden path manifesto
 */

exports.index = function(req, res){
  res.render('golden_path', { title: 'The Golden Path' });
};

exports.manifesto = function(req, res){
  res.render('golden_path_manifesto', { title: 'The Golden Path' });
};

exports.revisited = function(req, res){
  res.render('golden_path_revisited', { title: 'The Golden Path' });
};

