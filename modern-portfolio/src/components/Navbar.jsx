export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        <h1 className="text-blue-500 font-bold text-xl">Pranitha</h1>
        <div className="space-x-6 text-sm">
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
