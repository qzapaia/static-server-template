var express = require('express');
var app = express();
var path = require('path');

app.set('port',process.env.PORT || 9889);
app.use(express.static(path.resolve(__dirname,'public')));

app.use(function(req, res, next){
  if(fs.existsSync(__dirname + '/public' + req._parsedUrl.pathname + '.html')){
    res.redirect(301, req._parsedUrl.pathname + '.html' + (req._parsedUrl.search || ''));
  }else{
    next();
  }
});

app.listen(app.get('port'),function(){
  console.log('running on http://localhost:'+app.get('port'))
});
