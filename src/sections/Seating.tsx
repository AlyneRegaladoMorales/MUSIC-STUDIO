import type { FC } from "react";

const Seating: FC = () => {
  return (
    <section
      id="stage"
      className="flex flex-col w-[80vw] mx-auto text-center pb-20"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
        <span className="text-light">Asientos de </span>
        <span className="text-neonYellow">Alta Calidad</span>
      </h2>

      <div className="flex justify-center">
        <img
          src="src/assets/images/seating.png"
          alt="Escenario"
          className="sm:w-[70vw] md:w-[50vw] h-auto hover:scale-105 transition"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-neonYellow p-4 font-bold rounded hover:scale-105 transition">
          VIP
          <br />
          $400.00
        </div>
        <div className="bg-yellow p-4 font-bold rounded hover:scale-105 transition">
          Platino
          <br />
          $350.00
        </div>
        <div className="bg-orange1 p-4 font-bold rounded hover:scale-105 transition">
          R. Bronce 1
          <br />
          $200.00
        </div>
        <div className="bg-orange2 p-4 font-bold rounded hover:scale-105 transition">
          R. Bronce 2
          <br />
          $180.00
        </div>
      </div>
    </section>
  );
};

export default Seating;
