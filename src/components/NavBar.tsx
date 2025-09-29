import { useState } from "react";
import Link from "./Link";
import Button from "./Button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-dark text-white border-b border-yellow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          <span className="text-light">Melodi</span>
          <span className="text-neonYellow">C</span>
        </h1>

        <nav className="hidden md:flex space-x-8 text-base ">
          <Link href="#home">Inicio</Link>
          <Link href="#genre">Géneros</Link>
          <Link href="#stage">Escenario</Link>
          <Link href="#gallery">Galería</Link>
        </nav>

        <Button className="hidden md:inline-block">Comprar Ticket</Button>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir o cerrar menú"
        ></button>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir o cerrar menú"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-dark text-light flex flex-col items-center space-y-4 py-6 border-t border-yellow">
          <Link href="#home" onClick={handleClose}>
            Inicio
          </Link>
          <Link href="#genre" onClick={handleClose}>
            Géneros
          </Link>
          <Link href="#stage" onClick={handleClose}>
            Escenario
          </Link>
          <Link href="#gallery" onClick={handleClose}>
            Galería
          </Link>
          <Button onClick={handleClose}>Comprar Ticket</Button>
        </nav>
      )}
    </header>
  );
};
export default NavBar;
