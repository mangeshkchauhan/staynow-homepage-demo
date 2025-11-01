import {
	Facebook,
	Instagram,
	Linkedin,
	Smartphone,
	Sparkles,
	Twitter,
	Youtube,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
				<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
			</div>

			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
					{/* Brand */}
					<div className="lg:col-span-2">
						<div className="flex items-center gap-2 mb-4 group cursor-pointer">
							<div className="relative">
								<Sparkles className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
								<div className="absolute inset-0 bg-indigo-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
							</div>
							<span className="text-2xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
								StayNow
							</span>
						</div>
						<p className="text-neutral-400 mb-6 leading-relaxed">
							Your AI-powered travel companion. Plan perfect trips, discover
							amazing stays, and create unforgettable memories.
						</p>
						<div className="flex items-center gap-3">
							<a
								href="#"
								className="group w-11 h-11 bg-neutral-800/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-indigo-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 backdrop-blur-sm ring-1 ring-neutral-700/50 hover:ring-indigo-500/50"
							>
								<Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
							</a>
							<a
								href="#"
								className="group w-11 h-11 bg-neutral-800/50 hover:bg-gradient-to-br hover:from-sky-600 hover:to-sky-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/50 backdrop-blur-sm ring-1 ring-neutral-700/50 hover:ring-sky-500/50"
							>
								<Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
							</a>
							<a
								href="#"
								className="group w-11 h-11 bg-neutral-800/50 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 backdrop-blur-sm ring-1 ring-neutral-700/50 hover:ring-pink-500/50"
							>
								<Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
							</a>
							<a
								href="#"
								className="group w-11 h-11 bg-neutral-800/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 backdrop-blur-sm ring-1 ring-neutral-700/50 hover:ring-blue-500/50"
							>
								<Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
							</a>
							<a
								href="#"
								className="group w-11 h-11 bg-neutral-800/50 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 backdrop-blur-sm ring-1 ring-neutral-700/50 hover:ring-red-500/50"
							>
								<Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
							</a>
						</div>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
							Company
							<span className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
						</h3>
						<ul className="space-y-3 text-neutral-400">
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Press
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Blog
								</a>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
							Support
							<span className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
						</h3>
						<ul className="space-y-3 text-neutral-400">
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Help Center
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Safety Center
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Partnerships
								</a>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
							Legal
							<span className="h-px flex-1 bg-gradient-to-r from-neutral-700 to-transparent" />
						</h3>
						<ul className="space-y-3 text-neutral-400">
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Terms of Service
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Cookie Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
									Sitemap
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
