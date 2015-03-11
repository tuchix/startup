$(document).ready(function() {
    var Profile = [
      {
        "Name": "Im Robert and i am 25 years old."
      },
      {
        "Education": "I studied programming in Ultimatum School of informatics."
      },
      {
        "Experience": "I worked 15 years in Google as CEO director."
      },
      {
        "Courses": "Web Design, Android development and videogame development."
      }
    ];

    document.getElementById("name").innerHTML = Profile[0].Name;
    document.getElementById("education").innerHTML = Profile[1].Education;
    document.getElementById("experience").innerHTML = Profile[2].Experience;
    document.getElementById("courses").innerHTML = Profile[3].Courses;

    var datos = {
        Profile: {
            nombre: 'Im Michael and i am 25 years old.',
            education: 'I studied programming in Ultimatum School of informatics.',
            experience: [
              'My first job...',
              'My second job...',
              'My third job...',
              'I worked 15 years in Google as CEO director.'
            ],
            courses: 'Web Design, Android development and videogame development.',
        },
    };

    //----------------With Handlebars----------------------//
    var fuente = $('#plantilla2').html();
    var plantilla = Handlebars.compile(fuente);
    var html = plantilla(datos);
    $('#container2').html(html);

    //-----------------With Underscore-------------------//
    var plantilla3 = _.template($('#plantilla3').html());
    $('body').append(plantilla3(datos));

    //-----------------With Dust-------------------//
    var compiled = dust.compile($('#plantilla4').html(), "intro");
    dust.loadSource(compiled);
    dust.render("intro", datos, function(err, out) {
        $('#container4').html(out);
    });

});
//--------------------------------------------------//
