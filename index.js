"use strict";

// grab our stoplight buttons
// let stopBtn = document.querySelector(".stopButton");
// let slowBtn = document.querySelector(".slowButton");
// let goBtn = document.querySelector(".goButton");
let controls = document.querySelectorAll(".button");

//grab the stoplight bulbs
// let stopBulb = document.querySelector(".stopLight");
// let slowBulb = document.querySelector(".slowLight");
// let goBulb = document.querySelector(".goLight");
let allBulbs = document.querySelectorAll(".bulb");

//create a loop to add a event listener to each button

// add event listener
// apply a color red,yellow, or green to the element.
controls.forEach((btn, i) => {
  // mouse enter functionality
  btn.addEventListener("mouseenter", function () {
    console.log(`Entered ${btn.textContent} button`);
  });
  // mouse exit functionality
  btn.addEventListener("mouseleave", function () {
    console.log(`Left ${btn.textContent} button`);
  });
  // add bulb on or off log

  let toggleCheck;

  btn.addEventListener("click", function () {
    //toggle each button for the specified class
    if (i === 0) {
      toggleCheck = allBulbs[i].classList.toggle("stop");
      toggleCheck
        ? console.log(`${btn.textContent} bulb on`)
        : console.log(`${btn.textContent} bulb off`);
    } else if (i === 1) {
      toggleCheck = allBulbs[i].classList.toggle("slow");
      toggleCheck
        ? console.log(`${btn.textContent} bulb on`)
        : console.log(`${btn.textContent} bulb off`);
    } else if (i === allBulbs.length - 1) {
      toggleCheck = allBulbs[i].classList.toggle("go");
      toggleCheck
        ? console.log(`${btn.textContent} bulb on`)
        : console.log(`${btn.textContent} bulb off`);
    }
  });
});

// Logging mouse movements
// btn.addEventListener("mouseenter", mouseIn);

// if you hover into the button it logs "entered"
// if you hover out of the button it logs "exited"
