var database = [ {username: "Sawan",
               password: "home123"},
               {username: "Andy",
               password: "come54"},
               {username: "Debu",
               password: "Athens7"}
               ];

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

// check for the valid user from database from a new function

function UserIsValid (username, password){    
	for (var i= 0; i< database.length; i++)
	{
     if (username === database[i].username && password === database[i].password)
       {
     	return true;
       }
	}
	return false;
}

function signIn(user, pass) {
if (UserIsValid(user, pass))
  {
	console.log(newsfeed);
  }
else
    {
	  alert("You have entered wrong username and password");
    }
} 


var userNamePrompt= prompt("What is your name?");
var passWordPrompt= prompt("What is your password?");





              

signIn(userNamePrompt, passWordPrompt);