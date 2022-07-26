document.body.style.overflow = "hidden";

function createBalloon() {

    var colors = ["5vw","30vw","50vw","65vw"];
    var items = ["balloon.jpg", "party-blooper.png", "text.gif", "cake.jpg"];
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    var randItem = items[Math.floor(Math.random() * items.length)];
    var img = document.createElement("img");
    img.src = randItem;
    img.className = randItem.split('.')[0];

    var div = document.getElementById("balloon-div");
    div.appendChild(img);
    img.style.position = "absolute";
    img.style.top = "100vh";
    img.style.left = randColor;
}

createBalloon();

setInterval(function(){
    createBalloon();
}, 700);

var count = 1;

function swapPhoto() {
    var img = document.createElement("img");
    if (count > 6) {
        count = 1;
    }
    img.src = count + ".jpeg";
        
    if (count%2 == 1) {
        img.className = "photo";
    }
    else{
        img.className = "photo2";
    }


    var div = document.getElementById("image-div");
    div.appendChild(img);

    setTimeout(function(){
        img.remove();
        count++;
    }, 3000);
}

document.getElementById("image-div").style.width = "70%";

swapPhoto();

setInterval(function(){
    swapPhoto();
}, 3000);