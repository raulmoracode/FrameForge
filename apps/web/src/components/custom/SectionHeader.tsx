import type { SectionHeaderTypes } from "@/types/types-components.js";

export default function SectionHeader({
	title,
	description,
}: SectionHeaderTypes) {
	return (
		<div className="mb-10">
			<div className="font-mono text-brand/90 text-xs uppercase tracking-widest  mb-2">
				{title}
			</div>
			<h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
				{description}
			</h2>
		</div>
	);
}
