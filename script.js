const startDate = new Date("2024-01-01T00:00:00");

function updateTimer() {
  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days} dias ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);

updateTimer();

function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
}

function closeSurprise() {
  document.getElementById("surprise").classList.add("hidden");
}
