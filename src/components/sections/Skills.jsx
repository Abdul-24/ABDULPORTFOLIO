export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Frontend</h3>
          <p className="text-gray-400">
            React 18/19, Next.js 14/15, TypeScript, Tailwind CSS, Material UI
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">State Management</h3>
          <p className="text-gray-400">
            Redux Toolkit, Zustand, React Query, SWR
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Performance</h3>
          <p className="text-gray-400">
            SSR, SSG, ISR, Code Splitting, Lazy Loading, Core Web Vitals
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Testing</h3>
          <p className="text-gray-400">
            Playwright, React Testing Library, Cypress, Vitest
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Tools</h3>
          <p className="text-gray-400">
            Git, GitHub, Vite, Webpack, Docker, GitHub Actions
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Security</h3>
          <p className="text-gray-400">JWT, OAuth 2.0, RBAC, NextAuth.js</p>
        </div>
      </div>
    </section>
  );
}
