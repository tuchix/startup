app = app || {};

app.views.Movie = Backbone.View.extend({
	tagName: 'li',
	
	attributes: function() {
	},
	
	events: {
		'click .list-header': 'showDetails'
	},
	
	template: _.template($('#movie-template').html()),
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	
	showDetails: function(e) {
		$(e.target).toggleClass('active');
		$(e.target).siblings('.details').slideToggle('fast');
	}

	
});

app.views.Movies = Backbone.View.extend({

	el: '#wrapper',
	
	initialize: function(data) {
		this.collection = new app.collections.Movies(data);
		this.render();
		
		this.collection.on('reset', this.render, this);
	},
	
	render: function() {
		var self = this;
		$('#listing').empty();
		_.each(this.collection.models, function(movie) {
			self.renderMovie(movie);
		}, this);
	},
	
	renderMovie: function(movie) {
		var newmovie = new app.views.Movie({
			model: movie
		});
		$('#listing').append(newmovie.render().el);
	},
	events: {
		'click #crear': 'crearPeli'
	},
	crearPeli: function(){
		app.models.Movie.create({
			"title": $('#inputTitulo').val(),
			"director": $('#inputDirector').val(),
			"genre": $('#inputGenero').val()
		});
	},
	
});