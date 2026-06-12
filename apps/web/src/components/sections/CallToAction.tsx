import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { SectionWrapper } from "@/exports/export-custom-components.js";
import { BUTTONS, LINKS, SECTIONS } from "@/exports/exports-data.js";

export default function CTA() {
	return (
		<SectionWrapper>
			<div className="mx-auto max-w-4xl px-6 text-center">
				<h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em]">
					{SECTIONS.CTA.title}
				</h2>
				<p className="mt-4 text-muted-foreground max-w-xl mx-auto">
					{SECTIONS.CTA.description1}
				</p>
				<p className="  text-muted-foreground max-w-xl mx-auto">
					{SECTIONS.CTA.description2}
				</p>
				<div className="mt-8 flex flex-col sm:flex-row gap-2 justify-center">
					<a
						href={LINKS.github}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2 font-medium bg-[oklch(30%_0_0)] hover:bg-[oklch(37%_0_0)] transition-colors"
					>
						<FaGithub size={16} />
						{BUTTONS.github}
					</a>
					<a
						href={LINKS.star}
						className="inline-flex text-background items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 font-medium bg-brand/90 hover:bg-brand transition-colors"
					>
						{BUTTONS.getStarted}
						<ArrowRight size={14} />
					</a>
				</div>
			</div>
		</SectionWrapper>
	);
}
