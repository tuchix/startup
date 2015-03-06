requirejs.config({
	baseUrl:"scripts/",
	paths:{
		jquery: "jquery-1.11.2",
		movie: "movie",
		director: "director"
	}
});

// Start the main app logic.
requirejs(['jquery', 'movie', 'director'], function ($, movie, director) {

  $(document).ready(function(){
    var terminator = new movie();
    terminator.set("title", "Terminator");
    terminator.addActor("Terminator");

    var jamesCameron = new director('James Cameron');
    terminator.set("director", jamesCameron);

    jamesCameron.addQuote('The snake kills by squeezing very slowly.');
    jamesCameron.addQuote('I love short trips to New York; to me it is the finest three-day town on earth.');

    terminator.get('director').speak();
  });

});