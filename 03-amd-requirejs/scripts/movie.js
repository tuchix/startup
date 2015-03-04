define(['main','jquery'],function(main){
	var peli=new Movie();
	var actors=new Array();

function Movie(){
	this.attributes = {
    	title : "Batman",
    	director : "Tim Burton",
    	actors : ["Michael Keaton", "Jack Nicholson", "Kim Basinger"]
	}
}

Movie.prototype.set=function(attr , value){
    this.attributes[attr] = value;
    return this.attributes["title"]+"/"+this.attributes["director"];
}

Movie.prototype.get=function(){
    console.log(this.attributes["title"]+" by "+this.attributes["director"]);
    return this.attributes["title"]+"/"+this.attributes["director"];
}

Movie.prototype.play=function(){
    console.log ("The movie "+this.attributes["title"]+" is now playing.");
}

Movie.prototype.stop=function(){
    console.log ("The movie "+this.attributes["title"]+" has stopped.");
}

Movie.prototype.actors=function(){
    console.log ("The main actors in "+this.attributes["title"]+" are "+this.attributes["actors"]);
}
peli.play();
peli.stop();
peli.actors();
require(['director']);
});
