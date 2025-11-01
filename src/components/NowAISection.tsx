import {
	ArrowRight,
	Brain,
	Check,
	Globe2,
	MessageCircle,
	Send,
	Sparkles,
	Star,
	Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

type ChatMessage = {
	from: "user" | "ai";
	text: string;
	delay?: number;
};

export default function NowAISection() {
	const [messageIndex, setMessageIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(false);
	const [currentInput, setCurrentInput] = useState("");

	// Simulated conversation that showcases AI capabilities
	const conversation: ChatMessage[] = [
		{
			from: "user",
			text: "Plan a 5-day adventure in Japan with cherry blossoms, amazing food, and cultural experiences",
			delay: 0,
		},
		{
			from: "ai",
			text: "Perfect timing! 🌸 I'm creating a spring itinerary for you. What's your travel style—relaxed exploration or packed with activities?",
			delay: 1500,
		},
		{
			from: "user",
			text: "Somewhere in between, and I love local authentic experiences",
			delay: 3000,
		},
		{
			from: "ai",
			text: "Fantastic! ✨ I've crafted a balanced 5-day Tokyo & Kyoto journey:\n\n🌸 Cherry blossom spots away from crowds\n🍜 Hidden ramen shops & kaiseki dinners\n⛩️ Traditional tea ceremony & temple stays\n🚄 Optimized routes to minimize travel time\n\nReady to see your personalized itinerary?",
			delay: 2000,
		},
	];

	useEffect(() => {
		if (messageIndex >= conversation.length) {
			// Reset after showing all messages
			const timeout = setTimeout(() => {
				setMessageIndex(0);
			}, 5000);
			return () => clearTimeout(timeout);
		}

		const currentMessage = conversation[messageIndex];
		const timeout = setTimeout(() => {
			if (currentMessage.from === "ai") {
				setIsTyping(true);
				setTimeout(() => {
					setIsTyping(false);
					setMessageIndex((prev) => prev + 1);
				}, 1500);
			} else {
				setMessageIndex((prev) => prev + 1);
			}
		}, currentMessage.delay || 0);

		return () => clearTimeout(timeout);
	}, [messageIndex]);

	const features = [
		{
			icon: Brain,
			title: "Intelligent Planning",
			description:
				"AI that understands context, preferences, and creates perfect itineraries in seconds",
			gradient: "from-violet-500 to-purple-600",
		},
		{
			icon: MessageCircle,
			title: "Natural Conversations",
			description:
				"Chat naturally like you're texting a friend who happens to know everything about travel",
			gradient: "from-blue-500 to-cyan-600",
		},
		{
			icon: Globe2,
			title: "Global Expertise",
			description:
				"Trained on millions of destinations, reviews, and travel experiences worldwide",
			gradient: "from-emerald-500 to-teal-600",
		},
		{
			icon: Zap,
			title: "Instant Adjustments",
			description:
				"Change your mind? No problem. Modify plans on the fly with simple requests",
			gradient: "from-amber-500 to-orange-600",
		},
	];

	const highlights = [
		"Learns from your preferences over time",
		"Suggests hidden gems and local favorites",
		"Optimizes routes and schedules automatically",
		"Handles budget constraints intelligently",
		"Adapts to travel style and pace",
		"Provides real-time alternatives",
	];

	const anchorId = ["how", "it", "works"].join("-");

	return (
		<section
			id={anchorId}
			className="relative py-20 overflow-hidden bg-slate-950"
		>
			{/* Animated background effects */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
			<div className="absolute inset-0 bg-grid-dark opacity-10" />

			{/* Floating orbs */}
			<div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-white/10 text-slate-200 text-sm font-medium mb-8 backdrop-blur-sm">
						<Sparkles className="w-4 h-4" />
						Powered by Advanced AI
					</div>
					<h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
						<span className="text-white">
							Meet{" "}
							<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-blue-300">
								NowAI
							</span>
						</span>
						<br />
						<span className="text-slate-300">Your Trip Planner</span>
					</h2>
					<p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
						The smartest way to plan travel. Just tell NowAI what you want, and
						watch as it crafts the perfect journey tailored exactly to you.
					</p>
				</div>

				{/* Main Interactive Demo */}
				<div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
					{/* Chat Interface */}
					<div className="order-2 lg:order-1">
						<div className="relative">
							{/* Glow effect */}
							<div className="absolute -inset-4 bg-linear-to-r from-white/5 to-transparent rounded-3xl blur-2xl" />

							{/* Chat container */}
							<div className="relative bg-linear-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
								{/* Header */}
								<div className="px-6 py-4 border-b border-white/10 bg-linear-to-r from-purple-500/10 to-blue-500/10">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="relative">
												<div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center">
													<Sparkles className="w-5 h-5 text-white" />
												</div>
												<div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900" />
											</div>
											<div>
												<div className="font-semibold text-white">NowAI</div>
												<div className="text-xs text-emerald-400 flex items-center gap-1">
													<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
													Online
												</div>
											</div>
										</div>
										<button
											type="button"
											className="text-slate-400 hover:text-white transition-colors"
										>
											<Star className="w-5 h-5" />
										</button>
									</div>
								</div>

							{/* Messages */}
							<div className="p-6 space-y-4 min-h-[560px] max-h-[560px] overflow-y-auto">
									{conversation.slice(0, messageIndex).map((msg, idx) => (
										<div
											key={`${msg.from}-${idx}-${msg.text.substring(0, 20)}`}
											className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
										>
											<div
												className={`max-w-[85%] px-5 py-3.5 rounded-2xl ${
													msg.from === "user"
														? "bg-linear-to-r from-slate-700 to-slate-600 text-white rounded-br-md shadow-lg"
														: "bg-white/5 text-slate-100 border border-white/5 rounded-bl-md backdrop-blur-sm"
												}`}
											>
												<div className="text-[15px] leading-relaxed whitespace-pre-line">
													{msg.text}
												</div>
											</div>
										</div>
									))}

									{/* Typing indicator */}
									{isTyping && (
										<div className="flex justify-start animate-fade-in-up">
											<div className="px-5 py-3.5 rounded-2xl rounded-bl-md bg-white/5 border border-white/5 backdrop-blur-sm">
												<div className="flex items-center gap-1.5">
													<div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" />
													<div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse animation-delay-2000" />
													<div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse animation-delay-4000" />
												</div>
											</div>
										</div>
									)}
								</div>

								{/* Input */}
								<div className="px-6 py-4 border-t border-white/10 bg-slate-950/50">
									<div className="flex items-center gap-3">
										<input
											type="text"
											placeholder="Ask NowAI anything..."
											value={currentInput}
											onChange={(e) => setCurrentInput(e.target.value)}
											className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
										/>
										<button
											type="button"
											className="p-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors duration-200"
										>
											<Send className="w-5 h-5 text-white" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Features & Highlights */}
					<div className="order-1 lg:order-2 space-y-8">
						<div>
							<h3 className="text-3xl font-bold text-white mb-6">
								Why NowAI Changes Everything
							</h3>
							<p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
								Stop spending hours researching and planning. NowAI combines the
								knowledge of millions of travelers with advanced AI to create
								your perfect trip instantly.
							</p>
						</div>

						{/* Highlight cards */}
						<div className="grid gap-4">
							{highlights.map((highlight) => (
								<div
									key={highlight}
									className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
								>
									<div className="mt-0.5 p-1 rounded-full bg-linear-to-br from-slate-600 to-slate-500">
										<Check className="w-3.5 h-3.5 text-white" />
									</div>
									<span className="text-slate-200 group-hover:text-white transition-colors">
										{highlight}
									</span>
								</div>
							))}
						</div>

						{/* CTA Button */}
						<button
							type="button"
							className="w-full group relative px-8 py-5 bg-white/10 border border-white/20 text-white rounded-2xl text-lg font-semibold hover:bg-white/15 transition-colors duration-200"
						>
							<span className="relative flex items-center justify-center gap-3">
								Start Planning with NowAI
								<ArrowRight className="w-6 h-6 text-purple-300 group-hover:translate-x-1 transition-transform" />
							</span>
						</button>
					</div>
				</div>

				{/* Feature Grid */}
				<div className="mb-20">
					<h3 className="text-3xl font-bold text-center text-white mb-12">
						Powered by Intelligence
					</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{features.map((feature) => {
							const Icon = feature.icon;
							return (
								<div
									key={feature.title}
							className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/5 hover:shadow-lg"
								>
									<div
									className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${feature.gradient} opacity-30`}
									/>
									<div
									className={`pointer-events-none absolute -inset-px -z-10 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-linear-to-br ${feature.gradient}`}
									/>
									<div
									className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br ${feature.gradient} ring-1 ring-white/20 shadow-md mb-4 group-hover:scale-105 transition-transform duration-200`}
									>
										<Icon className="w-5 h-5 text-white" />
									</div>
									<h4 className="text-lg font-bold text-white mb-2">
										{feature.title}
									</h4>
									<p className="text-slate-400 text-sm leading-relaxed">
										{feature.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
