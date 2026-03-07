// import { IconName } from "lucide-react"; // Import lucide-react icons here

export default function Partners() {
    return (
        <section id="partners" className="py-24 px-6 bg-[#0a0a0a] border-t border-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold uppercase tracking-tighter italic">About Us</h2>
                    <p className="text-gray-500 mt-4 text-xl font-light">Institutional Rigor. Boutique Agility.</p>
                    <div className="max-w-3xl mx-auto mt-6 text-gray-400 leading-relaxed">
                        Delta Tech Partners was founded to bring the &quot;Citi Standard&quot; of engineering to the private sector. Our founding team bridges the gap between massive financial infrastructure and high-growth entrepreneurship.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bento-card p-8 rounded-2xl">
                        <h4 className="text-xl font-bold mb-1">O&apos;Carson Fils</h4>
                        <p className="text-blue-500 text-xs font-bold uppercase mb-4">Strategy & Product</p>
                        <p className="text-gray-300 text-xs mb-2"><strong>Superpower:</strong> Bridging the gap between technical requirements and business ROI.</p>
                        <p className="text-gray-400 text-xs leading-relaxed">A Business Analytics and Information Systems specialist, O&apos;Carson leads customer discovery, product roadmap design, and technical advocacy. He ensures every technical decision aligns with the owner&apos;s exit goals and long-term business value.</p>
                    </div>

                    <div className="bento-card p-8 rounded-2xl">
                        <h4 className="text-xl font-bold mb-1">Arsène I. Muhire</h4>
                        <p className="text-blue-500 text-xs font-bold uppercase mb-4">Platforms & Infrastructure</p>
                        <p className="text-gray-300 text-xs mb-2"><strong>Superpower:</strong> Scaling reliable, &quot;four-nines&quot; (99.99%) backend systems.</p>
                        <p className="text-gray-400 text-xs leading-relaxed">A Carnegie Mellon alum, Arsène is a full-stack and platform engineer obsessed with observability and performance. He specializes in modernizing monoliths, automating CI/CD pipelines, and building the invisible infrastructure that allows businesses to scale without breaking.</p>
                    </div>

                    <div className="bento-card p-8 rounded-2xl">
                        <h4 className="text-xl font-bold mb-1">Lisa Copeland</h4>
                        <p className="text-blue-500 text-xs font-bold uppercase mb-4">Frontend Architecture & UX</p>
                        <p className="text-gray-300 text-xs mb-2"><strong>Superpower:</strong> Translating complex user needs into elite, modern interfaces.</p>
                        <p className="text-gray-400 text-xs leading-relaxed">With over 8 years of experience, Lisa is a Senior Software Engineer specializing in frontend architecture and design systems. She focuses on building modular, accessible, and high-performance web applications that provide a premium experience for real-world users.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
