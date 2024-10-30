import About from "@/components/About";
import Certification from "@/components/Certification";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TransparentSwiper from "@/components/Gallery";
import Header from "@/components/Header";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import Plans from "@/components/Plans";
import Sub from "@/components/Sub";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Join />
      <About />
      <Video />
      <Plans />
      <Certification />
      <Sub />
      <TransparentSwiper />
      <FAQ />
      <Testimonial />
      <Footer />
    </div>
  );
}
