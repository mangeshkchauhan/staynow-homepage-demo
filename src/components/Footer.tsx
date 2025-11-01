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

			{/* Get the App Section */}
			<div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] animate-gradient overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
						alt="Travel Background"
						className="w-full h-full object-cover opacity-20"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 via-purple-600/80 to-indigo-600/80" />
				</div>
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="relative z-10">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-sm font-medium mb-6 shadow-lg hover:bg-white/30 transition-all duration-300">
								<Smartphone className="w-4 h-4" />
								Download Now
							</div>
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
								Take StayNow
								<br />
								<span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
									Everywhere You Go
								</span>
							</h2>
							<p className="text-xl text-white/90 mb-8 leading-relaxed">
								Plan trips on the go, get instant notifications about price
								drops, and access your itineraries offline.
							</p>
							<div className="flex flex-wrap gap-4">
								<button
									type="button"
									className="group px-6 py-3 bg-black/90 backdrop-blur-sm text-white rounded-xl hover:bg-black hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl"
								>
									<svg
										className="w-6 h-6 group-hover:scale-110 transition-transform"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<title>Apple</title>
										<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
									</svg>
									<div className="text-left">
										<div className="text-xs opacity-90">Download on the</div>
										<div className="text-sm font-semibold">App Store</div>
									</div>
								</button>
								<button
									type="button"
									className="group px-6 py-3 bg-black/90 backdrop-blur-sm text-white rounded-xl hover:bg-black hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl"
								>
									<svg
										className="w-6 h-6 group-hover:scale-110 transition-transform"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<title>Google Play</title>
										<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
									</svg>
									<div className="text-left">
										<div className="text-xs opacity-90">GET IT ON</div>
										<div className="text-sm font-semibold">Google Play</div>
									</div>
								</button>
							</div>
						</div>
						<div className="hidden lg:block relative z-10">
							<div className="relative">
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-20 blur-2xl" />
								<img
									src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
									alt="Mobile App"
									className="relative rounded-3xl shadow-2xl ring-1 ring-white/10 hover:scale-105 transition-transform duration-500"
								/>
							</div>
						</div>
					</div>
				</div>
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
							<span className="text-2xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
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
