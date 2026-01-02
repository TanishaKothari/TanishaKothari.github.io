window.portfolioData = {
    projects: {
        gamedev: [
            {
                name: "Firearm Frenzy",
                tech: "Unreal Engine 5, C++",
                description: `A third-person shooter`,
                githubLink: "https://github.com/TanishaKothari/Firearm-Frenzy",
                icon: '<i class="fas fa-crosshairs"></i>'
            },
            {
                name: "Crypt Raider",
                tech: "Unreal Engine 5, C++",
                description: "A puzzle adventure",
                githubLink: "https://github.com/TanishaKothari/CryptRaider",
                icon: '<i class="fas fa-dungeon"></i>'
            },
            {
                name: "PortalPaths: Maze Multiverse",
                tech: "C++, Raylib",
                description: `A maze game with various themes and different difficulty modes`,
                githubLink: "https://github.com/TanishaKothari/PortalPaths-Maze_Multiverse",
                liveLink: "https://tanishakothari.itch.io/portalpaths-maze-multiverse",
                icon: '<i class="fas fa-rocket"></i>'
            },
            {
                name: "Sudoku Mastermind",
                tech: "Unity, C#",
                description: "Classic sudoku and variants",
                githubLink: "https://github.com/TanishaKothari/Sudoku-Mastermind",
                icon: '<i class="fas fa-puzzle-piece"></i>'
            }
        ],
        softwareWeb: [
            {
                name: "EcoTrace",
                tech: "Python, TypeScript, Next.js, React, TailwindCSS, SQLite",
                description: "AI-powered environmental impact analyzer",
                githubLink: "https://github.com/TanishaKothari/EcoTrace",
                icon: '<i class="fas fa-leaf"></i>'
            },
            {
                name: "Quizzical",
                tech: "React",
                description: "An interactive quiz application that tests your knowledge across various topics",
                githubLink: "https://github.com/TanishaKothari/Quizzical",
                liveLink: "https://quizzical-gold-three.vercel.app/",
                icon: '<i class="fas fa-question-circle"></i>'
            },
            {
                name: "ExploreEase",
                tech: "Python, Flask, HTML, CSS, JavaScript, MySQL",
                description: "A travel itinerary generator website",
                githubLink: "https://github.com/TanishaKothari/ExploreEase",
                liveLink: "https://exploreease-w7ps.onrender.com",
                icon: '<i class="fas fa-globe-americas"></i>'
            }
        ]
    },

    skills: {
        gamedev: [
            { name: "Unreal Engine & C++", level: 70, icon: '<i class="fas fa-gamepad"></i>' },
            { name: "Unity & C#", level: 65, icon: '<i class="fab fa-unity"></i>' },
            { name: "Raylib", level: 60, icon: '<i class="fas fa-cube"></i>' }
        ],
        fullstack: [
            { name: "Python & Flask", level: 80, icon: '<i class="fab fa-python"></i>' },
            { name: "JavaScript", level: 70, icon: '<i class="fab fa-js"></i>' },
            { name: "Node.js", level: 65, icon: '<i class="fab fa-node"></i>' },
            { name: "Svelte & SvelteKit", level: 65, icon: '<i class="fas fa-fire"></i>' },
            { name: "C++", level: 75, icon: '<i class="fas fa-code"></i>' },
            { name: "Java", level: 40, icon: '<i class="fab fa-java"></i>' },
            { name: "MySQL, PostgreSQL, & SQLite", level: 80, icon: '<i class="fas fa-database"></i>' },
            { name: "HTML & CSS", level: 75, icon: '<i class="fab fa-html5"></i>' },
            { name: "React", level: 90, icon: '<i class="fab fa-react"></i>' },
            { name: "Tailwind CSS", level: 60, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>' },
            { name: "Bootstrap", level: 70, icon: '<i class="fab fa-bootstrap"></i>' }
        ],
        tools: [
            { name: "Git & GitHub", level: 90, icon: '<i class="fab fa-github"></i>' },
            { name: "VS Code", level: 85, icon: '<i class="fas fa-code"></i>' },
        ]
    },

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
                id: "advanced_react",
                name: "Advanced React",
                provider: "Scrimba",
                date: "December 2025",
                icon: '<i class="fas fa-layer-group"></i>',
                questType: "Skill Quest",
                status: "Completed",
                rewards: [
                    "Reusable Patterns",
                    "Custom Hooks",
                    "Advanced Routing",
                    "Performance Optimization"
                ],
                description: "Deepened React expertise with reusable component patterns, custom hooks, routing, and optimization techniques. Built VanLife, a multi-page webapp backed by Firebase that lets users browse vans, view detailed listings, and manage host-specific dashboards."
            },
            {
                id: "react_basics",
                name: "Learn React",
                provider: "Scrimba",
                date: "December 2025",
                icon: '<i class="fab fa-react"></i>',
                questType: "Skill Quest",
                status: "Completed",
                rewards: ["React Components", "Props & State", "Hooks & Side Effects"],
                description: "Master React fundamentals with components, props, state management, forms and event handling, functional patterns, data fetching, and side effects."
            },
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
    },

    chess: {
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
    },

    experience: {
        roles: [
            {
                id: "chess_coach",
                title: "Chess Coach",
                company: "Sydney Academy of Chess",
                period: "August 2025 - Present",
                type: "coaching",
                icon: '<i class="fas fa-chalkboard-teacher"></i>',
                achievements: ["Tactical Trainer", "Mind Mentor", "Strategy Shaper"],
                details: [
                    "Coaching students from beginner to advanced levels, focusing on tactical and strategic improvement.",
                    "Developing fun and interactive lesson plans to teach the fundamentals of chess to young learners.",
                    "Fostering a positive and engaging learning environment to cultivate a passion for chess."
                ],
                skills: ["Communication", "Mentoring", "Strategic Planning", "Pedagogy"]
            },
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
                    "Support weekly operations for a club of 600+ members, ensuring smooth event coordination and communication.",
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
    },

    competitions: [
        {
            id: "syncs_2025",
            name: "SYNCS Hack 2025",
            type: "Hackathon",
            date: "August 2025",
            placement: "Best First Year Team Prize",
            team: "404 Brain Not Found",
            description: "Built Gigimon — a web app to strengthen community connections by helping people find and connect with local gig workers and community members nearby.",
            project: "Gigimon - Community Gig Marketplace",
            technologies: ["Python", "MySQL", "Next.js", "Google Maps API"],
            achievements: [
                "Live Map Marketplace",
                "Google Maps Integration",
                "Email Match Alerts"
            ],
            awards: ["Best First Year Team Prize"],
            icon: '<i class="fas fa-network-wired text-green-400"></i>',
            difficulty: "hard"
        },
        {
            id: "hacknode_2025",
            name: "HackNode Australia 2025",
            type: "Hackathon",
            date: "August 2025",
            placement: "Most Innovative AI App Prize",
            team: "Solo",
            description: "",
            project: "EcoTrace - AI-powered Environmental Impact Analyzer",
            technologies: ["Python", "TypeScript", "Next.js", "React", "TailwindCSS", "SQLite"],
            achievements: ["Complete Webapp Prototype", "AI Integration", "Sustainability Focus"],
            awards: ["Most Innovative AI App Prize"],
            icon: '<i class="fas fa-leaf text-green-400"></i>',
            difficulty: "expert"
        },
        {
            id: "alluni_2025",
            name: "AllUni Programming Competition 2025",
            type: "Programming Contest",
            date: "August 2025",
            placement: "Team Participant",
            team: "3-person Team",
            description: "Collaborative algorithmic problem-solving competition under time constraints",
            project: "Complex algorithmic challenges and data structures",
            technologies: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
            achievements: ["Team Collaboration", "Algorithmic Thinking", "Time Management"],
            awards: [],
            icon: '<i class="fas fa-code text-blue-400"></i>',
            difficulty: "hard"
        }
    ],

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
};