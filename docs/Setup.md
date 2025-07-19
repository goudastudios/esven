Webflow is a no-code visual platform for designing, building, and launching responsive websites, exporting clean HTML/CSS/JS.

### Product Requirements Document (PRD)

**Product Overview:** Tool/process to clone an existing Wix site using Windsurf AI Code Editor, ensuring plain HTML/JS output for seamless copy-paste into Wix Velo, maintaining identical look and functionality.

**Objectives:** 
- Scrape Wix site structure.
- Replicate in Windsurf locally.
- Enable edits in plain HTML/JS.
- Ensure compatibility with Wix Velo embedding.

**Key Features:**
- Scrape: Extract HTML, CSS, JS, assets from Wix URL.
- Setup: Use Windsurf IDE for local dev with AI assistance.
- Architecture: Plain HTML/JS only; no frameworks.
- Integration: Export code for Wix custom elements/Velo.
- Testing: Local preview matches Wix live.

**Requirements:**
- Inputs: Wix site URL.
- Outputs: Portable code snippets.
- Tools: Windsurf editor, scraping libs (e.g., via code_execution if needed).
- Constraints: Plain JS/HTML; Velo-compatible APIs.
- Success Metrics: Visual/functional parity between local and Wix.

**Scope Exclusions:** Native React support; advanced backend.

### Full-Scale Prompt
"Create a cloned version of an existing Wix site [provide URL] for migration to Wix Velo compatibility. Steps: 1. Scrape the Wix site using browse_page tool or code_execution to extract full HTML structure, CSS styles, JS scripts, images, and dynamic elements. Analyze for layout, interactions, and data sources. 2. Set up project architecture in Windsurf AI Code Editor locally: Initialize a new project in Windsurf IDE, import scraped assets, and rebuild using only plain HTML for structure, CSS for styling, and vanilla JavaScript for interactivity. Leverage Windsurf's AI features like Cascade for code suggestions, Tab for autocompletion, and Turbo mode for testing. Ensure no external frameworks; mimic Wix elements with custom code. 3. Develop and iterate in Windsurf: Implement all pages, forms, animations, and APIs using plain JS/HTML. Test locally for functionality. Make changes editable so any updates in Windsurf (e.g., JS event handlers, HTML elements) can be directly copy-pasted into Wix Editor's custom code elements or Velo scripts. Verify that local preview in Windsurf matches the original Wix site's appearance and behavior when deployed to Wix. Output: Exported code files, migration guide, and verification screenshots."