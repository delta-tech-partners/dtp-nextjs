export default function Partnerships() {
    return (
        <section id="partnerships" className="py-24 px-6 bg-[#0a0a0a] border-t border-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-6">Strategic Business <span className="text-blue-600">Partnerships</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Beyond traditional consulting, we look for opportunities to deeply align our technical expertise with high-growth business models. We engage in strategic partnerships where technology is the primary driver of enterprise value.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <i data-lucide="check-circle" className="text-blue-600 w-6 h-6 shrink-0 mt-1"></i>
                                <div>
                                    <span className="font-bold text-white uppercase">Joint Ventures</span>
                                    <p className="text-gray-500 text-sm">Co-founding or supporting tech-enabled ventures with industry experts.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <i data-lucide="check-circle" className="text-blue-600 w-6 h-6 shrink-0 mt-1"></i>
                                <div>
                                    <span className="font-bold text-white uppercase">Strategic Equity</span>
                                    <p className="text-gray-500 text-sm">Providing elite engineering and leadership in exchange for equity in high-potential platforms.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <i data-lucide="check-circle" className="text-blue-600 w-6 h-6 shrink-0 mt-1"></i>
                                <div>
                                    <span className="font-bold text-white uppercase">Portfolio Oversight</span>
                                    <p className="text-gray-500 text-sm">Acting as technical fiduciaries for Private Equity and Venture Capital portfolios.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bento-card p-12 rounded-3xl border-blue-900/30 bg-blue-950/5 relative overflow-hidden group">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
                        <i data-lucide="handshake" className="text-blue-600 w-16 h-16 mb-6"></i>
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white">Skin in the Game</h3>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            We don't just bill hours; we build assets. Our partnership model is designed for visionary owners who want a technical partner that cares as much about the exit as they do.
                        </p>
                        <a href="#contact" className="inline-block text-blue-500 font-bold uppercase tracking-widest text-xs border-b border-blue-500 pb-1 hover:text-white hover:border-white transition">Inquire about partnership</a>
                    </div>
                </div>
            </div>
        </section>
    );
}