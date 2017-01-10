/* start by creating our three MVC objects. Model, View, and Controller*/
var model = {
  /*the model will be an observable subject, so we''l give it an observers array*/
  observers: [],
  /*we will have an items array
  which will be the data that this array is responsible for*/
  items: [],

  addObserver: function(observer) {
    this.observers.push(observer);
  },

  notifyObservers: function() {
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i].notify();
    }
  },

  /*it also gets an addItem method so the controller can add items to it*/
  addItem: function(item) {
    this.items.push(item);
    this.notifyObservers();
  }



};
/*the view is the object most closely connected to the HTML itself
so we will have properites for the input text, the button,
and the list based on each of those elements ids*/
var view = {
  input: document.getElementById("input"),
  button: document.getElementById("button"),
  list: document.getElementById("list"),

  /*we will need some code that will hook up the button click event
  and add the view as a listener to the model
  init is a common name for functions that get run a single time
   to initialize and set up an object*/

  init: function() {
    /*inside the function we will register the view as an observer of the model,
    then we will listen for a click event of the button
    that handler will call controller.addItem*/
    model.addObserver(this);
    this.button.addEventListener("click", function() {
      controller.addItem();
    });
  },

  /*the view will be an observer of the model so we will need a notify function
  in it we will loop through the models items and create a list item for each one
  as astring we can set as inner HTML*/
  notify: function() {
    var html = "";
    for (var i = 0; i < model.items.length; i++) {
      html += "<li>" + model.items[i] + "</li>"
    }
    this.list.innerHTML = html;
  }

};

/*call view.init to make sure the view gets initialized*/
view.init();




var controller = {
  /*the controller needs to have an add item method
   that will get the value of the views input element and
   use that to call model.addItem
   it will then clear out the input text so it's ready for another item*/
   addItem: function() {
      var item = view.input.value;
      model.addItem(item);
      view.input.value = "";
   }

};
