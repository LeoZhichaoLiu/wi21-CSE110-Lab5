// main.js
var value = 100;
var level = 3;
var honkDom = document.getElementById("honk-btn");

var textDom = document.getElementById("volume-number");
var sliderDom = document.getElementById("volume-slider");
var iconDom = document.getElementById("volume-image");

textDom.oninput = function () {
    value = textDom.value;
    sliderDom.value = value;
    setLevel (value);
};

sliderDom.onchange = function(){
    value = sliderDom.value;
    textDom.value = value;
    setLevel (value);
};

setLevel = function(value) {
    if (value == 0) {
        level = 0;
        honkDom.disabled = true; 
    } else if (value == 100) {
        level = 3;
        honkDom.disabled = false; 
    } else {
        level = Math.floor((value-1)/33) + 1;
        honkDom.disabled = false; 
    }

    if (level == 3){
        iconDom.src = "./assets/media/icons/volume-level-3.svg";
    }else if (level == 2){
        iconDom.src = "./assets/media/icons/volume-level-2.svg";
    }else if (level == 1){
        iconDom.src = "./assets/media/icons/volume-level-1.svg";
    }else{
        iconDom.src = "./assets/media/icons/volume-level-0.svg";
    }
};

var imageDom = document.getElementById("sound-image");
var airDom = document.getElementById("radio-air-horn");
var carDom = document.getElementById("radio-car-horn");
var partyDom = document.getElementById("radio-party-horn");
var image_num = 1;
var audio = new Audio("./assets/media/audio/air-horn.mp3");;

airDom.onclick = function () {
    image_num = 1;
    imageDom.src = "./assets/media/images/air-horn.svg";
    audio = new Audio("./assets/media/audio/air-horn.mp3");;
};

carDom.onclick = function () {
    image_num = 2;
    imageDom.src = "./assets/media/images/car.svg";
    audio = new Audio("./assets/media/audio/car-horn.mp3");
};

partyDom.onclick = function () {
    image_num = 3;
    imageDom.src = "./assets/media/images/party-horn.svg";
    audio = new Audio("./assets/media/audio/party-horn.mp3");
};

honkDom.onclick = function (event) {
    event.preventDefault();

    audio.volume = value / 100;
    audio.play();
}



