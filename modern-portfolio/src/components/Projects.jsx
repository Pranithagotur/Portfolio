import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-blue-500 tracking-widest mb-3">
          03. PROJECTS
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Things I've Built
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ===== PROJECT CARD COMPONENTS ===== */}

          <ProjectCard
            title="Product Management"
            desc="JavaScript-based product management UI with dynamic DOM manipulation, CRUD operations, and interactive filtering."
            tags={["DOM Manipulation", "Dynamic UI", "CRUD Operations"]}
            tech="JavaScript · HTML5 · CSS3"
            github="https://github.com/Pranithagotur/Product_management"
          />

          <ProjectCard
            title="LexGuardd"
            desc="Structured TypeScript frontend architecture for a legal-tech platform with reusable components."
            tags={["Component Architecture", "Type Safety", "Clean Design"]}
            tech="TypeScript · CSS3 · HTML5"
            github="https://github.com/Pranithagotur/LexGuardd"
          />

          <ProjectCard
            title="Studlyf Frontend"
            desc="Interactive student lifestyle application frontend with engaging UI and smooth interactions."
            tags={["Interactive UI", "Student Portal", "Dynamic Content"]}
            tech="JavaScript · HTML5 · CSS3"
            github="https://github.com/Pranithagotur/Studlyf-frontend"
          />

          <ProjectCard
            title="Attendance Management"
            desc="HTML-based attendance tracking system with structured forms, data tables, and intuitive dashboard."
            tags={["Form Validation", "Data Tables", "Dashboard UI"]}
            tech="HTML5 · CSS3 · JavaScript"
            github="https://github.com/Pranithagotur/AttendanceManagementSystem"
          />

          <ProjectCard
            title="Project Partner"
            desc="Static frontend website designed for team collaboration and project discovery with responsive layout."
            tags={["Static Site", "Responsive", "Clean Layout"]}
            tech="HTML5 · CSS3"
            github="https://github.com/Pranithagotur/Project_Parttner"
          />

          <ProjectCard
            title="Git Guide"
            desc="Comprehensive visual guide explaining Git commands and workflows for beginners."
            tags={["Documentation", "Interactive Guide", "Visual Examples"]}
            tech="HTML5 · CSS3 · JavaScript"
            github="https://github.com/Pranithagotur/Git_Guide"
          />

        </div>
      </div>
    </section>
  );
}


/* ================= PROJECT CARD ================= */

function ProjectCard({ title, desc, tags, tech, github }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500 transition duration-300 shadow-md hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] relative">

      {/* Top Icons */}
      <div className="flex justify-between items-center mb-6">
        <FiFolder className="text-blue-500 text-3xl" />

        <div className="flex gap-4 text-gray-400">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FiGithub className="hover:text-blue-400 transition" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="hover:text-blue-400 transition" />
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">
        {desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-900/40 text-blue-400 text-xs px-3 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <p className="text-gray-500 text-xs border-t border-gray-800 pt-4">
        {tech}
      </p>
    </div>
  );
}
