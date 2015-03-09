define(['jquery'],function($){

function Movie(){
this.attributes = {
    title : "no-title",
    director : "no-director",
    actors : []
	};
}

Movie.prototype.set=function(attr , value){
    this.attributes[attr] = value;
};

Movie.prototype.get=function(attr,value){
    return this.attributes[attr];
};

Movie.prototype.play=function(){
console.log ("The movie "+this.attributes.title+" is now playing.");
};

Movie.prototype.stop=function(){
console.log ("The movie "+this.attributes.title+" has stopped.");
};

Movie.prototype.addActor=function(actor){
this.attributes.actors.push(actor);
};
return Movie;
});
