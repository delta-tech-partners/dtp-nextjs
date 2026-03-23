import Image from "next/image";
import logo from "../../public/dtp-logo-no-text.svg";

export default function Navbar() {
  return (
    <nav className="sticky-nav sticky top-0 z-50 border-b border-gray-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-black text-xl tracking-tighter italic uppercase">
          <Image src={logo} alt="Delta Tech Partners Logo" width={70} height={70} />
        </div>
        <div className="hidden md:flex gap-8 text-base uppercase tracking-widest font-bold text-gray-400">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#partners" className="hover:text-white transition">Partnerships</a>
          <a href="#philosophy" className="hover:text-white transition">Our Philosophy</a>
          <a href="#who-we-serve" className="hover:text-white transition">Who We Serve</a>
          <a href="#about" className="hover:text-white transition">About Us</a>
          <a href="#contact" className="text-blue-500 hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
