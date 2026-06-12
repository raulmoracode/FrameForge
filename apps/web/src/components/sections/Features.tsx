import {
	SectionHeader,
	SectionWrapper,
} from "@/exports/export-custom-components.js";
import { FEATURES, SECTIONS } from "@/exports/exports-data.js";

export default function Features() {
	return (
		<SectionWrapper id={SECTIONS.features.id}>
			<div className="mx-auto max-w-6xl px-6">
				<SectionHeader
					title={SECTIONS.features.title}
					description={SECTIONS.features.description}
				/>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-border rounded-lg overflow-hidden">
					{FEATURES.map((f, i) => (
						<div
							key={f.title}
							className={`group p-6 bg-card hover:bg-secondary/40 transition-colors ${
								i % 3 !== 2 ? "lg:border-r border-border" : ""
							} ${i % 2 !== 1 ? "sm:border-r lg:border-r border-border" : ""} ${
								i < FEATURES.length - (FEATURES.length % 3 || 3)
									? "lg:border-b border-border"
									: ""
							} border-b last:border-b-0`}
						>
							<f.icon
								size={18}
								className="mb-4  transition-colors duration-200"
							/>
							<h3 className="font-medium text-brand text-base mb-1.5 tracking-tight">
								{f.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{f.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
