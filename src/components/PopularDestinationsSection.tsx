import {
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	Star,
	TrendingUp,
} from "lucide-react";
import { useState } from "react";

type Destination = {
	id: number;
	name: string;
	description: string;
	primaryImage: string;
	rating: number;
	deals: string;
	tag: string;
	images: string[];
};

export default function PopularDestinationsSection() {
	// Common images shared by all destinations
	const sharedImages = [
		"1.avif",
		"2.jpeg",
		"3.jpeg",
		"4.jpeg",
		"5.jpeg",
		"6.jpeg",
		"7.jpeg",
		"8.jpeg",
	];

	const destinations = [
		{
			id: 1,
			name: "Bali, Indonesia",
			description: "Tropical paradise with stunning beaches",
			primaryImage: "5.jpeg",
			rating: 4.8,
			deals: "From $45/night",
			tag: "Beach Paradise",
		},
		{
			id: 2,
			name: "Paris, France",
			description: "The city of love and lights",
			primaryImage:
				"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
			rating: 4.9,
			deals: "From $89/night",
			tag: "Romantic Gateway",
		},
		{
			id: 3,
			name: "Tokyo, Japan",
			description: "Modern meets tradition",
			primaryImage: "2.jpeg",
			rating: 4.7,
			deals: "From $67/night",
			tag: "Cultural Hub",
		},
		{
			id: 4,
			name: "Maldives",
			description: "Luxury overwater villas",
			primaryImage: "3.jpeg",
			rating: 4.9,
			deals: "From $125/night",
			tag: "Luxury Escape",
		},
		{
			id: 5,
			name: "New York, USA",
			description: "The city that never sleeps",
			primaryImage:
				"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
			rating: 4.6,
			deals: "From $95/night",
			tag: "Urban Adventure",
		},
		{
			id: 6,
			name: "Santorini, Greece",
			description: "Iconic white and blue architecture",
			primaryImage: "4.jpeg",
			rating: 4.8,
			deals: "From $78/night",
			tag: "Scenic Beauty",
		},
	];

	// Create images array for each destination (primary image + shared images)
	const destinationsWithImages = destinations.map((dest) => ({
		...dest,
		images: [
			dest.primaryImage,
			...sharedImages.filter((img) => img !== dest.primaryImage),
		],
	}));

	return (
		// biome-ignore lint: Static id is required for navigation anchor links
		<section id="destinations" className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between mb-6">
					<div className="flex items-center gap-3">
						<TrendingUp className="w-6 h-6 text-indigo-600" />
						<h2 className="text-2xl font-bold text-neutral-900">
							Trending Destinations
						</h2>
					</div>
					<button
						onClick={() => {
							window.open(
								"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
								"_blank",
							);
						}}
						rel="noopener noreferrer"
						type="button"
						className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl flex items-center gap-2 group cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md"
					>
						Explore All
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{destinationsWithImages.map((destination) => (
						<DestinationCard key={destination.id} destination={destination} />
					))}
				</div>
			</div>
		</section>
	);
}

function DestinationCard({ destination }: { destination: Destination }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) =>
			prev === destination.images.length - 1 ? 0 : prev + 1,
		);
	};

	const prevImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) =>
			prev === 0 ? destination.images.length - 1 : prev - 1,
		);
	};

	const goToImage = (index: number) => {
		setCurrentImageIndex(index);
	};

	return (
		<div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
			{/* Image Section - Larger and more prominent */}
			<div className="relative h-64 overflow-hidden cursor-pointer">
				{/* Carousel Images */}
				<div className="relative w-full h-full">
					{destination.images.map((image: string, index: number) => (
						<img
							key={`${destination.id}-img-${index}`}
							src={image}
							alt={`${destination.name} - ${index + 1}`}
							className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
								index === currentImageIndex ? "opacity-100" : "opacity-0"
							}`}
						/>
					))}
				</div>

				{/* Subtle gradient overlay for tag visibility */}
				<div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/10 pointer-events-none" />

				{/* Tag - Top Left */}
				<div className="absolute top-4 left-4 z-20">
					<span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-indigo-600 text-xs font-semibold rounded-lg shadow-sm">
						{destination.tag}
					</span>
				</div>

				{/* Carousel Dots - Bottom Center (visible on hover) */}
				<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					{destination.images.map((_image: string, index: number) => (
						<button
							key={`${destination.id}-dot-${index}`}
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								goToImage(index);
							}}
							className={`rounded-full transition-all duration-200 ${
								index === currentImageIndex
									? "bg-white w-6 h-1.5"
									: "bg-white/50 hover:bg-white/80 w-1.5 h-1.5"
							}`}
							aria-label={`Go to image ${index + 1}`}
						/>
					))}
				</div>

				{/* Navigation Buttons - Larger and more visible on hover */}
				<button
					type="button"
					onClick={prevImage}
					className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg hover:scale-110"
					aria-label="Previous image"
				>
					<ChevronLeft className="w-6 h-6 text-neutral-800" />
				</button>
				<button
					type="button"
					onClick={nextImage}
					className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg hover:scale-110"
					aria-label="Next image"
				>
					<ChevronRight className="w-6 h-6 text-neutral-800" />
				</button>
			</div>

			{/* Content Section - Separate from image */}
			<div className="p-4 bg-white">
				<h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-indigo-600 transition-colors">
					{destination.name}
				</h3>
				<p className="text-neutral-600 text-sm mb-3">
					{destination.description}
				</p>
				<div className="flex items-center justify-between pt-2.5 border-t border-neutral-100">
					<div className="flex items-center gap-1.5">
						<Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
						<span className="text-neutral-900 font-semibold text-sm">
							{destination.rating}
						</span>
						<span className="text-neutral-400 text-xs ml-1">rating</span>
					</div>
					<span className="text-indigo-600 font-bold text-base">
						{destination.deals}
					</span>
				</div>
			</div>
		</div>
	);
}
