




function Open(){
    document.getElementById("menuscreen").style.width="100%";   
    


    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}


function Close(){
    document.getElementById("menuscreen").style.width="0%";
    window.onscroll = function() {};
}