import type { SectionWrapperTypes } from "@/types/types-components.js";

export default function SectionWrapper({ children, id }: SectionWrapperTypes) {
	return (
		<section id={id} className={"py-24 border-b border-border"}>
			{children}
		</section>
	);
}
