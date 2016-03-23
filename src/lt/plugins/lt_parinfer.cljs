(ns lt.plugins.lt-parinfer
  (:require [lt.objs.editor :as editor]
            [lt.objs.plugins :as plugins]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

(def pi (js/require (plugins/local-module "Parinfer" "parinfer")))

(def editor-modes (atom {}))

(println (.-text (.parenMode pi "
(fn
  ([n]
    (+ 1 n)
            ))
")))

(println (.-text (.parenMode pi "
(fn algoa [n
          m]
  (+ 1 n)))
" #js {:cursorLine 0,
       :cursorX 9})))

(defn run-parinfer [txt cursor-line cursor-x]
  (.indentMode pi txt #js{:cursorLine cursor-line,
                          :cursorX cursor-x}))

(defn parinfer-behind-cursor [ & args]
  (let [cm (editor/->cm-ed (pool/last-active))
        old-txt (. cm getValue)
        scroll (.getScrollInfo cm)
        cursor (.getCursor cm)
        history (.getHistory cm)
        cursor-line (.-line cursor)
        cursor-x (-> cursor .-ch inc)
        result (run-parinfer old-txt cursor-line cursor-x)
        txt (.-text result)]
    (if (not= old-txt txt)
      (do
        (editor/set-val cm txt)
        (editor/scroll-to cm (.-left scroll) (.-top scroll))
        (.setCursor cm cursor)
        (.setHistory cm history)))))

(cmd/command {:command :parinfer-behind-cursor
              :desc "Parinfer: infer parenthesis on current editor"
              :exec parinfer-behind-cursor})

(defn show-on-statusbar []
  (let [ed (pool/last-active)]
    (println "Current editor is in mode" (or (get modes ed) "no-parinfer"))))

(behavior ::show-parinfer-mode
          :triggers #{:active}
          :reaction (fn [obj] (show-on-statusbar)))

(behavior ::start-parinfer
          :triggers #{:active}
          :reaction (fn [obj]
                      (println "Activated editor")))

(behavior ::stop-parinfer
          :triggers #{:closed}
          :reaction (fn [obj]
                      (println "Deactivated editor")))
