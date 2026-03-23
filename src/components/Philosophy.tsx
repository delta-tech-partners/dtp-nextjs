// import { IconName } from "lucide-react"; // Import lucide-react icons here

export default function Philosophy() {
    return (
        <section id="philosophy" className="py-24 px-6 bg-[#0c0c0c] border-t border-gray-900">
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-3xl font-bold uppercase tracking-tighter italic border-l-4 border-blue-600 pl-6">Our Philosophy of Service</h2>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bento-card p-12 rounded-3xl border-blue-900/30 bg-blue-950/5 relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
                    <i data-lucide="handshake" className="text-blue-600 w-16 h-16 mb-6"></i>
                    <h3 className="text-xl font-bold text-white uppercase">1. Client Needs</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">First, we start by conducting a discovery session with you to deeply understand your business, your goals, and any technical requirements you may have. This is to ensure we understand your needs, the scope of the project, and how we can deliver value to you.</p>
                </div>
                <div className="bento-card p-12 rounded-3xl border-blue-900/30 bg-blue-950/5 relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
                    <i data-lucide="handshake" className="text-blue-600 w-16 h-16 mb-6"></i>
                    <h3 className="text-xl font-bold text-white uppercase">2. Aligning Our Incentives</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Second, we believe that the highest level of service comes from a synchronized partnership. We only want to win when you win, so we structure our engagements to make sure our goals are aligned with yours. This removes the traditional conflicts of interest found in vendor relationships, and ensures that every decision we make is focused on the best outcome for you.</p>
                </div>
                <div className="bento-card p-12 rounded-3xl border-blue-900/30 bg-blue-950/5 relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
                    <i data-lucide="handshake" className="text-blue-600 w-16 h-16 mb-6"></i>
                    <h3 className="text-xl font-bold text-white uppercase">3. Value Delivery</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Lastly, with a sound strategy in place, we move to execution. Whether we are overseeing external vendors on your behalf, providing technical guidance, or building the systems ourselves, our focus remains on ensuring you are highly satisfied with the results.</p>
                </div>
            </div>
        </section>
    );
}
