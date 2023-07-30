var N = 3;
var i = 0
function nextSlide(){
	if(i < N)
		i += 1;
	else
		i = 1;
	document.getElementById("slideshow").innerHTML = "<img src='image/banner"+ i +".jpg' />";
}

function backSlide(){
	if(i > 1)
		i -= 1;
	else
		i = N;
	document.getElementById("slideshow").innerHTML = "<img src='image/banner"+ i +".jpg' />";
}

function autoSlide(){
	setInterval(nextSlide,2000);
}