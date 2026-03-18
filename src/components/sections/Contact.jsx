export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>

        <p className="text-gray-400 mb-10">
          Open to opportunities, collaborations, and freelance work.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400">kiranvanumu266@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+91 9148928936</p>
          </div>

          {/* Location */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-400">India</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="mailto:abdsh2409@gmail.com"
            className="px-8 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
