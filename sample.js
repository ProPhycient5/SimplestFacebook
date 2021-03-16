var database = [ {username: "Sawan",
               password: "home123"}];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt= prompt("What is your name?");
var passWordPrompt= prompt("What is your password?");

function signIn(user, pass) {
if (user === database[0].username && pass === database[0].password){
	console.log(newsfeed);
}
else{
	alert("You have entered wrong username and password");
}
}               

signIn(userNamePrompt, passWordPrompt);