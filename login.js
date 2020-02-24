var h4 = document.querySelector("h4");
var ispink = false;

setInterval(function(){
    if(ispink)
    {
        h4.style.color = "orange";
    }
    else{
        h4.style.color = "pink";
    }
    ispink = !ispink;
}, 500)

