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

/*event is an object and we can use it to get the exact x and y parameter of the mouse. The mouse position will be on properties clientx and clienty*/

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

/*get element by class name returns an "array like object", so we have to loop through the array and get a refrence to each paragraph object*/
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

/*removing parent element (Atually, the headings parent is the document body. This says whatever your parent is tell it to remove you)*/
var heading = document.querySelectorAll('h1')[2];
heading.parentElement.removeChild(heading);
/*the return child method will return the element that was removed, here it is stored in the 'heading' variable and can be put back in wherever we want*/
document.body.appendChild(heading);







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
