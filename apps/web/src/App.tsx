import {
	CTA,
	Demo,
	Features,
	Footer,
	Frameworks,
	GettingStarted,
	Hero,
	Nav,
	Roadmap,
} from "@/exports/exports-components.js";

export default function App() {
	return (
		<main className="min-h-screen ">
			<Nav />
			<Hero />
			<Demo />
			<Features />
			<GettingStarted />
			<Frameworks />
			<Roadmap />
			<CTA />
			<Footer />
		</main>
	);
}
