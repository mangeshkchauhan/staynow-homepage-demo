import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const screenWidth = window.innerHeight;

	useEffect(() => {
		const onScroll = () => {
			setIsScrolled(window.scrollY > screenWidth - 80);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [screenWidth]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50  transition-colors duration-300 ${!isScrolled ? "backdrop-blur-[2px] text-white " : "bg-white border-b border-neutral-200 text-neutral-700/90 "}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<a
						href="/"
						aria-label="Home"
						className="flex items-center space-x-2 group cursor-pointer"
					>
						<img
							src={ isScrolled ? "/dark.png" : "/white.png" }
							alt="StayNow"
							className="h-10 md:h-11 w-auto drop-shadow"
						/>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<a
							href="#features"
							className="relative  text-xl hover:text-indigo-600 transition-colors font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full cursor-pointer"
						>
							Features
						</a>
						<a
							href="#destinations"
							className="relative  text-xl hover:text-indigo-600 transition-colors font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full cursor-pointer"
						>
							Destinations
						</a>
						<a
							href="#how-it-works"
							className="relative  text-xl hover:text-indigo-600 transition-colors font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full cursor-pointer"
						>
							How it Works
						</a>
						<a
							href="#about"
							className="relative  text-xl hover:text-indigo-600 transition-colors font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full cursor-pointer"
						>
							About
						</a>
					</nav>

					{/* CTA Buttons */}
					<div className="hidden md:flex items-center space-x-3">
						<button
							onClick={() => {
								window.open(
									"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
									"_blank",
								);
							}}
							rel="noopener noreferrer"
							type="button"
							className="px-4 py-2 text-xl hover:text-indigo-600 font-medium transition-colors cursor-pointer"
						>
							Sign In
						</button>
						<button
							onClick={() => {
								window.open(
									"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
									"_blank",
								);
							}}
							type="button"
							className="px-4 py-2 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition-all font-medium cursor-pointer"
						>
							Plan with NowAI
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						type="button"
						className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={isMenuOpen}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="w-6 h-6 text-neutral-700" />
						) : (
							<Menu className="w-6 h-6 text-neutral-700" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden border-t border-neutral-200 bg-white">
					<div className="px-4 py-4 space-y-3">
						<button
							type="button"
							className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
							onClick={() => {
								setIsMenuOpen(false);
								document
									.querySelector("#features")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Features
						</button>
						<button
							type="button"
							className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
							onClick={() => {
								setIsMenuOpen(false);
								document
									.querySelector("#destinations")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Destinations
						</button>
						<button
							type="button"
							className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
							onClick={() => {
								setIsMenuOpen(false);
								document
									.querySelector("#how-it-works")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							How it Works
						</button>
						<button
							type="button"
							className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
							onClick={() => {
								setIsMenuOpen(false);
								document
									.querySelector("#about")
									?.scrollIntoView({ behavior: "smooth" });
							}}
						>
							About
						</button>
						<div className="pt-3 space-y-2">
							<button
								onClick={() => {
									window.open(
										"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
										"_blank",
									);
								}}
								type="button"
								className="w-full px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors font-medium cursor-pointer"
							>
								Sign In
							</button>
							<button
								onClick={() => {
									window.open(
										"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
										"_blank",
									);
								}}
								type="button"
								className="w-full px-4 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium cursor-pointer"
							>
								Plan with NowAI
							</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
