//if ( confirm("Would you like to give us your name?") ) {
//    var name = prompt("What's your name?");
//    alert("Hi, " + name);
//} else {
//    alert("Sorry, you can not get an access");
//}

function buttonClick (form) {
    //document.getElementById("field").innerHTML = "Your Google request is https://www.google.ie/search?q=" + form.request.value;
    var link = "https://www.google.ie/search?q=" + form.request.value;
    window.location = link;
}

function Scroll (id) {
	var OurOffset = 0;
	$('html, body').animate({scrollTop: $(id).offset().top - OurOffset}, 1000);
	return false;
}