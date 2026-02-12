export default function About() {
  return (
    <section id="about" className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-blue-500 tracking-widest mb-3">
          01. ABOUT ME
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Who I Am
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-16">
          I'm a passionate frontend developer with a strong foundation in{" "}
          <span className="text-white font-semibold">HTML</span>,{" "}
          <span className="text-white font-semibold">CSS</span>,{" "}
          <span className="text-white font-semibold">JavaScript</span>, and{" "}
          <span className="text-white font-semibold">React</span>. 
          I love turning complex problems into clean, intuitive user interfaces.
          With hands-on experience building multiple projects, I'm ready to
          contribute to real-world products and grow as a developer. My focus
          is on writing clean code, building responsive layouts, and creating
          seamless user experiences.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300 shadow-lg">
            <div className="text-blue-500 text-3xl mb-4">&lt;/&gt;</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Clean Code
            </h3>
            <p className="text-gray-400">
              Writing semantic, maintainable HTML/CSS/JS with modern best practices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300 shadow-lg">
            <div className="text-blue-500 text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              UI/UX Focus
            </h3>
            <p className="text-gray-400">
              Crafting pixel-perfect, user-friendly interfaces with attention to detail.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300 shadow-lg">
            <div className="text-blue-500 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Performance
            </h3>
            <p className="text-gray-400">
              Building fast, responsive applications optimized for all devices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
