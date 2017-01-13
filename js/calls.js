/*this method accepts various paramaters,
 but at minimum we want to give it a url to the service
 and a function to call when we get a response from the service*/

/*paramaters in the call:
1)location
2)what units you want temp in (F, MPH)
3)API key*/
$.get("http://api.openweathermap.org/data/2.5/weather?q=Seattle,wa&units=imperial&APPID=16732e97d93106e7ace6ee659fc0d3bd", function(data) {
  console.log(data);
});

/*above we pass a function as one of the paramters to the jQuery 'get'
call. This is one way to handle a call but it doesn't inform us of a failure.

When you call the jQuery 'get' method it returns an object.
It is a special request object that contains various properties and methods.
*/

/*we alter our call so that we save the request object
and remove success handling function*/
var request = $.get("http://api.openweathermap.org/data/2.5/weather?q=Seattle,wa&units=imperial&APPID=16732e97d93106e7ace6ee659fc0d3bd");

/*the request object contains a method called done
you can call this method by passing it a function
and that function will be called when the request succesfully returns*/
request.done(function(data) {
  console.log(data);
});

/*the request object also has a fail method
you pass it a function, and if the request fails for whatever reason
that function gets called*/
request.fail(function() {
  alert("Request failed. Try Again.");
})

/*there is a shortcut for all of this called method chaining
the original jquery 'get' returns the request object,
so we can call 'done' directly on that function call
(the get request returns an object, so we can treat it like one)*/
$.get("http://api.openweathermap.org/data/2.5/weather?q=Seattle,wa&units=imperial&APPID=16732e97d93106e7ace6ee659fc0d3bd")
  .done(function(data) {
    console.log(data);
  })
  /*calling done on the request returns the request object again,
  so we can keep chaining*/
  .fail(function() {
    alert("Request failed. Try Again.");
  });

/*omdb api search*/



$.get("http://omdbapi.com/?s=star wars", null, null, "json")
  .done(function(data) {
    console.log(data);
  })
  .fail(function() {
    alert("Request failed. Try Again.");
  });

/*This request returns a JSON string, meaning that for whatever reason,
jQuery did not detect this was JSON, so it didn't convert it to an object for us
We can correct this by explicitly specifying the data type
a get request takes 4 paramaters
1)the url
2)any data you want to send to the server with the request
3)the success handler function
4)the data type
here we will assign the data and success paramaters to null*/
