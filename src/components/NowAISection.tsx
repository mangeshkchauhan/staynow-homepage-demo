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
			className="relative py-20 overflow-hidden bg-neutral-50"
		>
			{/* Subtle background effects for light mode */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_55%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.02),transparent_55%)]" />
			<div className="absolute inset-0 bg-grid-dark opacity-[0.03]" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-500/5 to-blue-500/5 border border-neutral-200 text-neutral-700 text-sm font-medium mb-8 backdrop-blur-sm">
						<Sparkles className="w-4 h-4" />
						Powered by Advanced AI
					</div>
					<h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
						<span className="text-neutral-700">
							Meet{" "}
							<span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
								NowAI
							</span>
						</span>
						<br />
						<span className="text-neutral-700">Your Trip Planner</span>
					</h2>
					<p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
						The smartest way to plan travel. Just tell NowAI what you want, and
						watch as it crafts the perfect journey tailored exactly to you.
					</p>
				</div>

				{/* Main Interactive Demo */}
				<div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
					{/* Chat Interface */}
					<div className="order-2 lg:order-2">
						<div className="relative">
							{/* Glow effect */}
							<div className="absolute -inset-4 bg-linear-to-r from-white/5 to-transparent rounded-3xl blur-2xl" />

							{/* Chat container (light mode) */}
							<div className="relative bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-2xl">
								{/* Header */}
								<div className="px-6 py-4 border-b border-neutral-200 bg-linear-to-r from-purple-500/5 to-blue-500/5">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="relative">
												<div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center">
													<Sparkles className="w-5 h-5 text-white" />
												</div>
												<div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
											</div>
											<div>
												<div className="font-semibold text-neutral-900">
													NowAI
												</div>
												<div className="text-xs text-emerald-600 flex items-center gap-1">
													<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
													Online
												</div>
											</div>
										</div>
										<button
											type="button"
											className="text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
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
														? "bg-neutral-900 text-white rounded-br-md shadow-lg"
														: "bg-neutral-100 text-neutral-800 border border-neutral-200 rounded-bl-md"
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
											<div className="px-5 py-3.5 rounded-2xl rounded-bl-md bg-neutral-100 border border-neutral-200">
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
								<div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50">
									<div className="flex items-center gap-3">
										<input
											type="text"
											placeholder="Ask NowAI anything..."
											value={currentInput}
											onChange={(e) => setCurrentInput(e.target.value)}
											className="flex-1 px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 transition-colors"
										/>
										<button
											type="button"
											className="p-3 bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
										>
											<Send className="w-5 h-5 text-white" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Features & Highlights */}
					<div className="order-1 lg:order-1 self-center space-y-8">
						<div>
							<h3 className="text-3xl font-bold text-neutral-900 mb-4">
								Why NowAI
							</h3>
							<p className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed">
								Plan faster with AI—personalized, instant, effortless.
							</p>
						</div>

						{/* Highlight cards */}
						<div className="grid gap-4">
							{highlights.slice(0, 3).map((highlight) => (
								<div
									key={highlight}
									className="flex items-start gap-3 p-4 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-50 transition-all duration-300 group"
								>
									<div className="mt-0.5 p-1 rounded-full bg-linear-to-br from-slate-600 to-slate-500">
										<Check className="w-3.5 h-3.5 text-white" />
									</div>
									<span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
										{highlight}
									</span>
								</div>
							))}
						</div>

						{/* CTA Button */}
						<button
							onClick={() => {
								window.open(
									"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
									"_blank",
								);
							}}
							rel="noopener noreferrer"
							type="button"
							className="w-full group relative px-8 py-5 rounded-2xl text-lg font-semibold text-white bg-linear-to-r from-violet-600 to-blue-600 hover:opacity-95 transition-colors duration-200 cursor-pointer"
						>
							<span className="relative flex items-center justify-center gap-3">
								Start Planning with NowAI
								<ArrowRight className="w-6 h-6 text-white/90 group-hover:translate-x-1 transition-transform" />
							</span>
						</button>
					</div>
				</div>

				{/* Feature Grid */}
				<div className="mb-20">
					<h3 className="text-3xl font-bold text-center text-neutral-900 mb-12">
						Powered by Intelligence
					</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{features.map((feature) => {
							const Icon = feature.icon;
							return (
								<div
									key={feature.title}
									className="group relative overflow-hidden p-6 rounded-2xl bg-white border border-neutral-200 transition-all duration-200 hover:bg-neutral-50 hover:shadow-md"
								>
									<div
										className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${feature.gradient} opacity-30`}
									/>
									<div
										className={`pointer-events-none absolute -inset-px -z-10 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-linear-to-br ${feature.gradient}`}
									/>
									<div
										className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br ${feature.gradient} ring-1 ring-neutral-200 shadow-md mb-4 group-hover:scale-105 transition-transform duration-200`}
									>
										<Icon className="w-5 h-5 text-white" />
									</div>
									<h4 className="text-lg font-bold text-neutral-900 mb-2">
										{feature.title}
									</h4>
									<p className="text-neutral-600 text-sm leading-relaxed">
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
