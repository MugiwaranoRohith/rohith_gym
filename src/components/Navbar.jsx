import { useEffect, useState } from "react";

const sections = [
  { id: "programs", label: "Programs" },
  { id: "plans", label: "Plans" },
  { id: "tracker", label: "Tracker" },
  { id: "testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [active, setActive] = useState("programs");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(s.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
      <div className="flex justify-between items-center px-6 md:px-16 py-5 text-white">
        <h1
          className="font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          THE FIT CLUB
        </h1>

        <ul className="hidden md:flex gap-10 text-sm">
          {sections.map((s) => (
            <li
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`cursor-pointer ${
                active === s.id ? "text-orange-500" : "hover:text-orange-400"
              }`}
            >
              {s.label}
            </li>
          ))}
        </ul>

     

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black px-6 py-6 space-y-4 text-white">
          {sections.map((s) => (
            <p
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={active === s.id ? "text-orange-500" : ""}
            >
              {s.label}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
