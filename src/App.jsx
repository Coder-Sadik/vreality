import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<FeatureSection />
			<Workflow />
			<PricingSection />
			<Testimonials />
			<Footer />
		</>
	);
}
export default App;
