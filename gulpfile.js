var gulp = require('gulp');
var express = require('express');

gulp.task('serve', function() {
  var app = express();
  app.use('/', express.static('src'));
  app.use('/node_modules', express.static('node_modules'));
  app.listen(8080);
});
