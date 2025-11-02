import {
	Calendar,
	Image,
	MapPin,
	Palette,
	Search,
	Sparkles,
	X,
} from "lucide-react";
import { useState } from "react";

type BackgroundType =
	| "banner.avif"
	| "banner2.jpeg"
	| "banner3.jpeg"
	| "banner4.jpeg"
	| "banner5.jpeg"
	| "solid-indigo"
	| "solid-violet"
	| "solid-purple"
	| "solid-fuchsia"
	| "solid-pink"
	| "solid-rose"
	| "solid-blue"
	| "solid-sky"
	| "solid-cyan"
	| "solid-teal"
	| "solid-green"
	| "solid-amber"
	| "solid-orange"
	| "solid-slate"
	| "solid-neutral";

export default function HeroSection() {
	const FEATURES_ID = "features" as const;
	const [mode, setMode] = useState<"ai" | "search">("ai");
	const [query, setQuery] = useState("");
	const [destination, setDestination] = useState("");
	const [dateRange, setDateRange] = useState("");
	const [background, setBackground] = useState<BackgroundType>("banner4.jpeg");
	const [showBannerPanel, setShowBannerPanel] = useState(false);
	const [isBannerButtonHidden, setIsBannerButtonHidden] = useState(false);

	// Centralized solid color classes using curated hex values
	const SOLID_BG_CLASSES: Record<string, string> = {
		"solid-indigo": "bg-[#4f46e5]", // Indigo 600
		"solid-violet": "bg-[#8b5cf6]", // Violet 500
		"solid-purple": "bg-[#7c3aed]", // Purple 600
		"solid-fuchsia": "bg-[#a21caf]", // Fuchsia 700
		"solid-pink": "bg-[#ec4899]", // Pink 500
		"solid-rose": "bg-[#e11d48]", // Rose 600
		"solid-blue": "bg-[#2563eb]", // Blue 600
		"solid-sky": "bg-[#0ea5e9]", // Sky 500
		"solid-cyan": "bg-[#06b6d4]", // Cyan 500
		"solid-teal": "bg-[#14b8a6]", // Teal 500
		"solid-green": "bg-[#10b981]", // Emerald 500
		"solid-amber": "bg-[#f59e0b]", // Amber 500
		"solid-orange": "bg-[#f97316]", // Orange 500
		"solid-slate": "bg-[#475569]", // Slate 600
		"solid-neutral": "bg-[#404040]", // Neutral 600
	};

	const getBackgroundStyle = () => {
		if (background.startsWith("solid-")) {
			return SOLID_BG_CLASSES[background] || "bg-[#4f46e5]";
		}
		return null;
	};

	const isSolidColor = background.startsWith("solid-");

	return (
		<section
			id={FEATURES_ID}
			className="relative h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Background Image or Solid Color */}
			{isSolidColor ? (
				<div
					className={`absolute inset-0 w-full h-full ${getBackgroundStyle()}`}
				/>
			) : (
				<img
					src={background}
					alt=""
					loading="eager"
					decoding="async"
					fetchPriority="high"
					className="absolute inset-0 w-full h-full object-cover"
				/>
			)}
			{/* Overlay for readability */}
			<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/40" />

			<div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 text-center">
				{/* Hero Content */}
				<div className="mb-6 sm:mb-8">
					<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
						Your dream vacation,
						<br />
						perfectly{" "}
						<span className="bg-linear-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
							planned by NowAI
						</span>
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
						Discover hidden gems and seamless itineraries with AI-powered
						planning.
					</p>
				</div>

				{/* Mode Toggle */}
				<div className="mb-4 flex justify-center">
					<div className="inline-flex items-center rounded-full gap-1 p-1 bg-white/10 border border-white/20">
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

			{/* Floating Banner Toggle Button */}
			{!isBannerButtonHidden && (
				<div className="fixed bottom-6 right-6 z-50">
					{showBannerPanel && (
						<div className="absolute bottom-16 right-0 mb-2 bg-white rounded-lg shadow-2xl p-4 min-w-[240px] border border-neutral-200">
							<div className="flex items-center justify-between mb-3">
								<h3 className="text-sm font-semibold text-neutral-900">
									Change Background
								</h3>
								<button
									type="button"
									onClick={() => setShowBannerPanel(false)}
									className="p-1 hover:bg-neutral-100 rounded transition-colors"
								>
									<X className="w-4 h-4 text-neutral-500" />
								</button>
							</div>

							{/* Image Options */}
							<div className="mb-4">
								<p className="text-xs font-medium text-neutral-600 mb-2">
									Images
								</p>
								<div className="grid grid-cols-2 gap-2">
									{(
										[
											"banner.avif",
											"banner2.jpeg",
											"banner3.jpeg",
											"banner4.jpeg",
											"banner5.jpeg",
										] as BackgroundType[]
									).map((bg) => (
										<button
											key={bg}
											type="button"
											onClick={() => {
												setBackground(bg);
												setShowBannerPanel(false);
											}}
											className={`relative aspect-video rounded overflow-hidden border-2 transition-all ${
												background === bg
													? "border-indigo-500 ring-2 ring-indigo-200"
													: "border-neutral-200 hover:border-indigo-300"
											}`}
										>
											<img
												src={bg}
												alt={bg}
												className="w-full h-full object-cover"
											/>
											{background === bg && (
												<div className="absolute inset-0 bg-indigo-500/20 flex items-center justify-center">
													<div className="w-2 h-2 bg-indigo-500 rounded-full" />
												</div>
											)}
										</button>
									))}
								</div>
							</div>

							{/* Solid Color Options */}
							<div>
								<p className="text-xs font-medium text-neutral-600 mb-2">
									Solid Colors
								</p>
								<div className="flex gap-2 flex-wrap">
									{(
										[
											"solid-indigo",
											"solid-violet",
											"solid-purple",
											"solid-fuchsia",
											"solid-pink",
											"solid-rose",
											"solid-blue",
											"solid-sky",
											"solid-cyan",
											"solid-teal",
											"solid-green",
											"solid-amber",
											"solid-orange",
											"solid-slate",
											"solid-neutral",
										] as BackgroundType[]
									).map((bg) => {
										const colorClass = bg.replace("solid-", "");
										return (
											<button
												key={bg}
												type="button"
												onClick={() => {
													setBackground(bg);
													setShowBannerPanel(false);
												}}
												className={`w-10 h-10 rounded-lg ${SOLID_BG_CLASSES[bg]} border-2 transition-all hover:scale-110 ${
													background === bg
														? "border-neutral-900 ring-2 ring-neutral-400"
														: "border-neutral-300"
												}`}
												title={
													colorClass.charAt(0).toUpperCase() +
													colorClass.slice(1)
												}
											/>
										);
									})}
								</div>
							</div>

							{/* Hide Button Option */}
							<div className="mt-4 pt-4 border-t border-neutral-200">
								<button
									type="button"
									onClick={() => {
										setIsBannerButtonHidden(true);
										setShowBannerPanel(false);
									}}
									className="w-full text-xs text-neutral-600 hover:text-neutral-900 py-1.5 px-2 rounded hover:bg-neutral-50 transition-colors"
								>
									Hide this panel
								</button>
							</div>
						</div>
					)}

					<button
						type="button"
						onClick={() => setShowBannerPanel(!showBannerPanel)}
						className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 border border-neutral-200"
						title="Change background"
					>
						{showBannerPanel ? (
							<X className="w-5 h-5 text-neutral-700" />
						) : (
							<Palette className="w-5 h-5 text-neutral-700" />
						)}
					</button>
				</div>
			)}

			{/* Show Hidden Button Trigger */}
			{isBannerButtonHidden && (
				<button
					type="button"
					onClick={() => setIsBannerButtonHidden(false)}
					className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-neutral-800 shadow-lg flex items-center justify-center transition-all hover:scale-110"
					title="Show background toggle"
				>
					<Image className="w-4 h-4 text-white" />
				</button>
			)}
		</section>
	);
}
