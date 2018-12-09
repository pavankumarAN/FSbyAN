var database = [
    {
        username : "Pavan",
        password : "pavan@123"
    },
    {
        username : "Rashmi",
        password : "rashmi@123"
    },
    {
        username : "Shivu",
        password : "shivu@123"
    },
    {
        username : "Samrat",
        password : "sammy@123"
    }
];
var newsFeed = [
    {
        username : "Rashmi",
        timeline : "Good Morning"
    },
    {
        username : "Shivu",
        timeline : "I\'m a Test engineer"
    },
    {
        username : "Samrat",
        timeline : "I\'m a Test engineer"
    },
    {
        username : "Pavan",
        timeline : "Software Developer"
    }
];
function validUser(user,pass) {
    for(let i=0; i<database.length; i++) {
        
        
        if(database[i].username===user && database[i].password===pass) {
        return true;
        }

    }
} 

function signIn(user,pass) {
if(validUser(user,pass)) {
    console.log(newsFeed);
}
else {
    alert("Invalid credentials");
    return false;
}
/* if(user===database[0].username && pass === database[0].password) {
    console.log(newsFeed);
}
else {
    console.log(`Invalid credentials`);
    return false;
} */
}

var userPromt = prompt("Enter your username");
var userPass = prompt("Enter your password");
signIn(userPromt,userPass);