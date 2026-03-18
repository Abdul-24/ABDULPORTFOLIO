export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Education</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 transform -translate-x-1/2"></div>

          {/* Card */}
          <div className="relative z-10 flex justify-center">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl w-full md:w-[500px] shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold">
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="text-gray-400 mt-2">
                National Institute of Technology Nagaland
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Computer Science & Engineering
              </p>

              <p className="text-gray-500 text-sm mt-1">2019 – 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
