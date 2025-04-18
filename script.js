function showMessage() {
  const messages = [
    "Hello there! 👋",
    "Thanks for visiting! ✨",
    "You’re awesome! 😄",
    "Keep shining! 🌟"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[randomIndex];
}
