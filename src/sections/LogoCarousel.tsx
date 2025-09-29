import Marquee from "react-fast-marquee";
import { logos } from "../data/logos";

const LogoCarousel = () => {
  return (
    <section className="relative py-6  backdrop-blur-md bg-zinc-100/10 ">
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-dark  z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-dark z-10"></div>

      <Marquee>
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-10 sm:mx-16 p-4"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-10 w-auto opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default LogoCarousel;
