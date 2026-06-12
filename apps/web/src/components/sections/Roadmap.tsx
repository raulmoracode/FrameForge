import {
	SectionHeader,
	SectionWrapper,
} from "@/exports/export-custom-components.js";
import { ROADMAP, SECTIONS } from "@/exports/exports-data.js";

export default function Roadmap() {
	return (
		<SectionWrapper id={SECTIONS.Roadmap.id}>
			<div className="mx-auto max-w-6xl px-6">
				<SectionHeader
					title={SECTIONS.Roadmap.title}
					description={SECTIONS.Roadmap.description}
				/>
				<div
					className="grid gap-px bg-border rounded-lg overflow-hidden border border-border"
					style={{
						gridTemplateColumns: `repeat(${ROADMAP.length}, minmax(0, 1fr))`,
					}}
				>
					{" "}
					{ROADMAP.map((fw) => (
						<div
							key={fw.name}
							className="aspect-square bg-card flex flex-col items-center justify-center gap-3 hover:bg-secondary/40 transition-colors"
						>
							<div
								className="w-10 h-10 rounded-md"
								style={{
									background: `linear-gradient(135deg,${fw.color}, transparent)`,
								}}
							/>
							<span className="font-mono text-sm">{fw.name}</span>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
