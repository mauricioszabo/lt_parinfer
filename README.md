# LightTable Parinfer

LightTable wrapper for [parinfer](https://shaunlebron.github.io/parinfer/).

It automatically closes parens for you based on code indentation.

![Example Image](https://raw.githubusercontent.com/mauricioszabo/lt_parinfer/master/doc/example.gif)

To build the plugin:

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

## Bugs, Problems

1. The plugin re-evaluates the whole text, so if you have a text made without paredit (and that does not obey the parenthesis rules that paredit uses), it will probably re-balance your code and break things
1. I didn't find any good documentation on how to work with plugins, so for now we're not able to deactivate the plugin
1. It just works in "indent-mode", there's no "paren-mode" yet. This is a big deal if you open files that are not parenthesis-balanced - it'll probably corrupt your code
1. When installing it, it gives the message "Some plugin dependencies are missing". I wasn't able to discover what's wrong, or even if it's a bug in my plugin or in LightTable

