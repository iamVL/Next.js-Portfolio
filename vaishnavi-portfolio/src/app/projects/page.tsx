import React from 'react'
import ProjectCard from '../../components/ProjectCard'

// You can replace this with actual project data, possibly fetched from an API or CMS
const projectsData = [
  {
    title: "Pawn Up (Best use of ChromaDB @ Calhacks)",
    description: "Pawn Up is an AI-powered chess improvement platform that allows users to analyze their games, solve tailored puzzles, and explore grandmaster matches to enhance their skills. By leveraging technologies like Groq, Llama3, and vector databases, it provides a personalized, intuitive experience for both beginners and advanced players.",
    imageUrl: "/assets/pawnup.webp",
    githubUrl: "https://github.com/satwikug25/calhacks",
    technologies: ["React", "Python","JavaScript","Flask","Node.js", "ChromaDB","Groq","Llama3.1","Gemini 1.5"]
  },
  {
    title: "surgARy",
    description: "SurgARy is an AI-assisted surgery planning system that generates detailed step-by-step checklists for doctors using Snap AR based on patient reports and medical scans, such as X-rays. The system aims to reduce human error by integrating advanced image analysis and machine learning to support more precise and efficient surgical procedures.",
    imageUrl: "/assets/surgary.webp",
    githubUrl: "https://github.com/satwikug25/Hackgt",
    technologies: ["React", "Flask","Python","JavaScript", "Langchain","Gpt-4o", "Snap AR", "Lens Studio","MongoDB"]
  },
  {
    title: "BlockWire (Best BlockChain Hack @ PennApps)",
    description: "BlockWire is a blockchain-based solution designed to reduce international wire transfer times by eliminating intermediary banks, enabling faster and more secure transactions. It integrates AI-powered fraud detection models and leverages technologies like Cerebras.ai, React, Python, MongoDB, and PropelAuth for user authentication.",
    imageUrl: "/assets/blockwire.webp",
    githubUrl: "https://github.com/satwikug25/pennapps",
    technologies: ["React", "Flask","Python","JavaScript", "Hedera","Cerbras AI","MongoDB"]
  },
  {
    title: "Schedul.io",
    description: "Schedul.io is an AI-powered phone call assistant designed for small businesses, capable of booking appointments through voice interactions and automatically syncing them with Google Calendar. The assistant is customizable for different business types, and the project incorporates technologies like Groq, Next.js, TypeScript, Llama3, and Cartesia to provide a seamless scheduling and dashboard experience for business owners.",
    imageUrl: "/assets/schedulio.webp",
    githubUrl: "https://github.com/satwikug25/schedulio",
    technologies: ["Next.js", "Typescript","Google API","Cartesia", "Whisper","Llama3.1", "Groq", "NextAuth"]
  },
  {
    title: "Compiler",
    description: "This Compiler Project involved building a small compiler, lexer and parser that generates an intermediate representation of a simple programming language(grammar). The project focused on implementing key components such as assignment, input, output, and control flow statements (if, while, switch, for) while utilizing a provided interpreter to execute the generated instructions.",
    imageUrl: "/assets/compiler.webp",
    githubUrl: "https://github.com/satwikug25/compiler",
    technologies: ["C++"]
  },
  {
    title: "Reader's Retrieve",
    description: "Readers Retrieve is an e-commerce bookstore that delivers a personalized online shopping experience for book lovers. It features a responsive and modern front-end built with React.js and Tailwind CSS, and leverages PostgreSQL for fast retrieval and management of product information, user data, and transaction details. The platform is designed to showcase a catalog of over 200 books, ensuring a smooth user experience with scalable back-end support.",
    imageUrl: "/assets/reader.webp",
    githubUrl: "https://github.com/satwikug25/Books_Retrieve-Online-bookstore-",
    technologies: ["React","JavaScript","Tailwind CSS","Django","Python"]
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
