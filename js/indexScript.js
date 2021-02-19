var i = 0; //starting point
var img = [];
var time = 3000; // time in ms

// Image list
img[0] = './img/chinook.jpg';
img[1] = './img/cutter.jpeg';
img[2] = './img/fish.jpg';
img[3] = './img/frosted-cookie.jpg';
img[4] = './img/salmon.png';
img[5] = './img/shirt.jpg';



// Change Imgs Function
function changeImg() {
    document.getElementById('imgSlide').src = img[i];
    if (i < img.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
}
window.onload = changeImg;
