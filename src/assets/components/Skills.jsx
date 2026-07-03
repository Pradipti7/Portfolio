const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "MySQL",
  "QA Testing",
  "Data Analytics",
  "Manual Testing",
  "Crochet",
];
export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#E8DDD0]">
      <div className="nax-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white rounded-2xl p-8 text-center hover:-translate-y-2 duration-300 shadow"
            >
              <h3 className="font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
