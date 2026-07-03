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
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Pradipti
            <span className="text-[#C4703A]"> Pokharel</span>
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
            <button className="bg-[#C4703A] hover:bg-[#a0522d] text-white px-7 py-3 rounded-full transition">
              View My Work
            </button>
            <button className="border-2 border-[#C4703A] text-[#C4703A] hover:bg-[#a0522d] hover:border-[#a0522d] hover:text-white transition px-7 py-3 rounded-full">
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
              {/* the blob */}
              <div className="w-[320px] h-[320px] md:w-[400px] md:h-[430px] rounded-full bg-[#E8DDD0] flex items-center justify-center shadow">
                <div className="text-center">
                  <div className="text-7xl">💻🧶</div>
                  <p className="mt-6 text-[#6b573e]">
                    Web Developer & Crochet Enthusiast
                  </p>
                </div>
              </div>
              <motion.div
                className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#8DB5A0]/90 backdrop-blur-sm text-white rounded-full px-5 py-3 shadow-lg shadow-black/10 whitespace-nowrap"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                React & Tailwind CSS
              </motion.div>

              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -right-10 bg-[#a0522d]/90 backdrop-blur-sm text-white rounded-full px-5 py-3 shadow-lg shadow-black/10 whitespace-nowrap"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                Crochet
              </motion.div>
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#C4703A]/90 backdrop-blur-sm text-white rounded-full px-5 py-3 shadow-lg shadow-black/10 whitespace-nowrap"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                QA & Testing
              </motion.div>

              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -left-10 bg-white/90 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg shadow-black/10"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                Analytics
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
