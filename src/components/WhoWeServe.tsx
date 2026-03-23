// import { IconName } from "lucide-react"; // Import lucide-react icons here

export default function WhoWeServe() {
    return (
        <section id="who-we-serve" className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-900">
            <h2 className="text-3xl font-bold mb-16 uppercase tracking-tighter italic text-center">Who We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bento-card p-8 rounded-2xl">
                    <h4 className="text-lg font-bold mb-4 text-blue-500">Private Venture and Property Owners</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Owners who need an <strong>engineer&apos;s eye</strong> to manage vendors, create new tools, or ensure their tech project will stay on track.</p>
                </div>
                <div className="bento-card p-8 rounded-2xl">
                    <h4 className="text-lg font-bold mb-4 text-white">Startup Founders</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Early-stage entrepreneurs needing <strong>Fractional CTO leadership and system architecture design</strong> to build testable MVPs.</p>
                </div>
                <div className="bento-card p-8 rounded-2xl">
                    <h4 className="text-lg font-bold mb-4 text-white">Small and Medium Sized Businesses</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Growing companies who want to <strong>modernize legacy systems</strong> or transition to custom software without the costs of a full-time team.</p>
                </div>
                <div className="bento-card p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-600 text-[8px] px-2 py-1 font-bold uppercase tracking-widest">Coming Soon</div>
                    <h4 className="text-lg font-bold mb-4 text-gray-500">City and County Governments</h4>
                    <p className="text-gray-500 text-sm leading-relaxed italic">Public entities seeking transparent, compliant software and managed services.</p>
                </div>
            </div>
        </section>
    );
}
