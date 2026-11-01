const styles = `
/* Browsers color their toolbars from the page background, so set it on html too. */
html {
  background-color: var(--light);
}

:root[saved-theme="dark"] {
  color-scheme: dark;
}

:root[saved-theme="light"] {
  color-scheme: light;
}
`;

const script = `
(() => {
  const sync = () => {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = getComputedStyle(document.documentElement).getPropertyValue("--light").trim();
  };
  sync();
  document.addEventListener("themechange", sync);
})();
`;

export const ThemeColor = () => ({
  name: "ThemeColor",
  // Quartz requires a transformer to define at least one of its processing methods.
  htmlPlugins() {
    return [];
  },
  externalResources() {
    return {
      css: [{ content: styles, inline: true }],
      js: [{ contentType: "inline", loadTime: "afterDOMReady", script }],
      additionalHead: [],
    };
  },
});

export default ThemeColor;
