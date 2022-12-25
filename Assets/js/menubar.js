$.get("../Page/menubar.html", function(data){
    $("#menu-bar").replaceWith(data);
});