import Link from "next/link";

export default function Partners() {
    return (
        <section id="about" className="py-24 px-6 theme-section-alt border-t theme-border">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold uppercase tracking-tighter italic">About Us</h2>
                    <p className="theme-soft mt-4 text-xl font-light">Institutional Rigor. Boutique Agility.</p>
                    <div className="max-w-3xl mx-auto mt-6 theme-muted leading-relaxed">
                        Delta Tech Partners was founded to bring enterprise-grade technical judgment to owner-led businesses. We help clients navigate software decisions with the discipline of a technical operator, the clarity of a product partner, and the independence of an owner&apos;s representative.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 text-left">
                        <div className="bento-card rounded-lg p-5">
                            <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">Product</p>
                            <p className="theme-muted text-sm leading-relaxed">Clarify what should be built, bought, integrated, or retired.</p>
                        </div>
                        <div className="bento-card rounded-lg p-5">
                            <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">Platform</p>
                            <p className="theme-muted text-sm leading-relaxed">Modernize systems so delivery, AI, data, and operations can scale.</p>
                        </div>
                        <div className="bento-card rounded-lg p-5">
                            <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">Experience</p>
                            <p className="theme-muted text-sm leading-relaxed">Make complex tools feel credible, usable, and ready for real teams.</p>
                        </div>
                    </div>
                    <Link href="/about/team" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all">
                        Meet the Team
                    </Link>
                </div>
            </div>
        </section>
    );
}
