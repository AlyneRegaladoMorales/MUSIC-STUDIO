import type { FC } from "react";
import { galleryImages } from "../data/galleryImages";

const Gallery: FC = () => {
 return (
    <section
      id="gallery"
      className="flex flex-col w-[80vw] mx-auto pb-20 text-center gap-10"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
        <span className="text-light">Gallery </span>
        <span className="text-neonYellow">Concert</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover rounded-lg hover:scale-105 ${image.className}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
