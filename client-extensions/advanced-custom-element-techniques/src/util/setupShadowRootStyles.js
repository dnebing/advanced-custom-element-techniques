/**
 * Injects inline styles and cloned <link> styles into a shadowRoot.
 * Temporarily hides content to prevent FOUC, and restores visibility after styles apply.
 *
 * @param {ShadowRoot} shadowRoot - The shadow DOM root to inject styles into
 * @param {string[]} inlineStyles - Array of CSS strings to inject as <style>
 */
export function setupShadowRootStyles(shadowRoot, inlineStyles = []) {
	// Ensure styles are hidden initially to avoid FOUC
	shadowRoot.host.style.visibility = 'hidden';

	// Inject <style> tags for local inline CSS
	inlineStyles.forEach((cssText) => {
		const styleTag = document.createElement('style');
		styleTag.textContent = cssText;
		shadowRoot.appendChild(styleTag);
	});

	// Clone <link rel="stylesheet"> from the main document
	const globalLinks = document.querySelectorAll('link[rel="stylesheet"]');
	globalLinks.forEach((link) => {
		const clonedLink = link.cloneNode(true);
		shadowRoot.appendChild(clonedLink);
	});

	// Restore visibility on the next frame
	requestAnimationFrame(() => {
		shadowRoot.host.style.visibility = '';
	});
}

