import DiscountBanner from "../sections/DiscountBanner";
import FooterCompact from "../sections/Footer";
import Gallery from "../sections/Gallery";
import Genres from "../sections/Genres";
import Home from "../sections/Home";
import LogoCarousel from "../sections/LogoCarousel";
import NavBar from "../components/NavBar";
import Seating from "../sections/Seating";
import Testimonials from "../sections/Testimonials";

const Layout = () => {
  return (
    <div className=" min-h-screen w-full min-w-[268px]">
      <NavBar />

      <main className="pt-[8vh]">
        <Home />
        <LogoCarousel />
        <Genres />
        <Seating />
        <Gallery />
        <Testimonials />
        <DiscountBanner />
        <FooterCompact />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
