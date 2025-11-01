import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function RecentSearchesSection() {
	const recentSearches = [
		{
			id: 1,
			destination: "Santorini, Greece",
			dates: "Mar 15 - Mar 22",
			guests: "2 Adults",
			image:
				"6.jpeg",
			progress: 65,
		},
		{
			id: 2,
			destination: "Dubai, UAE",
			dates: "Apr 10 - Apr 17",
			guests: "4 Adults, 2 Children",
			image:
				"8.jpeg",
			progress: 30,
		},
		{
			id: 3,
			destination: "Kyoto, Japan",
			dates: "May 5 - May 12",
			guests: "2 Adults",
			image:
				"7.jpeg",
			progress: 85,
		},
	];

	return (
		<section className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between mb-6">
					<div className="flex items-center gap-3">
						<Clock className="w-6 h-6 text-indigo-600" />
						<h2 className="text-2xl font-bold text-neutral-900">
							Continue Planning
						</h2>
					</div>
					<button
						type="button"
						className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
						onClick={() => {}}
					>
						View All
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{recentSearches.map((search) => (
						<div
							key={search.id}
							className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
						>
							<div className="relative h-40 overflow-hidden">
								<img
									src={search.image}
									alt={search.destination}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
								<div className="absolute bottom-3 left-3 right-3">
									<div className="flex items-center gap-1 text-white text-sm mb-2">
										<MapPin className="w-4 h-4" />
										<span className="font-semibold">{search.destination}</span>
									</div>
								</div>
							</div>
							<div className="p-4">
								<div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
									<div className="flex items-center gap-1">
										<Calendar className="w-4 h-4" />
										<span>{search.dates}</span>
									</div>
									<div className="flex items-center gap-1">
										<Users className="w-4 h-4" />
										<span>{search.guests}</span>
									</div>
								</div>
								<div className="mb-2">
									<div className="flex items-center justify-between text-xs text-neutral-600 mb-1">
										<span>Trip Planning Progress</span>
										<span className="font-semibold text-indigo-600">
											{search.progress}%
										</span>
									</div>
									<div className="w-full bg-neutral-200 rounded-full h-2">
										<div
											className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-500"
											style={{ width: `${search.progress}%` }}
										/>
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
