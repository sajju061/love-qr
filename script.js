let index = 0;
let cards = document.querySelectorAll(".card");

function next(){
  cards[index].classList.remove("active");
  index++;
  if(index >= cards.length) index = cards.length-1;
  cards[index].classList.add("active");
}
@keyframes heart {
  0% { transform: scale(1) rotate(0deg); opacity:1; }
  50% { transform: scale(1.3) rotate(15deg); opacity:0.7; }
  100% { transform: scale(1) rotate(-15deg); opacity:1; }
}

.heart {
  position: absolute;
  font-size: 2rem;
  color: #ff4d6d;
  animation: heart 1s infinite;
  pointer-events:none;
}
