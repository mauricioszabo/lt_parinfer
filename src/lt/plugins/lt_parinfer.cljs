(ns lt.plugins.lt-parinfer
  (:require [lt.objs.editor :as editor]
            [lt.objs.plugins :as plugins]
            [lt.object :as object]
            [lt.objs.statusbar :as stat]
            [lt.objs.popup :as popup]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [behavior]]))

(def pi (js/require (plugins/local-module "Parinfer" "parinfer")))

(defn run-parinfer [txt cursor-line cursor-x cursor-dx mode]
  (let [params #js{:cursorLine cursor-line,
                   :cursorX cursor-x
                   :cursorDx cursor-dx}]
    (case mode
      :indent (.indentMode pi txt params)
      :paren (.parenMode pi txt params)
      #js {:text txt, :success true})))

(defn compute-cursor-dx
  [cursor change]
  (when change
    (let [ignore? (= "+indenthack" (.-origin change))]
      (if ignore?
        0
        (let [start-x (.. change -to -ch)
              new-lines (.. change -text)
              len-last-line (count (last new-lines))
              end-x (if (> (count new-lines) 1)
                      len-last-line
                      (+ len-last-line (.. change -from -ch)))]
          (- end-x start-x))))))

(defn editor-changed [_ _ change]
  (let [cm (editor/->cm-ed (pool/last-active))
        old-txt (. cm getValue)
        scroll (.getScrollInfo cm)
        cursor (.getCursor cm)
        history (.getHistory cm)
        cursor-line (.-line cursor)
        cursor-x (-> cursor .-ch inc)
        result (run-parinfer old-txt cursor-line cursor-x
                             (compute-cursor-dx cursor change)
                             (get-in @parinfer-editors [:modes (editor-id)]))
        txt (.-text result)]
    (if (not= old-txt txt)
      (do
        (editor/set-val cm txt)
        (editor/scroll-to cm (.-left scroll) (.-top scroll))
        (.setCursor cm cursor)
        (.setHistory cm history)))))

(defn- editor-id [] (object/->id (pool/last-active)))

(defn ->mode-str [{:keys [modes current-editor]}]
  (let [mode (get modes current-editor)]
    (case mode
      :indent [:span.pos "Parinfer: indent mode"]
      :paren [:span.pos "Parinfer: paren mode"]
      :disabled [:span.pos "Parinfer: disabled"]
      [:span.pos])))

(behavior ::show-parinfer-mode
          :triggers #{:active}
          :reaction (fn [obj]))

(object/object* ::parinfer.editors
                :triggers #{}
                :behaviors #{::show-parinfer-mode}
                :modes {}
                :current-editor nil
                :init (fn [this]
                        (stat/statusbar-item (bound this ->mode-str) "")))

(def parinfer-editors (object/create ::parinfer.editors))
(stat/add-statusbar-item parinfer-editors)

(defn update-editor-and-state [ed cm result]
  (object/assoc-in! parinfer-editors [:modes (editor-id)] :indent)
  (if (not= (.-text result) (editor/->val ed))
    (editor/set-val cm (.-text result))))

(defn- unbalanced [ed]
  (popup/popup! {:header "Unbalanced Parenthesis"
                 :body [:div
                          [:p "The opened file is unbalanced. Parinfer is disabled"]
                          [:p "Please, correct the file and activate parinfer again"]]
                 :buttons [{:label "Ok"}]})
  (object/assoc-in! parinfer-editors [:modes (editor-id)] :disabled))

(defn start-parinfer [ed]
  (let [cm (editor/->cm-ed ed)
        old-txt (.getValue cm)
        result (.parenMode pi old-txt)]
    (if (.-success result)
      (update-editor-and-state ed cm result) ; Is balanced - just adjust editor
      (unbalanced ed))))

(defn start-or-continue-parinfer []
  (let [ed (pool/last-active)]
    (if (-> @parinfer-editors (get-in [:modes (editor-id)]) nil?)
      (start-parinfer ed))))

(behavior ::start-parinfer
          :triggers #{:active}
          :reaction (fn [obj] (start-or-continue-parinfer)))

(behavior ::stop-parinfer
          :triggers #{:closed}
          :reaction (fn [obj]
                      (object/update!
                        parinfer-editors
                        [:modes]
                        dissoc (editor-id))))

(behavior ::parinfer-infer
          :triggers #{:change}
          :reaction editor-changed)

;; Statusbar Updates
(behavior ::update-parinfer-mode
          :triggers #{:active}
          :reaction (fn [obj]
                      (object/assoc-in! parinfer-editors [:current-editor] (editor-id))))

;; Commands

(cmd/command {:command :parinfer-enable
              :desc "Parinfer: enable parinfer in current editor"
              :exec (fn [_]
                      (object/assoc-in!
                              parinfer-editors
                              [:modes (editor-id)] nil)
                      (start-or-continue-parinfer))})

(cmd/command {:command :parinfer-disable
              :desc "Parinfer: disable parinfer in current editor"
              :exec (fn [_] (object/assoc-in!
                              parinfer-editors
                              [:modes (editor-id)] :disabled))})

(cmd/command {:command :parinfer-toggle-mode
              :desc "Parinfer: toggle mode (indent or paren) in current editor"
              :exec (fn [_]
                      (let [e (editor-id)]
                        (case (-> @parinfer-editors (get-in [:modes (editor-id)]))
                          :indent (object/assoc-in! parinfer-editors [:modes e] :paren)
                          :paren (object/assoc-in! parinfer-editors [:modes e] :indent)
                          nil)))})
