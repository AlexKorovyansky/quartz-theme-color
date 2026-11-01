# quartz-theme-color

A [Quartz 5](https://quartz.jzhao.xyz) plugin that keeps browser toolbars in sync with the site theme, so they can change color when a visitor switches between light and dark mode.

The plugin:

- Adds a `theme-color` tag and updates it when the theme changes
- Sets the background of `html` to match the page
- Sets `color-scheme` to match the theme

How a browser uses these values is up to the browser and its settings. Some versions of Safari may not apply them to every toolbar.

## Installation

Add the plugin to `quartz.config.yaml`:

```yaml
plugins:
  - source: github:AlexKorovyansky/quartz-theme-color
    enabled: true
```

Then install it:

```sh
npx quartz plugin install --from-config
```

The plugin has no options.

## License

[MIT](LICENSE)
