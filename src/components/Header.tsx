// import { IconName } from "lucide-react"; // Import lucide-react icons here

export default function Header() {
    return (
        <header className="py-32 px-6 theme-section">
            <div className="max-w-5xl mx-auto text-center">
                <div className="mono text-blue-500 text-xs font-bold tracking-[0.3em] mb-4 uppercase">Delta Tech Partners</div>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 gradient-text animate-fade-in-up">
                    Your Technical Allies in a Complex Market
                </h1>
                <p className="text-lg md:text-xl theme-muted max-w-3xl mx-auto leading-relaxed mb-12">
                    Delta Tech Partners is a consulting and software engineering services firm aiming to help business owners navigate complex technical projects.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all">Schedule Meeting</a>
                    <a href="#services" className="px-8 py-4 border theme-secondary-button font-bold uppercase tracking-widest text-xs rounded-full transition-all">View Our Services</a>
                </div>
            </div>
        </header>
    );
}
