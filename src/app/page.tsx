import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import Layout from "./layout"
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";




export default function Home() {
  return (
    <main>
        
      <Hero />
      <NewProducts />
      <Testimonial />
    </main>
  );
}
