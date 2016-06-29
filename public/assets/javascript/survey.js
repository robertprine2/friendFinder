// function to get data from friends.js

function runFriendQuery(){

	// click event to collect data and put it in an object

	$('#submit').on('click', function() {

		var friendObj = {

			name: $("#name").val(),

			photo: $("#picture").val(),

			scores: []

		};

		// for loop to go through each question

		for (i=1; i < 11; i++) {

			// for loop to go through each radio in each question

			for (j=1; j < 6; j++) {

				// if the radio is selected then push the chosen amount to friendObj's score array

				if ($("#optionsRadios" + i + "-" + j).is(":checked")) {

					friendObj.scores.push($("#optionsRadios" + i + "-" + j).val());

				} // end of if radio is checked

			} // end of for loop j

		} // end of for loop i

		// Here we get the location of the root page. 
	
		var currentURL = window.location.origin;

		// The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
		$.ajax({url: currentURL + "/api", method: "GET"}).done(function(friends) {

			// store all the total differences

			var result = [];

			// Loop through and display each of the customers 
			for (var i=0; i<friends.length; i++){

				var diff = 0;

				// loop through each customer's score

				for (var j= 0; j < friends[i].scores.length; j++) {

					// compare each score with the person that just took the survey

					diff += Math.abs(friendObj.scores[j] - friends[i].scores[j]);

				// Show your match
				
				//not needed just here for remembering
				// var tableSection = $("<div>");
				// tableSection.addClass('well');
				// tableSection.attr('id', friends[i].id)
				// $('#tableSection').append(tableSection);

				} // end of loop going through scores

				result.push(diff);

			} // end of for loop going through friends array

			var min = 10000;

			for (i = 0; i < result.length; i++) {

				console.log(result[i]);
  				min = Math.min(min, parseInt(result[i]));
			}
			console.log(min)
			var match;

			for (i = 0; i < result.length; i++) {
				if (min == result[i]) {
					match = i;
					break;
				} // end of if to find the right match
			} // end of for loop through results
			console.log(match);
			$("#result").html("<br><p>" + friends[match].name + "</p><br>");
			$("#result").append('<img src="' + friends[match].photo + '">');

		}); // end of ajax call

	}); // end of on click

}; // end of runFriendQuery function

// Run Queries!
runFriendQuery();