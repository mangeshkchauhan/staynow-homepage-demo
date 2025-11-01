import {
	Award,
	Building2,
	Clock,
	DollarSign,
	Headphones,
	Shield,
	Sparkles,
	Zap,
} from "lucide-react";

type BentoItem = {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	description: string;
	stats?: string;
	gradient: string; // tailwind gradient classes
	className?: string; // grid spans
	imageUrl?: string; // optional background image
};

function BentoCard({
	icon: Icon,
	title,
	description,
	stats,
	gradient,
	className = "",
	imageUrl,
}: BentoItem) {
	return (
		<div
			className={`group relative rounded-3xl overflow-hidden ${imageUrl ? "bg-neutral-900" : "bg-white"} shadow-sm ring-1 ${imageUrl ? "ring-white/10" : "ring-black/5"} transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${className}`}
			style={
				imageUrl
					? {
							backgroundImage: `url(${imageUrl})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}
					: undefined
			}
		>
			{/* Soft gradient glow */}
			<div
				className={`pointer-events-none absolute inset-0 bg-linear-to-br ${gradient} ${imageUrl ? "opacity-15" : "opacity-0 group-hover:opacity-5"} transition-opacity duration-500`}
			/>
			{/* Image scrim for readability */}
			{imageUrl ? (
				<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10" />
			) : null}
			{/* Content */}
			<div className="relative h-full p-6 md:p-8 flex flex-col">
				<div
					className={`${imageUrl ? "bg-white/20 ring-1 ring-white/30" : `bg-linear-to-br ${gradient}`} w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4 md:mb-6`}
				>
					<Icon
						className={`w-7 h-7 ${imageUrl ? "text-white" : "text-white"}`}
					/>
				</div>
				<h3
					className={`text-xl md:text-2xl font-bold tracking-tight mb-2 ${imageUrl ? "text-white drop-shadow-lg" : "text-neutral-900"}`}
				>
					{title}
				</h3>
				<p
					className={`${imageUrl ? "text-white/95 drop-shadow-md" : "text-neutral-600"} leading-relaxed mb-4`}
				>
					{description}
				</p>
				{stats ? (
					<div
						className={`mt-auto mr-auto inline-flex items-center gap-2 rounded-full ${imageUrl ? "bg-white/20 ring-1 ring-white/30 backdrop-blur-sm" : `bg-linear-to-r ${gradient}`} px-3 py-1.5 ${imageUrl ? "text-white drop-shadow-md" : "text-white"} text-xs md:text-sm font-semibold`}
					>
						<span>{stats}</span>
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse-soft" />
					</div>
				) : null}
			</div>
			{/* sheen */}
			<div className="pointer-events-none absolute -left-24 top-0 h-full w-24 rotate-12 bg-white/30 opacity-0 group-hover:opacity-40 animate-shimmer" />
		</div>
	);
}

export default function WhyStayNowSection() {
	const items: BentoItem[] = [
		{
			icon: Award,
			title: "AI Trip Planner",
			description:
				"Get personalized recommendations from millions of real reviews in seconds.",
			stats: "98% satisfaction rate",
			gradient: "from-purple-500 to-pink-500",
			className: "min-h-[320px] md:min-h-[400px] md:col-span-2 md:row-span-2",
			imageUrl:
				"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
		},
		{
			icon: DollarSign,
			title: "Best Price Guarantee",
			description: "We compare top sites and beat the lowest price by 10%.",
			stats: "Save up to 40%",
			gradient: "from-green-500 to-emerald-500",
			className: "min-h-[280px] md:min-h-[190px] md:col-span-1",
			imageUrl:
				"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1600&q=80",
		},
		{
			icon: Building2,
			title: "1M+ Hotels Worldwide",
			description: "From luxury resorts to hidden gems in 190+ countries.",
			stats: "In 190+ countries",
			gradient: "from-blue-500 to-cyan-500",
			className: "min-h-[280px] md:min-h-[190px] md:col-span-1",
			imageUrl: "9.avif",
		},
		{
			icon: Shield,
			title: "Secure Booking",
			description:
				"Bank-level security with flexible cancellation on most stays.",
			stats: "Trusted by 500K+",
			gradient: "from-orange-500 to-red-500",
			className: "min-h-[280px] md:min-h-[220px] md:col-span-1",
			imageUrl:
				"https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80",
		},
		{
			icon: Clock,
			title: "Save 10+ Hours",
			description:
				"Our AI compares thousands of options so you don't waste time.",
			stats: "5 min avg. planning",
			gradient: "from-indigo-500 to-purple-500",
			className: "min-h-[280px] md:min-h-[220px] md:col-span-2",
			imageUrl:
				"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
		},
		{
			icon: Headphones,
			title: "24/7 Support",
			description: "Real humans ready to help, anywhere in the world.",
			stats: "2 min response",
			gradient: "from-teal-500 to-cyan-500",
			className: "min-h-[280px] md:min-h-[220px] md:col-span-1",
			imageUrl:
				"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
		},
		{
			icon: Sparkles,
			title: "Rewards Program",
			description: "Earn points on every booking, unlock exclusive perks.",
			stats: "Up to 10% cashback",
			gradient: "from-amber-500 to-yellow-500",
			className: "min-h-[280px] md:min-h-[220px] md:col-span-1",
			imageUrl:
				"https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80",
		},
		{
			icon: Zap,
			title: "Instant Booking",
			description: "Book now, confirm instantly. No waiting around.",
			stats: "95% instant confirm",
			gradient: "from-yellow-500 to-orange-500",
			className: "min-h-[280px] md:min-h-[220px] md:col-span-1",
			imageUrl:
				"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80",
		},
	];

	return (
		// biome-ignore lint: #about used by header navigation
		<section id="about" className="py-24 bg-neutral-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="relative mb-14 text-center">
					<div className="pointer-events-none absolute inset-0 -z-10 mask-radial-fade bg-linear-to-br from-indigo-500/15 via-purple-500/10 to-pink-500/10" />
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
						Everything You Need for the{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
							Perfect Stay
						</span>
					</h2>
					<p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
						From AI-powered recommendations to 24/7 support, we've built the
						ultimate platform to make your travel planning effortless.
					</p>
				</div>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
					{/* Row 1-2: AI Planner (2x2 hero) */}
					<BentoCard {...items[0]} />

					{/* Row 1: Best Price (top right) */}
					<BentoCard {...items[1]} />

					{/* Row 2: Hotels (middle right) */}
					<BentoCard {...items[2]} />

					{/* Row 3: Secure + Save Time (spans 2) */}
					<BentoCard {...items[3]} />
					<BentoCard {...items[4]} />

					{/* Row 4: Support + Rewards + Instant Booking */}
					<BentoCard {...items[5]} />
					<BentoCard {...items[6]} />
					<BentoCard {...items[7]} />
				</div>

				{/* Subtle footer note */}
				<div className="mt-10 text-center text-base text-neutral-800">
					Backed by real-time pricing, secure payments, and AI recommendations.
				</div>
			</div>
		</section>
	);
}
