import { ESSENTIALS } from "../const/essentials.js";

export const ReactComponents = {
	Landing: `
import styles from "./App.module.css";
 
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.headline}>
            ${ESSENTIALS.Title1}
            <br />
            <span className={styles.headlineItalic}>${ESSENTIALS.Title2}</span>
          </h1>
 
          <div className={styles.ctas}>
            <a
              href={"${ESSENTIALS.Fweb}"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              ${ESSENTIALS.Button1}
            </a>
            <a
              href={"${ESSENTIALS.Github}"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              ${ESSENTIALS.Button2}
            </a>
          </div>
        </div>
 
        <div className={styles.footer}>
          <a
            href={"${ESSENTIALS.Web}"}
            target="_blank"
            rel="noreferrer"
            className={styles.footerLink}
            aria-label="Part of raulmoracode"
          >
            <span>${ESSENTIALS.Button1}</span>
            <span className={styles.slash}>/</span>
            <span>part of</span>
            <span className={styles.footerBrand}>
                ${ESSENTIALS.Me}
              <span className={styles.footerTld}>.com</span>
            </span>
          </a>
        </div>
      </main>
    </div>
  );
}
	`,
	Appcss: `
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  text-align: center;
  position: relative;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.headline {
  max-width: 18rem;
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--fg);
}

.headlineItalic {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--brand);
}

.ctas {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btnPrimary,
.btnSecondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  padding: 0 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

.btnPrimary {
  background: var(--brand);
  color: #fff;
  border: none;
  transition: opacity 0.15s ease;
}
.btnPrimary:hover { opacity: 0.85; }

.btnSecondary {
  background: transparent;
  color: var(--brand);
  border: 1px solid var(--brand-25);
  transition: background 0.15s ease;
}
.btnSecondary:hover { background: var(--hover-bg); }

.footer {
  position: absolute;
  bottom: 2rem;
}

.footerLink {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-family: monospace;
  font-size: 0.875rem;
  color: var(--subtle);
  text-decoration: none;
  transition: color 0.3s ease;
}
.footerLink:hover { color: var(--muted); }

.slash { color: var(--brand); }

.footerBrand {
  position: relative;
  color: var(--brand);
  padding-bottom: 2px;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size 0.3s ease-out;
}
.footerLink:hover .footerBrand { background-size: 100% 1px; }

.footerTld {
  color: var(--subtle);
  transition: color 0.3s ease;
}
.footerLink:hover .footerTld { color: var(--muted); }
`,
	BodyCss: `
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --brand:    oklch(0.72 0.19 235);
  --brand-20: oklch(0.72 0.19 235 / 0.20);
  --brand-25: oklch(0.72 0.19 235 / 0.25);
  --brand-40: oklch(0.72 0.19 235 / 0.40);

  --bg:       #ffffff;
  --fg:       #18181b;   /* zinc-900 */
  --muted:    #71717a;   /* zinc-500 */
  --subtle:   #a1a1aa;   /* zinc-400 */
  --hover-bg: #fafafa;   /* zinc-50  */

  --font-sans:  'Geist', system-ui, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg:       #0a0a0a;
    --fg:       #fafafa;   /* zinc-50  */
    --muted:    #a1a1aa;   /* zinc-400 */
    --subtle:   #52525b;   /* zinc-600 */
    --hover-bg: #111111;
  }
}

html, body { height: 100%; }

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--fg);
  -webkit-font-smoothing: antialiased;
}
`,
} as const;
