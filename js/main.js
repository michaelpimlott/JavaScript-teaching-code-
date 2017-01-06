/*variables*/

var message;
var items = ["hammer",
            "screwdriver",
            "nails",
            "axe",
            "wrench",
            "pick",
            "gloves",
            "knife",
            "pliers",
            "tape"];

var tools = [
  {
    name: "hammer",
    cost: 9.99,
    id: 101,
    img: "hammer.jpg"
  },
  {
    name: "screwdriver",
    cost: 10.99,
    id: 102,
    img: "screwdriver.jpg"
  },
  {
    name: "nails",
    cost: 1.99,
    id: 103,
    img: "nails.jpg"
  },
  {
    name: "axe",
    cost: 14.99,
    id: 104,
    img: "axe.jpg"
  },
  {
    name: "wrench",
    cost: 7.99,
    id: 105,
    img: "wrench.jpg"
  },
  {
    name: "pick",
    cost: 19.99,
    id: 106,
    img: "pick.jpg"
  }

];

var messanger = {};

var workout = {
    chest: "pushup",
    booty: "squat",
    arms: "curl",

    /*using the keyword this to access methods of the workout object*/

     workoutPrompt: function() {
      console.log(this.chest + " " + this.booty);
    }
};


/*--------------------------------*/
/* add items to end of items array*/
items.push("paintbrush", "ladder");
/*sort items a-z. check documentation for other sort options*/
items.sort();


/*changing variable values*/
message = "hello, world!";

console.log(message);

message = "I fucked up";

console.log(message);

/*-----------------------------*/

/*random number function*/

function randomInt(max) {
  var rand = Math.random() * max;
  rand = Math.round(rand);
  return rand;
}

console.log(randomInt(100));

/*-----------------------------*/

/*array for loop for items*/

function listItems() {
for(var i=0; i<items.length; i++){
  console.log(items[i]);
}
};

/*---------------------------------*/

/*object for loop for tools*/

function listTools() {
  for(var i=0; i<tools.length; i++){
    console.log(tools[i].name + " is $ " + tools[i].cost);
  }
};
/*---------------------------------*/

/*declaring object method for empty object messanger*/

messanger.sayBurrito = function() {
  console.log('Burrito!');

};

/*---------------------------------*/


/*events---------------------------------------------------------------------*/

/*add event listner to document element*/

document.addEventListener("mousedown", function(event) {
  console.log("Mouse Down!");
});

/*event is an object and we can use it to get the exact x and y parameter of the mouse.
 The mouse position will be on properties clientx and clienty*/

document.addEventListener("mousedown", function(event) {
  console.log("Blackhawk Down! x: " + event.clientX + ", y: " + event.clientY);
});

/*appending the key code property of the event object*/

document.addEventListener("keydown", function(event) {
  console.log("key down: " + event.keyCode);
});

/*using String method fromCharCode to convert keyCode # into the charachter it represents*/

document.addEventListener("keydown", function(event) {
  console.log("actual key down: " + String.fromCharCode(event.keyCode));
});



/*DOM manipulation-------------------------------------------------------------*/

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  alert("Please Don't touch me.");
});

/*get element by class name returns an "array like object",
 so we have to loop through the array and get a refrence to each paragraph object*/
/*each element in the list will be refrenced as elems[i]*/

var elms = document.getElementsByClassName("first_paragraph");

for(var i=0; i<elms.length; i++){
  elms[i].style.backgroundColor= "yellow";
}

var li = document.getElementsByTagName("li");

for(var i=0; i<li.length; i += 2){
  li[i].style.backgroundColor= "Goldenrod";
}

var ext = document.querySelector('p span.exciting');
  ext.style.fontWeight= "bold";

/*replace text in first list item. querySelectorAll('li')[1]; item.textContent would also work */

var item = document.querySelector('li');
item.textContent="New number one";


/*this code creates new list items but will also git rid of the original text

var list = document.querySelector('ul');
list.innerHTML = "<li>New list item</li><li>And another</li>";

*/

/*styling elements*/

var firstHeading = document.querySelector("h1");
firstHeading.style.fontFamily = "Arial";
firstHeading.style.fontSize = "48px";
firstHeading.style.color = "Goldenrod";
firstHeading.style.textAlign = "center";

/*positioning elements*/

var block = document.getElementById('block');
block.style.width = "100px";
block.style.height = "100px";
block.style.backgroundColor = "yellow";

/*block moves to the position of the mouse click*/
// block.style.position = "absolute";
// document.addEventListener("click", function(event) {
//   block.style.left = event.clientX + "px";
//   block.style.top = event.clientY + "px";
// });

/*first application! Running Calculator---------------------------------------*/
var distanceInput = document.getElementById('distance');
var hoursInput = document.getElementById('hours');
var minutesInput = document.getElementById('minutes');
var secondsInput = document.getElementById('seconds');
var calculateBtn = document.getElementById('calculate_btn');
var paceText = document.getElementById('pace');

calculateBtn.addEventListener("click", function(event) {
  var miles = parseFloat(distanceInput.value);
  var hours = parseFloat(hoursInput.value);
  var minutes = parseFloat(minutesInput.value);
  var seconds = parseFloat(secondsInput.value);

  function validateInput(value, input) {
    if(isNaN(value)) {
      input.style.borderColor = "red";
      return;
    }
    else {
        input.style.borderColor = "initial";
    }
  };

  validateInput(miles, distanceInput);
  validateInput(hours, hoursInput);
  validateInput(minutes, minutesInput);
  validateInput(seconds, secondsInput);


  var totalMinutes = hours * 60 + minutes + seconds / 60;
  var pace = totalMinutes / miles;
  var paceMinutes = Math.floor(pace);
  var paceSeconds = Math.round((pace - paceMinutes) * 60);

  if(paceSeconds < 10){
    paceSeconds = "0" + paceSeconds;
  }

  paceText.textContent = "You need to run " + paceMinutes + ":" + paceSeconds + " minutes per mile, bro.";
})

/*creating elements-------------------------------------------------*/

/*select parent element*/
var lists = document.querySelector('ul');
/*create empty element*/
var listItem = document.createElement('li');
/*give empty element text content*/
listItem.textContent = "item 7";
/*append new element to ul */
lists.appendChild(listItem);

/*inserting an element between two others*/

/*create new list item*/
var newItem = document.createElement('li');
/*set new item text content*/
newItem.textContent = "item 2.5";
/*select all list items from parent ul*/
var allItems = lists.getElementsByTagName('li');
/*set the reference item, the item the element is to be inserted before*/
var refItem = allItems[2];
/*insert the new item before the refrence item*/
lists.insertBefore(newItem, refItem);

/*removing an element-----------------------------------------------*/

/*removing child element*/
var thisItem = document.querySelectorAll('li')[7];
lists.removeChild(thisItem);

/*removing parent element (Atually, the headings parent is the document body.
 This says whatever your parent is tell it to remove you)*/
var heading = document.querySelectorAll('h1')[2];
heading.parentElement.removeChild(heading);
/*the return child method will return the element that was removed,
 here it is stored in the 'heading' variable and can be put back in wherever we want*/
document.body.appendChild(heading); /*p.appendChild(heading);*/


/*accessing child elements*/

/*accesing all of a parent elements children*/
console.log(lists.children);
/*first and last elements*/
console.log(lists.firstElementChild);
console.log(lists.lastElementChild);
/*accesing a specific child, then the one before or after*/
var middleItem = lists.children[3];
console.log(middleItem.nextElementSibling);
console.log(middleItem.previousElementSibling);

/*Document Fragments--------------------------------------------------------*/

var standings = [
  {
    name: "Chicago Bulls",
    wins: 20,
    losses: 10,
    ties: 0
  },
  {
    name: "Detroit Pistons",
    wins: 22,
    losses: 7,
    ties: 1
  },
  {
    name: "Houston Rockets",
    wins: 0,
    losses: 30,
    ties: 0
  },
  {
    name: "Portland Trailblazers",
    wins: 30,
    losses: 0,
    ties: 0
  },
  {
    name: "Miami Heat",
    wins: 6,
    losses: 22,
    ties: 2
  },
  {
    name: "Atlanta Hawks",
    wins: 16,
    losses: 12,
    ties: 2
  },
  {
    name: "Boston Celtics",
    wins: 26,
    losses: 3,
    ties: 1
  }
];
/*loop through the array and get a refrence to each object in it*/
// for(var i = 0; i < standings.length; i++) {
//   /*call that object team*/
//   var team = standings[i];
//   /*each object has four properties. We can use the data in those properties to create and populate HTML elements*/
//   var thisHeading = document.createElement('h2');
//   document.body.appendChild(thisHeading);
//   thisHeading.textContent = team.name;
//
//   var wins = document.createElement('p');
//   document.body.appendChild(wins);
//   wins.textContent = "Wins: " + team.wins;
//
//   var losses = document.createElement('p');
//   document.body.appendChild(losses);
//   losses.textContent = "Losses: " + team.losses;
//
//   var ties = document.createElement('p');
//   document.body.appendChild(ties);
//   ties.textContent = "Ties: " + team.ties;
//
//   /*the above causes 32 page reflows. If we use a Document Fragment we can use only 1 reflow.*/
//
// };

/*instead of adding the elements to the document body, add them to the fragment instead*/
var fragment = new DocumentFragment();

for(var i = 0; i < standings.length; i++) {
  var team = standings[i];

  var thisHeading = document.createElement('h2');
  fragment.appendChild(thisHeading);
  thisHeading.textContent = team.name;

  var wins = document.createElement('p');
  fragment.appendChild(wins);
  wins.textContent = "Wins: " + team.wins;

  var losses = document.createElement('p');
  fragment.appendChild(losses);
  losses.textContent = "Losses: " + team.losses;

  var ties = document.createElement('p');
  fragment.appendChild(ties);
  ties.textContent = "Ties: " + team.ties;

}
/*When the fagment is fully populated add it to the document body*/
document.body.appendChild(fragment);

/*HTML templates--------------------------------------------------------------*/
/*Using the Mustache JS templating library*/

/*Create a template*/
var template = "<h2>Hello, {{firstName}} {{lastName}}!</h2>";
/* We need a data source. Make an object with a property called name*/
var data = {
  firstName: "Marcus",
  lastName: "Honeychild"
};
/*Put the template together with the data by calling the Mustache.render method
 which gets passed the template and the data*/
var html = Mustache.render(template, data);
/*The 'html' variable we get back is a string containing the template
with any tags replaced by actual values from the data*/
/*There are a few ways to add this string to the document.
 Here we create a div and set it's inner HTMl to the 'html' string*/
var div = document.createElement('div');
div.innerHTML = html;
document.body.appendChild(div);

/*Trick for writing template like you would normal HTML.*/
/*1)Put the template html inside a script tag on the page.
 It can be put in the head tag because it won't do anything when it loads.
<script id="thisTemplate" type="x-tmpl-mustache">
  <h1>Hello, {{name}}!</h1>
</script>
2)Access script tag by using getElementById
var thisTemplate = document.getElementById('thisTemplate').innerHTML;*/

/*the javascript*/
// var thisTemplate = document.getElementById("thisTemplate").innerHTML;
// var thisData = {
//   name: "Smitty"
// };
// var thisHtml = Mustache.render(thisTemplate, thisData);
// var thisDiv = document.createElement('div');
// thisDiv.innerHTML = thisHtml;
// document.body.appendChild(thisDiv);

/*Profile Builder project-----------------------------------------------------*/






/*calling functions*/
listItems();
listTools();
messanger.sayBurrito();
/*calling inner function from workout object*/
workout.workoutPrompt();
/*change properties on workout object*/
workout.chest="bench press";
workout.booty="lunge";
/*call function again*/
workout.workoutPrompt();
