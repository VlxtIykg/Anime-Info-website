var playing = true;
var intervalID;

var image = [
    "Images/cards/dazaiatsushi.jpg", 
    "Images/cards/fma.jpg",
    "Images/cards/kaneki.jpg",
    "Images/cards/meliodas.jpg",
    "Images/cards/saitama.jpg",
    "Images/cards/sukuna.jpg",
    "Images/cards/ichigo.jpg"
]

var index = 1;

var slider = document.getElementById("slideshow");

function control() {
    if(playing) {
        document.getElementById('pauseButton').innerHTML = 'Play';
        playing = false; 
        clearInterval(intervalID);
    }
    else {
        document.getElementById('pauseButton').innerHTML = 'Pause';
        intervalID = setInterval(slidingShow, 5000);
        playing = true;
    }
}

function slidingShow() {
    if(index < image.length) {
        index++;
        slider.src = image[index - 1];
    }
    else {
        index = 1; 
        slider.src = image[index - 1];
    }
}
//Used two document.get just incase putting it outside messes it up

function prevImage(){
    if(index > 1) 
        {
            index--;
            slider.src = image[index-1];
        }
    else 
        {
            index = 7; 
            slider.src = image[index-1];
        }
}

function currentslide(number) {
    index = number; 
    slider.src = image[index-1]; 
    switch(index) {
        case 1: 
            dazai();
            break;
        case 2: 
            fma();
            break;
        case 3: 
            tokyoghoul();
            break;
        case 4: 
            meliodas();
            break;
        case 5:
            opm();
            break;
        case 6:
            jjk();
            break;
        default: 
            bleach();
            break;
    }
}

