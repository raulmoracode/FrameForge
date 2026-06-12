import {
	SectionHeader,
	SectionWrapper,
} from "@/exports/export-custom-components.js";
import { SECTIONS, STEPS } from "@/exports/exports-data.js";

export default function GettingStarted() {
	return (
		<SectionWrapper id={SECTIONS.qstart.id}>
			<div className="mx-auto max-w-6xl px-6">
				<SectionHeader
					title={SECTIONS.qstart.title}
					description={SECTIONS.qstart.description}
				/>
				<div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
					{STEPS.map((s) => (
						<div key={s.number} className="bg-card p-6 flex flex-col">
							<div className="flex items-center gap-2 mb-4">
								<span className="font-mono text-xs text-brand/90">
									{s.number}
								</span>
								<span className="h-px flex-1 bg-border" />
							</div>
							<h3 className="font-medium tracking-tight mb-1.5">{s.title}</h3>
							<p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
							<pre className="mt-auto rounded-md bg-background border border-border p-3 text-xs text-muted-foreground overflow-x-auto whitespace-pre">
								{s.code}
							</pre>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
