//https://accounts.spotify.com/authorize?client_id=5434efb4a9294b5f95d2296aa04a55c8&redirect_uri=http://localhost:8080/&response_type=token
//https://developer.spotify.com/web-api/console/post-playlists/   ---get full token
// Owner ID: 11142863531

$(document).ready(function() {

  var API = {
        accessToken: 'BQAI_VFo4b9Ohk63CyYx9Rn9BPdqMjC52_PwQDc6LU5HkKOk0B7gT7JujUpXXb9ewfaZD_uH8jMz2k57sbtD1941P8ikYBJF8oyLBInwkT5qSwjUC2rMXMLEqGHZReQUws8B93c7LogAb_fDtP95M_oG7TigapFfVxkx8eCpS2BpXwxu3FVAKKBWc2L7G2BzrhJKK_Gt-lphUKWOgy8qucHMZ4HvRCM',
        base: 'https://api.spotify.com'
      },
      req = function (endpoint) {
        $.ajax({
          url: endpoint,
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + API.accessToken
          }
        }).done(res);
      },
      res = function (data) {
        console.log(data);
      };

  req(API.base + '/v1/me');

  
  // Populate select with user playlists
  $.ajax({
    url: API.base + '/v1/users/11142863531/playlists',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + API.accessToken
    }
  }).done(function(response) {
    $.each(response.items, function(key, item){
      $('#list').append('<option value="' + item.id + '">' + item.name + '</option>');
    });
  });

  // Search tracks
  $('#search').click(function() {
    $('#resultados').empty();
    var query = $('#query').val();
    var params = {q: query, type: 'track'};

    $.get('https://api.spotify.com/v1/search', params, function(response) {
        $.each(response.tracks.items, function(index, item) {
            $('#resultados').append('<div class="tracks">'+'<div id="trackTitle">'+'<input type="checkbox" value="' + item.id + '"/> '+ item.name+'</div>'+ '<div>'+'<img src="' 
              + item.album.images[1].url + '" />' + '</div>'+'<audio controls><source src=' + item.preview_url + ' type="audio/mpeg"></audio>' +'</div>');
        });
    });
  });

  // Create a new playlist
  $('#create').click(function() {
    var name = $('#playlist').val();
    var options = { "name": name, "public": true};
    
    $.ajax({
      url: API.base + '/v1/users/11142863531/playlists',
      method: 'POST',
      dataType: 'json',
      data: JSON.stringify(options),
      headers: {
        'Authorization': 'Bearer ' + API.accessToken
      }
    }).done(function(response) {
      alert('Playlist: ' + response.name + ' created');
    });
  });

  // Add tracks to selected playlist

  //https://developer.spotify.com/web-api/console/post-playlist-tracks/


  $('#add-tracks').click(function() {
    var tracks = $('input:checked');
    var playlist_id = $('#list').val();
    var url = API.base + '/v1/users/11142863531/playlists/' + playlist_id + '/tracks';
    var trackUris = [];
    
    $.each(tracks, function(key, track) {
      trackUris.push('spotify:track:' + track.value);
    });

    var options = {"uris": trackUris};

    $.ajax({
      url: url,
      method: 'POST',
      dataType: 'json',
      data: JSON.stringify(options),
      headers: {
        'Authorization': 'Bearer ' + API.accessToken
      }
    }).done(function(response) {
      alert('Tracks added!');
    });
  });
});
