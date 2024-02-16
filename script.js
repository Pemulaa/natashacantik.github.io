const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const audio = document.getElementById("audio");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "yeay akhirnya 😎,mwahh";
  gif.src = "love4.gif";

  // https://www.icegif.com/wp-content/uploads/love-hug-icegif.gif

  // Menghilangkan tombol "yes"
  yesBtn.style.display = "none";

  // Menghilangkan tombol "no"
  noBtn.style.display = "none";

  // Memainkan audio
  audio.play();
});
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
