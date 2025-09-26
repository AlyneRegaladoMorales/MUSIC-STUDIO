import Button from "./Button";

const Home = () => {
  return (
    <section
      id="home"
      className="max-w-[80vw] mx-auto min-h-screen flex flex-col items-center justify-center text-center text-white py-20 gap-10"
    >
      <p className="text-light text-base">2025 – The Ultimate Experience</p>

<h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
        A <span className="text-neonYellow">Concert</span> Experience Like No
        Other
      </h1>

      <p className="text-base md:text-lg text-light">
        Join us for an unforgettable night of music, energy, and passion. Don’t
        miss the chance to be part of the most exciting event of the year.
      </p>

      <Button>Get Ticket</Button>

      <img
        src="src\assets\images\concert-hero.jpg"
        alt="Concert Experience"
        className="w-[100%] "
      />
    </section>
  );
};

export default Home;
