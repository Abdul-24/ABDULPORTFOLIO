export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <h3 className="text-2xl font-semibold">Accenture</h3>
        <p className="text-gray-400 mb-4">
          Software Engineer | Feb 2022 – Present
        </p>

        <ul className="list-disc ml-6 text-gray-300 space-y-3">
          <li>
            Developed scalable enterprise dashboards using React and TypeScript.
          </li>
          <li>Built reusable UI components using atomic design principles.</li>
          <li>Implemented state management using Redux Toolkit and Zustand.</li>
          <li>Integrated REST APIs with proper error and loading handling.</li>
          <li>
            Optimized application performance using memoization and lazy
            loading.
          </li>
          <li>Improved Core Web Vitals and overall user experience.</li>
          <li>
            Implemented end-to-end automation using Playwright and CI pipelines.
          </li>
        </ul>
      </div>
    </section>
  );
}
