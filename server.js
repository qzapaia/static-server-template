var express = require('express');
var app = express();
var path = require('path');

app.set('port',process.env.PORT || 9889);
app.use(express.static(path.resolve(__dirname,'public')));

app.listen(app.get('port'),function(){
  console.log('http://localhost:'+app.get('port'))
});
