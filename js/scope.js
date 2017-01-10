
/*this variable is in the global scope, polluting the global namespace*/
var message = "Welcome to my site!";

window.addEventListener("load", function() {
    /*if you move it to here, it is in the local scope of this function,
     and no longer a liability*/
    var header = document.getElementById("header");
    header.textContent = message;
});

/* if you put your script tags at the bottom of your html file...*/
/*and wrap this code in a function...*/

function init() {
  var message = "The second thing I say!";
  var header = document.getElementById("header");
  header.textContent = message

}

init();

/*all the code inside the function is in the local scope,
 but the init function is back in the global scope
 We need to make it an anonymous function so it is not in the global scope
 so, in order to call it it needs to be an iife*/

 (function() {
   var message = "This one is an IIFE!";
   var header = document.getElementById("header");
   header.textContent = message
})();
