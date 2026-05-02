// import { IconName } from "lucide-react"; // Import lucide-react icons here

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 theme-section border-t theme-border text-center">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-12">Ready to Get things Done?</h3>

                <p className="theme-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                    Whether you&apos;re looking for a Technical Owner&apos;s Representative to audit an existing project or a Fractional CTO to build your next venture, we&apos;re ready to advocate for you.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20">
                    <a href="#" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all" data-cursor="native">Schedule a Call</a>
                    <span className="theme-faint font-mono">OR</span>
                    <a href="mailto:solutions@deltatechpartners.com" className="px-10 py-5 border theme-secondary-button font-bold uppercase tracking-widest text-xs rounded-full transition-all" data-cursor="native">Email Us</a>
                </div>

                <div className="mono theme-soft text-[10px] uppercase tracking-widest">
                    Headquarters: Tampa Bay Area, Florida
                </div>
            </div>
        </section>
    );
}
