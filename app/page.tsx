import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Menu />
      <Footer />
    </main>
  );
}