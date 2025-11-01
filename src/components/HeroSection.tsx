import { Calendar, MapPin, Search } from "lucide-react";
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
						Plan Your Dream Trip
						<br />
						<span className="bg-linear-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
							In Seconds
						</span>
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
						Tell us where you want to go or ask our AI to plan it for you.
					</p>
				</div>

				{/* Mode Toggle */}
				<div className="mb-4 flex justify-center">
					<div className="inline-flex items-center rounded-full p-1 bg-white/10 border border-white/20">
						<button
							type="button"
							onClick={() => setMode("ai")}
							className={`px-4 py-2 rounded-full text-sm font-medium transition ${
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
							className={`px-4 py-2 rounded-full text-sm font-medium transition ${
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
				<div className="min-h-[200px] sm:min-h-[120px] flex items-start">
					{mode === "ai" ? (
						<div className="max-w-3xl mx-auto w-full">
							<div className="flex items-center gap-2 bg-white/90 rounded-2xl p-2 pl-3 sm:pl-4 border border-white/30 shadow-2xl">
								<MapPin className="w-5 h-5 text-neutral-500 shrink-0" />
								<input
									type="text"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									placeholder="Try: 5 days in Tokyo in April"
									className="flex-1 bg-transparent outline-none text-neutral-900 placeholder-neutral-500 py-2 sm:py-3"
								/>
								<button
									type="button"
									className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-linear-to-r from-pink-500 to-violet-600 text-white font-semibold hover:opacity-95 whitespace-nowrap"
								>
									<Search className="w-5 h-5" />
									Plan trip
								</button>
							</div>
							<div className="mt-4 flex flex-nowrap overflow-x-auto justify-center gap-2">
								<button
									type="button"
									onClick={() => setQuery("Romantic weekend in Paris")}
									className="px-3 py-1.5 bg-white/80 hover:bg-white rounded-full text-sm text-neutral-800"
								>
									🗼 Paris weekend
								</button>
								<button
									type="button"
									onClick={() => setQuery("Family trip to Tokyo, 7 days")}
									className="px-3 py-1.5 bg-white/80 hover:bg-white rounded-full text-sm text-neutral-800"
								>
									🏯 Tokyo with kids
								</button>
								<button
									type="button"
									onClick={() => setQuery("Beach escape in Bali, 6 days")}
									className="px-3 py-1.5 bg-white/80 hover:bg-white rounded-full text-sm text-neutral-800"
								>
									🏝️ Bali escape
								</button>
							</div>
						</div>
					) : (
						<div className="max-w-3xl mx-auto w-full">
							<div className="flex flex-col sm:flex-row sm:items-center gap-2 bg-white/90 rounded-2xl p-2 border border-white/30 shadow-2xl">
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
									className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-[rgba(78,95,255)] text-white font-semibold hover:opacity-95 whitespace-nowrap w-full sm:w-auto"
								>
									<Search className="w-5 h-5" />
									Search
								</button>
							</div>
							{/* Spacer to match AI suggestions row height so headline doesn't shift */}
							<div className="mt-4 h-9" />
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
