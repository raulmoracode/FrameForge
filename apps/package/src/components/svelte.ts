import { ESSENTIALS } from "../const/essentials.js";

export const SvelteComponents = {
	Landing: `
<script>
  import "./app.css";
</script>

<div class="home-container">
  <main class="home-main">
    <span class="badge">New</span>

    <h1 class="title">
      Build faster with
      <span class="title-highlight">${ESSENTIALS.Title1}</span>
    </h1>

    <p class="description">
      A modern foundation for building powerful interfaces on top of{" "}
      <a
        href=${ESSENTIALS.Title1}
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >
        Vite
      </a>
      . Designed for speed, clarity, and developer happiness.
    </p>

    <div class="button-group">
      <a
        href=${ESSENTIALS.Title1}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="doc-button">Web</button>
      </a>
    </div>
  </main>
</div>
	`,
	Appcss: `

body {
  margin: 0;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  min-height: 100vh;
}

.home-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #022c22, #020617);
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
  color: white;
}

.home-main {
  width: 100%;
  max-width: 72rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 5rem 2rem;
  text-align: center;
}


.badge {
  display: inline-block;
  border-radius: 999px;
  border: 1px solid rgba(52, 211, 153, 0.3);
  background: rgba(16, 185, 129, 0.15);
  padding: 0.25rem 1.25rem;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  color: #d1fae5;
}


.title {
  font-size: 3.75rem;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .title {
	font-size: 4.5rem;
  }
}

@media (min-width: 1024px) {
  .title {
	font-size: 5rem;
  }
}

.title-highlight {
  background: linear-gradient(to right, #34d399, #86efac);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}


.description {
  max-width: 42rem;
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(209, 250, 229, 0.7);
}

.link {
  color: #6ee7b7;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s;
}

.link:hover {
  color: #a7f3d0;
}

.button-group {
  display: flex;
  gap: 1.25rem;
  font-size: 1rem;
  font-weight: 500;
}

.doc-button {
  border-radius: 999px;
  cursor: pointer;
  border: 1px solid rgba(52, 211, 153, 0.3);
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  background: transparent;
  color: white;
  transition: background 0.2s;
}

.doc-button:hover {
  background: rgba(52, 211, 153, 0.1);
}
		
		`,
	Main: `
		import { mount } from "svelte";
		import "./app.css";
		import App from "./App.svelte";
		
		const root = mount(App, {
			target: document.getElementById("root"),
		});
		
		export default root;`,
} as const;
