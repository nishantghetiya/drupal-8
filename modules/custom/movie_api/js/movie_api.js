jQuery(document).ready(function($) {
  // Code that uses jQuery's $ can follow here.
  jQuery('#edit-movie-details').click(function(e){
  var getUrl = window.location;
  var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
  var title = jQuery('#edit-title-0-value').val();
    e.preventDefault();
    if(title == ''){
      alert("please add Title");
    } else {
      jQuery.ajax({
              type: "POST", //rest Type
              dataType: 'json', //mispelled
              url: "http://www.omdbapi.com/?apikey=b07ecfb1&t="+title,
              async: false,
              success: function (res) {
                  var year = res.Year;
                  var released = res.Released;
                  var genre = res.Genre;
                  var rating = res.Ratings[0].Value;
                  var poster = res.Poster;
                  var production = res.Production;
                  var actors = res.Actors;
                  var country = res.Country;
                  var language = res.Language;
                  jQuery("#edit-field-year-0-value").val(year);
                  jQuery("#edit-field-released-0-value").val(released);
                  jQuery("#edit-field-genre-0-value").val(genre);
                  jQuery("#edit-field-rating-0-value").val(rating);
                  jQuery("#edit-field-poster-0-value").val(poster);
                  jQuery("#edit-field-production-0-value").val(production);
                  jQuery("#edit-field-actors-0-value").val(actors);
                  jQuery("#edit-field-country-0-value").val(country);
                  jQuery("#edit-field-language-0-value").val(language);
              }
      });
    }
  });
});