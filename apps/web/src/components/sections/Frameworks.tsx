import {
	SectionHeader,
	SectionWrapper,
} from "@/exports/export-custom-components.js";
import { FRAMEWORKS, PMS, SECTIONS } from "@/exports/exports-data.js";

export default function Frameworks() {
	return (
		<SectionWrapper id={SECTIONS.frameworks.id}>
			<div className="mx-auto max-w-6xl px-6">
				<SectionHeader
					title={SECTIONS.frameworks.title}
					description={SECTIONS.frameworks.description}
				/>
				<div
					className="grid gap-px bg-border rounded-lg overflow-hidden border border-border"
					style={{
						gridTemplateColumns: `repeat(${FRAMEWORKS.length}, minmax(0, 1fr))`,
					}}
				>
					{FRAMEWORKS.map((fw) => (
						<div
							key={fw.name}
							className="aspect-square bg-card flex flex-col items-center justify-center gap-3 hover:bg-secondary/40 transition-colors"
						>
							<div
								className="w-10 h-10 rounded-md"
								style={{
									background: `linear-gradient(135deg, ${fw.color}, transparent)`,
								}}
							/>
							<span className="font-mono text-sm">{fw.name}</span>
						</div>
					))}
				</div>

				<div className="mt-6 flex flex-wrap items-center justify-center gap-2">
					{PMS.map((pm) => (
						<span
							key={pm}
							className="font-mono cursor-default text-xs text-muted-foreground hover:bg-secondary hover:border-brand/50 hover:text-brand/80 transition-colors duration-300 border border-border rounded-md px-2.5 py-1"
						>
							{pm}
						</span>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
