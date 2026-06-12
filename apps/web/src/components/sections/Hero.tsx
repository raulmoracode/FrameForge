import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import CopyCommand from "@/components/custom/CopyCommand.js";
import { BUTTONS, LINKS, SECTIONS } from "@/exports/exports-data.js";

export default function Hero() {
	return (
		<section
			id={SECTIONS.hero.id}
			className="relative overflow-hidden border-b border-border"
		>
			<div className="absolute inset-0 grid-bg" aria-hidden />
			<div className="relative mx-auto max-w-5xl px-6 pt-18 pb-24 text-center">
				<a
					href={LINKS.github}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs text-brand mb-8"
				>
					<span className="inline-flex items-center gap-1.5">
						<span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
						New
					</span>
					<span className="text-foreground/70">FrameForge v1.0 released</span>
					<ArrowUpRight size={12} />
				</a>
				<h1 className="text-6xl sm:text-7xl md:text-8xl tracking-[-0.04em] leading-[1.05]">
					{SECTIONS.hero.title1}
					<br />
					<span className=" font-serif italic block sm:inline text-brand underline decoration-brand decoration-2 underline-offset-4">
						{SECTIONS.hero.title2}
					</span>
				</h1>
				<p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
					{SECTIONS.hero.description1}
					<br />
					{SECTIONS.hero.description2}
				</p>
				<div className="mt-4 flex flex-col items-center gap-4">
					<CopyCommand />
					<div className="flex mt-1.5 items-center gap-3 text-sm">
						<a
							href={LINKS.github}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 font-medium bg-[oklch(30%_0_0)] hover:bg-[oklch(37%_0_0)] transition-colors"
						>
							<FaGithub size={14} />
							{BUTTONS.github}
						</a>
						<a
							href={LINKS.star}
							className="inline-flex bg-brand text-background items-center gap-1.5 rounded-md px-4 py-2 font-medium hover:bg-brand/90 transition-colors"
						>
							{BUTTONS.getStarted}
							<ArrowRight size={14} />
						</a>
					</div>
					<div>
						<a
							href={LINKS.web}
							target="_blank"
							rel="noreferrer"
							className="group inline-flex items-center gap-1.5 font-mono text-[14px] text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
							aria-label="Part of raulmoracode ecosystem"
						>
							<span>FrameForge</span>
							<span className="text-brand">/</span>
							<span>part of</span>
							<span className="relative text-brand bg-[linear-gradient(currentColor,currentColor)] bg-bottom-right bg-no-repeat bg-size-[0%_1px] group-hover:bg-size-[100%_1px] transition-[background-size] duration-300 ease-out pb-0.5">
								{" "}
								raulmoracode
								<span className="text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
									.com
								</span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
