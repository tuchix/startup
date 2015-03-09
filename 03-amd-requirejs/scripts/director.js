define(['jquery'],function($){
	function Director(name){
		this.name=name;
		this.quotes=[];
	}
	Director.prototype={
		constructor: Director,
		addQuote: function(text){
			this.quotes.push(text);
		},

		speak: function(){
			var text=this.name+" says: ";
			$.each(this.quotes,function(index, value){
				text += value;
			});
			console.log(text);
			$('#quotes').text(text);
		}
	};
	return Director;
});