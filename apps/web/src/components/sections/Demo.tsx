import demoDemo from "@/assets/Demo.mp4";
import {
	SectionHeader,
	SectionWrapper,
} from "@/exports/export-custom-components.js";
import { SECTIONS } from "@/exports/exports-data.js";

export default function Demo() {
	return (
		<SectionWrapper id={SECTIONS.Demo.id}>
			<div className="mx-auto max-w-6xl px-6">
				<SectionHeader
					title={SECTIONS.Demo.title}
					description={SECTIONS.Demo.description}
				/>
				<div className="relative mt-12">
					<video
						autoPlay
						muted
						loop
						playsInline
						preload="metadata"
						className="aspect-video w-full rounded-lg object-cover"
					>
						<source src={demoDemo} type="video/mp4" />
					</video>
				</div>
			</div>
		</SectionWrapper>
	);
}
