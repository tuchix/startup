$(document).ready(function(){
  $("section").fadeIn(1000);
      $("section").promise().done(function(){
          $(".alias").focus();
      }); 
    $("#btn1").click(function(){   
          var alias= $(".alias").val();
          $.get("http://bootcamp.aws.af.cm/welcome/"+alias, function(data, status){
          if (data.response){
          $("section").html(data.response).css("background-color", "blue");          
        }else{
          $("section").html(data).css("background-color", "red");
        }        
        });
    });
      $("#btn2").click(function(){
      $.get("http://localhost:3000/search?q=html5", function(data, status){
        console.dir(data);
            for (item in data['statuses']){
              $('aside').append('<li><img src="' + data['statuses'][item]['user']['profile_image_url'] + '"/></li>');
              $('aside').append('<li>' + data['statuses'][item]['user']['screen_name'] + '</li>');
              $('aside').append('<li>' + data['statuses'][item]['text'] + '</li>');
              $('aside').append('<li>' + data['statuses'][item]['user']['created_at'] + '</li>'+'<br>');              
            }
        });
    });
});