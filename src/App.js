import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import TabbedSection from "./components/TabbedSection";
import EmailSubscription from "./components/EmailSubscription";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Skills />
      <TabbedSection />
      <EmailSubscription />
      <Footer />
    </>
  );
}
