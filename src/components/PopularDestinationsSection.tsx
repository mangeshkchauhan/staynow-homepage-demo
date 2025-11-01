import { ArrowRight, Star, TrendingUp } from "lucide-react";

export default function PopularDestinationsSection() {
	const destinations = [
		{
			id: 1,
			name: "Bali, Indonesia",
			description: "Tropical paradise with stunning beaches",
			image:
				"5.jpeg",
			rating: 4.8,
			deals: "From $45/night",
			tag: "Beach Paradise",
		},
		{
			id: 2,
			name: "Paris, France",
			description: "The city of love and lights",
			image:
				"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
			rating: 4.9,
			deals: "From $89/night",
			tag: "Romantic Gateway",
		},
		{
			id: 3,
			name: "Tokyo, Japan",
			description: "Modern meets tradition",
			image: "2.jpeg",
			rating: 4.7,
			deals: "From $67/night",
			tag: "Cultural Hub",
		},
		{
			id: 4,
			name: "Maldives",
			description: "Luxury overwater villas",
			image: "3.jpeg",
			rating: 4.9,
			deals: "From $125/night",
			tag: "Luxury Escape",
		},
		{
			id: 5,
			name: "New York, USA",
			description: "The city that never sleeps",
			image:
				"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
			rating: 4.6,
			deals: "From $95/night",
			tag: "Urban Adventure",
		},
		{
			id: 6,
			name: "Santorini, Greece",
			description: "Iconic white and blue architecture",
			image: "4.jpeg",
			rating: 4.8,
			deals: "From $78/night",
			tag: "Scenic Beauty",
		},
	];

	return (
		<section id="destinations" className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between mb-6">
					<div className="flex items-center gap-3">
						<TrendingUp className="w-6 h-6 text-indigo-600" />
						<h2 className="text-2xl font-bold text-neutral-900">
							Trending Destinations
						</h2>
					</div>
					<button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1 group">
						Explore All
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{destinations.map((destination) => (
						<div
							key={destination.id}
							className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
						>
							<div className="relative h-64 overflow-hidden">
								<img
									src={destination.image}
									alt={destination.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
								<div className="absolute top-4 left-4">
									<span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-semibold rounded-full">
										{destination.tag}
									</span>
								</div>
								<div className="absolute bottom-4 left-4 right-4">
									<h3 className="text-xl font-bold text-white mb-1">
										{destination.name}
									</h3>
									<p className="text-white/90 text-sm mb-3">
										{destination.description}
									</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-1">
											<Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
											<span className="text-white font-semibold text-sm">
												{destination.rating}
											</span>
										</div>
										<span className="text-white font-bold text-sm">
											{destination.deals}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
