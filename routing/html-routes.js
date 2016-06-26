// npm packages

var path = require('path');

// sending routes based on listeners

module.exports = function(app) {

	// allows you to access css html and other relative files

	// app.use(express.static('public'));

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
	}); // end of survey.html route

	// if no matching route is found default to home.html

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "..", "public", "home.html"));
	}); // end of home.html route

}; // end of module.exports function