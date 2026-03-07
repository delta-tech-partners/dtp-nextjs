// import { IconName } from "lucide-react"; // Import lucide-react icons here

export default function Navbar() {
  return (
    <nav className="sticky-nav sticky top-0 z-50 border-b border-gray-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="font-black text-xl tracking-tighter italic uppercase">Delta Tech<span className="text-blue-600">.</span>Partners</div>
            <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                <a href="#services" className="hover:text-white transition">Our Services</a>
                <a href="#philosophy" className="hover:text-white transition">Philosophy</a>
                <a href="#who-we-serve" className="hover:text-white transition">Who We Serve</a>
                <a href="#partners" className="hover:text-white transition">The Partners</a>
                <a href="#contact" className="text-blue-500 hover:text-blue-400">Contact</a>
            </div>
        </div>
    </nav>
  );
}
