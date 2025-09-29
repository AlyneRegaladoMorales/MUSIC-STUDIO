import Button from "../components/Button";

const DiscountBanner = () => {
  return (
    <section
      className="relative w-full min-h-[50vh] flex items-center justify-center bg-cover bg-center py-20 mb-20"
      style={{
        backgroundImage: "url('/bg/discount-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="flex flex-col relative z-10 w-[90vw]  min-h-[40vh] text-center border border-neonYellow p-20 gap-10 rounded-lg">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          <span className="text-light"> Hasta </span>
          <span className="text-neonYellow">20%</span>
          <span className="text-light"> de descuento en las compras de este mes</span>
        </h2>


        <Button>
          Comprar Ticket
        </Button>
      </div>
    </section>
  );
};

export default DiscountBanner;
