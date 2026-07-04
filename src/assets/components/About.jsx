import Desk from "./images/Desk.png"

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <img src={Desk} alt="Working Space" className="w-[340px] h-[420px] object-cover rounded-3xl shadow-lg"
          />
        </div>


        <div>
          <p className="uppercase tracking-widest text-[#8DB5A0] font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Creating with Code and Crafting with Yarn.
          </h2>

          <p className="mt-8 leading-8 text-[#6b573e]">
            Hello! I'm Pradipti Pokharel, an IT graduate passionate about
            frontend development, QA testing, data analytics, and crochet. I
            enjoy building responsive web applications while applying
            creativity, precision, and problem-solving to every project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div>
              <h4 className="font-semibold text-[#C4703A]">Name</h4>
              <p>Pradipti Pokharel</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#C4703A]">Email</h4>
              <p>pradiptipokharel7@gmail.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#C4703A]">Education</h4>
              <p>BSc Computing</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#C4703A]">University</h4>
              <p>Taylor's University</p>
              <p>IIMS College</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#C4703A]">Location</h4>
              <p>Kathmandu, Nepal</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#C4703A]">Languages</h4>
              <p>English, Nepali</p>
            </div>
          </div>
          <button>
            <a
              href="/Pradipti.pdf"
              download
              className="inline-block mt-10 bg-[#C4703A] text-white px-8 py-4 rounded-full hover:bg-[#b45f2d] transition duration-300"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
