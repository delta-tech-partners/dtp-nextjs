import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Partnerships from "@/components/Partnerships";
import Philosophy from "@/components/Philosophy";
import WhoWeServe from "@/components/WhoWeServe";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Partnerships />
      <Philosophy />
      <WhoWeServe />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}
