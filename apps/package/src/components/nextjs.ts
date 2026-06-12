import { ESSENTIALS } from "../const/essentials.js";

export const NextjsComponents = {
	Landing: `
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a] font-(family-name:--font-geist-sans)">
      <main className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-xs text-4xl font-semibold tracking-[-0.03em] leading-[1.1] text-zinc-900 dark:text-zinc-50">
            ${ESSENTIALS.Title1}
            <br />
            <span
              className="italic font-serif"
              style={{ color: "oklch(0.72 0.19 235)" }}
            >
              ${ESSENTIALS.Title2}
            </span>
          </h1>

          <div className="flex items-center gap-3">
            <a
              href=${ESSENTIALS.Fweb}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center justify-center gap-1.5 rounded-full px-4 text-sm font-medium text-white transition-opacity hover:opacity-85"
              style={{ background: "oklch(0.72 0.19 235)" }}
            >
            ${ESSENTIALS.Button1}
            </a>
            <a
              href=${ESSENTIALS.Github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center justify-center rounded-full border px-4 text-sm font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
              style={{
                borderColor: "oklch(0.72 0.19 235 / 0.25)",
                color: "oklch(0.72 0.19 235)",
              }}
            >
              ${ESSENTIALS.Button2}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8">
          <a
            href=${ESSENTIALS.Web}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-[14px] transition-colors duration-300 text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400"
            aria-label="Part of raulmoracode ecosystem"
          >
            <span> ${ESSENTIALS.Button1}</span>
            <span style={{ color: "oklch(0.72 0.19 235)" }}>/</span>
            <span>part of</span>
            <span
              className="relative pb-0.5 bg-[linear-gradient(currentColor,currentColor)] bg-right-bottom bg-no-repeat bg-[length:0%_1px] group-hover:bg-[length:100%_1px] transition-[background-size] duration-300 ease-out"
              style={{ color: "oklch(0.72 0.19 235)" }}
            >
              raulmoracode
              <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors duration-300">
                .com
              </span>
            </span>
          </a>
        </div>
      </main>
    </div>
  );
}

  `,

	Layout: `
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "${ESSENTIALS.Button1}",
  description: "Created by ${ESSENTIALS.Me}",
  icons: {
    icon: "${ESSENTIALS.Icon}",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={\`\${geistSans.variable} \${geistMono.variable}  h-full antialiased\`}
      >
        {children}
      </body>
    </html>
  );
}
  `,
} as const;
