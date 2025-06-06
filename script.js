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
  collectedTrophies: []
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
        title: "Quest for Knowledge",
        description: "Exploring the realms of knowledge:",
        education: {
          university: {
            name: "The University of Sydney",
            degree: "Bachelor of Advanced Computing",
            major: "Computer Science",
            minor: "Software Development",
            period: "July 2024 - July 2028"
          },
          certifications: [
            {
              name: "UE5 C++ Developer: Code Your Own Unreal Games",
              provider: "GameDev.tv",
              date: "January 2025",
              icon: '<i class="fas fa-gamepad"></i>'
            },
            {
              name: "C++ Fundamentals: Game Programming For Beginners",
              provider: "GameDev.tv",
              date: "November 2024",
              icon: '<i class="fas fa-code"></i>'
            },
            {
              name: "Electronic Arts Software Engineering Virtual Experience",
              provider: "Forage",
              date: "November 2024",
              icon: '<i class="fas fa-laptop-code"></i>'
            },
            {
              name: "CS50x",
              provider: "Harvard University",
              date: "April 2024 - May 2024",
              icon: '<i class="fas fa-university"></i>'
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
        title: "Search for Experience",
        description: `
          <div class="space-y-8">
            <div class="bg-white/5 p-6 rounded-lg">
              <div class="flex items-center gap-3 mb-2">
                <i class="fas fa-laptop-code text-green-400 text-2xl"></i>
                <span class="font-bold text-lg">Software Developer</span>
              </div>
              <div class="text-blue-300 mb-1">e12.io</div>
              <div class="text-gray-400 mb-2">March 2025 - Present</div>
              <ul class="list-disc ml-6 text-gray-300 space-y-1">
                <li>Built responsive web interfaces in Svelte and SvelteKit for device onboarding, data visualization, and vendor/product management.</li>
                <li>Implemented secure JWT and OAuth 2.0 authentication flows, enabling protected access and role-based control across the platform.</li>
                <li>Integrated with and extended Node.js APIs to support frontend functionality for a scalable IoT data system.</li>
              </ul>
            </div>
            <div class="bg-white/5 p-6 rounded-lg">
              <div class="flex items-center gap-3 mb-2">
                <i class="fas fa-chess text-purple-400 text-2xl"></i>
                <span class="font-bold text-lg">USYD Chess Club General Executive</span>
              </div>
              <div class="text-blue-300 mb-1">University of Sydney</div>
              <div class="text-gray-400 mb-2">May 2025 - Present</div>
              <ul class="list-disc ml-6 text-gray-300 space-y-1">
                <li>Assist in organizing events and tournaments to engage chess enthusiasts across campus.</li>
                <li>Support weekly operations for a club of 150+ members, ensuring smooth event coordination and communication.</li>
                <li>Developing event management, leadership, and communication skills.</li>
              </ul>
            </div>
            <div class="bg-white/5 p-6 rounded-lg">
              <div class="flex items-center gap-3 mb-2">
                <i class="fas fa-users text-orange-400 text-2xl"></i>
                <span class="font-bold text-lg">ENGO Peer Mentor</span>
              </div>
              <div class="text-blue-300 mb-1">University of Sydney</div>
              <div class="text-gray-400 mb-2">February 2025 - Present</div>
              <ul class="list-disc ml-6 text-gray-300 space-y-1">
                <li>Mentoring first-year students to facilitate their transition to university life</li>
                <li>Providing academic guidance and social support</li>
                <li>Contributing to building an inclusive learning environment</li>
                <li>Developing leadership and communication skills</li>
              </ul>
            </div>
          </div>
        `,
      }
    },
    about: {
      background: "bg-gradient-to-b from-violet-900 to-purple-900",
      content: {
        title: "About the Developer",
        description: `
          <div class="space-y-4">
            <p>A passionate game developer with a love for creating interactive experiences. First-year student at the University of Sydney, pursuing Bachelor of Advanced Computing with a Computer Science major and Software Development minor.</p>
            <p>Arena Candidate Master in chess. Actively seeking internship opportunities in game development, software engineering, and web development.</p>

            <div class="mt-6">
              <h3 class="text-xl font-semibold mb-4">Volunteer Experience</h3>
                  <div class="bg-white/5 p-4 rounded-lg">
                      <div class="flex items-center gap-2 mb-2">
                          <i class="fas fa-heart text-pink-400"></i>
                          <span class="font-semibold">Special Education Support</span>
                      </div>
                      <p>Assisted as a yoga teacher at a school for autistic children, showcasing exceptional attention to detail and patience in guiding students through exercises.</p>
                  </div>
                  
                  <div class="bg-white/5 p-4 rounded-lg">
                      <div class="flex items-center gap-2 mb-2">
                          <i class="fas fa-hands-helping text-blue-400"></i>
                          <span class="font-semibold">Community Service</span>
                      </div>
                      <p>Contributed to the distribution of meals to over 100 blue-collar workers, developing effective communication and teamwork skills by collaborating with other volunteers.</p>
                  </div>
                  
                  <div class="bg-white/5 p-4 rounded-lg">
                      <div class="flex items-center gap-2 mb-2">
                          <i class="fas fa-hand-holding-heart text-red-400"></i>
                          <span class="font-semibold">Healthcare Support</span>
                      </div>
                      <p>Assisted in running a community blood donation camp by managing certificate distribution to donors, contributing to the smooth operation of the event.</p>
                  </div>

                  <div class="bg-white/5 p-4 rounded-lg">
                    <div class="flex items-center gap-2 mb-2">
                        <i class="fas fa-globe text-green-400"></i>
                        <span class="font-semibold">Delegate</span>
                    </div>
                    <p>I had the privilege of delegating an insightful interview with former member of parliament at New Zealand Parliament Mr. Kanwaljit Singh Bakshi on the role of India as a soft power in the global scenario.</p>
                </div>
              </div>
            </div>

            <p class="mt-4">
              <a href="assets/Tanisha Kothari-Game Developer.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <i class="fas fa-file-alt mr-2"></i>
                Download Resume
              </a>
            </p>
          </div>
        `,
        stats: {
          "GitHub Projects": 16,
          "Chess Rating": "~1630",
          "Bugs Squashed": "500+"
        },
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
            ` : "" }

            ${currentScene === "academics" ? `
              <div class="space-y-8 animate-fade-in">
                <!-- University Education -->
                <div class="bg-white/5 p-6 rounded-lg">
                  <h3 class="text-xl font-semibold mb-4">University Education</h3>
                  <div class="p-4 bg-white/10 rounded-lg">
                    <div class="flex items-center gap-3 mb-2">
                      <i class="fas fa-university text-2xl text-blue-400"></i>
                      <span class="text-xl font-bold">${scene.content.education?.university?.name || ""}</span>
                    </div>
                    <div class="space-y-2 ml-9">
                      <div class="text-blue-300">${scene.content.education?.university?.degree || ""}</div>
                      <div>Major: ${scene.content.education?.university?.major || ""}</div>
                      <div>Minor: ${scene.content.education?.university?.minor || ""}</div>
                      <div class="text-sm text-gray-300">${scene.content.education?.university?.period || ""}</div>
                    </div>
                  </div>
                </div>

                <!-- Professional Certifications -->
                <div class="bg-white/5 p-6 rounded-lg">
                  <h3 class="text-xl font-semibold mb-4">Professional Certifications</h3>
                  <div class="grid gap-4 md:grid-cols-2">
                    ${scene.content.education?.certifications?.map(cert => `
                      <div class="p-4 bg-white/10 rounded-lg transform hover:scale-102 transition-all">
                        <div class="flex items-center gap-3 mb-2">
                          ${cert.icon}
                          <div>
                            <div class="font-semibold">${cert.name}</div>
                            <div class="text-sm text-blue-300">${cert.provider}</div>
                            <div class="text-sm text-gray-300">${cert.date}</div>
                          </div>
                        </div>
                      </div>
                    `).join('') || ""}
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
      rect.left + rect.width/2,
      rect.top + rect.height/2,
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
      { text: ach.date,    fill: '#60A5FA' },
      { text: ach.rating,  fill: '#34D399' },
      { text: ach.count,   fill: '#C084FC' },
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
            case "chessMaster":
              if (gameState.collectedTrophies.length === scenes.chess.content.achievements.length
                  && !achievement.unlocked) {
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