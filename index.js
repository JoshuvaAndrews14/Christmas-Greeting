function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("snow-container").appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
  }
  setInterval(createSnowflake, 200);
  
  // Ornaments Click Events
  const ornaments = document.querySelectorAll('.ornament');
  ornaments.forEach(ornament => {
    ornament.addEventListener('click', () => {
      alert(ornament.dataset.message);
    });
  });
  
  // Greeting Popup
  const greeting = document.querySelector('.greeting-container');
  const closePopup = document.getElementById('close-popup');
  setTimeout(() => greeting.style.display = 'block', 2000);
  closePopup.addEventListener('click', () => {
    greeting.style.display = 'none';
  });