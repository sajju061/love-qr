let index = 0;
let cards = document.querySelectorAll(".card");

function next(){
  cards[index].classList.remove("active");
  index++;
  if(index >= cards.length) index = cards.length-1;
  cards[index].classList.add("active");
}

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
