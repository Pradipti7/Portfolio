import { useState } from "react";
import { hiMenuAlt3, Hix } from "react-icons/hi";

export default function Navbar() {
  const { open, setOpen } = useState(false);
  const links = ["About", "Skills", "Projects", "Crochet", "Contact"];
  return (
    <nav className="sticky top-0 z-50 bg-[#F7F0E8]/90 backdrop-blur-md border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-serif text-3xl font-bold tracking-wide text-[#2C2416]">
            Pradipti Pokharel
          </h1>
          <ul className="hidden md:flex gap-10 text-[#6b573e] font-medium">
            {links.map((item) => (
              <li
                key={item}
                className="hover:text-[#C4703A] duration-300 cursor-pointer"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <Hix size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="ms:hidden bg-[#F7F0E8] border-t border-[#E8DDD0]">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-4 text-center hover:bg=[#E8DDD0]"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
