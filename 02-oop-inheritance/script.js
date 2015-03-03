		var peli=new Movie();
		var actors=new Array();

function Movie(){
	this.attributes = {
    	title : "Batman",
    	director : "Tim Burton",
    	friend : "Roberto Lucas",
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
/*-----Modulo------*/

movieModule=(function(){
		function Movie(){
			this.attributes = {
    		title : "Batman",
    		director : "Tim Burton",
    		actors : ["Michael Keaton", "Jack Nicholson", "Kim Basinger"]
		}
	}

	Movie.prototype.set=function(attr , value){
  	 	this.attributes[attr] = value;
	}

	Movie.prototype.get=function(){
    	console.log(this.attributes["title"]);
    	return this.attributes["title"];
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
}());/*----------------Fin Modulo-------------*/

/*---------Mixin - social--------------*/
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

function Social(){
}
Social.prototype.share=function(){
	console.log("You are now sharing "+this.attributes["title"]+" with "+this.attributes["friend"])
}
Social.prototype.like=function(){
	console.log("You like "+this.attributes["title"])
}
extend(Movie.prototype, Social.prototype);

/*---------Download------------------*/
function DownloableMovie(){

}
DownloableMovie.prototype.download=function(){
	console.log("You are downloading "+this.attributes["title"])
}
extend(Movie.prototype, DownloableMovie.prototype);


/*---------Observer--------------------*/
/*function ObserverList(){
  this.observerList = [];
}

ObserverList.prototype.Add = function( obj ){
  return this.observerList.push( obj );
 };*/


 		peli.get();
		peli.play();
		peli.stop();
		peli.share();
		peli.like();
		peli.download();
		peli.actors();