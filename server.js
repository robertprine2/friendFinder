// npm packages

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// expess variable and port variable

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));

// listens for different routes defined in api-routes.js and html-routes.js

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});