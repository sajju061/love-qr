function goPage(num) {
  document.querySelectorAll(".box").forEach(p => p.classList.add("hidden"));
  document.getElementById("page" + num).classList.remove("hidden");

  if (num === 3) startUrdu();
}

/* PAGE 3 Urdu animation */
const lines = [
  "میرا دل اس جہاں میں ویراں تھا",
  "پھر تم میری زندگی میں آئیں",
  "اور ہر دعا قبول ہو گئی",
  "میری محبت، میری زندگی ❤️"
];

function startUrdu() {
  const box = document.getElementById("urduText");
  box.innerHTML = "";
  lines.forEach((line, i) => {
    const p = document.createElement("p");
    p.style.animationDelay = `${i}s`;
    p.innerText = line;
    box.appendChild(p);
  });
}
