var express = require('express');
var app = express(); //Create the Express app

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/html"));


//app.use(bodyParser.urlencoded( { extended : true}));

app.set('port', 3033);

 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
