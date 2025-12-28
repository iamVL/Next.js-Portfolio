import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string | null;
  linkedinUrl?: string;  
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,  linkedinUrl, 
  technologies,
}) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        border
        border-[#F4D2E7]
        shadow-md
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
<div className="relative w-full h-56 overflow-hidden">
  <Image
    src={imageUrl}
    alt={title}
    fill
    className="object-cover object-center"
    sizes="(max-width: 768px) 100vw, 33vw"
  />
</div>



      <div className="p-6">
        <h3 className="text-xl font-semibold text-black mb-2">
          {title}
        </h3>

        <p className="text-[#6B7280] mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="
                px-3 py-1
                text-sm
                rounded-full
                bg-[#F8E4F1]
                text-[#DA5B97]
                font-medium
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
  {githubUrl && (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        px-5
        py-2
        rounded-full
        bg-[#DA5B97]
        text-white
        font-semibold
        hover:opacity-90
        transition
      "
    >
      <FaGithub className="text-lg" />
      View on GitHub
    </a>
  )}

  {linkedinUrl && (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        px-5
        py-2
        rounded-full
        bg-[#0A66C2]
        text-white
        font-semibold
        hover:bg-[#084b91]
        transition
      "
    >
      <FaLinkedin className="text-lg" />
      View on LinkedIn
    </a>
  )}
</div>

      </div>
    </div>
  );
};

export default ProjectCard;
