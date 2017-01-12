
var listTemplate = document.getElementById('list_template').innerHTML;
var detailsTemplate = document.getElementById('details_template').innerHTML;
var searchText = document.getElementById('search_text');
var listDiv = document.getElementById('list');
var detailsDiv = document.getElementById('details');
var searchBtn = document.getElementById('search_button');



searchBtn.addEventListener("click", function() {
  var title = searchText.value;
  $.get("http://omdbapi.com/?s=" + title, null, null, "json")
    .done(onSearchResult)
    .fail(onSearchFail);
});

  function onSearchResult(data) {
    var html = Mustache.render(listTemplate, data);
    listDiv.innerHTML = html;

    var items = listDiv.getElementsByTagName('a');
      for(var i = 0; i < items.length; i++) {
        var item = items[i];
        item.addEventListener("click", getDetails);
      }

  }

  function onSearchFail() {
    alert("There was a problem contacting the server. Please try again");
  }

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
