// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.
setTimeout(() => {
  let hi = document.createElement(`p`);
  hi.innerText = `Hi`;
  document.querySelector(`#first`).append(hi);
}, 1000);

// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.
setTimeout(() => {
  let one = document.createElement(`p`);
  one.innerText = `One`;
  document.querySelector(`#timeout-nesting`).append(one);

  setTimeout(() => {
    let two = document.createElement(`p`);
    two.innerText = `Two`;
    document.querySelector(`#timeout-nesting`).append(two);
  }, 1000);
}, 2000);

// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
let q3counter = 1;
let q3a = setInterval(() => {
  console.log(q3counter);
  q3counter++;
}, 1000);

// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).
document.querySelector(`button`).addEventListener(`click`, () => {
  clearInterval(q3a);
});

// Bonus
// 4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).
let clockM = [];
let clockS = [];
for (let i = 0; i < 60; i++) {
  if (i < 10) {
    clockS.push(`0${i}`);
  } else {
    clockS.push(`${i}`);
  }
}
for (let i = 0; i < 60; i++) {
  if (i < 10) {
    clockM.push(`0${i}`);
  } else {
    clockM.push(`${i}`);
  }
}

let countM = 2;
let countS = 0;

let countdown = document.createElement(`p`);
countdown.innerText = `${clockM[countM]}:${clockS[countS]}`;
document.querySelector(`#countdown`).append(countdown);

setInterval(() => {
  if (countS == 0) {
    if (countM > 0) {
      countM--;
      countS = 59;
      countdown.innerText = `${clockM[countM]}:${clockS[countS]}`;
    } else {
      countdown.innerText = `TIME IS UP`;
    }
  } else {
    countS--;
    countdown.innerText = `${clockM[countM]}:${clockS[countS]}`;
  }
}, 1000);
