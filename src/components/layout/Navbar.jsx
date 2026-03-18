import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl font-bold tracking-wide"
        >
          VANUMU VENKATA KIRAN
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 relative">
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              <button
                onClick={() => handleScroll(link.id)}
                onMouseEnter={() => setActive(link.id)}
                className="relative px-2 py-1 text-gray-300 hover:text-white transition"
              >
                {link.name}
              </button>

              {/* Animated Underline */}
              {active === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-black/90 backdrop-blur-xl px-6 pb-6"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="block w-full text-left py-3 text-gray-300 hover:text-white border-b border-white/10"
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
