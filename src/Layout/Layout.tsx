import Genres from "../components/Genres";
import Home from "../components/Home";
import LogoCarousel from "../components/LogoCarousel";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="bg-dark min-h-screen w-full min-w-[268px]">
      <NavBar />

      <main className="pt-[8vh]">
        <Home />
        <LogoCarousel />
        <Genres />

      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
