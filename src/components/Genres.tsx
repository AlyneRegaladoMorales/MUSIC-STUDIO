import GenreCard from "./GenreCard";

const genres = [
  {
    title: "Pop Music",
    description:
      "Ut enimom lingues es membres del sam familie. Lor separat existentie es myth. Por scientie, musica, sport etc, tot Europa usa li sam vocabular.",
    image: "src/assets/geners/img1.jpg",
  },
  {
    title: "Rock Music",
    image: "src/assets/geners/img2.jpg",
  },
  {
    title: "Jazz Music",
    image: "src/assets/geners/img3.jpg",
  },
];

const Genres = () => {
   return (
    <section
      id="genre"
      className="flex flex-col w-[80vw] mx-auto py-20 gap-10"
    >
      <div className="">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          <span className="text-neonYellow">Line Up</span>{" "}
          <span className="text-light">of Music </span>
          <br />
          <span className="text-light"> Genres </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-2 h-[70vh]">
        <GenreCard
          title={genres[0].title}
          description={genres[0].description}
          image={genres[0].image}
          className="h-full"
        />

        <div className="grid grid-rows-2 gap-2 h-full min-h-0"> 
          {genres.slice(1).map((genre) => (
            <GenreCard
              key={genre.title}
              title={genre.title}
              image={genre.image}
              className="min-h-0" 
            />
          ))}
        </div>
      </div>
    </section>
  );

};

export default Genres;
