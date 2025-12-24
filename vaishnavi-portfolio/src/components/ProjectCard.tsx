import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, githubUrl, technologies }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <Image src={imageUrl} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          <FaGithub className="mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
