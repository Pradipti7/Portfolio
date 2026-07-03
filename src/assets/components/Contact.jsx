export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto py-24 px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#2C2416]">Let's Connect!</h2>
        <p className="mt-5 text-[#6b573e] max-w-2xl mx-auto">
          Intrested in working together? Weather you need a developer or a
          custom crochet project, I'd love to hear from you.
        </p>
      </div>
      <form className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-6">
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-left">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-[#E8DDD0] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C4703A]"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-left">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-xl border border-[#E8DDD0] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C4703A]"
            />
          </div>
        </div>
        {/* Services */}
        <div>
          <label className="block mb-2 font-medium text-left">Service</label>
          <select className="w-full rounded-xl border border-[#E8DDD0] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C4703A]">
            <option>Select a service</option>
            <option>Frontend Development</option>
            <option>QA Testing</option>
            <option>Data Analytics</option>
            <option>Crochet Commission</option>
          </select>
        </div>
        {/* Subject */}
        <div>
          <label className="block mb-2 font-medium text-left">Subject</label>
          <input
            type="text"
            placeholder="Project Inquiry"
            className="w-full rounded-xl border border-[#E8DDD0] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C4703A]"
          />
        </div>
        {/* Message */}
        <div>
          <label className="block mb-2 font-medium text-left">Message</label>
          <textarea
            rows="6"
            placeholder="Tell me About your project."
            className="w-full rounded-xl border border-[#E8DDD0] px-4 py-3 resize-none focus:outline-none focus:ring-2 focus-ring-[#C4703A]"
          />
        </div>
        {/* Refrence image */}
        <div>
          <label className="block mb-2 font-medium text-left">
            Refrence Image (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full rounded-xl border border-[#E8DDD0] px-4 py-3 file:mr-4 file:rounded-lg file:border-0 
            file:bg-[#8DB5A0] file:px-4 file:py-2 file:text-white file:cursor-pointer hover:file:bg-[#75a38d]"
          />
          <p className="mt-2 text-sm text-[#6b573e] text-left">
            Upload an image for Designing and crochet comission.
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex-items-center justify-center gap-3 bg-[#C4703A] hover:bg-[#b35f2e] text-white px-8 py-4 rounded-full transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
