import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group.js";

const COMMAND = "npx create-my-app@latest";

export const title = "NPX Copy Command";

export default function NpxCopyCommand() {
	const [copied, setCopied] = useState(false);

	const copyCommand = () => {
		navigator.clipboard.writeText(COMMAND);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<InputGroup
			className="
    group
    w-full
    max-w-sm
    rounded-lg
    border
    border-[oklch(0.24_0_0)]
    bg-[oklch(0.12_0_0)]
    transition-all
    duration-200
    hover:border-[oklch(0.32_0_0)]
    hover:shadow-[0_0_0_1px_oklch(0.32_0_0)]
  "
		>
			<InputGroupInput
				draggable={false}
				unselectable="on"
				value={COMMAND}
				readOnly
				className="
      cursor-default
      select-none
      border-0
      bg-transparent
      font-mono
      text-sm
      text-[oklch(0.92_0_0)]
      tracking-tight
      focus-visible:ring-0
    "
				onFocus={(e) => e.target.blur()}
			/>

			<InputGroupAddon align="inline-end">
				<InputGroupButton
					draggable={false}
					aria-label="Copy command"
					onClick={copyCommand}
					size="sm"
					variant="ghost"
					className="
        cursor-pointer
        bg-transparent
        hover:bg-transparent
        shadow-none
        px-3
      "
				>
					{copied ? (
						<CheckIcon
							size={15}
							className="
            text-(--color-brand)
            transition-all
            duration-200
          "
						/>
					) : (
						<CopyIcon
							size={15}
							className="
            text-[oklch(0.55_0_0)]
            transition-all
            duration-200
            group-hover:text-(--color-brand)
          "
						/>
					)}
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
}
