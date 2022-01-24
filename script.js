const proverbs = [
  "A bad workman always blames his tools",
  "A bird in hand is worth two in the bush",
  "Absence makes the heart grow fonder",
  "Actions speak louder than words",
  "Better late than never",
  "Cleanliness is next to Godliness",
  "Clothes do not make the man",
  "Cowards die many times before their deaths",
  "Cross the stream where it is shallowest",
  "Discretion is the better part of valor",
  "Don’t bite off more than you can chew",
  "Don’t blow your own trumpet",
  "Don’t put the cart before the horse",
  "Easy come, easy go",
  "Fall seven times. Stand up eight",
  "Fools rush in where angels fear to tread",
  "Fortune favors the brave",
  "Good things come to those who wait",
  "Half a loaf is better than none",
  "If you can’t beat them, join them",
  "It’s easy to be wise after the event",
  "It’s never too late to mend",
  "It’s not over till it’s over",
  "Look before you leap",
  "Never put off until tomorrow what you can do today",
  "No gain without pain",
  "Pen is mightier than sword",
  "Rome wasn’t built in a day",
  "The harder you work, the luckier you get",
  "There is no time like the present",
  "Two heads are better than one",
  "What goes around comes around",
  "Where one door shuts, another opens",
  "You show me the man and I’ll show you the rule",
];

window.onload = createElements;

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

// select random proverbs and split the sentence word by word.
let randomProverb = proverbs.random();
let seperateWords = randomProverb.split(" ");

//change the index of word in array
function scrambleWords(arr) {
  for (let i = seperateWords.length - 1; i >= 0; i--) {
    let element = arr[i];
    let j = Math.floor(Math.random() * arr.length);
    arr[i] = arr[j];
    arr[j] = element;
  }

  return arr;
}

// create Button for each words
let words = scrambleWords(seperateWords);

function createElements() {
  let dragZone = document.querySelector(".model");

  for (let i = words.length - 1; i >= 0; i--) {
    let createButton = `<button id="proverbsWord" draggable="true"> ${words[i]} </button>`;

    dragZone.insertAdjacentHTML("beforeend", createButton);
  }
}

// drag and drop events

document.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target;
  },
  false
);

document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    if (event.target.className == "dropzone") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    } else if (event.target.className == "model") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);

console.log(randomProverb);

//check the sentence whether true

let succesAlert = document.getElementById("sucessAlert");
let succesBtn = document.querySelector(".succesBtn");
let warningAlert = document.getElementById("warningAlert");
let warningBtn = document.querySelector(".warningBtn");

function checkResult() {
  let dropzoneContent = document.querySelector(".dropzone");
  let uniteWords = dropzoneContent.textContent.trim();

  let arrayLi = [];
  arrayLi.push(uniteWords);
  let newWords = arrayLi[0].split("  ").join(" ");

  if (newWords == randomProverb) {
    succesAlert.style.display = "block";
    succesBtn.onclick = function (event) {
      location.reload();
      succesAlert.style.display = "none";
    };
  } else {
    warningAlert.style.display = "block";
    warningBtn.onclick = function (event) {
      warningAlert.style.display = "none";
    };
  }
}

let checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", checkResult);
