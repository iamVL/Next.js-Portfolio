import React from 'react'
import ProjectCard from '../../components/ProjectCard'

const projectsData = [
  {
    title: "ASR Whisper Transcriber",
    description: "A full-stack speech-to-text transcription web application featuring a React frontend and a FastAPI backend. Users can record audio in-browser, generate word-level transcripts using OpenAI Whisper via faster-whisper, and manage transcript history with JWT-based authentication. The system uses SQLite with SQLAlchemy, is deployment-ready, and demonstrates clean API-driven architecture.",
    imageUrl: "/assets/whisper.webp",
    githubUrl: "https://github.com/iamVL/vaish-asr-whisper-transcriber",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-lokhande000/details/projects/",
    technologies: ["React", "FastAPI", "Python", "Whisper ASR", "SQLite", "JWT", "SQLAlchemy", "TailwindCSS"]
  },
  {
    title: "Neo-Paw-Itan (Pet Patrol)",
    description: "Neo-Paw-Itan is a full-stack pet management platform that centralizes pet routines, profiles, health records, and memories into a single dashboard. Designed with a dashboard-first UX, the application supports authenticated sessions, scalable data relationships, and clean separation of concerns across frontend, backend, and database layers.",
    imageUrl: "/assets/petpatrol.webp",
    githubUrl: "https://github.com/iamVL/pet--patrol",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-lokhande000/details/projects/",
    technologies: ["React", "PHP", "MySQL", "UI/UX Design", "Session Authentication", "System Architecture"]
  },
  {
    title: "RecovR – Post-Surgery Recovery Platform",
    description: "RecovR is a post-surgery recovery platform composed of an iOS application and a web dashboard. Patients log recovery data, track heart rate, and receive medication alerts. The system integrates Gemini AI to generate personalized recovery reports and uses Firebase Realtime Database for instant synchronization with doctors.",
    imageUrl: "/assets/recovr.webp",
    githubUrl: "https://github.com/iamVL/RecovR",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-lokhande000/details/projects/",
    technologies: ["Swift", "Firebase", "Gemini AI", "JavaScript", "HTML", "CSS", "iOS Development"]
  },
  {
    title: "BookTrack Library",
    description: "A full-stack library management system built with React, Node.js, and PostgreSQL to streamline inventory and lending operations. The project improves search performance through advanced filtering and optimized PostgreSQL schemas, reducing query response times and improving system efficiency.",
    imageUrl: "/assets/booktrack.webp",
    githubUrl: "https://github.com/iamVL/BookTrackLibrary",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-lokhande000/details/projects/",
    technologies: ["React", "Node.js", "PostgreSQL", "SQL Optimization", "API Development", "Git", "Jira"]
  },
  {
    title: "The Melting Pot",
    description: "A culturally inclusive social media-style cooking platform that allows users to explore, share, and review recipes. The application supports advanced filtering based on ingredients, allergies, and skill level, emphasizing accessibility and responsive UI. Built using React, a Swagger-based JavaScript backend, and MySQL.",
    imageUrl: "/assets/meltingpot.webp",
    githubUrl: "https://github.com/iamVL/melting",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-lokhande000/details/projects/",
    technologies: ["React", "JavaScript", "Swagger API", "MySQL", "Figma", "Agile"]
  },
  {
    title: "Little Star Pediatric Care System",
    description: "A JavaFX-based office automation system designed for pediatric clinics. The system includes secure login, prescription management, and REST-based messaging. Built with Java, Spring Boot, and SQL, following structured SDLC practices.",
    imageUrl: "/assets/littlestar.webp",
    githubUrl: "https://github.com/iamVL/CSE-360-Office-Automation-System-for-Pediatric-Doctor-s-Office",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-lokhande000/details/projects/",
    technologies: ["Java", "JavaFX", "Spring Boot", "SQL", "REST APIs", "SDLC"]
  },
  {
    title: "Project Spyn: LEGO Automated Car",
    description: "An autonomous LEGO EV3-based toy car programmed in MATLAB to navigate a maze and transport a payload safely. The project emphasizes navigation logic, performance tuning, and problem-solving in a constrained hardware environment.",
    imageUrl: "/assets/projectspyn.webp",
    githubUrl: "https://github.com/iamVL/Project-Spyn-Lego-Automated-Car",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-lokhande000/details/projects/",
    technologies: ["MATLAB", "LEGO EV3", "Autonomous Navigation", "Problem Solving"]
  },
  {
    title: "ELI (Engage, Learn, Innovate)",
    description: "A smart classroom engagement device designed to encourage post-COVID classroom participation. Built using Arduino and Python, the system triggers visual feedback through LEDs based on user interaction and includes a custom laser-cut physical enclosure.",
    imageUrl: "/assets/eli.webp",
    githubUrl: null,
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-lokhande000/details/projects/",
    technologies: ["Python", "Arduino", "Embedded Systems", "Hardware Prototyping"]
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-black mb-10 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
