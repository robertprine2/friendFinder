// function to get data from friends.js

function runFriendQuery(){

	// click event to collect data and put it in an object

	$('#submit').on('click', function() {

		var friendObj = {

			name: $("#name").val(),

			photo: $("#picture").val(),

			scores: []

		};

		for (i=1; i < 11; i++) {

			for (j=1; j < 6; j++) {

				if ($("#optionsRadios" + i + "-" + j).is(":checked")) {

					friendObj.scores.push($("#optionsRadios" + i + "-" + j).val());

				} // end of if radio is checked

			} // end of for loop j

		} // end of for loop i

		console.log(friendObj);

		// Here we get the location of the root page. 
	
		var currentURL = window.location.origin;

		// The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
		$.ajax({url: currentURL + "/api", method: "GET"}).done(function(friends) {

			// Loop through and display each of the customers 
			for (var i=0; i<friends.length; i++){

				// logic for determining match

				//for (var i= 0; i < friends[i].scores.length; i++)

				// Show your match
				
				//not needed just here for remembering
				// var tableSection = $("<div>");
				// tableSection.addClass('well');
				// tableSection.attr('id', friends[i].id)
				// $('#tableSection').append(tableSection);

				
			} // end of for loop going through friends array
		}); // end of ajax call

	}); // end of on click

}; // end of runFriendQuery function

// Run Queries!
runFriendQuery();