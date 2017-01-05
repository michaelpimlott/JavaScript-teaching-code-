/*1)Decide on and create some variables*/

/*The template data*/
var template = document.getElementById("template").innerHTML;
/*The div that holds the form*/
var form = document.getElementById("form");
/*The empty div where we will put the preview*/
var preview = document.getElementById("preview");
/*The preview button*/
var previewBtn = document.getElementById("previewBtn");

/*call autofill function*/
fillForm();

/*2)What actions need to happen?*/
/*When the user clicks the button we need to get all the data form the form
then use mustache to render the template with that data
We will need to access all of the form elements by their ids, and then get the value of each one
so we create a function called getValue to save time
*/

/*call getElementById to get the element with the right id and return its value*/
function getValue(id) {
  return document.getElementById(id).value;
}

/* We Need a way to fill out form programaticly for testing. We need a way to set values for all the elements*/
function setValue(id, value) {
  document.getElementById(id).value = value;
}

function fillForm() {
  setValue("title", "Mr.")
  setValue("firstName", "Marcus")
  setValue("lastName", "Honeychild")
  setValue("address", "1234 Fake St")
  setValue("address2", "Apt 0")
  setValue("city", "Seattle")
  setValue("state", "WA")
  setValue("zip", "98106")
  setValue("email", "retroblaster@nonsense.net")
  setValue("website", "marcus.com")
  setValue("interests", "Marcus, nonsense")
  setValue("experience", "Some stuff. None of your concern, really.")
}
