// Write your JS in here

// alert("js loaded");

var pics = [
	"imgs/kit1.jpg",
	"imgs/kit2.jpg",
	"imgs/kit3.jpg",
	"imgs/kit4.jpg",
	"imgs/kit5.jpg",
	"imgs/kit6.jpg",
	"imgs/kit7.jpg",
	"imgs/kit8.jpg",
	"imgs/kit9.jpg",
	"imgs/kit10.jpg",
	"imgs/kit11.jpg",
	"imgs/kit12.jpg"
];	

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function() {
	// alert("js loaded")
	// alert(img.src);
	img.src= pics[counter];
	counter++;
	if ( counter == pics.length) counter=0;
});



picsold = [
	"imgs/kitty_bed.jpg",
	"imgs/kitty_basket.jpg", 
	"imgs/kitty_laptop.jpg",
	"imgs/kitty_door.jpg",
	"imgs/kitty_sink.jpg",
	"imgs/kitty_wall.jpg"
]