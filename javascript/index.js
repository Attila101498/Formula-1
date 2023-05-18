// Topnav hamburger menü
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});