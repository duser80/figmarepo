import Navbar from "@/components/Navbar";
import HeroSection from '@/components/Hero';
import BuyersSection from "@/components/BuyersSection";
import Footer2 from "@/components/CTA";
import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/Portfoliosection";
import SellNowSection from "@/components/SellNow";
import TestimonialSection from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <PortfolioSection/>
    <SellNowSection/>
    <BuyersSection/>
    <TestimonialSection/>
    <Footer2/>
    <Footer/>
   </div>
  );
}
