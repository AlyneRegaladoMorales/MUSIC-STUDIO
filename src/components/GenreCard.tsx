import type { FC } from "react";

interface GenreCardProps {
  title: string;
  image: string;
  description?: string;
  reverse?: boolean;
  className?: string;
}

const GenreCard: FC<GenreCardProps> = ({
  title,
  image,
  description,
  reverse,
  className,
}) => {
  return (
    <div
      className={`flex border bg-dark border-light overflow-hidden transition-transform duration-100 hover:scale-105 ${className || ""}`}
    >
      <div
        className={`flex-1 p-6 flex flex-col justify-center ${
          reverse ? "order-2" : ""
        }`}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-light">
          {title}
        </h3>
        {description && (
          <p className="hidden sm:block text-light text-sm mt-2">
            {description}
          </p>
        )}
      </div>

      <div className={`flex-1 ${reverse ? "order-1" : ""}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover min-h-0"
        />
      </div>
    </div>
  );
};

export default GenreCard;
