// require npm packages and data from js files

var friends = require('../data/friends.js');
var path = require('path');

// routing information for the api

module.exports = function(app) {

	// calls the json information from the friends.js data 

	app.get('/api/:friend?', function(req, res) {
		
		var chosen = req.params.friend;

		for (var i = 0; i < friends.length; i++) {

			if (chosen == friends[i].name) {
				res.json(friends[i]);
				return;
			} // end of if chosen is equal to a friend's name

			else {
				res.json(friends);
			}; // end of else chosen is equal to friend's name

		} // end of for loop cycling through friendArray data

		res.json(friends);
		
	}); // end of app.get api optional friend

	// I don't know if I should have the :friend? part in this one

	app.post('/api/:friend?', function(req, res) {
		
		var chosen = req.params.friend;

		friends.push(req.body);

		res.json(true);

	}); // end app.post new information to friends.js

}; // end of module.exports function