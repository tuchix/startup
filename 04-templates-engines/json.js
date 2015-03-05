$(document).ready(function(){ 
  var Profile= [
    {
      "Name": "Im Robert and i am 25 years old.",
    },
    {
      "Education": "I studied programming in Ultimatum School of informatics.",
    },
    {
      "Experience": "I worked 15 years in Google as CEO director.",
    },
    {
      "Courses": "Web Design, Android development and videogame development.",
    },
    
  ];

document.getElementById("name").innerHTML =
Profile[0].Name;
document.getElementById("education").innerHTML =
Profile[1].Education;
document.getElementById("experience").innerHTML =
Profile[2].Experience;
document.getElementById("courses").innerHTML =
Profile[3].Courses;
});



//----------------With Handlebars----------------------//
$(document).ready(function(){
var fuente = $('#nuestra-plantilla').html();
var plantilla = Handlebars.compile(fuente);

var datos = {
    Profile: [
        {nombre: 'Im Michael and i am 25 years old.'},
        {education: 'I studied programming in Ultimatum School of informatics.'},
        {experience: 'I worked 15 years in Google as CEO director.'},
        {courses: 'Web Design, Android development and videogame development.'},
    ],
};
var html = plantilla(datos);

$('#container2').html(html);
});
//--------------------------------------------------//



//-----------------With Underscore-------------------//
$(document).ready(function(){
var datos2 =[
  {
        "nombre": "Im Michael and i am 25 years old.",
        "education": "I studied programming in Ultimatum School of informatics.",
        "experience": "I worked 15 years in Google as CEO director.",
        "courses": "Web Design, Android development and videogame development.",
   }
  ];     
  _.each(datos2, function(element){
    var div=$("#container3");
    div.append("<h2>About Me</h2>"+"<div>"+element.nombre+"</div>");
    div.append("<h2>Education</h2>"+"<div>"+element.education+"</div>");
    div.append("<h2>Experience</h2>"+"<div>"+element.experience+"</div>");
    div.append("<h2>Courses</h2>"+"<div>"+element.courses+"</div>");
  });

});