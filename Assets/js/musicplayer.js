$.get("../Page/musicplayer.html", function(data){
    $("#music-player").replaceWith(data);
});