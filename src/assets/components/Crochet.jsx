import { FaInstagram } from "react-icons/fa";
import Luffy from "./images/Luffy.png";
import Rose from "./images/Rose.png";
import Scarf from "./images/Scarf.png";
import Cat from "./images/Cat.png";
import whales from "./images/whales.png";
import Mushroom from "./images/Mushroom.png";
import frog from "./images/frog.png";
import Headband from "./images/Headband.png";

const crochetItems = [
  {
    id: 1,
    image: Luffy,
    title: "Crochet Luffy",
    category: "Amigurumi",
    price: "1,500",
    Commission: "Out of stock",
  },
  {
    id: 2,
    image: Rose,
    title: "Rose Bouquet",
    category: "Flowers",
    price: "1000",
    Commission: "Available",
  },
  {
    id: 3,
    image: Scarf,
    title: "Crochet Scarf",
    category: "Wearables",
    price: "990",
    Commission: "Available",
  },
  {
    id: 4,
    image: Cat,
    title: "Cat Keyring",
    category: "Keyring",
    price: "150",
    Commission: "Available",
  },
  {
    id: 5,
    image: whales,
    title: "Crochet Whales",
    category: "Amigurumi",
    price: "250",
    Commission: "Available",
  },
  {
    id: 6,
    image: Headband,
    title: "Crochet Headband",
    category: "Wearables",
    price: "350",
    Commission: "Available",
  },
  {
    id: 7,
    image: Mushroom,
    title: "Mushroom Crochet",
    category: "Amigurumi",
    price: "250",
    Commission: "Available",
  },
  {
    id: 8,
    image: frog,
    title: "Frog Crochet",
    category: "Amigurumi",
    price: "250",
    Commission: "Available",
  },
];
export default function Crochet() {
  return (
    <section id="crochet" className="py-24 bg-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center"> Crochet Gallery</h2>
        <p className="text-center mt-4 text-[#6b573e]">
          Handmade creations crafted with love.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {crochetItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2C2416]/85 opacity-0 group-hover:opacity-90 transition duration-500 flex flex-col justify-center items-center text-center text-white p-6">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p>
                  <span className="font-semibold">Category: </span>{" "}
                  {item.category}
                </p>
                <p>
                  <span className="font-semibold">Price: </span> {item.price}
                </p>
                <span className="mt-4 bg-[#8DB5A0] text-[#2C2416] px-4 py-2 rounded-full font-semibold">
                  {item.Commission}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 w-full flex flex-col items-center text-center">
          <p className="text-[#6b573e] text-lg mb-5">
            Explore more of my creations on Instagram.
          </p>

          <a
            href="https://www.instagram.com/cro_prachet/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C4703A] text-white px-8 py-4 rounded-full hover:bg-[#b45f2d] transition"
          >
            <FaInstagram size={24} />
            @Cro_PraChet
          </a>
        </div>
      </div>
    </section>
  );
}
