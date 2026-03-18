export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Project Case Studies</h2>

      {/* ===================== PROJECT 1 ===================== */}
      <div className="mb-16 p-8 rounded-2xl bg-white/5 border border-white/10">
        <h3 className="text-2xl font-semibold">
          MakeMyTrip – Travel & Booking Platform
        </h3>

        <p className="text-gray-400 mt-4">
          High-traffic travel platform handling millions of daily users for
          flight, hotel, and holiday bookings with strong SEO and performance
        </p>

        {/* Tech */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg">Tech Stack</h4>
          <p className="text-gray-400 text-sm mt-1">
            React 18/19, TypeScript, Redux Toolkit, Zustand, Tailwind CSS, REST
            APIs, Playwright
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg">Key Responsibilities</h4>
          <ul className="list-disc ml-6 text-gray-300 space-y-3 mt-3">
            <li>
              Designed and implemented a scalable, reusable component
              architecture using a TypeScript-first approach and atomic design
              principles.
            </li>
            <li>
              Built complex dashboard features such as advanced filtering,
              debounced search, and server-side pagination for large datasets.
            </li>
            <li>
              Managed global application state using Redux Toolkit and optimized
              feature-specific state using Zustand for performance efficiency.
            </li>
            <li>
              Integrated REST APIs with structured handling for loading states,
              error states, and empty states.
            </li>
            <li>
              Implemented caching strategies and background refetching to
              improve user experience and reduce API load.
            </li>
            <li>
              Optimized performance using lazy loading, dynamic imports,
              React.memo, useCallback, and useMemo to minimize re-renders.
            </li>
            <li>
              Built end-to-end automation testing using Playwright with Page
              Object Model (POM) architecture and integrated into CI pipelines.
            </li>
          </ul>
        </div>
      </div>

      {/* ===================== PROJECT 2 ===================== */}
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
        <h3 className="text-2xl font-semibold">
          Flexora Financial Services – Insurance & Banking Platform
        </h3>

        <p className="text-gray-400 mt-4">
          Secure financial services platform for insurance claims, policy
          management, and payment processing.
        </p>

        {/* Tech */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg">Tech Stack</h4>
          <p className="text-gray-400 text-sm mt-1">
            React, TypeScript, WebSockets, Flask API, PostgreSQL, Redux Toolkit,
            React Query, Material UI
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg">Key Responsibilities</h4>
          <ul className="list-disc ml-6 text-gray-300 space-y-3 mt-3">
            <li>Developed modular dashboard and transaction components.</li>
            <li>
              Integrated multiple REST APIs with proper loading and error
              states.
            </li>
            <li>
              Implemented retry mechanisms and centralized error boundaries.
            </li>
            <li>Optimized large dashboard rendering using memoization.</li>
            <li>
              Ensured responsive and adaptive UI across multiple device types
              used in clinical environments.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
