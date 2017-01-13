/*first we extend backbone.model, giving it a url root of the omdbapi*/
var MovieModel = Backbone.Model.extend({
  urlRoot: "http://omdbapi.com"
});

/*we make three views: one for the search form, one for the search results,
 and one for the movie details*/
 /*the searchview will listen for a click on the search button,
 get the searchterm, and get the search model to get the results*/
 var SearchView = Backbone.View.extend({
   /*we give it a searchtext property that will point to the search text input element*/
   searchText: document.getElementById("search_text"),
   /*assigning the event handler in backbone:
   the object will have a property for each event we want to listen to
  and the function that should be called when that event occurrs
  the property name is a string containing the name of the event plus a space
  plus a css selector that will match the element(or elements) that we want to listen to
  here we want to listen for a click event on the element with an id of search_button,
  when that event happens we will call a function called doSearch */
   events: {
     "click #search_button": "doSearch"
   },

   /*we create the doSearch function. we call searchmodel.fetch
   which tells the model to contact its URL root and request data*/
   doSearch: function() {
     searchModel.fetch({
       /*when we call fetch we can pass in an object with a property called data
       any properties in the data object will be added as query string paramaters
       when the model succesfully fetches its data it will dispatch a change event*/
       data: {
          s: this.searchText.value
       }
     })
   }

 });

 /*next view is the search results view
 1)it needs to listen to search model
 2)when search model changes it needs to render search template using the updated data
 it also needs to listen for clicks on the list items
 and tell the details model to fetch details for the selected movie*/
var ResultsView = Backbone.View.extend({
  template: document.getElementById("list_template").innerHTML,
  /*in the init function we will listen for changes on the model*/
  initialize: function() {
    /*to listen for events on the model:
    (when search model dispatches a change event we run the render method of this view)*/
    this.listenTo(searchModel, "change", this.render);
  },
  /*we need to listen for clicks on the results lists, so we add an event listner*/
  events: {
    "click a": "getDetails"
},
getDetails: function(event) {
  detailsModel.fetch({
    data: {
      i: event.target.id,
      plot:"full"
    }
  })
},
  /*this render method will get the data from the model
   and use it with the template to render the search results*/
   render: function() {
     this.el.innerHTML = Mustache.render(this.template, searchModel.toJSON());
   }
});


/*here we create the details view*/
var DetailsView = Backbone.View.extend({
  template: document.getElementById("details_template").innerHTML,

  initialize: function() {
    this.listenTo(detailsModel, "change", this.render);
  },

  render: function() {
    this.el.innerHTML = Mustache.render(this.template, detailsModel.toJSON());

  }
});


/*then we make two instances of this model
searchModel for making the initial search and getting a list of results,
and detailsModel for getting a paticular models details*/

var searchModel = new MovieModel(),
detailsModel = new MovieModel(),
/*we will connect a different view to each model*/
/*we need to create an instance for the searchview
we set the element of the searchview to the element with the id search(our search form)*/
searchView = new SearchView({ el: document.getElementById("search")}),
resultsView = new ResultsView({ el: document.getElementById("list")}),
detailsView = new DetailsView({ el: document.getElementById("details")});
