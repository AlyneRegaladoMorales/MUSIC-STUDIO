import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { testimonials } from "../data/testimonials";


const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const half = Math.floor(visibleCount / 2);
  const avatarsToShow = Array.from({ length: visibleCount }, (_, i) => {
    const index =
      (current - half + i + testimonials.length) % testimonials.length;
    return { ...testimonials[index], index };
  });

  return (
    <section className="flex flex-col w-[90vw] min-w-[268px] mx-auto py-20 gap-10 text-center text-light">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
        <span className="text-light"> Opiniones de los asistentes al </span>
        <span className="text-neonYellow">Concierto</span>
      </h2>
      <p className="text-light mx-auto mt-2 text-sm sm:text-base">
        Esto es lo que nuestro público piensa sobre la experiencia musical única que ofrecemos.
      </p>

      <div className="flex items-center justify-center gap-8 mt-10">
        <button
          onClick={prevSlide}
          className="bg-neonYellow text-black p-2 rounded-full hover:scale-105 transition"
        >
          <FaArrowLeft />
        </button>

        <div className="flex gap-8">
          {avatarsToShow.map((t) => (
            <img
              key={t.index}
              src={t.image}
              alt={t.name}
              className={`w-40 h-40 rounded-full object-cover border-2 transition-all ${
                t.index === current
                  ? "border-neonYellow scale-110"
                  : "border-transparent opacity-70"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-neonYellow text-black p-2 rounded-full hover:scale-105 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="flex justify-center mb-3">
        {Array.from({ length: testimonials[current].rating }).map((_, i) => (
          <FaStar key={i} className="text-neonYellow text-sm sm:text-base" />
        ))}
      </div>

      <p className="text-light italic text-sm sm:text-base">
        "{testimonials[current].review}"
      </p>
      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
        {testimonials[current].name}
      </h4>
    </section>
  );
};

export default Testimonials;
