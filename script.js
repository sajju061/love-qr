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

document.body.addEventListener('click', e => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  heart.textContent = '❤️';
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),1000);
});

