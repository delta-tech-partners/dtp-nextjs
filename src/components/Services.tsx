import { Activity, Briefcase, Code, Eye, Layers, Rocket, Terminal, UserPlus } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 border-t border-gray-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-8 p-8 border border-white rounded-2xl">
                    <h2 className="text-3xl font-bold uppercase tracking-tight italic text-blue-500 mb-10">
                        <Briefcase className="inline-block w-8 h-8 mr-2" />
                        Technical Consulting
                    </h2>
                    <div className="group">
                        <h4 className="text-xl font-bold text-white uppercase group-hover:text-blue-400 transition">
                            <UserPlus className="inline-block w-8 h-8 mr-2" />
                            Fractional CTO
                        </h4>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">Strategic technology leadership and high-level advisory for founders and business owners.</p>
                    </div>
                    <div className="group">
                        <h4 className="text-xl font-bold text-white uppercase group-hover:text-blue-400 transition">
                            <Eye className="inline-block w-8 h-8 mr-2" />
                            Owner’s Representation</h4>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">Acting as your fiduciary in the tech space, overseeing third-party vendors and protecting your project’s integrity.</p>
                    </div>
                    <div className="group">
                        <h4 className="text-xl font-bold text-white uppercase group-hover:text-blue-400 transition">
                            <Activity className="inline-block w-8 h-8 mr-2" />
                            Infrastructure Audits
                        </h4>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">In-depth technical health checks to identify risks, security gaps, and performance bottlenecks.</p>
                    </div>
                </div>

                <div className="space-y-8 p-8 border border-white rounded-2xl">
                    <h2 className="text-3xl font-bold uppercase tracking-tight italic text-gray-500 mb-10">
                        <Code className="inline-block w-8 h-8 mr-2" />
                        Engineering Services
                    </h2>
                    <div className="group">
                        <h4 className="text-xl font-bold text-white uppercase group-hover:text-blue-400 transition">
                            <Layers className="inline-block w-8 h-8 mr-2" />
                            System Architecture Design</h4>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">Designing robust, scalable technical foundations for your software ecosystem.</p>
                    </div>
                    <div className="group">
                        <h4 className="text-xl font-bold text-white uppercase group-hover:text-blue-400 transition">
                            <Terminal className="inline-block w-8 h-8 mr-2" />
                            Custom Software Development <br /><span className="text-gray-500">(Cloud, Web, and Mobile)</span>
                        </h4>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">Full-cycle development from ideation to deployment on any modern platform.</p>
                    </div>
                    <div className="group">
                        <h4 className="text-xl font-bold text-white uppercase group-hover:text-blue-400 transition">
                            <Rocket className="inline-block w-8 h-8 mr-2" />
                            MVP Prototyping
                        </h4>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">Rapidly building functional prototypes to test your market assumptions and secure traction.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
