import Button from "../components/Button";

const Home = () => {
  return (
    <section
      id="home"
      className="max-w-[80vw] mx-auto min-h-screen flex flex-col items-center justify-center text-center text-white py-20 gap-10"
    >
      <p className="text-light text-base">2025 – La Experiencia Definitiva</p>

      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
        Una <span className="text-neonYellow">Experiencia</span> Musical Como Ninguna Otra
      </h1>

      <p className="text-base md:text-lg text-light">
        Únete a nosotros para una noche inolvidable de música, energía y pasión.  
        No pierdas la oportunidad de ser parte del evento más emocionante del año.
      </p>

      <Button>Comprar Ticket</Button>

      <img
        src="src/assets/images/concert-hero.jpg"
        alt="Experiencia Musical"
        className="w-[100%]"
      />
    </section>
  );
};

export default Home;
