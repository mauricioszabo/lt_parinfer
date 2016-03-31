# LightTable Parinfer

LightTable wrapper for [parinfer](https://shaunlebron.github.io/parinfer/).

It automatically closes parens for you based on code indentation.

![Example Image](https://raw.githubusercontent.com/mauricioszabo/lt_parinfer/master/doc/example.gif)

## Usage:

Simply open a Clojure or a ClojureScript file, and parinfer will auto-indent file based on your current use of parenthesis, and then work on "indent-mode".

There are now two ways of working with Parinfer: **indent** will infer parenthesis based on your code indentation - this is the default way of working. **paren** will infer indentation based on your parenthesis usage. I recommend adding a keystroke to toggle mode. Open `User keymaps` and add something like:

```clojure
  ; Parinfer
  [:editor.clj "ctrl-0" (:parinfer-toggle-mode)]
  [:editor.cljs "ctrl-0" (:parinfer-toggle-mode)]
```

## To build the plugin:

* Clone the repo into your plugins folder
  * On OS X: `~/Library/Application Support/LightTable/plugins/`
  * On Linux: `~/.config/LightTable/plugins/`
  * On Windows: `%APPDATALOCAL%/LightTable/plugins/`
* Open [lt_parinfer.cljs](https://github.com/mauricioszabo/lt_parinfer/blob/master/src/lt/plugins/lt_parinfer.cljs)
* Connect an nrepl client to the [project.clj](https://github.com/mauricioszabo/lt_parinfer/blob/master/project.clj). Note that this step is probably not required, only use this if the steps below don't work
* Save [lt_parinfer.cljs](https://github.com/mauricioszabo/lt_parinfer/blob/master/src/lt/plugins/lt_parinfer.cljs) or run the command `Editor: Build file or project`. You should see "Compiled plugin to ...lt-parinfer_compiled.js" in the statusbar
* Run the command `Plugins: Refresh plugin list` to detect the plugin
* Save [lt-parinfer.behaviors](https://github.com/LightTable/Declassifier/blob/master/declassifier.behaviors) or run the command `App: Reload behaviors` to load/reload the plugin behaviors

For interactive development, use the built-in clojurescript eval (ctrl-enter by default) and choose the `Light Table UI` connection.

Note: due to [Issue 1042](https://github.com/LightTable/LightTable/issues/1042) the `App: Reload behaviors` command will not reload the plugin source. To pick up changes either use interactive eval or restart Light Table.

## Roadmap (probably):

* Use "input" event of codemirror, not "change", so changes appear instantaneous
* When removing chars from a name in "paren-mode", reduces indentation of next lines
* I'm thinking about a "clever-mode", one that would infer if you want to use indent or paren mode and run parinfer with that mode.
