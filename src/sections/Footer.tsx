const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light text-center px-6 py-4 border-t border-light/20">
      <p className="text-sm">
        © {year} Alyne Regalado · Proyecto demo · Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
