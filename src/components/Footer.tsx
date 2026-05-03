// import { IconName } from "lucide-react"; // Import lucide-react icons here

export default function Footer() {
    return (
        <footer className="py-12 border-t theme-border px-6 theme-section">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-[10px] uppercase tracking-widest theme-soft font-bold">
                    Delta Tech Partners &copy; 2026
                </div>
                <div className="flex gap-8 text-[10px] uppercase tracking-widest theme-soft font-bold">
                    <a href="mailto:info@deltatechpartners.com" className="theme-link transition" data-cursor="native">info@deltatechpartners.com</a>
                    <a href="https://cal.com/deltatech/session" target="_blank" rel="noopener noreferrer" className="theme-link transition" data-cursor="native">Book a Session</a>
                </div>
            </div>
        </footer>
    );
}
