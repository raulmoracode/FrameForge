import { LINKS, NAV } from "@/exports/exports-data.js";

export default function Footer() {
	return (
		<footer className="py-10">
			<div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
				<div className="flex items-center gap-2">
					<span>FrameForge</span>
					<span className="text-border">·</span>
					<span>MIT</span>
					<span className="text-border">·</span>
					<span>
						Built by{" "}
						<a
							href={LINKS.web}
							target="_blank"
							rel="noreferrer"
							className="text-brand bg-linear-to-l from-brand to-brand bg-size-[0%_1px] bg-bottom-right bg-no-repeat hover:bg-size-[100%_1px] transition-[background-size] duration-300 pb-0.5"
						>
							raulmoracode
						</a>
					</span>
				</div>
				<div className="flex items-center gap-6">
					{[...NAV].reverse().map((item) => (
						<a
							key={item.label}
							href={item.href}
							target="_self"
							rel="noreferrer"
							className="hover:text-foreground transition-colors"
						>
							{item.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
