# [Launchlet] for [Krabby]

> [Krabby] plugin to run commands by name with [Launchlet].

## Installation

Edit your `manifest.json` and `fetch` files.

`~/.config/krabby/fetch`

``` sh
fetch https://launchlet.dev/launchlet.js
fetch https://launchlet.dev/launchlet.css
fetch https://github.com/alexherbo2/krabby-launchlet/raw/master/scripts/krabby/launchlet.js krabby/launchlet.js
```

`~/.config/krabby/manifest.json`

``` json
{
  "content_scripts": [
    {
      "js": [
        "packages/launchlet.js",
        "packages/krabby/launchlet.js"
      ],
      "css": [
        "packages/launchlet.css"
      ]
    }
  ]
}
```

Run the following in your terminal.

``` sh
cd ~/.config/krabby
make
```

## Usage

Press <kbd>Alt</kbd> + <kbd>F1</kbd> to run commands by name.

[Krabby]: https://krabby.netlify.com
[Launchlet]: https://launchlet.dev
