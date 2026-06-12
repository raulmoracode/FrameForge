import { Boxes, MessagesSquare, Package, WifiOff, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const FEATURES = [
	{
		icon: Boxes,
		title: "Multi-framework",
		desc: "React, Vue, Svelte, Next.js, Solid, and Preact ready to use.",
	},
	{
		icon: Package,
		title: "Your preferred package manager",
		desc: "Choose between npm, yarn, pnpm, or bun.",
	},
	{
		icon: WifiOff,
		title: "Offline mode",
		desc: "Generate projects without an internet connection.",
	},
	{
		icon: MessagesSquare,
		title: "Interactive assistant",
		desc: "Friendly step-by-step wizard.",
	},
	{
		icon: Zap,
		title: "Fast and lightweight",
		desc: "Boots up in seconds.",
	},
	{
		icon: FaGithub,
		title: "Open source",
		desc: "MIT licensed and community-driven.",
	},
];
