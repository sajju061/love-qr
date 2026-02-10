document.addEventListener("DOMContentLoaded", () => {

  let index = 0;
  const cards = document.querySelectorAll(".card");

  // show first card
  cards[0].classList.add("active");

  window.next = function () {
    if (index < cards.length - 1) {
      cards[index].classList.remove("active");
      index++;
      cards[index].classList.add("active");
    }
  };

  // 💍 proposal logic
  let yesCount = 0;

  window.yesClick = function () {
    const yesBtn = document.getElementById("yesBtn");
    yesCount++;

    let scale = 1 + yesCount * 0.22;
    if (scale > 2.3) scale = 2.3; // limit

    yesBtn.style.transform = `scale(${scale})`;

    if (yesCount >= 6) {
      setTimeout(() => {
        next();
      }, 600);
    }
  };

  window.noClick = function () {
    const noBtn = event.target;
    const x = Math.random() * 120 - 60;
    const y = Math.random() * 80 - 40;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  };

});








let index = 0;
let cards = document.querySelectorAll(".card");

function next(){
  cards[index].classList.remove("active");
  index++;
  if(index < cards.length){
    cards[index].classList.add("active");
  }
}

// ---- Proposal logic ----
let yesCount = 0;
let yesBtn = document.getElementById("yesBtn");

function yesClick(){
  yesCount++;
  let scale = 1 + yesCount * 0.25;
  yesBtn.style.transform = `scale(${scale})`;

  if(yesCount >= 6){
    next();
  }
}

function noClick(){
  alert("Dobara socho 😜❤️");
}
