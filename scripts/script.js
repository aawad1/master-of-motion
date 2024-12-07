// Get Canvas and Context
const canvas = document.getElementById('fallingCanvas');
const ctx = canvas.getContext('2d');

// Set Canvas Dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Apple Image
const appleImage = new Image();
appleImage.src = 'apple.png'; // Replace with your transparent apple image URL

// Array to hold multiple apples
const apples = [];

// Apple Object Constructor
function createApple(x, y) {
  return {
    x: x, // Starting x position
    y: y, // Starting y position
    size: 50, // Size of the apple
    speedY: 0, // Initial vertical speed
    gravity: 0.2, // Gravity effect
  };
}

// Add new apple when the title is clicked
document.getElementById('title').addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.random() * canvas.width; // Randomize x position
  const y = -50; // Start above the canvas

  // Add a new apple to the array
  apples.push(createApple(x, y));
});

// Animation loop
function drawApples() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw each apple and update its position
  apples.forEach((apple, index) => {
    // Draw apple
    ctx.drawImage(appleImage, apple.x, apple.y, apple.size, apple.size);

    // Apply gravity
    apple.speedY += apple.gravity;
    apple.y += apple.speedY;

    // Remove apples that fall out of view
    if (apple.y > canvas.height) {
      apples.splice(index, 1); // Remove the apple from the array
    }
  });

  // Request the next animation frame
  requestAnimationFrame(drawApples);
}

// Start Animation Once Image Loads
appleImage.onload = () => {
  drawApples();
};

// Resize Canvas When Window Resizes
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


function startGame() {
    // Hide the home screen
    document.getElementById('home-screen').style.display = 'none';

    // Show the game screen
    document.getElementById('game-screen').style.display = 'block';

    // Initialize the game
    initializeGame();
  }

  function initializeGame() {
    // Example: Start a basic game loop or load resources
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Placeholder for game logic (e.g., a moving object)
    let x = 0;
    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a moving square
      ctx.fillStyle = 'red';
      ctx.fillRect(x, canvas.height / 2 - 25, 50, 50);
      x += 2;

      if (x < canvas.width) {
        requestAnimationFrame(gameLoop);
      }
    }

    // Start the game loop
    gameLoop();
  }


  function showAbout() {
    alert("This is Master of Motion, a physics-based game where you explore exciting concepts!");
  }

  function showHowToPlay() {
    alert("How to Play:\n1. Use arrow keys to move.\n2. Avoid obstacles.\n3. Reach the goal!");
  }

  function showSettings() {
    alert("Settings menu not implemented yet!");
  }
  function goToHome() {
    // Hide the game screen
    document.getElementById('game-screen').style.display = 'none';

    // Show the home screen
    document.getElementById('home-screen').style.display = 'block';
  }
