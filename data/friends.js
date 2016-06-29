// friend data stored in objects within an array

var friendArray = [
	{
		name: "Robert",
		photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/10603388_1450105415264991_5165150509822956231_n.jpg?oh=d382086890e6d7a112486db56ca57e99&oe=57EF6F99",
		scores: [3, 5, 5, 2, 4, 5, 4, 1, 4, 5]
	},
	{
		name: "Shaloni",
		photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/10325697_10103158049959412_536299471359768349_n.jpg?oh=6f772c34295dc9cbc419f2c399f1fdf7&oe=57F2FE3F",
		scores: [4, 5, 1, 4, 4, 5, 4, 3, 2, 5]
	},
	{
		name: "Chloe",
		photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/10259891_231490550526103_4960618059370161791_n.jpg?oh=caa3bc83398b239327aac900f45094ac&oe=57F1509F",
		scores: [1, 1, 1, 5, 5, 1, 1, 1, 5, 1]
	}
];

// The friend array is now accessable through require

module.exports = friendArray;