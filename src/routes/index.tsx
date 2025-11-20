import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/HeroSection";
import NowAISection from "../components/NowAISection";
import PopularDestinationsSection from "../components/PopularDestinationsSection";
import RecentSearchesSection from "../components/RecentSearchesSection";
import WhyStayNowSection from "../components/WhyStayNowSection";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<>
			<HeroSection />
			<RecentSearchesSection />
			<PopularDestinationsSection />
			<NowAISection />
			<WhyStayNowSection />
		</>
	);
}
