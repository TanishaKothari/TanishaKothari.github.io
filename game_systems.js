const achievements = {
  pathfinder: {
    id: "pathfinder",
    tiers: [
      {
        name: "Pathfinder Bronze",
        icon: '<i class="fas fa-map-marked-alt text-orange-400"></i>',
        requirement: 3,
        xpReward: 50,
        unlocked: false
      },
      {
        name: "Pathfinder Silver", 
        icon: '<i class="fas fa-map-marked-alt text-gray-400"></i>',
        requirement: 5,
        xpReward: 100,
        unlocked: false
      },
      {
        name: "Pathfinder Gold",
        icon: '<i class="fas fa-map-marked-alt text-yellow-400"></i>', 
        requirement: 8,
        xpReward: 200,
        unlocked: false
      }
    ],
    description: "Discover areas of the portfolio",
    progress: 0
  },
  gemCollector: {
    id: "gemCollector",
    tiers: [
      {
        name: "Gem Collector Bronze",
        icon: '<i class="fas fa-gem text-orange-400"></i>',
        requirement: 10,
        xpReward: 50,
        unlocked: false
      },
      {
        name: "Gem Collector Silver",
        icon: '<i class="fas fa-gem text-gray-400"></i>',
        requirement: 25,
        xpReward: 100,
        unlocked: false
      },
      {
        name: "Gem Collector Gold",
        icon: '<i class="fas fa-gem text-yellow-400"></i>',
        requirement: 50,
        xpReward: 200,
        unlocked: false
      }
    ],
    description: "Collect floating gems",
    progress: 0
  },
  skillMaster: {
    id: "skillMaster",
    name: "Skill Master",
    description: "Viewed all skill categories",
    icon: '<i class="fas fa-scroll"></i>',
    unlocked: false,
    xpReward: 75
  },
  nightOwl: {
    id: "nightOwl",
    name: "Night Owl",
    description: "Enabled dark mode",
    icon: '<i class="fas fa-moon"></i>',
    unlocked: false,
    xpReward: 25
  },
  artifactCollector: {
    id: "artifactCollector",
    name: "Artifact Collector",
    description: "Discover all projects in the gallery",
    icon: '<i class="fas fa-trophy"></i>',
    unlocked: false,
    xpReward: 100
  }
};

// Particle System
const particleSystem = {
  createParticle: (x, y, type) => {
    const particle = document.createElement('div');
    particle.className = `particle particle-${type}`;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  },
  
  burst: (x, y, count, type) => {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        requestAnimationFrame(() => {
          particleSystem.createParticle(
            x + (Math.random() - 0.5) * 50,
            y + (Math.random() - 0.5) * 50,
            type
          );
        });
      }, Math.random() * 500);
    }
  }
};

// Collectible System
const createRandomCollectible = () => {
  // Don't spawn collectibles if user is actively scrolling or if there's recent scroll activity
  if (isScrolling) return;

  const collectible = document.createElement('div');
  collectible.className = 'collectible floating';
  collectible.innerHTML = '<i class="fas fa-gem"></i>';
  
  // Get visible viewport bounds
  const viewportTop = window.scrollY;
  const viewportBottom = viewportTop + window.innerHeight;
  const viewportLeft = window.scrollX;
  const viewportRight = viewportLeft + window.innerWidth;

  // Get UI element bounds
  const playerStats = document.querySelector('.player-stats').getBoundingClientRect();
  const achievements = document.querySelector('.achievements').getBoundingClientRect();

  // Calculate spawn area avoiding text content area
  const minX = Math.max(viewportLeft + playerStats.width + 20, viewportLeft);
  const maxX = Math.min(viewportRight - achievements.width - 20, viewportRight);
  const minY = Math.max(viewportTop + playerStats.height + 20, viewportTop);
  const maxY = viewportBottom - 50;

  // Generate position within safe area
  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;
  
  collectible.style.left = `${x}px`;
  collectible.style.top = `${y}px`;
  
  // Only append if position is valid and not overlapping with main content
  if (x > minX && x < maxX && y > minY && y < maxY && !isOverlappingContent(x, y)) {
      collectible.onclick = () => {
          gameState.collectedGems++;
          awardXP(10);
          particleSystem.burst(x, y, 10, 'collect');
          collectible.remove();
          window.checkAchievements();
      };
      document.body.appendChild(collectible);

      // Remove collectible after 5 seconds if not collected
      setTimeout(() => {
          if (document.body.contains(collectible)) {
            collectible.remove();
          }
      }, 5000);
  }
};

// Helper to check if position overlaps with main content
const isOverlappingContent = (x, y) => {
  const elementsToAvoid = document.querySelectorAll('h1, h2, h3, p, .content-container > div');
  for (const element of elementsToAvoid) {
      const rect = element.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          return true;
      }
  }
  return false;
};

// Scroll detection
let isScrolling = false;
let scrollTimeout;

const handleScroll = () => {
isScrolling = true;
clearTimeout(scrollTimeout);

// Reset scroll state after 1 second of no scrolling
scrollTimeout = setTimeout(() => {
  isScrolling = false;
}, 1000);
};

window.addEventListener('scroll', () => {
requestAnimationFrame(handleScroll);
});

// Level System
const awardXP = (amount) => {
  gameState.player.xp += amount;
  
  if (gameState.player.xp >= gameState.player.level * 100) {
    levelUp();
  }
  
  updateXPBar();
};

// Update XP bar
const updateXPBar = () => {
  const xpBar = document.querySelector('.xp-fill');
  if (xpBar) {
    xpBar.style.width = `${(gameState.player.xp / (gameState.player.level * 100)) * 100}%`;
  }
};

const levelUp = () => {
  gameState.player.level++;
  gameState.player.xp = 0;
  
  // Create level up effect
  particleSystem.burst(
    window.innerWidth / 2,
    window.innerHeight / 2,
    20,
    'levelup'
  );
  
  // Update title
  updatePlayerTitle();
  
  // Show level up message
  showLevelUpMessage();
};

// Update title
const updatePlayerTitle = () => {
  const titles = {
    1: "Novice Explorer",
    2: "Code Apprentice",
    3: "Digital Artisan",
    4: "Tech Mage",
    5: "Master Developer"
  };
  gameState.player.title = titles[gameState.player.level] || "Master Developer";
  
  const titleElement = document.querySelector('.player-title');
  if (titleElement) {
    titleElement.textContent = gameState.player.title;
  }
};

// Show level up message
const showLevelUpMessage = () => {
  const message = document.createElement('div');
  message.className = 'level-up-message';
  message.textContent = `Level Up! You are now level ${gameState.player.level}`;
  document.body.appendChild(message);
  setTimeout(() => message.remove(), 3000);
};

const GameSystems = {
  achievements,
  particleSystem,
  createRandomCollectible,
  isOverlappingContent,
  awardXP,
  updateXPBar,
  levelUp,
  updatePlayerTitle,
  showLevelUpMessage
};

// Make it globally available
window.GameSystems = GameSystems;