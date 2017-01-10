/*first we create an object named subject*/

var subject = {
  /*then we create an array called observers*/
  observers: [],
  /*then a method called registerObserver*/
  registerObserver: function(observer) {
    /*it gets a pramater called observer which we push onto the array*/
    this.observers.push(observer);
  },
  /*next an unregister method*/
  unregisterObserver:function(observer) {
    // this.observers.pop(observer);
  },
  /*notifyObservers method will loup through the observers array*/
  notifyObservers: function() {
    for(var i=0; i < this.observers.length; i++) {
      this.observers[i].notify();
    }
  }
};

/*now we need to deal with the checkboxes to know when to notify the observers
we will add a listner for the change event of each checkbox
and assign a function called on checkbox change*/
document.getElementById("cb1").addEventListener("change", onCheckboxChanged);
document.getElementById("cb2").addEventListener("change", onCheckboxChanged);
document.getElementById("cb3").addEventListener("change", onCheckboxChanged);

/*if all three checkboxes are checked we call notifyObservers*/
function onCheckboxChanged(event) {
    if(document.getElementById("cb1").checked &&
      document.getElementById("cb2").checked &&
      document.getElementById("cb3").checked) {
        subject.notifyObservers();
      }
}

/*now we create an observer
 this is just an object with a notify method*/

 var observer1 = {
   notify: function() {
     /*we find the div thats holding the checkboxes
      and remove it from the document body*/
      var form = document.getElementById("form");
      document.body.removeChild(form);
   }
 };

 subject.registerObserver(observer1);

 var observer2 = {
   notify: function() {
     var h2 = document.createElement('h2');
     h2.textContent = "COMPLETE!";
     document.body.appendChild(h2);
   }
 };

 subject.registerObserver(observer2);

/* for the third server we will create and register at the smae time*/

subject.registerObserver({
  notify: function() {
    alert('You are done!');
  }
})
