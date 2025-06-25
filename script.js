const gameState = {
  player: {
    level: 1,
    xp: 0,
    title: "Novice Explorer",
    inventory: [],
    achievements: []
  },
  darkMode: false,
  collectedGems: 0,
  discoveredProjects: [],
  unlockedSkillCategories: [],
  completedAcademicQuests: [],
  collectedTrophies: [],
  collectedExperiences: []
};

document.addEventListener("DOMContentLoaded", () => {
  // Restore dark mode state from localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    gameState.darkMode = true;
    document.body.classList.add('dark-mode');
  }
  const app = document.getElementById("app");


  const scenes = {
    intro: {
      background: "bg-gradient-to-b from-purple-900 to-blue-900",
      content: {
        title: "Welcome, Adventurer!",
        description: `
        You've entered the portfolio dungeon of Tanisha Kothari. Choose your path wisely!<br>💡 Tip: Look for floating gems to gain XP!
        <div class="bg-white/10 p-4 rounded-lg mt-2">
          <h2 class="text-xl font-bold mb-2">Career Objective</h2>
          <p>Aspiring game programmer seeking internship opportunities to contribute to innovative game development projects. Passionate about creating immersive gaming experiences through efficient code and creative problem-solving.</p>
        </div>`,
        choices: [
          { text: "Game Maker's Odyssey", nextScene: "gamedev" },
          { text: "Enter Project Vault", nextScene: "projects" },
          { text: "Explore Skills Chamber", nextScene: "skills" },
          { text: "Quest for Knowledge", nextScene: "academics" },
          { text: "Path of the Chess Master", nextScene: "chess" },
          { text: "Search for Experience", nextScene: "experience" },
          { text: "About the Developer", nextScene: "about" },
          { text: "Contact Portal", nextScene: "contact" }
        ],
      },
    },
    gamedev: {
      background: "bg-gradient-to-r from-purple-900 to-blue-900",
      content: {
        title: "Game Maker's Odyssey",
        description: "My path in game development:<br><small class='text-blue-300'>💡 Next: Check out my Project Vault to see these skills in action!</small>",
        devJourney: [
          {
            year: "2022",
            milestone: "Started Game Development",
            details: "First Unity project, learned C#",
            icon: '<i class="fas fa-gamepad"></i>'
          },
          {
            year: "2024",
            milestone: "Expanded to Unreal Engine",
            details: "Mastered C++ fundamentals",
            icon: '<i class="fas fa-bolt"></i>'
          },
          {
            year: "2025",
            milestone: "Portfolio Growth",
            details: "Building diverse game projects",
            icon: '<i class="fas fa-rocket"></i>'
          }
        ],
        engineExpertise: [
          {
            name: "Unreal Engine",
            skills: ["C++", "Blueprints", "Level Design"],
            projects: 2,
            icon: '<i class="fas fa-crosshairs"></i>'
          },
          {
            name: "Unity",
            skills: ["C#", "2D Game Design", "Physics"],
            projects: 11,
            icon: '<i class="fas fa-dice-d20"></i>'
          },
          {
            name: "Custom Engines",
            skills: ["Raylib", "OpenGL", "Game Math"],
            projects: 1,
            icon: '<i class="fas fa-cogs"></i>'
          }
        ]
      }
    },
    projects: {
      background: "bg-gradient-to-b from-indigo-900 to-violet-900",
      content: {
        title: "Project Vault",
        description: "Unearth hidden gems in the Project Vault:<br><small class='text-blue-300'>💡 Click the treasure chests to reveal each project's details!</small>",
        items: [
          {
            name: "Firearm Frenzy",
            tech: "Unreal Engine 5, C++",
            description: `A third-person shooter`,
            link: "https://github.com/TanishaKothari/Firearm-Frenzy",
            icon: '<i class="fas fa-crosshairs"></i>'
          },
          {
            name: "Crypt Raider",
            tech: "Unreal Engine 5, C++",
            description: "A puzzle adventure",
            link: "https://github.com/TanishaKothari/CryptRaider",
            icon: '<i class="fas fa-dungeon"></i>'
          },
          {
            name: "PortalPaths: Maze Multiverse",
            tech: "C++, Raylib",
            description: `A maze game with various themes and different difficulty modes`,
            link: "https://github.com/TanishaKothari/PortalPaths-Maze_Multiverse",
            icon: '<i class="fas fa-rocket"></i>'
          },
          {
            name: "Sudoku Mastermind",
            tech: "Unity, C#",
            description: "Classic sudoku and variants",
            link: "https://github.com/TanishaKothari/Sudoku-Mastermind",
            icon: '<i class="fas fa-puzzle-piece"></i>'
          },
          {
            name: "ExploreEase",
            tech: "Python, Flask, HTML, CSS, JavaScript, MySQL",
            description: "A travel itinerary generator website",
            link: "https://github.com/TanishaKothari/ExploreEase",
            icon: '<i class="fas fa-globe-americas"></i>'
          }
        ],
      },
    },
    skills: {
      background: "bg-gradient-to-b from-blue-900 to-indigo-900",
      content: {
        title: "Skills Chamber",
        description: "You discover ancient scrolls revealing powerful abilities:",
        skillCategories: [
          {
            title: "Game Development Arsenal",
            skills: [
              { name: "Unreal Engine & C++", level: 70, icon: '<i class="fas fa-gamepad"></i>' },
              { name: "Unity & C#", level: 65, icon: '<i class="fab fa-unity"></i>' },
              { name: "Raylib", level: 60, icon: '<i class="fas fa-cube"></i>' }
            ]
          },
          {
            title: "Full-Stack Spellbook",
            skills: [
              { name: "Python & Flask", level: 80, icon: '<i class="fab fa-python"></i>' },
              { name: "JavaScript", level: 70, icon: '<i class="fab fa-js"></i>' },
              { name: "Svelte & SvelteKit", level: 65, icon: '<i class="fas fa-fire"></i>' },
              { name: "C++", level: 75, icon: '<i class="fas fa-code"></i>' },
              { name: "MySQL & SQLite", level: 72, icon: '<i class="fas fa-database"></i>' },
              { name: "HTML & CSS", level: 75, icon: '<i class="fab fa-html5"></i>' },
              { name: "Tailwind CSS", level: 60, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>' },
              { name: "Bootstrap", level: 70, icon: '<i class="fab fa-bootstrap"></i>' }
            ]
          },
          {
            title: "Developer Tools",
            skills: [
              { name: "Git & GitHub", level: 90, icon: '<i class="fab fa-github"></i>' },
              { name: "VS Code", level: 85, icon: '<i class="fas fa-code"></i>' },
            ]
          }
        ]
      },
    },
    academics: {
      background: "bg-gradient-to-b from-green-900 to-purple-900",
      content: {
        title: "Quest Log",
        description: "Complete educational quests to unlock knowledge and skills:<br><small class='text-blue-300'>💡 Click each quest to see completion details!</small>",
        education: {
          university: [
            {
              name: "The University of Sydney",
              degree: "Bachelor of Advanced Computing",
              major: "Computer Science",
              minor: "Software Development",
              period: "July 2024 - July 2028",
              questType: "Main Quest",
              status: "In Progress",
              icon: '<i class="fas fa-university"></i>',
              rewards: ["Advanced Computing Knowledge", "Problem Solving Skills", "Software Development Expertise"],
              description: "Embark on the ultimate academic adventure to master computer science and software development."
            }
          ],
          certifications: [
            {
              id: "ue5_cpp",
              name: "UE5 C++ Developer: Code Your Own Unreal Games",
              provider: "GameDev.tv",
              date: "December 2024 - January 2025",
              icon: '<i class="fas fa-gamepad"></i>',
              questType: "Skill Quest",
              status: "Completed",
              rewards: ["Unreal Engine Mastery", "C++ Game Programming", "3D Game Development"],
              description: "Master the art of game development using Unreal Engine 5 and C++ programming."
            },
            {
              id: "cpp_fundamentals",
              name: "C++ Fundamentals: Game Programming For Beginners",
              provider: "GameDev.tv",
              date: "November 2024",
              icon: '<i class="fas fa-code"></i>',
              questType: "Foundation Quest",
              status: "Completed",
              rewards: ["C++ Programming", "Object-Oriented Design", "Optimization"],
              description: "Build a solid foundation in C++ programming specifically for game development."
            },
            {
              id: "ea_experience",
              name: "Electronic Arts Software Engineering Virtual Experience",
              provider: "Forage",
              date: "November 2024",
              icon: '<i class="fas fa-laptop-code"></i>',
              questType: "Industry Quest",
              status: "Completed",
              rewards: ["Industry Experience", "Software Engineering", "Professional Development"],
              description: "Gain real-world software engineering experience through EA's virtual program."
            },
            {
              id: "cs50x",
              name: "CS50x",
              provider: "Harvard University",
              date: "April 2024 - May 2024",
              icon: '<i class="fas fa-university"></i>',
              questType: "Foundation Quest",
              status: "Completed",
              rewards: ["Computer Science Fundamentals", "Algorithmic Thinking", "Programming Principles"],
              description: "Harvard's introduction to computer science and programming fundamentals."
            }
          ]
        }
      }
    },
    chess: {
      background: "bg-gradient-to-r from-blue-900 to-purple-900",
      content: {
        title: "Path of the Chess Master",
        description: `My achievements in chess:<br>
            <small class="text-blue-300">💡 Click each trophy to reveal its details!</small>`,
        achievements: [
          {
            title: "Arena Candidate Master",
            date: "2023",
            details: "Achieved ACM title through consistent performance",
            icon: '<i class="fas fa-trophy text-yellow-400"></i>'
          },
          {
            title: "Team Leadership",
            icon: '<i class="fas fa-crown text-yellow-400"></i>',
            date: "2022-2024",
            details: "School Chess Team Captain, led team to CBSE Nationals",
          },
          {
            title: "Tournament Recognition",
            count: "2",
            details: "Best Female Player awards in rated tournaments",
            icon: '<i class="fas fa-bullseye text-green-400"></i>'
          },
          {
            title: "FIDE Rating Peak",
            rating: "~1750",
            details: "Active tournament player since 2022",
            icon: '<i class="fas fa-chart-line text-blue-400"></i>'
          }
        ],
        skills: [
          {
            name: "Strategic Planning",
            level: 83
          },
          {
            name: "Leadership",
            level: 80
          },
          {
            name: "Pattern Recognition",
            level: 85
          },
          {
            name: "Decision Making",
            level: 75
          },
          {
            name: "Problem Solving",
            level: 85
          },
          {
            name: "Time Management",
            level: 90
          },
          {
            name: "Pressure Handling",
            level: 75
          },
          {
            name: "Team Coordination",
            level: 80
          }
        ]
      }
    },
    experience: {
      background: "bg-gradient-to-b from-purple-900 to-indigo-900",
      content: {
        title: "Adventure Timeline",
        description: "Follow my professional journey and unlock achievements:<br><small class='text-blue-300'>💡 Click each milestone to discover the adventure details!</small>",
        timeline: [
          {
            id: "e12_dev",
            title: "Software Developer",
            company: "e12.io",
            period: "March 2025 - Present",
            type: "development",
            icon: '<i class="fas fa-laptop-code"></i>',
            achievements: ["Full-Stack Explorer", "UI/UX Architect", "API Master"],
            details: [
              "Built responsive web interfaces in Svelte and SvelteKit for device onboarding, data visualization, and vendor/product management.",
              "Implemented secure JWT and OAuth 2.0 authentication flows, enabling protected access and role-based control across the platform.",
              "Integrated with and extended Node.js APIs to support frontend functionality for a scalable IoT data system."
            ],
            skills: ["Svelte", "SvelteKit", "JWT", "OAuth 2.0", "Node.js"]
          },
          {
            id: "chess_exec",
            title: "USYD Chess Club General Executive",
            company: "University of Sydney",
            period: "May 2025 - Present",
            type: "leadership",
            icon: '<i class="fas fa-chess"></i>',
            achievements: ["Community Leader", "Event Coordinator", "Team Player"],
            details: [
              "Assist in organizing events and tournaments to engage chess enthusiasts across campus.",
              "Support weekly operations for a club of 150+ members, ensuring smooth event coordination and communication.",
              "Developing event management, leadership, and communication skills."
            ],
            skills: ["Event Management", "Communication", "Team Coordination"]
          },
          {
            id: "peer_mentor",
            title: "ENGO Peer Mentor",
            company: "University of Sydney",
            period: "February 2025 - Present",
            type: "mentorship",
            icon: '<i class="fas fa-users"></i>',
            achievements: ["Mentor Master", "Guide", "Support Specialist"],
            details: [
              "Mentoring first-year students to facilitate their transition to university life",
              "Providing academic guidance and social support",
              "Contributing to building an inclusive learning environment",
              "Developing leadership and communication skills"
            ],
            skills: ["Mentoring", "Academic Guidance", "Leadership", "Communication"]
          }
        ]
      }
    },
    about: {
      background: "bg-gradient-to-b from-violet-900 to-purple-900",
      content: {
        title: "Character Sheet",
        description: `
          <div class="character-sheet-container">
            <!-- Character Portrait & Basic Info -->
            <div class="character-portrait-section">
              <div class="character-portrait">
                <div class="portrait-frame">
                  <div class="portrait-image">
                    <i class="fas fa-user-graduate text-4xl text-blue-400"></i>
                  </div>
                </div>
                <div class="character-info">
                  <h3 class="character-name">Tanisha Kothari</h3>
                  <p class="character-class">Game Developer • Code Apprentice</p>
                  <p class="character-location">🌏 Sydney, Australia</p>
                </div>
              </div>
            </div>

            <!-- Character Stats -->
            <div class="character-stats-section">
              <h3 class="section-title">Character Attributes</h3>
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-icon"><i class="fas fa-code text-blue-400"></i></div>
                  <div class="stat-info">
                    <span class="stat-name">Programming</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 85%"></div>
                    </div>
                    <span class="stat-value">85/100</span>
                  </div>
                </div>
                
                <div class="stat-item">
                  <div class="stat-icon"><i class="fas fa-gamepad text-purple-400"></i></div>
                  <div class="stat-info">
                    <span class="stat-name">Game Development</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 80%"></div>
                    </div>
                    <span class="stat-value">80/100</span>
                  </div>
                </div>

                <div class="stat-item">
                  <div class="stat-icon"><i class="fas fa-lightbulb text-orange-400"></i></div>
                  <div class="stat-info">
                    <span class="stat-name">Problem Solving</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 88%"></div>
                    </div>
                    <span class="stat-value">88/100</span>
                  </div>
                </div>

                <div class="stat-item">
                  <div class="stat-icon"><i class="fas fa-chess text-yellow-400"></i></div>
                  <div class="stat-info">
                    <span class="stat-name">Strategic Thinking</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 90%"></div>
                    </div>
                    <span class="stat-value">90/100</span>
                  </div>
                </div>

                <div class="stat-item">
                  <div class="stat-icon"><i class="fas fa-bug text-red-400"></i></div>
                  <div class="stat-info">
                    <span class="stat-name">Debugging</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 92%"></div>
                    </div>
                    <span class="stat-value">92/100</span>
                  </div>
                </div>

                <div class="stat-item">
                  <div class="stat-icon"><i class="fas fa-users text-green-400"></i></div>
                  <div class="stat-info">
                    <span class="stat-name">Leadership</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 78%"></div>
                    </div>
                    <span class="stat-value">78/100</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Side Quests (Volunteer Work) -->
            <div class="side-quests-section">
              <h3 class="section-title">Completed Side Quests</h3>
              <div class="quest-log space-y-2">
                
                <div class="quest-item completed" onclick="toggleQuestDetails(this)">
                  <div class="quest-header">
                    <div class="quest-icon">
                      <i class="fas fa-heart text-pink-400"></i>
                    </div>
                    <div class="quest-info">
                      <h4 class="quest-title">Guardian of Young Minds</h4>
                      <p class="quest-type">Empathy Quest • Special Education</p>
                      <div class="quest-rewards">
                        <span class="reward">+15 Empathy</span>
                        <span class="reward">+10 Patience</span>
                        <span class="reward">+5 Teaching</span>
                      </div>
                    </div>
                    <div class="quest-status">
                      <i class="fas fa-check-circle text-green-400"></i>
                    </div>
                  </div>
                  <div class="quest-details">
                    <p class="quest-description">
                      Assisted as a yoga instructor at a specialized school for autistic children. 
                      Demonstrated exceptional attention to detail and infinite patience while guiding 
                      students through exercises, helping create a calming and supportive environment.
                    </p>
                    <div class="quest-achievements">
                      <span class="achievement">🏆 Patience Master</span>
                      <span class="achievement">🎯 Detail Oriented</span>
                      <span class="achievement">💝 Special Needs Advocate</span>
                    </div>
                  </div>
                </div>

                <div class="quest-item completed" onclick="toggleQuestDetails(this)">
                  <div class="quest-header">
                    <div class="quest-icon">
                      <i class="fas fa-hands-helping text-blue-400"></i>
                    </div>
                    <div class="quest-info">
                      <h4 class="quest-title">Community Feast Coordinator</h4>
                      <p class="quest-type">Service Quest • Community Outreach</p>
                      <div class="quest-rewards">
                        <span class="reward">+20 Leadership</span>
                        <span class="reward">+15 Teamwork</span>
                        <span class="reward">+10 Communication</span>
                      </div>
                    </div>
                    <div class="quest-status">
                      <i class="fas fa-check-circle text-green-400"></i>
                    </div>
                  </div>
                  <div class="quest-details">
                    <p class="quest-description">
                      Coordinated meal distribution for over 100 blue-collar workers, developing 
                      effective communication strategies and advanced teamwork skills through 
                      collaborative volunteer efforts.
                    </p>
                    <div class="quest-achievements">
                      <span class="achievement">👥 Team Coordinator</span>
                      <span class="achievement">📢 Communication Expert</span>
                      <span class="achievement">🍽️ Community Helper</span>
                    </div>
                  </div>
                </div>

                <div class="quest-item completed" onclick="toggleQuestDetails(this)">
                  <div class="quest-header">
                    <div class="quest-icon">
                      <i class="fas fa-hand-holding-heart text-red-400"></i>
                    </div>
                    <div class="quest-info">
                      <h4 class="quest-title">Life Saver's Assistant</h4>
                      <p class="quest-type">Healthcare Quest • Blood Donation</p>
                      <div class="quest-rewards">
                        <span class="reward">+10 Organization</span>
                        <span class="reward">+15 Community Service</span>
                        <span class="reward">+5 Healthcare Support</span>
                      </div>
                    </div>
                    <div class="quest-status">
                      <i class="fas fa-check-circle text-green-400"></i>
                    </div>
                  </div>
                  <div class="quest-details">
                    <p class="quest-description">
                      Managed certificate distribution at a community blood donation camp, 
                      ensuring smooth operations and supporting this vital healthcare initiative 
                      that saves lives in the community.
                    </p>
                    <div class="quest-achievements">
                      <span class="achievement">📋 Event Organizer</span>
                      <span class="achievement">❤️ Life Supporter</span>
                      <span class="achievement">🎫 Certificate Manager</span>
                    </div>
                  </div>
                </div>

                <div class="quest-item completed" onclick="toggleQuestDetails(this)">
                  <div class="quest-header">
                    <div class="quest-icon">
                      <i class="fas fa-globe text-green-400"></i>
                    </div>
                    <div class="quest-info">
                      <h4 class="quest-title">Diplomatic Interviewer</h4>
                      <p class="quest-type">Diplomatic Quest • International Relations</p>
                      <div class="quest-rewards">
                        <span class="reward">+25 Communication</span>
                        <span class="reward">+20 Cultural Awareness</span>
                        <span class="reward">+15 Interview Skills</span>
                      </div>
                    </div>
                    <div class="quest-status">
                      <i class="fas fa-check-circle text-green-400"></i>
                    </div>
                  </div>
                  <div class="quest-details">
                    <p class="quest-description">
                      Conducted an insightful interview with former New Zealand Parliament member 
                      Mr. Kanwaljit Singh Bakshi, exploring India's role as a soft power in global 
                      politics and international relations.
                    </p>
                    <div class="quest-achievements">
                      <span class="achievement">🎤 Master Interviewer</span>
                      <span class="achievement">🌏 Global Perspective</span>
                      <span class="achievement">🤝 Diplomatic Relations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Character Bio -->
            <div class="character-bio-section">
              <h3 class="section-title">Character Background</h3>
              <div class="bio-content">
                <p class="bio-text">
                  A passionate game developer with a love for creating interactive experiences. 
                  Currently on a quest for knowledge at the University of Sydney, pursuing a 
                  Bachelor of Advanced Computing with expertise in Computer Science and Software Development.
                </p>
                <p class="bio-text">
                  Achieved the prestigious rank of Arena Candidate Master in chess, demonstrating 
                  strategic thinking and tactical prowess. Actively seeking new adventures in 
                  game development, software engineering, and web development.
                </p>
                
                <div class="character-achievements">
                  <h4 class="achievements-subtitle">Notable Achievements</h4>
                  <div class="achievement-badges">
                    <span class="badge">💻 16+ Github Projects</span>
                    <span class="badge">🏆 500+ Bugs Squashed</span>
                    <span class="badge">♟️ Arena Candidate Master</span>
                    <span class="badge">📈 ~1630 Chess Rating</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Download Resume Button -->
            <div class="character-actions">
              <a href="assets/Tanisha Kothari-Game Developer.pdf" target="_blank" rel="noopener noreferrer" 
                class="character-sheet-btn">
                <i class="fas fa-scroll mr-2"></i>
                Download Character Sheet (Resume)
              </a>
            </div>
          </div>
        `,
      },
    },
    contact: {
      background: "bg-gradient-to-b from-green-900 to-blue-900",
      content: {
        title: "Contact Portal",
        description: "Connect with me through these magical portals:",
        socialLinks: [
          {
            name: "Email",
            icon: '<i class="fas fa-envelope"></i>',
            link: "mailto:kotharitanisha50@gmail.com",
            color: "hover:bg-red-700"
          },
          {
            name: "LinkedIn",
            icon: '<i class="fab fa-linkedin"></i>',
            link: "https://www.linkedin.com/in/TanishaKothariGD",
            color: "hover:bg-blue-700"
          },
          {
            name: "GitHub",
            icon: '<i class="fab fa-github"></i>',
            link: "https://github.com/TanishaKothari",
            color: "hover:bg-gray-700"
          }
        ]
      }
    }
  };

  // Add traditional view button to navigation
  const nav = document.createElement('div');
  nav.className = 'fixed top-1 right-1 z-50';
  nav.innerHTML = `
    <button onclick="toggleGameMode()" 
            class="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all">
      <i class="fas fa-desktop"></i>
      <span>Switch to Traditional View</span>
    </button>
  `;
  document.body.appendChild(nav);

  let currentScene = "intro";
  let inventory = [];
  let unlockedAreas = ["intro"];

  const unlockArea = (scene) => {
    if (!unlockedAreas.includes(scene)) {
      unlockedAreas.push(scene);
      inventory.push(`${scene} key`);
      renderScene();
    }
  };

  function updateProjectDescription() {
    const total = scenes.projects.content.items.length;
    const discovered = gameState.discoveredProjects.length;
    const tip = discovered < total
      ? "💡 Click the treasure chests to reveal each project's details!"
      : "💡 Discover the skills behind these projects in the Skills Chamber!";
    const html = `Unearth hidden gems in the Project Vault:<br>
    <small class="text-blue-300">${tip}</small>`;
    const desc = document.querySelector('.content-container p');
    if (desc) desc.innerHTML = html;
  }

  const renderScene = () => {
    const scene = scenes[currentScene];

    const gradientMap = {
      "bg-gradient-to-b from-purple-900 to-blue-900": gameState.darkMode ?
        "var(--bg-gradient)" : "linear-gradient(to bottom, #4c1d95, #1e40af)",
      "bg-gradient-to-r from-purple-900 to-blue-900": gameState.darkMode ?
        "var(--bg-gradient)" : "linear-gradient(to right, #4c1d95, #1e40af)",
      "bg-gradient-to-r from-blue-900 to-purple-900": gameState.darkMode ?
        "var(--bg-gradient)" : "linear-gradient(to right, #1e40af, #581c87)",
      "bg-gradient-to-b from-blue-900 to-indigo-900": gameState.darkMode ?
        "var(--bg-gradient)" : "linear-gradient(to bottom, #1e40af, #312e81)",
      "bg-gradient-to-b from-indigo-900 to-violet-900": gameState.darkMode ?
        "var(--bg-gradient)" : "linear-gradient(to bottom, #312e81, #5b21b6)",
      "bg-gradient-to-b from-violet-900 to-purple-900": gameState.darkMode ?
        "var(--bg-gradient)" : "linear-gradient(to bottom, #5b21b6, #581c87)",
      "bg-gradient-to-b from-green-900 to-blue-900": gameState.darkMode ?
        "var(--bg-gradient)" : "linear-gradient(to bottom, #064e3b, #1e40af)",
      "bg-gradient-to-b from-green-900 to-purple-900": gameState.darkMode ?
        "var(--bg-gradient)" : "linear-gradient(to bottom, #064e3b, #5b21b6)",
      "bg-gradient-to-b from-purple-900 to-indigo-900": gameState.darkMode ?
        "var(--bg-gradient)" : "linear-gradient(to bottom, #4c1d95, #312e81)"
    };

    // if we're already on “projects” and the grid exists, just update text
    if (currentScene === 'projects' && document.querySelector('.project-grid')) {
      updateProjectDescription();
    }

    // Add a fade-out animation to the current content
    app.style.opacity = "0";

    setTimeout(() => {
      app.innerHTML = `
        <div class="min-h-screen p-8 text-white content-container" style="background: ${gradientMap[scene.background]}">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold mb-6 animate-fade-in">${scene.content.title}</h1>
            <p class="text-xl mb-8 animate-fade-in">${scene.content.description}</p>

            ${currentScene === "gamedev" ? `
              <div class="space-y-8 animate-fade-in">
                <!-- Timeline -->
                <div class="mb-8">
                  <h3 class="text-xl font-semibold mb-4">Development Timeline</h3>
                  <div class="space-y-4">
                    ${scene.content.devJourney?.map(milestone => `
                      <div class="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div class="text-2xl">${milestone.icon}</div>
                        <div>
                          <div class="font-bold">${milestone.year}</div>
                          <div class="text-lg text-blue-300">${milestone.milestone}</div>
                          <div class="text-sm text-gray-300">${milestone.details}</div>
                        </div>
                      </div>
                    `).join("") || ""}
                  </div>
                </div>
          
                <!-- Engine Expertise -->
                <div>
                  <h3 class="text-xl font-semibold mb-4">Engine Expertise</h3>
                  <div class="grid md:grid-cols-3 gap-4">
                    ${scene.content.engineExpertise?.map(engine => `
                      <div class="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div class="text-2xl mb-2">${engine.icon}</div>
                        <div class="font-bold mb-2">${engine.name}</div>
                        <div class="text-sm text-blue-300 mb-2">
                          ${engine.projects} Projects Completed
                        </div>
                        <div class="text-sm">
                          ${engine.skills.join(" • ")}
                        </div>
                      </div>
                    `).join("") || ""}
                  </div>
                </div>
              </div>
            ` : ""}

            ${currentScene === "projects" ? `
              <div class="project-grid grid gap-6 md:grid-cols-3 animate-fade-in">
                ${scene.content.items?.map(getTreasureChestHTML).join("") || ""}
              </div>
            ` : ""}

            ${currentScene === "skills" ? `
                ${scene.content.skillCategories?.map(category => `
                  <div class="skill-scroll parchment mb-8 animate-fade-in${gameState.unlockedSkillCategories.includes(category.title) ? ' open' : ''}"
                      onclick="toggleSkillScroll(this,'${category.title}')">
                    <h3 class="text-2xl font-bold mb-4">${category.title}</h3>
                    <div class="scroll-content space-y-4">
                      ${category.skills?.map(skill => `
                        <div class="transform hover:scale-102 transition-all">
                          <div class="flex items-center justify-center gap-4 mb-2">
                            ${skill.icon}
                            <span class="text-lg font-semibold">${skill.name}</span>
                          </div>
                          <div class="progress-container">
                            <div class="w-full bg-gray-700 rounded-full h-4">
                              <div class="bg-blue-500 rounded-full h-4 progress-bar" style="width: 0%"></div>
                            </div>
                          </div>
                        </div>
                      `).join('') || ""}
                    </div>
                  </div>
                `).join('') || ""}
            ` : ""}

            ${currentScene === "academics" ? `
              <div class="quest-log-container animate-fade-in">
                <!-- Main Quest: University Education -->
                <div class="main-quest-section mb-8">
                  <h3 class="section-title mb-6">
                    <i class="fas fa-crown text-yellow-400 mr-2"></i>
                    Main Quest - University Education
                  </h3>
                  <div class="university-medal-container">
                    ${getUniversityMedalHTML(scene.content.education?.university)}
                  </div>
                </div>

                <!-- Side Quests: Certifications -->
                <div class="side-quests-section">
                  <h3 class="section-title mb-6">
                    <i class="fas fa-scroll text-purple-400 mr-2"></i>
                    Completed Certification Badges
                  </h3>
                  <div class="certification-badges-grid">
                    ${scene.content.education?.certifications?.map((cert, index) =>
        getCertificationBadgeHTML(cert, index)
      ).join('') || ''}
                  </div>
                </div>
              </div>
            ` : ""}

            ${currentScene === "chess" ? `
              <div class="grid md:grid-cols-2 gap-8 animate-fade-in">
                <!-- Achievements -->
                <div>
                  <h3 class="text-xl font-semibold mb-4">Achievements</h3>
                  <div class="trophy-case-grid">
                    ${scene.content.achievements?.map(getTrophyCaseHTML).join("") || ""}
                  </div>
                </div>
          
                <!-- Transferable Skills -->
                <div>
                  <h3 class="text-xl font-semibold mb-4">Transferable Skills</h3>
                  <div class="grid gap-4">
                    ${scene.content.skills?.map(skill => `
                      <div class="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div class="font-semibold">${skill.name}</div>
                        <div class="w-full bg-gray-800 h-2 rounded-full mt-2">
                          <div class="bg-blue-500 h-full rounded-full transition-all duration-1000" 
                               style="width: ${skill.level}%">
                          </div>
                        </div>
                      </div>
                    `).join("") || ""}
                  </div>
                </div>
              </div>
            ` : ""}

            ${currentScene === "experience" ? `
              <div class="adventure-timeline animate-fade-in">
                <div class="timeline-path"></div>
                ${scene.content.timeline?.map((milestone, index) => `
                  <div class="timeline-milestone ${gameState.collectedExperiences.includes(milestone.id) ? 'collected' : ''}"
                      onclick="collectExperience('${milestone.id}', this)"
                      data-milestone="${milestone.id}">
                    <div class="milestone-content">
                      <div class="milestone-card">
                        <div class="milestone-header">
                          <h3 class="milestone-title">${milestone.title}</h3>
                          <p class="milestone-company">${milestone.company}</p>
                          <p class="milestone-period">${milestone.period}</p>
                          <span class="milestone-type">${milestone.type}</span>
                        </div>
                        <div class="milestone-achievements">
                          ${milestone.achievements?.map(achievement => `
                            <span class="achievement-badge">${achievement}</span>
                          `).join('') || ''}
                        </div>
                        <div class="milestone-details">
                          ${milestone.details?.map(detail => `
                            <div class="detail-item">${detail}</div>
                          `).join('') || ''}
                          <div class="milestone-skills">
                            ${milestone.skills?.map(skill => `
                              <span class="skill-tag">${skill}</span>
                            `).join('') || ''}
                          </div>
                        </div>
                      </div>
                      <div class="milestone-flag">
                        ${milestone.icon}
                      </div>
                    </div>
                  </div>
                `).join('') || ''}
              </div>
              
              <div class="timeline-progress">
                <div class="progress-text">
                  Adventure Progress: ${gameState.collectedExperiences.length}/${scene.content.timeline?.length || 0}
                </div>
                <div class="progress-bar-container">
                  <div class="progress-bar-fill" style="width: ${scene.content.timeline?.length ? (gameState.collectedExperiences.length / scene.content.timeline.length) * 100 : 0}%"></div>
                </div>
              </div>
            ` : ""}

            ${currentScene === "about" ? `
              <div class="animate-fade-in">
                  
                <div class="grid gap-6 md:grid-cols-3 mt-8">
                  ${Object.entries(scene.content.stats || {}).map(([stat, value]) => `
                    <div class="bg-white/10 p-6 rounded-lg text-center transform hover:scale-105 transition-all">
                      <div class="text-3xl font-bold mb-2">${value}</div>
                      <div class="text-lg capitalize">${stat.replace("_", " ")}</div>
                    </div>
                  `).join("") || ""}
                </div>
              </div>
            ` : ""}

            ${currentScene === "contact" ? `
              <div class="portal-stone-grid animate-fade-in">
                ${scene.content.socialLinks?.map(getPortalStoneHTML).join("") || ""}
              </div>
            ` : ""}

            <div class="mt-12 space-y-4 animate-fade-in">
              ${scene.content.choices ?
          scene.content.choices.map(choice => `
                  <button onclick="handleChoice('${choice.nextScene}')"
                          class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg w-full text-left transition-all hover:translate-x-2">
                    <i class="fas fa-chevron-right"></i>
                    <span>${choice.text}</span>
                  </button>
                `).join("") : ""}
              ${currentScene !== "intro" ? `
                <button onclick="handleChoice('intro')"
                        class="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg w-full text-left transition-all hover:translate-x-2">
                  <i class="fas fa-chevron-right"></i>
                  <span>Return to Main Hall</span>
                </button>
              ` : ""}
            </div>

            <div class="mt-8 pt-8 border-t border-white/20 animate-fade-in">
              <div class="flex items-center gap-4">
                <div class="text-sm">
                  Inventory (${inventory.length}):
                  <span class="ml-2 text-blue-300">${inventory.join(", ")}</span>
                </div>
                <div class="text-sm">
                  Areas Discovered: ${unlockedAreas.length}/${Object.keys(scenes).length}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Trigger progress bar animations
      if (currentScene === "skills") {
        setTimeout(() => {
          document.querySelectorAll('.progress-bar').forEach((bar, index) => {
            const skill = scene.content.skillCategories?.flatMap(category => category.skills || [])[index];
            if (skill) bar.style.width = `${skill.level}%`;
          });
        }, 100);
      }

      // Fade in the new content
      app.style.opacity = "1";
    }, 300); // Wait for fade out before updating content
  };

  window.handleChoice = (nextScene) => {
    unlockArea(nextScene);
    currentScene = nextScene;
    renderScene();
    checkAchievements();
  };

  window.discoverProject = (projectName) => {
    const wrapper = document.querySelector(`.chest-wrapper[data-project="${projectName}"]`);
    if (!wrapper || wrapper.classList.contains('opened')) return;

    // Add to discovered projects
    if (!gameState.discoveredProjects.includes(projectName)) {
      gameState.discoveredProjects.push(projectName);
    }

    // Visual effects
    wrapper.classList.add('opened');

    // Get chest position
    const chest = wrapper.querySelector('.treasure-chest');
    const rect = chest.getBoundingClientRect();

    // Particle effect
    GameSystems.particleSystem.burst(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      15,
      'collect'
    );

    // XP reward
    GameSystems.awardXP(15);

    setTimeout(syncGridAlign, 650);

    // Update achievements
    checkAchievements();

    // if user is viewing projects, refresh only the description
    if (currentScene === 'projects') {
      updateProjectDescription();
    }
  };

  // sync the grid’s align-bottom class
  function syncGridAlign() {
    const grid = document.querySelector(".project-grid");
    if (!grid) return;
    const anyOpen = !!grid.querySelector(".chest-wrapper.opened");
    grid.classList.toggle("align-bottom", anyOpen);
  }

  // Add resize observer
  new ResizeObserver(entries => {
    syncGridAlign();
  }).observe(document.querySelector("#app"));

  // Open skill scroll and unlock category
  window.toggleSkillScroll = (el, title) => {
    if (!el.classList.contains('open')) {
      el.classList.add('open');
      if (!gameState.unlockedSkillCategories.includes(title)) {
        gameState.unlockedSkillCategories.push(title);
        GameSystems.awardXP(20);
        showAchievementNotification(`📜 Unlocked ${title}`, 20);
        checkAchievements();
      }
    }
  };

  window.collectAcademicQuest = (questId, element) => {
    if (!gameState.completedAcademicQuests.includes(questId)) {
      gameState.completedAcademicQuests.push(questId);

      // Find the quest data to get XP reward
      let quest = scenes.academics.content.education.certifications.find(cert => cert.id === questId);
      // If not found in certifications, check universities
      if (!quest && questId.startsWith('university-medal-')) {
        const universityIndex = parseInt(questId.split('-')[2]);
        quest = scenes.academics.content.education.university[universityIndex];
      }

      if (quest) {
        // Award XP
        GameSystems.awardXP(25);

        // Visual effects
        const isMedal = questId.startsWith('university-medal-');
        const wrapperClass = isMedal ? 'medal-completed' : 'badge-collected';
        const svgSelector = isMedal ? '.medal-svg' : '.badge-svg';
        const glowFilter = isMedal
          ? 'drop-shadow(0 0 10px #fbbf24)'
          : 'drop-shadow(0 0 8px #8b5cf6)';

        // add class for future re‐renders
        element.classList.add(wrapperClass);
        // force immediate glow
        const svg = element.querySelector(svgSelector);
        if (svg) svg.style.filter = glowFilter;

        // Get element position for particle effect
        const targetElement = element.querySelector(questId.startsWith('university-medal-') ? '.medal-svg' : '.badge-svg');
        const rect = targetElement.getBoundingClientRect();
        const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Particle effect
        GameSystems.particleSystem.burst(
          rect.left + rect.width / 2 + scrollX,
          rect.top + rect.height / 2 + scrollY,
          15,
          'collect'
        );

        // Show achievement notification
        showAchievementNotification(`🏅 Badge Earned: ${quest.name}`, 25);

        // Check for Scholar achievement
        checkAchievements();
      }
    }
  };

  window.toggleAcademicDetails = (detailsId) => {
    const details = document.getElementById(detailsId);
    if (details) {
      // Close any other open details first
      document.querySelectorAll('.medal-details.show, .badge-details.show').forEach(panel => {
        if (panel !== details) {
          panel.classList.remove('show');
        }
      });

      details.classList.toggle('show');
    }
  };

  // Close details when clicking outside
  document.addEventListener('click', (event) => {
    // Check if click is outside any badge/medal or their details
    const isInsideBadgeArea = event.target.closest('.badge-wrapper, .medal-wrapper, .badge-details, .medal-details');

    if (!isInsideBadgeArea) {
      document.querySelectorAll('.medal-details.show, .badge-details.show').forEach(panel => {
        panel.classList.remove('show');
        panel.style.transform = ''; // Reset transforms
      });
    }
  });

  // called when user clicks a trophy
  window.collectChessTrophy = (idx) => {
    if (!gameState.collectedTrophies.includes(idx)) {
      gameState.collectedTrophies.push(idx);
      checkAchievements();
    }
  };

  // build one trophy’s HTML
  const getTrophyCaseHTML = (ach, idx) => {
    // prepare the four possible lines and filter out empty ones
    const lines = [
      { text: ach.date, fill: '#60A5FA' },
      { text: ach.rating, fill: '#34D399' },
      { text: ach.count, fill: '#C084FC' },
      { text: ach.details, fill: '#071D49' }
    ].filter(l => l.text);

    // line-height is 1.2em at font-size 20 => 24px
    const fontSize = 20;
    const lineHeight = fontSize * 1.2;
    // reserve a fixed slot for up to 4 wrapped lines
    const maxLines = 4;
    const boxHeight = lineHeight * maxLines;
    // vertically center around y=450
    const centerY = 450;
    const yPos = centerY - boxHeight / 2;

    return `
      <div class="trophy-wrapper${gameState.collectedTrophies.includes(idx) ? ' opened' : ''}"
          onclick="collectChessTrophy(${idx}); this.classList.add('opened')">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="180 350 400 420" xml:space="preserve">

          <defs>
            <linearGradient id="woodGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" style="stop-color:#8B4513; stop-opacity:1" />
              <stop offset="100%" style="stop-color:#A0522D; stop-opacity:1" />
            </linearGradient>
            <pattern id="woodTexture" patternUnits="userSpaceOnUse" width="40" height="40">
              <rect width="40" height="40" fill="url(#woodGradient)"/>
              <path d="M0,10 Q20,20 40,10 M0,30 Q20,40 40,30" stroke="#5C3317" stroke-width="1" fill="none"/>
            </pattern>
          </defs>

        <g class="trophy-base">
          <g>
            <rect x="180.9" y="645.1" fill-rule="evenodd" clip-rule="evenodd" fill="url(#woodTexture)" width="300.6" height="75.7"/>
            <rect x="310.9" y="645.1" fill-rule="evenodd" clip-rule="evenodd" fill="url(#woodTexture)" width="150.6" height="75.7"/>
          </g>
          <text x="331.2" y="695.9" text-anchor="middle" fill="#000000" font-family="'Lato-Light'" font-size="30">${ach.title}</text>
        </g>
        <g id="trophy" class="trophies">
          <g>
            <g>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FEDD06" d="M228.8,360.6c-21.3,109.9,21.5,148.7,84.3,211.6h16.1V355.6
                c-30.5,0-61,0-91.5,0C233.3,355.6,230.2,357,228.8,360.6z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FEDD06" d="M228.2,368.1h-14.7c-20.5,0.1-24,6.7-25.2,11.7
                c-10.2,51.4,11.7,95.7,77.6,119.6c-6.6-7.3-12.6-14.5-17.9-21.9c-38.3-19.7-47.6-50.4-38.6-90.3c1.6-4.2,5.9-6.5,13.3-6.4h3.6
                C226.8,376.7,227.4,372.5,228.2,368.1z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDD40F" d="M260.3,645.3h68.9v-11.8h-68.9c-1.8,0-3.2,1.4-3.2,3.2v5.3
                C257.1,643.9,258.5,645.3,260.3,645.3z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDD40F" d="M294.5,621.8h34.7v11.8h-34.7c-1.8,0-3.2-1.4-3.2-3.2V625
                C291.2,623.3,292.7,621.8,294.5,621.8z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDD40F" d="M303.2,621.8h26v-11.8v-37.8h-16c0,48-13.2,36.1-13.2,41.1v5.3
                C300,620.4,301.4,621.8,303.2,621.8z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDD40F" d="M429.5,360.6c21.3,109.9-21.5,148.7-84.3,211.6h-16.1V355.6
                c30.5,0,61,0,91.5,0C425,355.6,428.2,357,429.5,360.6z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDD40F" d="M430.2,368.1h14.7c20.5,0.1,24,6.7,25.2,11.7
                c10.2,51.4-11.7,95.7-77.6,119.6c6.6-7.3,12.6-14.5,17.9-21.9c38.3-19.7,47.6-50.4,38.6-90.3c-1.6-4.2-5.9-6.5-13.3-6.4H432
                C431.6,376.7,430.9,372.5,430.2,368.1z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FBC51E" d="M398.1,645.3h-68.9v-11.8h68.9c1.8,0,3.2,1.4,3.2,3.2v5.3
                C401.3,643.9,399.8,645.3,398.1,645.3z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDD40F" d="M363.9,621.8h-34.7v11.8h34.7c1.8,0,3.2-1.4,3.2-3.2V625
                C367.1,623.3,365.7,621.8,363.9,621.8z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FBC51E" d="M355.2,621.8h-26v-11.8v-37.8h16c0,48,13.2,36.1,13.2,41.1v5.3
                C358.4,620.4,357,621.8,355.2,621.8z"/>
            </g>
            
            <foreignObject x="230" y="${yPos}" width="200" height="${boxHeight}">
              <div xmlns="http://www.w3.org/1999/xhtml"
                  style="
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      text-align: center;
                      width: 100%;
                      height: 100%;
                      font: ${fontSize}px 'Lato-Light';
                      line-height: ${lineHeight}px;
                      overflow-wrap: break-word;
                  ">
                ${lines.map(l => `<div style="color: ${l.fill}">${l.text}</div>`).join('')}
              </div>
            </foreignObject>
          </g>
        </g>
        </svg>
      </div>
    `
  };

  window.toggleQuestDetails = (questElement) => {
    questElement.classList.toggle('expanded');

    // Award XP for exploring quest details
    if (questElement.classList.contains('expanded')) {
      GameSystems.awardXP(5);

      // Add sparkle effect
      const rect = questElement.getBoundingClientRect();

      // Scroll offsets to get correct absolute position
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      GameSystems.particleSystem.burst(
        rect.left + rect.width / 2 + scrollX,
        rect.top + rect.height / 2 + scrollY,
        5,
        'collect'
      );
    }
  };

  window.collectExperience = (experienceId, element) => {
    if (!gameState.collectedExperiences.includes(experienceId)) {
      gameState.collectedExperiences.push(experienceId);

      // Visual effects
      element.classList.add('collected');

      // Get milestone position for particle effect
      const flag = element.querySelector('.milestone-flag');
      const rect = flag.getBoundingClientRect();

      // Scroll offsets to get correct absolute position
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Particle effect
      GameSystems.particleSystem.burst(
        rect.left + rect.width / 2 + scrollX,
        rect.top + rect.height / 2 + scrollY,
        12,
        'collect'
      );

      // XP reward
      GameSystems.awardXP(25);
      showAchievementNotification(`🎯 Experience Unlocked: ${experienceId}`, 25);

      // Update progress bar
      const progressBar = document.querySelector('.progress-bar-fill');
      const totalExperiences = scenes.experience.content.timeline.length;
      const collectedCount = gameState.collectedExperiences.length;

      if (progressBar) {
        progressBar.style.width = `${(collectedCount / totalExperiences) * 100}%`;
      }

      // Update progress text
      const progressText = document.querySelector('.progress-text');
      if (progressText) {
        progressText.textContent = `Adventure Progress: ${collectedCount}/${totalExperiences}`;
      }

      // Check for completion achievement
      checkAchievements();
    }
  };

  function getPortalStoneHTML(social) {
    return `
      <div class="portal-stone" onclick="window.open('${social.link}', '_blank')" title="${social.name}">
        <div class="portal-icon">${social.icon}</div>
        <span class="rune-label">${social.name}</span>
      </div>
    `;
  }

  renderScene(); // Initial page load

  // Add traditional view toggle
  function toggleGameMode() {
    window.location.href = 'traditional.html';
  }

  // Make toggleGameMode globally available
  window.toggleGameMode = toggleGameMode;

  const toggleButton = document.querySelector("button[onclick='toggleDarkMode()']");
  toggleButton.addEventListener("click", toggleDarkMode);

  function toggleDarkMode() {
    gameState.darkMode = !gameState.darkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', gameState.darkMode); // Save dark mode state
    renderScene(); // Re-render the scene to update gradients
    checkAchievements();
  }

  // Check achievements
  window.checkAchievements = () => {
    Object.values(GameSystems.achievements).forEach(achievement => {
      if (achievement.tiers) {
        // Handle tiered achievements
        switch (achievement.id) {
          case "pathfinder":
            achievement.progress = unlockedAreas.length;
            break;
          case "gemCollector":
            achievement.progress = gameState.collectedGems;
            break;
        }

        // Check each tier
        achievement.tiers.forEach(tier => {
          if (!tier.unlocked && achievement.progress >= tier.requirement) {
            tier.unlocked = true;
            GameSystems.awardXP(tier.xpReward);
            showAchievementNotification(tier.name, tier.xpReward);
          }
        });
      } else {
        // Handle regular achievements
        if (!achievement.unlocked) {
          switch (achievement.id) {
            case "nightOwl":
              if (gameState.darkMode) {
                achievement.unlocked = true;
                GameSystems.awardXP(achievement.xpReward);
                showAchievementNotification(achievement.name, achievement.xpReward);
              }
              break;
            case "skillMaster":
              if (!gameState.player.achievements.some(a => a.id === "skillMaster")
                && gameState.unlockedSkillCategories.length === scenes.skills.content.skillCategories.length) {
                achievement.unlocked = true;
                GameSystems.awardXP(achievement.xpReward);
                showAchievementNotification(achievement.name, achievement.xpReward);
              }
              break;
            case "artifactCollector":
              const projectCount = scenes.projects.content.items.length;
              if (gameState.discoveredProjects.length >= projectCount && !achievement.unlocked) {
                achievement.unlocked = true;
                GameSystems.awardXP(achievement.xpReward);
                showAchievementNotification(achievement.name, achievement.xpReward);
              }
              break;
            case "scholar":
              // Get all academic quests (both certifications and universities)
              const totalCertifications = scenes.academics.content.education.certifications.length;
              const totalUniversities = scenes.academics.content.education.university.length; // Now always an array
              const totalAcademicQuests = totalCertifications + totalUniversities;

              // Count completed quests
              const completedCertifications = gameState.completedAcademicQuests.filter(id =>
                scenes.academics.content.education.certifications.some(cert => cert.id === id)
              ).length;
              const completedUniversities = gameState.completedAcademicQuests.filter(id =>
                id.startsWith('university-medal-')
              ).length;
              const totalCompleted = completedCertifications + completedUniversities;

              if (totalCompleted >= totalAcademicQuests && !achievement.unlocked) {
                achievement.unlocked = true;
                GameSystems.awardXP(achievement.xpReward);
                showAchievementNotification(achievement.name, achievement.xpReward);
              }
              break;
            case "chessMaster":
              if (gameState.collectedTrophies.length === scenes.chess.content.achievements.length
                && !achievement.unlocked) {
                achievement.unlocked = true;
                GameSystems.awardXP(achievement.xpReward);
                showAchievementNotification(achievement.name, achievement.xpReward);
              }
              break;
            case "experiencedAdventurer":
              const totalExperiences = scenes.experience.content.timeline?.length || 0;
              if (gameState.collectedExperiences.length >= totalExperiences && !achievement.unlocked) {
                achievement.unlocked = true;
                GameSystems.awardXP(achievement.xpReward);
                showAchievementNotification(achievement.name, achievement.xpReward);
              }
              break;
          }
        }
      }
    });
    updateAchievementsUI();
  };

  // Update achievements UI
  const updateAchievementsUI = () => {
    const achievementsList = document.querySelector('.achievements-list');
    if (achievementsList) {
      const fragment = document.createDocumentFragment();
      achievementsList.innerHTML = '';
      Object.values(GameSystems.achievements).forEach(achievement => {
        if (achievement.tiers) {
          // Find the highest unlocked tier and next tier
          const highestUnlockedTier = [...achievement.tiers].reverse()
            .find(tier => tier.unlocked);
          const nextTier = achievement.tiers.find(t => !t.unlocked);

          if (nextTier) {
            // Show only the next tier with progress
            const progressItem = document.createElement('li');
            progressItem.classList.add('achievement-item', 'achievement-progress');
            progressItem.innerHTML = `
              ${nextTier.icon}
              <div class="flex-1">
                <span>${nextTier.name}</span>
                <div class="w-full bg-gray-700 h-2 rounded-full mt-1">
                  <div class="bg-blue-500 h-full rounded-full transition-all" 
                       style="width: ${(achievement.progress / nextTier.requirement) * 100}%">
                  </div>
                </div>
              </div>
              <span class="text-sm text-gray-400">${achievement.progress}/${nextTier.requirement}</span>
            `;
            fragment.appendChild(progressItem);
          } else if (highestUnlockedTier) {
            // If all tiers completed, show only the highest tier
            const achievementItem = document.createElement('li');
            achievementItem.classList.add('achievement-item');
            achievementItem.innerHTML = `
              ${highestUnlockedTier.icon}
              <span>${highestUnlockedTier.name}</span>
              <div class="achievement-tooltip">
                <div class="tooltip-title">${highestUnlockedTier.name}</div>
                <div class="tooltip-desc">${achievement.description}</div>
                <div class="tooltip-xp">+${highestUnlockedTier.xpReward} XP</div>
              </div>
            `;
            fragment.appendChild(achievementItem);
          }
        } else {
          if (achievement.unlocked) {
            const achievementItem = document.createElement('li');
            achievementItem.classList.add('achievement-item');
            achievementItem.innerHTML = `
            ${achievement.icon}
            <span>${achievement.name}</span>
            <div class="achievement-tooltip">
              <div class="tooltip-title">${achievement.name}</div>
              <div class="tooltip-desc">${achievement.description}</div>
              <div class="tooltip-xp">+${achievement.xpReward} XP</div>
            </div>
          `;
            fragment.appendChild(achievementItem);
          }
        }
      });
      achievementsList.appendChild(fragment);
    }
  };

  const notificationQueue = [];
  let isProcessingQueue = false;

  // Modified showAchievementNotification function
  const showAchievementNotification = (name, xp) => {
    // Add notification to queue
    notificationQueue.push({ name, xp });

    // Start processing queue if not already processing
    if (!isProcessingQueue) {
      processNotificationQueue();
    }
  };

  // Add new function to process notification queue
  const processNotificationQueue = async () => {
    isProcessingQueue = true;

    while (notificationQueue.length > 0) {
      const { name, xp } = notificationQueue.shift();

      // Create notification element
      const notification = document.createElement('div');
      notification.className = 'fixed z-50 animate-fade-in notification-toast';

      // Position notifications based on screen size
      if (window.innerWidth <= 768) {
        notification.classList.add('bottom-4', 'left-1/2', '-translate-x-1/2');
      } else {
        notification.classList.add('bottom-4', 'right-4');
      }

      // Style notification
      notification.innerHTML = `
      <div class="bg-black/80 text-white p-4 rounded-lg animate-fade-in">
        <div class="font-bold">🏆 Achievement Unlocked!</div>
        <div>${name}</div>
        <div class="text-yellow-400">+${xp} XP</div>
      </div>
    `;

      // Add to DOM
      document.body.appendChild(notification);

      // Wait for animation and display time
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Fade out animation
      notification.style.opacity = '0';
      await new Promise(resolve => setTimeout(resolve, 300));

      // Remove from DOM
      notification.remove();

      // Small delay between notifications
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    isProcessingQueue = false;
  };

  // Initialize collectibles
  setInterval(() => {
    requestAnimationFrame(GameSystems.createRandomCollectible);
  }, Math.random() * 5000 + 5000);
});

/**
 * Returns the full 3D chest + toggle markup for a project
 */
function getTreasureChestHTML(project) {
  const isDiscovered = gameState.discoveredProjects.includes(project.name);

  return `
    <div class="chest-wrapper ${isDiscovered ? 'opened' : ''}" 
         data-project="${project.name}"
         onclick="if(!this.classList.contains('opened')) discoverProject('${project.name}')">
      <div class="chest-container">
        <div class="treasure-chest">
            <div class="lid">
              <div class="lid-left">
                <div class="side-panel"></div>
                <div class="side-panel"></div>
                <div class="side-panel"></div>
                <div class="side-panel"></div>
                <div class="side-panel"></div>
              </div>
              <div class="lid-panels">
                <div class="panel" id="panel-0">
                  <div class="board top"></div>
                  <div class="board bottom"></div>
                  <div class="iron-band left">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band middle">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band right">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </div>
                <div class="panel" id="panel-1">
                  <div class="board top"></div>
                  <div class="board bottom"></div>
                  <div class="iron-band left">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band middle">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band right">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </div>
                <div class="panel" id="panel-2">
                  <div class="board top"></div>
                  <div class="board bottom"></div>
                  <div class="iron-band left">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band middle">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band right">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </div>
                <div class="panel" id="panel-3">
                  <div class="board top"></div>
                  <div class="board bottom"></div>
                  <div class="iron-band left">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band middle">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band right">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </div>
                <div class="panel" id="panel-4">
                  <div class="board top"></div>
                  <div class="board bottom"></div>
                  <div class="iron-band left">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band middle">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <div class="iron-band right">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
              <div class="lid-right">
                <div class="side-panel"></div>
                <div class="side-panel"></div>
                <div class="side-panel"></div>
                <div class="side-panel"></div>
                <div class="side-panel"></div>
              </div>
            </div>
            <div class="chest">
              <div class="front-panel">
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="iron-bars">
                  <div class="top-bar iron-bar long">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="bottom-bar iron-bar long">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="middle-bar iron-bar short">
                    <div class="lock">
                      <div class="keyhole"></div>
                    </div>
                  </div>
                  <div class="left-bar iron-bar short">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="right-bar iron-bar short">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="left-panel">
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="iron-bars">
                  <div class="top-bar iron-bar long">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="bottom-bar iron-bar long">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="left-bar iron-bar short">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="right-bar iron-bar short">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom-panel">
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
              </div>
              <div class="right-panel">
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="iron-bars">
                  <div class="top-bar iron-bar long">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="bottom-bar iron-bar long">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="left-bar iron-bar short">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="right-bar iron-bar short">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="back-panel">
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="side-chest-panel"></div>
                <div class="iron-bars">
                  <div class="top-bar iron-bar long">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="middle-bar iron-bar short"></div>
                  <div class="bottom-bar iron-bar long">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="left-bar iron-bar short">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                  <div class="right-bar iron-bar short">
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                    <div class="circle-cont">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div class="project-info-card">
          <div class="project-info-content">
            <div class="flex items-center gap-4 mb-4">
              ${project.icon}
              <h3 class="text-xl font-bold">${project.name}</h3>
            </div>
            <div class="flex items-center gap-2 mb-2" style="color: yellow">
              <i class="fas fa-code"></i>
              <span>${project.tech}</span>
            </div>
            <p class="mb-4">${project.description}</p>
            <div class="flex items-center gap-4" style="color: yellow">
              <a href="${project.link}" target="_blank" rel="noopener noreferrer"
                  class="flex items-center gap-2 hover:text-yellow-200 transition-colors">
                <i class="fab fa-github"></i>
                <span>View Code</span>
              </a>
              ${project.name === "PortalPaths: Maze Multiverse" ? `
                <a href="https://tanishakothari.itch.io/portalpaths-maze-multiverse" target="_blank" rel="noopener noreferrer"
                    class="flex items-center gap-2 hover:text-yellow-200 transition-colors">
                  <i class="fas fa-external-link-alt"></i>
                  <span>Play Game</span>
                </a>
              ` : ''}
              ${project.name === "ExploreEase" ? `
                <a href="https://exploreease-4cf23960f067.herokuapp.com/login" target="_blank" rel="noopener noreferrer" 
                    class="flex items-center gap-2 hover:text-yellow-200 transition-colors">
                  <i class="fas fa-external-link-alt"></i>
                  <span>View Project</span>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// University Star Medal HTML Generator
function getUniversityMedalHTML(universityData) {
  if (!universityData) return '';

  return universityData.map((university, index) => {
    const medalId = `university-medal-${index}`;
    const isCompleted = gameState.completedAcademicQuests.includes(medalId);
    const medalClass = isCompleted ? 'medal-completed' : 'medal-in-progress';

    return `
      <div class="medal-wrapper ${medalClass}" onclick="collectAcademicQuest('${medalId}', this); toggleAcademicDetails('${medalId}-details')">
        <div class="star-medal" id="${medalId}">
          <!-- Star Medal SVG -->
          <svg viewBox="0 0 200 240" class="medal-svg">
            <!-- Medal Ribbon -->
            <defs>
              <linearGradient id="ribbonGradient-${index}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
              </linearGradient>
              <linearGradient id="starGradient-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
              </linearGradient>
            </defs>
            
            <!-- Ribbon -->
            <rect x="80" y="0" width="40" height="100" fill="url(#ribbonGradient-${index})" />
            <polygon points="80,100 120,100 100,120" fill="url(#ribbonGradient-${index})" />
            
            <!-- Star Medal -->
            <g transform="translate(100,160) scale(1.2)">
              <polygon points="0,-30 8.7,-9.3 30,-9.3 12.4,3.8 21.1,24.5 0,10.4 -21.1,24.5 -12.4,3.8 -30,-9.3 -8.7,-9.3" 
                       fill="url(#starGradient-${index})" stroke="#b45309" stroke-width="2"/>
              
              <!-- University Icon -->
              <text x="0" y="8" text-anchor="middle" font-size="16" fill="#1e40af" font-family="FontAwesome">&#xf19c;</text>
            </g>
          </svg>
          
          <!-- Medal Details Panel -->
          <div class="medal-details" id="${medalId}-details">
            <div class="medal-info-content">
              <h4 class="medal-title">${university.name}</h4>
              <div class="medal-subtitle">${university.degree}</div>
              <div class="medal-meta">
                <div><strong>Major:</strong> ${university.major}</div>
                ${university.minor ? `<div><strong>Minor:</strong> ${university.minor}</div>` : ''}
                <div><strong>Duration:</strong> ${university.period}</div>
                <div><strong>Status:</strong> ${university.status}</div>
              </div>
              <p class="medal-description">${university.description}</p>
              <div class="medal-rewards">
                ${university.rewards?.map(reward => `
                  <span class="reward-badge">+ ${reward}</span>
                `).join('') || ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Certification Shield Badge HTML Generator
function getCertificationBadgeHTML(cert, index) {
  const isCollected = gameState.completedAcademicQuests.includes(cert.id);
  const badgeClass = isCollected ? 'badge-collected' : 'badge-available';

  return `
    <div class="badge-wrapper ${badgeClass}" onclick="collectAcademicQuest('${cert.id}', this); toggleAcademicDetails('badge-${cert.id}-details')">
      <div class="shield-badge" id="badge-${cert.id}">
        <!-- Shield Badge SVG -->
        <svg viewBox="0 0 120 140" class="badge-svg">
          <defs>
            <linearGradient id="shieldGradient-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#5b21b6;stop-opacity:1" />
            </linearGradient>
            <filter id="glow-${index}">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <!-- Shield Shape -->
          <path d="M60 10 L100 30 L100 70 Q100 100 60 120 Q20 100 20 70 L20 30 Z" 
                fill="url(#shieldGradient-${index})" 
                stroke="#6d28d9" 
                stroke-width="2"
                filter="${isCollected ? `url(#glow-${index})` : 'none'}"/>
          
          <!-- Inner Shield Details -->
          <path d="M60 20 L90 35 L90 65 Q90 85 60 100 Q30 85 30 65 L30 35 Z" 
                fill="rgba(255,255,255,0.1)" 
                stroke="rgba(255,255,255,0.3)" 
                stroke-width="1"/>
          
          <!-- Badge Icon inside shield -->
          <foreignObject x="35" y="35" width="50" height="50">
            <div xmlns="http://www.w3.org/1999/xhtml"
                 style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fbbf24;font-size:1.5rem;">
              ${cert.icon}
            </div>
          </foreignObject>
        </svg>
        
        <!-- Badge Details Panel -->
        <div class="badge-details" id="badge-${cert.id}-details">
          <div class="badge-info-content">
            <h4 class="badge-title">${cert.name}</h4>
            <div class="badge-subtitle">${cert.provider}</div>
            <div class="badge-meta">
              <div><strong>Type:</strong> ${cert.questType}</div>
              <div><strong>Period:</strong> ${cert.date}</div>
              <div><strong>Status:</strong> ${cert.status}</div>
            </div>
            <p class="badge-description">${cert.description}</p>
            <div class="badge-rewards">
              ${cert.rewards?.map(reward => `
                <span class="reward-badge">+ ${reward}</span>
              `).join('') || ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}