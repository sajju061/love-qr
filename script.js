let index = 0;
let cards = document.querySelectorAll(".card");

function next(){
  cards[index].classList.remove("active");
  index++;
  if(index >= cards.length) index = cards.length-1;
  cards[index].classList.add("active");
}
