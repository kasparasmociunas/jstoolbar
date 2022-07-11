/*
Add functionality in JS for slider to: 
1. Toolbar button hides/shows toolbar; 
2. Back button shows rewinds to previous img; 
3. Pause/play button changes icon and stops/starts carousel; 
4. Forward button takes to next image immediately. 
5. Shuffle button takes to one random image. And after that images goes in order. (Not random all the time, but just one image). 
6. Add functionality to use .fade class to make fade in, fade out between slides. 
*/

//Your JS goes here

const images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
];

let imageElement = document.querySelector("img");

imageElement.src = images[0];

let imgIndex = 0;

function changeImage() {
  if (imgIndex >= images.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
  imageElement.src = images[imgIndex];
}

let intervalID = setInterval(changeImage, 2000);

const toolbar = document.querySelector("#toolbar");

toolbar.addEventListener("click", toggleToolbarView);

function toggleToolbarView() {
  //   let nav = document.querySelector("nav");
  //   if (nav.style.display === "none") {
  //     nav.style.display = "block";
  //   } else {
  //     nav.style.display = "none";
  //   }

  document.querySelector("nav").classList.toggle("hide");
}

const sliderPrevious = document.querySelector("#slider-previous");
sliderPrevious.addEventListener("click", previousImage);

function previousImage() {
  console.log("previous");
  console.log(imgIndex);
  clearInterval(intervalID);
  if (imgIndex == 0) {
    imgIndex = images.length;
  } else {
    imgIndex--;
  }
  imageElement.src = images[imgIndex];

  intervalID = setInterval(changeImage, 2000);
}

const sliderNext = document.querySelector("#slider-next");
sliderNext.addEventListener("click", nextImage);

function nextImage() {
  if (imgIndex == images.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
  imageElement.src = images[imgIndex];
}

const sliderToggle = document.querySelector("#slider-toggle");
sliderToggle.addEventListener("click", startStop);

function startStop() {
  document.querySelector("#playPause").classList.toggle("fa-pause");
  if (document.querySelector("#playPause").classList.contains("fa-pause")) {
    clearInterval(intervalID);
  } else {
    intervalID = setInterval(changeImage, 2000);
  }
}

const sliderRandom = document.querySelector("#slider-random");
sliderRandom.addEventListener("click", chooseRandom);

function chooseRandom() {
  random = Math.floor(Math.random() * 6);
  imgIndex = random;
  imageElement.src = images[imgIndex];
}

const fade = document.querySelector("#fade");

fade.addEventListener("click", fadeFunction);

function fadeFunction() {
  document.querySelector("img").classList.toggle("fade");
}
