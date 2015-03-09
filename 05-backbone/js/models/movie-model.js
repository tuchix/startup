app = app || {};

app.models.Movie = Backbone.Model.extend({
	defaults: {
		'ID': '',
		'title': '',
		'director': '',
		'genre': ''
	},
	
});

app.collections.Movies = Backbone.Collection.extend({
	
	model: app.models.Movie,
	url: ''
	
});
app.models.Movie=new app.collections.Movies;