import profile from "../../assets/profile.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
    >
      {/* LEFT - IMAGE */}
      <div className="flex justify-center">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-30 group-hover:opacity-60 transition duration-500 rounded-2xl"></div>

          {/* Image */}
          <img
            src={profile}
            alt="Shaik Abdul Rehaman"
            className="relative w-72 h-80 object-cover rounded-2xl border border-white/10 shadow-lg"
          />
        </div>
      </div>

      {/* RIGHT - CONTENT */}
      <div>
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 leading-7 mb-4">
          I am a Senior Frontend Engineer with 4+ years of experience building
          scalable, high-performance web applications using React, Next.js, and
          TypeScript.
        </p>

        <p className="text-gray-400 leading-7 mb-4">
          I specialize in enterprise dashboard architecture and real-time
          systems, delivering optimized user experiences using modern frontend
          technologies such as Redux Toolkit, Zustand, and React Query.
        </p>

        <p className="text-gray-400 leading-7 mb-4">
          I focus on performance optimization, improving Core Web Vitals, and
          reducing re-renders through memoization, lazy loading, and efficient
          state handling.
        </p>

        <p className="text-gray-400 leading-7">
          I also implement end-to-end automation using Playwright with CI/CD
          pipelines, ensuring production reliability and reducing regression
          issues.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-white text-black rounded-xl font-medium"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-2 border border-white/20 rounded-xl hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
