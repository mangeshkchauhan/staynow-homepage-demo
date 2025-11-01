import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NowAISection from "./components/NowAISection";
import PopularDestinationsSection from "./components/PopularDestinationsSection";
import RecentSearchesSection from "./components/RecentSearchesSection";
import WhyStayNowSection from "./components/WhyStayNowSection";

export default function App() {
	return (
		<div className="min-h-screen">
			<Header />
			<HeroSection />
			<RecentSearchesSection />
			<PopularDestinationsSection />
			<NowAISection />
			<WhyStayNowSection />
			<Footer />
		</div>
	);
}
