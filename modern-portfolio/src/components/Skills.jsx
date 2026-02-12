export default function Skills() {
  return (
    <section id="skills" className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-blue-500 tracking-widest mb-3">
          02. SKILLS
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          What I Work With
        </h2>

        {/* ================= FRONTEND ================= */}
        <div className="mb-16">
          <h3 className="text-gray-400 uppercase tracking-widest mb-6">
            Frontend
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <SkillCard title="HTML5" desc="Semantic structure & accessibility" />
            <SkillCard title="CSS3" desc="Flexbox, Grid, Responsive Design" />
            <SkillCard title="JavaScript" desc="ES6+, DOM Manipulation" />
            <SkillCard title="React" desc="Component-based UI development" />
            <SkillCard title="REST API Integration" desc="Client–Server communication" />
            <SkillCard title="Responsive Design" desc="Mobile-first approach" />

          </div>
        </div>

        {/* ================= PROGRAMMING ================= */}
        <div className="mb-16">
          <h3 className="text-gray-400 uppercase tracking-widest mb-6">
            Programming & Core Concepts
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <SkillCard title="C" desc="Problem solving fundamentals" />
            <SkillCard title="C++" desc="Object-Oriented Programming" />
            <SkillCard title="Python" desc="Backend & scripting" />
            <SkillCard title="Data Structures & Algorithms" desc="Efficient problem solving" />
            <SkillCard title="DBMS" desc="Database concepts & design" />
            <SkillCard title="Linux" desc="System & server basics" />

          </div>
        </div>

        {/* ================= DATABASES & TOOLS ================= */}
        <div>
          <h3 className="text-gray-400 uppercase tracking-widest mb-6">
            Databases & Tools
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <SkillCard title="MySQL" desc="Relational database management" />
            <SkillCard title="SQLite" desc="Lightweight DB solutions" />
            <SkillCard title="Git & GitHub" desc="Version control & collaboration" />
            <SkillCard title="VS Code" desc="Development environment" />
            <SkillCard title="Google Colab" desc="Python experimentation" />
            <SkillCard title="Jupyter Notebook" desc="Data analysis & ML basics" />

          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= Skill Card Component ================= */

function SkillCard({ title, desc }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition duration-300 shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
      <h4 className="text-white font-semibold text-lg mb-2">
        {title}
      </h4>
      <p className="text-gray-400 text-sm">
        {desc}
      </p>
    </div>
  );
}
