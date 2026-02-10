let index = 0;
let cards = document.querySelectorAll(".card");

function next(){
  cards[index].classList.remove("active");
  index++;
  if(index < cards.length){
    cards[index].classList.add("active");
  }
}

// proposal logic
let yesCount = 0;

function yesClick(){
  const yesBtn = document.getElementById("yesBtn");
  yesCount++;
  let scale = 1 + yesCount * 0.25;
  yesBtn.style.transform = `scale(${scale})`;

  if(yesCount >= 6){
    setTimeout(()=>next(),500);
  }
}

function noClick(){
  alert("Dobara socho 😜❤️");
}
