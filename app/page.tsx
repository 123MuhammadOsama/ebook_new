
import CardGrid from "@/components/CardGrid";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
// import Footer from "@/components/Footer";
import Ghost from "@/components/Ghost";
import Ghostwriting from "@/components/Ghostwriting";
import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Order from "@/components/Order";
import Process from "@/components/Process";
import Story from "@/components/Story";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Order/>
      <CardGrid/>
      <Ghost/>
      <Story/>
      <Process/>
      <Testimonial/>
      <Ghostwriting/>
      <FAQ/>
      <Contact/>
    </div>
  );
}
