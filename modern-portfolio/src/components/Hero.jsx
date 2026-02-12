export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black px-6 relative">

      {/* Profile Circle */}
      <div className="relative mb-8">
        <div className="w-40 h-40 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-[0_0_40px_#2563eb]">

          {/* Replace src with your image path */}
          <img
            src="/profile.jpeg"
            alt="Pranitha"
            className="w-36 h-36 rounded-full object-cover"
          />

        </div>
      </div>

      <p className="text-blue-400 mb-2 tracking-widest">Hello, I'm</p>

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Pranitha
      </h1>

      <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
        Frontend Developer (JavaScript & React)
      </h2>

      <p className="text-gray-400 max-w-xl mb-8">
        I build responsive and interactive user interfaces using modern JavaScript and React.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-black px-6 py-3 rounded-lg font-medium shadow-[0_0_20px_#2563eb] transition"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black px-6 py-3 rounded-lg transition"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-lg transition"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
}
