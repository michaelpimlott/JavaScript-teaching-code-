/*we start by defining some variables and grabbing some of the HTML elements
and the Mustache templates we need to work with*/

/*1)we get the two templates by using getElementById and innerHTML*/
var listTemplate = document.getElementById('list_template').innerHTML;
var detailsTemplate = document.getElementById('details_template').innerHTML;
/*2)then the search imput field*/
var searchText = document.getElementById('search_text');
/*the empty 'list' and 'details' div*/
var listDiv = document.getElementById('list');
var detailsDiv = document.getElementById('details');
/*and the search button*/
var searchBtn = document.getElementById('search_button');

/*3)the user will enter some text and click on the search button
so we will have to add a click event listner to the search button*/

searchBtn.addEventListener("click", function() {
  /*we will first get the search term the user entered,
  this will be the value property of the search text element*/
  var title = searchText.value;
  /*We then make our first server call using jQuery get
  we concat the title and add null, null and JSON
  so that jQuery knows to deserialize the JSON string back into an object*/
  $.get("http://omdbapi.com/?s=" + title, null, null, "json")
    .done(onSearchResult)
    .fail(onSearchFail);
});

function onSearchResult(data) {
  /*this should return an object that has an array called Search*/
  var html = Mustache.render(listTemplate, data);
  listDiv.innerHTML = html;

  /*4)We need to add a click event listener for each of the list items
  we just created in the template */

  var items = listDiv.getElementsByTagName('a');
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    /*each element also has an ID, the imdb ID of the movie
    we can loop through the array of results and
    add a click event listener to each item*/
    item.addEventListener("click", getDetails);
    /*we will use a seperate named function (getDetails) for clarity sake*/
  }

}

function onSearchFail() {
  alert("There was a problem contacting the server. Please try again");
}

/*this function will get an event object as a paramater
1 useful property for click events is target
this gives you the actual element that was clicked
so event.target.id will contain the imdb Id*/
function getDetails(event) {
  var id = event.target.id;
  $.get("http://omdbapi.com/?plot=full&i=" + id, null, null, "json")
    .done(onDetailsResult)
    .fail(onSearchFail);
}

function onDetailsResult(data) {
  var html = Mustache.render(detailsTemplate, data);
  detailsDiv.innerHTML = html;
}
