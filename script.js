let messageIndex = 0;

const messages = [
  "Are you sure, Sulaf? 🥺",
  "But it’s our anniversary 😢",
  "I planned this just for you 💭",
  "Please say yes, my love 💗",
  "Don’t break my heart today 💔",
  "Okay okay… press Yes 😏"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.35}px`;
}

function handleYesClick() {
  window.location.href = "celebration.html";
}
