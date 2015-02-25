exports.index = function(req, res){
  res.render('articles', { title: 'Articles' });
};
exports.year11 = function(req, res){
  res.render('year11', { title: 'Articles: 2011' });
};
exports.year12 = function(req, res){
  res.render('year12', { title: 'Articles: 2012' });
};
exports.year13 = function(req, res){
  res.render('year13', { title: 'Articles: 2013' });
};
exports.year14 = function(req, res){
  res.render('year14', { title: 'Articles: 2014' });
};
exports.year15 = function(req, res){
  res.render('year15', { title: 'Articles: 2015' });
};
