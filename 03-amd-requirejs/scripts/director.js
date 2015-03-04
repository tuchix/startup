define(['movie','jquery'],function(movie){
	alert("I´m director working!");

	var director=new Director();
	function Director(){
		this.attributes={
			name:'Tim Burton',
			quotes:["One person's crazyness is another person's reality."],
		}
			this.speak=function(){
				$('#director').text(this.attributes.name);
				$('#quote').text(this.attributes.quotes);
				console.log(this.attributes["name"]+" quote: "+this.attributes["quotes"])
		}
	}
	director.speak();
	return director;
});