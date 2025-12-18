// Check if the URL contains ?from=ltfs
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('from') === 'ltfs') {
    document.getElementById('banner').style.display = 'block';  // Show the banner
  }
};

/* ================================
   EDIT YOUR GAMES HERE ONLY
   ================================ */

// Array of games with background images and other details
const hotGames = [
  {
    title: "Bike XTreme",
    description: "Fast-paced futuristic parkour game.",
    url: "/Bike-Xtreme",
    backgroundImage: "url('./images/bike-xtreme.jpg')"  // Correct image path
  },
  {
    title: "Shadow Arena",
    description: "Fight enemies in a dark cyber arena.",
    url: "#",
    backgroundImage: "url('./images/shadow-arena.jpg')"  // Correct image path
  }
];

const recommendedGames = [
  {
    title: "Galaxy Puzzle",
    description: "Relaxing space-themed puzzles.",
    url: "#",
    backgroundImage: "url('./images/galaxy-puzzle.jpg')"  // Correct image path
  },
  {
    title: "Zombie Dash",
    description: "Survive endless waves of zombies.",
    url: "#",
    backgroundImage: "url('./images/zombie-dash.jpg')"  // Correct image path
  }
];

/* ================================
   DO NOT EDIT BELOW (FUNCTIONAL)
   ================================ */

const hotContainer = document.getElementById("hot-games");
const recContainer = document.getElementById("recommended-games");
const searchInput = document.getElementById("search");

function renderGames() {
  const query = searchInput.value.toLowerCase();
  hotContainer.innerHTML = "";
  recContainer.innerHTML = "";

  function createCard(game) {
    if (
      !game.title.toLowerCase().includes(query) &&
      !game.description.toLowerCase().includes(query)
    ) return null;

    const div = document.createElement("div");
    div.className = "game-card";
    
    // Set background image dynamically
    div.style.backgroundImage = game.backgroundImage;

    div.innerHTML = `
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <a class="play-btn" href="${game.url}">Play</a>
    `;
    
    return div;
  }

  hotGames.forEach(g => {
    const card = createCard(g);
    if (card) hotContainer.appendChild(card);
  });

  recommendedGames.forEach(g => {
    const card = createCard(g);
    if (card) recContainer.appendChild(card);
  });
}

// Search functionality
searchInput.addEventListener("input", renderGames);
renderGames();
