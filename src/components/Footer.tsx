// import { IconName } from "lucide-react"; // Import lucide-react icons here

export default function Footer() {
    return (
        <footer className="py-12 border-t border-gray-900 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    Delta Tech Partners &copy; 2026
                </div>
                <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
