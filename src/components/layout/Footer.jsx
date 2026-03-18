export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold mb-2">VANUMU VENKATA KIRAN</h2>
            <p className="text-gray-400 text-sm">
              Senior Frontend Engineer specializing in scalable,
              high-performance web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#experience" className="hover:text-white">
                Experience
              </a>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">kiranvanumu266@gmail.com</p>
            <p className="text-gray-400 text-sm mt-1">+91 9148928936</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Vanumu Venkata Kiran</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
