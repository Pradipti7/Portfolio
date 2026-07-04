export default function Crochet() {
  return (
    <section id="crochet" className="py-24 bg-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Crochet gallery</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="aspect-square bg-white rounded-3xl flex items-center justify-center hover:scale-105 duration-300"
            >
              🧶
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
