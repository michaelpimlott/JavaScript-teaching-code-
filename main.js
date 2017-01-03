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

/*events*/

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
