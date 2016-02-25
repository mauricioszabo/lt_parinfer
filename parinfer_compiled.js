if(!lt.util.load.provided_QMARK_('lt.plugins.lt-parinfer')) {
goog.provide('lt.plugins.lt_parinfer');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.plugins');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.lt_parinfer.pi = require(lt.objs.plugins.local_module.call(null,"lt_parinfer","parinfer"));
lt.plugins.lt_parinfer.parinfer_behind_cursor = (function parinfer_behind_cursor(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var old_txt = cm.getValue();var scroll = cm.getScrollInfo();var cursor = cm.getCursor();var history = cm.getHistory();var txt = lt.plugins.lt_parinfer.pi.indentMode(old_txt,{"cursorX": (cursor.ch + 1), "cursorLine": cursor.line}).text;if(cljs.core.not_EQ_.call(null,old_txt,txt))
{lt.objs.editor.set_val.call(null,cm,txt);
lt.objs.editor.scroll_to.call(null,cm,scroll.left,scroll.top);
cm.setCursor(cursor);
return cm.setHistory(history);
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parinfer-behind-cursor","parinfer-behind-cursor",4196896059),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parinfer: infer parenthesis on current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.lt_parinfer.parinfer_behind_cursor], null));
}

//# sourceMappingURL=parinfer_compiled.js.map