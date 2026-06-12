import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import { BUTTONS, LINKS, NAV } from "@/exports/exports-data.js";

export default function Nav() {
	const [open, setOpen] = useState(false);
	return (
		<header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-md">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
				<button
					type="button"
					onClick={() => setOpen((prev) => !prev)}
					className="rounded-md p-2 transition-colors cursor-pointer hover:bg-brand/90 md:hidden"
					aria-label="Toggle menu"
				>
					{open ? <X size={20} /> : <Menu size={20} />}
				</button>
				<nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
					{NAV.map((item) => (
						<a
							key={item.label}
							href={item.href}
							target="_self"
							rel="noreferrer"
							className="transition-colors hover:text-foreground"
						>
							{item.label}
						</a>
					))}
				</nav>{" "}
				<div className="flex items-center gap-2.5">
					<a
						href={LINKS.github}
						target="_blank"
						rel="noreferrer"
						className="hidden items-center gap-1.5 rounded-md border border-border bg-[oklch(30%_0_0)] px-3 py-1.5 font-medium transition-colors hover:bg-[oklch(37%_0_0)] sm:inline-flex"
					>
						<FaGithub size={14} />
						{BUTTONS.github}
					</a>
					<a
						href={LINKS.github}
						target="_blank"
						rel="noreferrer"
						className="inline-flex rounded-md border border-border bg-[oklch(30%_0_0)] p-2.5 transition-colors hover:bg-[oklch(37%_0_0)] sm:hidden"
						aria-label="GitHub"
					>
						<FaGithub size={19} />
					</a>
					<a
						href={LINKS.star}
						className="inline-flex items-center gap-1.5 rounded-md border border-border bg-brand/90 px-3 py-1.5 font-medium text-background transition-colors hover:bg-brand"
					>
						{BUTTONS.getStarted}
						<ArrowRight size={14} />
					</a>
				</div>
			</div>

			{open && (
				<div className="border-t border-border bg-background md:hidden">
					<nav className="flex flex-col px-6 py-4">
						{NAV.map((item) => (
							<a
								key={item.label}
								href={item.href}
								target="_self"
								rel="noreferrer"
								onClick={() => setOpen(false)}
								className="py-3 text-muted-foreground transition-colors hover:text-foreground"
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
