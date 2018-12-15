var userInput = document.getElementById("userInput");
var button = document.getElementById("button");
var list = document.querySelector("ul");
//var items = document.getElementsByTagName('li');
/*  button.addEventListener('click', function() {
    if(userInput.value.length>0) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value));
        list.appendChild(li);
        userInput.value = "";
    }
})  

//function to add the items to list when the user clicks enter key by reading the keycode

userInput.addEventListener('keypress', function(event) {
    if(userInput.value.length>0 &&  event.keyCode===13) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value));
        list.appendChild(li);
        userInput.value = "";
    }
}); */


//we can refractor the above code even better

function checkLength() {
    return userInput.value.length;
}

function createListElement() {
    var li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value));
        list.appendChild(li);
        userInput.value = "";
}


function createAfterClick() {
    if(checkLength()>0) {
        createListElement();
    }
}
function createAfterPress(event) {
    if(checkLength()>0 && event.keyCode===13) {
        createListElement();
    }
}

button.addEventListener('click',createAfterClick);
userInput.addEventListener('keypress',createAfterPress);


//My mistakes
//I used function name without invoking i.e - checkLength instead of checkLength()