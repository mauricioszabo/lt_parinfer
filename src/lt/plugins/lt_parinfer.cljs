(ns lt.plugins.lt-parinfer
  (:require [lt.objs.editor :as editor]
            [lt.objs.plugins :as plugins]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

(def pi (js/require (plugins/local-module "lt_parinfer" "parinfer")))

(defn parinfer-behind-cursor []
  (let [cm (editor/->cm-ed (pool/last-active))
        old-txt (. cm getValue)
        scroll (.getScrollInfo cm)
        cursor (.getCursor cm)
        history (.getHistory cm)
        txt (.-text (.indentMode pi old-txt #js{:cursorLine (.-line cursor),
                                                :cursorX (-> cursor .-ch inc)}))]
    (if (not= old-txt txt)
      (do
        (editor/set-val cm txt)
        (editor/scroll-to cm (.-left scroll) (.-top scroll))
        (.setCursor cm cursor)
        (.setHistory cm history)))))

(cmd/command {:command :parinfer-behind-cursor
              :desc "Parinfer: infer parenthesis on current editor"
              :exec parinfer-behind-cursor})
