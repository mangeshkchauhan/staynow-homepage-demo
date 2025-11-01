import { Calendar, MapPin, Search, Sparkles } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
	const FEATURES_ID = "features" as const;
	const [mode, setMode] = useState<"ai" | "search">("ai");
	const [query, setQuery] = useState("");
	const [destination, setDestination] = useState("");
	const [dateRange, setDateRange] = useState("");

	return (
		<section
			id={FEATURES_ID}
			className="relative h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Background Image */}
			<img
				src="banner.avif"
				alt=""
				loading="eager"
				decoding="async"
				fetchPriority="high"
				className="absolute inset-0 w-full h-full object-cover"
			/>
			{/* Overlay for readability */}
			<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/40" />

			<div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 text-center">
				{/* Hero Content */}
				<div className="mb-6 sm:mb-8">
					<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
						Let <span className="text-violet-300">AI</span> plan your
						<br />
						<span className="bg-linear-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
							perfect trip
						</span>
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
						Tell us where you want to go or ask our{" "}
						<span className="text-violet-300 font-medium">AI</span> to plan it
						for you.
					</p>
				</div>

				{/* Mode Toggle */}
				<div className="mb-4 flex justify-center">
					<div className="inline-flex items-center rounded-full p-1 bg-white/10 border border-white/20">
						<button
							type="button"
							onClick={() => setMode("ai")}
							className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
								mode === "ai"
									? "bg-white text-neutral-900"
									: "text-white/80 hover:bg-white/10"
							}`}
						>
							Ask NowAI
						</button>
						<button
							type="button"
							onClick={() => setMode("search")}
							className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
								mode === "search"
									? "bg-white text-neutral-900"
									: "text-white/80 hover:bg-white/10"
							}`}
						>
							Search stays
						</button>
					</div>
				</div>

				{/* Inputs - Fixed height container to prevent layout shift */}
				<div className="min-h-[200px] sm:min-h-[120px] flex items-start overflow-visible">
					{mode === "ai" ? (
						<div className="max-w-3xl mx-auto w-full">
							<div className="flex items-center gap-2 bg-white/90 rounded-3xl p-2 pl-3 sm:pl-4 border border-white/30 shadow-2xl">
								<MapPin className="w-5 h-5 text-neutral-500 shrink-0" />
								<input
									type="text"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									placeholder="Try: 5 days in Tokyo in April"
									className="flex-1 bg-transparent outline-none text-neutral-900 placeholder-neutral-500 py-2 sm:py-3"
								/>
								<button
									onClick={() => {
										window.open(
											"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
											"_blank",
										);
									}}
									rel="noopener noreferrer"
									type="button"
									className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl bg-linear-to-r from-pink-500 to-violet-600 text-white font-semibold hover:opacity-95 whitespace-nowrap cursor-pointer"
								>
									<Search className="w-5 h-5" />
									Plan trip
								</button>
							</div>
							<div className="mt-4 min-h-[60px] flex flex-wrap sm:flex-nowrap overflow-x-auto justify-center items-center gap-3 px-4 sm:px-0">
								<button
									type="button"
									onClick={() => setQuery("Romantic weekend in Paris")}
									className="group px-4 py-2 bg-white/95 hover:bg-white rounded-full text-sm font-medium text-neutral-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-white/50 hover:-translate-y-0.5 backdrop-blur-sm cursor-pointer"
								>
									<span className="flex items-center gap-1.5">
										🗼{" "}
										<span className="group-hover:text-pink-600 transition-colors">
											Paris weekend
										</span>
									</span>
								</button>
								<button
									type="button"
									onClick={() => setQuery("Family trip to Tokyo, 7 days")}
									className="group px-4 py-2 bg-white/95 hover:bg-white rounded-full text-sm font-medium text-neutral-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-white/50 hover:-translate-y-0.5 backdrop-blur-sm cursor-pointer"
								>
									<span className="flex items-center gap-1.5">
										🏯{" "}
										<span className="group-hover:text-pink-600 transition-colors">
											Tokyo with kids
										</span>
									</span>
								</button>
								<button
									type="button"
									onClick={() => setQuery("Beach escape in Bali, 6 days")}
									className="group px-4 py-2 bg-white/95 hover:bg-white rounded-full text-sm font-medium text-neutral-800 shadow-lg hover:shadow-xl transition-all duration-200 border border-white/50 hover:-translate-y-0.5 backdrop-blur-sm cursor-pointer"
								>
									<span className="flex items-center gap-1.5">
										🏝️{" "}
										<span className="group-hover:text-pink-600 transition-colors">
											Bali escape
										</span>
									</span>
								</button>
								<div className="hidden sm:block w-px h-6 bg-white/30" />
								<button
									type="button"
									className="group px-4 py-2 bg-violet-500/90 hover:bg-violet-500 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 border border-violet-400/50 hover:-translate-y-0.5 backdrop-blur-sm cursor-pointer"
								>
									<span className="flex items-center gap-1.5">
										<Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
										Explore more
									</span>
								</button>
							</div>
						</div>
					) : (
						<div className="max-w-3xl mx-auto w-full">
							<div className="flex flex-col sm:flex-row sm:items-center gap-2 bg-white/90 rounded-3xl p-2 border border-white/30 shadow-2xl">
								{/* Destination input */}
								<div className="flex items-center gap-2 flex-1 pl-2">
									<MapPin className="w-5 h-5 text-neutral-500 shrink-0" />
									<input
										type="text"
										value={destination}
										onChange={(e) => setDestination(e.target.value)}
										placeholder="Where to?"
										className="flex-1 min-w-0 bg-transparent outline-none text-neutral-900 placeholder-neutral-500 py-2 sm:py-3"
									/>
								</div>

								{/* Separator - hidden on mobile */}
								<span className="hidden sm:block h-6 w-px bg-neutral-300/70" />

								{/* Date input */}
								<div className="flex items-center gap-2 sm:flex-1 pl-2 sm:pl-0">
									<Calendar className="w-5 h-5 text-neutral-500 shrink-0" />
									<input
										type="text"
										value={dateRange}
										onChange={(e) => setDateRange(e.target.value)}
										placeholder="Check-in → Check-out"
										className="flex-1 sm:w-auto bg-transparent outline-none text-neutral-900 placeholder-neutral-500 py-2 sm:py-3"
									/>
								</div>

								{/* Search button */}
								<button
									type="button"
									className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl bg-[rgba(78,95,255)] text-white font-semibold hover:opacity-95 whitespace-nowrap w-full sm:w-auto cursor-pointer"
								>
									<Search className="w-5 h-5" />
									Search
								</button>
							</div>
							{/* Spacer to match AI suggestions row height so headline doesn't shift */}
							<div className="mt-4 min-h-[60px]" />
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
