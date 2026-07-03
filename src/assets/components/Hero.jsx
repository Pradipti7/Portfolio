import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center" id="home">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* left side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[4px] tdxt-[#8DB5A0] font-semibold mb-3">
            Hello, I am
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Pradipti
            <span className="text-[#C4703A]">Pokharel</span>
          </h1>
          <p className="mt-8 text-lg leading-8 text[#6b573e] max-w-xl">
            I am a passionate web developer with a strong focus on creating
            visually appealing and user-friendly websites. I love building web
            experiences with the same patience and precision that goes into
            every handmde crochet piece. I am always eager to learn new
            technologies and stay up-to-date with the latest trends in web
            development. Let's work together to bring your ideas to life!
          </p>
          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg=[#C4703A] hover:bg[#b55e2d] text-white px-7 py-3 rounded-full transition">
              View My Work
            </button>
            <button className="border-2 border-[#2C2416] hover:bg[#2c2416] hover:text-white transition px-7 py-3 rounded-full">
              Contact Me
            </button>
          </div>
          <div className="flex-gap-6 mt-10">
            <FaGithub
              size={28}
              className="cursor-pointer hover:text-[#C4703A] duration-300"
            />
          </div>
        </motion.div>
        {/* right side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-[320px] h-p[320px] md:w-[400px] md:h-[430px] rounded-full bg-[#E8DDD0] flex items-center justify-center shadow"></div>
              <div className="text=center">
                <div className="text-7xl">💻🧶</div>
                <p className="mt-6 text-[#6b573e]">
                  Web Developer & Crochet Enthusiast
                </p>
              </div>
            </div>
            <div className=" absolute -top-6 -right-6 bg-[#8DB5A0] rounded-full px-5 py-3 shadow-lg">
              React & Tailwind CSS
            </div>
            <div className="absolute bottom-4 -left-6 bg-[#C4703A] text-white rounded-full px-5 py-3 shadow-lg">
              QA & Testing
            </div>
            <div className="absolute top-1/2 -left-10 bg-white rounded-full px-5 shadow-lg">
              Analytics
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
