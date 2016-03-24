(ns lt.plugins.lt-parinfer
  (:require [lt.objs.editor :as editor]
            [lt.objs.plugins :as plugins]
            [lt.object :as object]
            [lt.objs.statusbar :as stat]
            [lt.objs.popup :as popup]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

(def pi (js/require (plugins/local-module "Parinfer" "parinfer")))

(defn run-parinfer [txt cursor-line cursor-x mode]
  (let [params #js{:cursorLine cursor-line,
                   :cursorX cursor-x}]
    (case mode
      :indent (.indentMode pi txt params)
      :paren (.parenMode pi txt params)
      #js {:text txt, :success true})))

(defn parinfer-behind-cursor [ & _]
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
