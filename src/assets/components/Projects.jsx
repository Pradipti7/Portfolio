const projects = [
  {
    title: "Portfolio Website",
    tech: "React + Tailwind CSS",
    description:
      "Resoponsive portfolio website built using React and Tailwind CSS.",
  },
  {
    title: "Spam Detection",
    tech: "Python, NLP, Machine Learning",
    description:
      "Email and SMS spam detection system built using NLP and ML techniques. ",
  },
  {
    title: "Recipie Sharing Website",
    tech: "PHP, MySQL",
    description:
      "A web application for sharing and discovering recipes, built using PHP and MySQL.",
  },
  {
    title: "Data Analytics Dashboard",
    tech: "Python, Pandas, Matplotlib, Seaborn",
    description:
      "An interactive data analytics dashboard built using Python and data visualization libraries to analyze and visualize data.",
  },
  {
    title: "Sentiment Analysis",
    tech: "Python, NLP, Machine Learning",
    description:
      "A complete pipeline for sentiment analysis and classification on a text reviews dataset using NLP techniques and machine learning.",
  },
  {
    title: "ShouPP",
    tech: "HTML, CSS, JavaScript",
    description:
      "A responsive e-commerce website built using HTML, CSS and JavaScript for buying and selling products.",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-24 mx-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-3xl p-8 shadow hover:shadow-xl duration-300"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-4 text-[#C4703A]">{project.tech}</p>
            <p className="mt-6 text-[#6b573e]">{project.description}</p>
            <button className="mt-8 bg-[##2c2416] text-white px-6 py-3 rounded-full">
              View project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
