import Image from "next/image";
import Link from "next/link";
import { industryNavigation } from "@/data/industries";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "../../public/dtp-updated-logo.svg";

export default function Navbar() {
  return (
    <nav className="sticky-nav sticky top-0 z-50 border-b theme-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-black text-xl tracking-tighter italic uppercase">
          <Link href="/">
            <Image src={logo} alt="Delta Tech Partners Logo" width={70} height={70} />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-8 text-base uppercase tracking-widest font-bold theme-muted">
            <Link href="/#services" className="theme-link transition">Services</Link>
            <Link href="/#partnerships" className="theme-link transition">Partnerships</Link>
            <div className="relative group">
              <button type="button" className="theme-link transition uppercase tracking-widest font-bold cursor-pointer">
                Industries
              </button>
              <div className="absolute left-0 top-full hidden min-w-72 pt-4 group-hover:block group-focus-within:block">
                <div className="bento-card rounded-2xl p-3 shadow-2xl">
                  {industryNavigation.map((industry) => (
                    <Link key={industry.href} href={industry.href} className="theme-link block rounded-xl px-4 py-3 text-sm hover:bg-blue-600/10 transition">
                      {industry.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/#philosophy" className="theme-link transition">Our Philosophy</Link>
            <Link href="/#who-we-serve" className="theme-link transition">Who We Serve</Link>
            <div className="relative group">
              <button type="button" className="theme-link transition uppercase tracking-widest font-bold cursor-pointer">
                About Us
              </button>
              <div className="absolute left-0 top-full hidden min-w-64 pt-4 group-hover:block group-focus-within:block">
                <div className="bento-card rounded-2xl p-3 shadow-2xl">
                  <Link href="/#about" className="theme-link block rounded-xl px-4 py-3 text-sm hover:bg-blue-600/10 transition">
                    Company Overview
                  </Link>
                  <Link href="/about/team" className="theme-link block rounded-xl px-4 py-3 text-sm hover:bg-blue-600/10 transition">
                    Team
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/#contact" className="text-blue-500 hover:text-blue-400">Contact</Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
