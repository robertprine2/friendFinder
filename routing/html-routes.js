// npm packages

var path = require('path');

// sending routes based on listeners

module.exports = function(app) {

	// if no matching route is found default to home.html

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "..", "public", "home.html"));
	}); // end of home.html route

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
	}); // end of survey.html route
} // end of module.exports function