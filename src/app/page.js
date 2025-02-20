import Navbar from "@/components/Navbar";
import HeroSection from '@/components/Hero';
import BuyersSection from "@/components/BuyersSection";
// import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/Portfoliosection";
import SellNowSection from "@/components/SellNow";
import TestimonialSection from "@/components/Testimonial";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <PortfolioSection/>
    <SellNowSection/>
    <BuyersSection/>
    <TestimonialSection/>
    <CTA/>
    <Footer/>
   </div>
  );
}
