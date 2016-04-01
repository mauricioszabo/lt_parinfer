if(!lt.util.load.provided_QMARK_('crate.binding')) {
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6479 = cljs.core.seq.call(null,self__.watches);var chunk__6480 = null;var count__6481 = 0;var i__6482 = 0;while(true){
if((i__6482 < count__6481))
{var vec__6483 = cljs.core._nth.call(null,chunk__6480,i__6482);var key__$1 = cljs.core.nth.call(null,vec__6483,0,null);var f = cljs.core.nth.call(null,vec__6483,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6558 = seq__6479;
var G__6559 = chunk__6480;
var G__6560 = count__6481;
var G__6561 = (i__6482 + 1);
seq__6479 = G__6558;
chunk__6480 = G__6559;
count__6481 = G__6560;
i__6482 = G__6561;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6479);if(temp__4092__auto__)
{var seq__6479__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6479__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6479__$1);{
var G__6562 = cljs.core.chunk_rest.call(null,seq__6479__$1);
var G__6563 = c__5632__auto__;
var G__6564 = cljs.core.count.call(null,c__5632__auto__);
var G__6565 = 0;
seq__6479 = G__6562;
chunk__6480 = G__6563;
count__6481 = G__6564;
i__6482 = G__6565;
continue;
}
} else
{var vec__6484 = cljs.core.first.call(null,seq__6479__$1);var key__$1 = cljs.core.nth.call(null,vec__6484,0,null);var f = cljs.core.nth.call(null,vec__6484,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6566 = cljs.core.next.call(null,seq__6479__$1);
var G__6567 = null;
var G__6568 = 0;
var G__6569 = 0;
seq__6479 = G__6566;
chunk__6480 = G__6567;
count__6481 = G__6568;
i__6482 = G__6569;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__6486 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__6486,0,null);var path__$2 = cljs.core.nth.call(null,vec__6486,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__6486,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__6486,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__6570__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__6570 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__6570__delegate.call(this,sa,f,x,y,z,more);};
G__6570.cljs$lang$maxFixedArity = 5;
G__6570.cljs$lang$applyTo = (function (arglist__6571){
var sa = cljs.core.first(arglist__6571);
arglist__6571 = cljs.core.next(arglist__6571);
var f = cljs.core.first(arglist__6571);
arglist__6571 = cljs.core.next(arglist__6571);
var x = cljs.core.first(arglist__6571);
arglist__6571 = cljs.core.next(arglist__6571);
var y = cljs.core.first(arglist__6571);
arglist__6571 = cljs.core.next(arglist__6571);
var z = cljs.core.first(arglist__6571);
var more = cljs.core.rest(arglist__6571);
return G__6570__delegate(sa,f,x,y,z,more);
});
G__6570.cljs$core$IFn$_invoke$arity$variadic = G__6570__delegate;
return G__6570;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj6488 = {};return obj6488;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._depend[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._depend["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._compute[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._compute["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,((function (this$__$1){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
});})(this$__$1))
);
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6489 = cljs.core.seq.call(null,self__.watches);var chunk__6490 = null;var count__6491 = 0;var i__6492 = 0;while(true){
if((i__6492 < count__6491))
{var vec__6493 = cljs.core._nth.call(null,chunk__6490,i__6492);var key__$1 = cljs.core.nth.call(null,vec__6493,0,null);var f = cljs.core.nth.call(null,vec__6493,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6572 = seq__6489;
var G__6573 = chunk__6490;
var G__6574 = count__6491;
var G__6575 = (i__6492 + 1);
seq__6489 = G__6572;
chunk__6490 = G__6573;
count__6491 = G__6574;
i__6492 = G__6575;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6489);if(temp__4092__auto__)
{var seq__6489__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6489__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6489__$1);{
var G__6576 = cljs.core.chunk_rest.call(null,seq__6489__$1);
var G__6577 = c__5632__auto__;
var G__6578 = cljs.core.count.call(null,c__5632__auto__);
var G__6579 = 0;
seq__6489 = G__6576;
chunk__6490 = G__6577;
count__6491 = G__6578;
i__6492 = G__6579;
continue;
}
} else
{var vec__6494 = cljs.core.first.call(null,seq__6489__$1);var key__$1 = cljs.core.nth.call(null,vec__6494,0,null);var f = cljs.core.nth.call(null,vec__6494,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6580 = cljs.core.next.call(null,seq__6489__$1);
var G__6581 = null;
var G__6582 = 0;
var G__6583 = 0;
seq__6489 = G__6580;
chunk__6490 = G__6581;
count__6491 = G__6582;
i__6492 = G__6583;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__6499_6584 = cljs.core.seq.call(null,atms);var chunk__6500_6585 = null;var count__6501_6586 = 0;var i__6502_6587 = 0;while(true){
if((i__6502_6587 < count__6501_6586))
{var atm_6588 = cljs.core._nth.call(null,chunk__6500_6585,i__6502_6587);crate.binding._depend.call(null,neue,atm_6588);
{
var G__6589 = seq__6499_6584;
var G__6590 = chunk__6500_6585;
var G__6591 = count__6501_6586;
var G__6592 = (i__6502_6587 + 1);
seq__6499_6584 = G__6589;
chunk__6500_6585 = G__6590;
count__6501_6586 = G__6591;
i__6502_6587 = G__6592;
continue;
}
} else
{var temp__4092__auto___6593 = cljs.core.seq.call(null,seq__6499_6584);if(temp__4092__auto___6593)
{var seq__6499_6594__$1 = temp__4092__auto___6593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6499_6594__$1))
{var c__5632__auto___6595 = cljs.core.chunk_first.call(null,seq__6499_6594__$1);{
var G__6596 = cljs.core.chunk_rest.call(null,seq__6499_6594__$1);
var G__6597 = c__5632__auto___6595;
var G__6598 = cljs.core.count.call(null,c__5632__auto___6595);
var G__6599 = 0;
seq__6499_6584 = G__6596;
chunk__6500_6585 = G__6597;
count__6501_6586 = G__6598;
i__6502_6587 = G__6599;
continue;
}
} else
{var atm_6600 = cljs.core.first.call(null,seq__6499_6594__$1);crate.binding._depend.call(null,neue,atm_6600);
{
var G__6601 = cljs.core.next.call(null,seq__6499_6594__$1);
var G__6602 = null;
var G__6603 = 0;
var G__6604 = 0;
seq__6499_6584 = G__6601;
chunk__6500_6585 = G__6602;
count__6501_6586 = G__6603;
i__6502_6587 = G__6604;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj6504 = {};return obj6504;
})();
crate.binding.bindable = (function (){var obj6506 = {};return obj6506;
})();
crate.binding._value = (function _value(this$){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._value[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._value["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._on_change[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._on_change["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6507 = cljs.core.seq.call(null,self__.watches);var chunk__6508 = null;var count__6509 = 0;var i__6510 = 0;while(true){
if((i__6510 < count__6509))
{var vec__6511 = cljs.core._nth.call(null,chunk__6508,i__6510);var key = cljs.core.nth.call(null,vec__6511,0,null);var f = cljs.core.nth.call(null,vec__6511,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6605 = seq__6507;
var G__6606 = chunk__6508;
var G__6607 = count__6509;
var G__6608 = (i__6510 + 1);
seq__6507 = G__6605;
chunk__6508 = G__6606;
count__6509 = G__6607;
i__6510 = G__6608;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6507);if(temp__4092__auto__)
{var seq__6507__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6507__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6507__$1);{
var G__6609 = cljs.core.chunk_rest.call(null,seq__6507__$1);
var G__6610 = c__5632__auto__;
var G__6611 = cljs.core.count.call(null,c__5632__auto__);
var G__6612 = 0;
seq__6507 = G__6609;
chunk__6508 = G__6610;
count__6509 = G__6611;
i__6510 = G__6612;
continue;
}
} else
{var vec__6512 = cljs.core.first.call(null,seq__6507__$1);var key = cljs.core.nth.call(null,vec__6512,0,null);var f = cljs.core.nth.call(null,vec__6512,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6613 = cljs.core.next.call(null,seq__6507__$1);
var G__6614 = null;
var G__6615 = 0;
var G__6616 = 0;
seq__6507 = G__6613;
chunk__6508 = G__6614;
count__6509 = G__6615;
i__6510 = G__6616;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__6513){var vec__6514 = p__6513;var event = cljs.core.nth.call(null,vec__6514,0,null);var el = cljs.core.nth.call(null,vec__6514,1,null);var v = cljs.core.nth.call(null,vec__6514,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__4884__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__6617){
var bc = cljs.core.first(arglist__6617);
var segs = cljs.core.rest(arglist__6617);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__6523_6618 = cljs.core.seq.call(null,added);var chunk__6524_6619 = null;var count__6525_6620 = 0;var i__6526_6621 = 0;while(true){
if((i__6526_6621 < count__6525_6620))
{var a_6622 = cljs.core._nth.call(null,chunk__6524_6619,i__6526_6621);crate.binding.bc_add.call(null,bc,a_6622,a_6622);
{
var G__6623 = seq__6523_6618;
var G__6624 = chunk__6524_6619;
var G__6625 = count__6525_6620;
var G__6626 = (i__6526_6621 + 1);
seq__6523_6618 = G__6623;
chunk__6524_6619 = G__6624;
count__6525_6620 = G__6625;
i__6526_6621 = G__6626;
continue;
}
} else
{var temp__4092__auto___6627 = cljs.core.seq.call(null,seq__6523_6618);if(temp__4092__auto___6627)
{var seq__6523_6628__$1 = temp__4092__auto___6627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6523_6628__$1))
{var c__5632__auto___6629 = cljs.core.chunk_first.call(null,seq__6523_6628__$1);{
var G__6630 = cljs.core.chunk_rest.call(null,seq__6523_6628__$1);
var G__6631 = c__5632__auto___6629;
var G__6632 = cljs.core.count.call(null,c__5632__auto___6629);
var G__6633 = 0;
seq__6523_6618 = G__6630;
chunk__6524_6619 = G__6631;
count__6525_6620 = G__6632;
i__6526_6621 = G__6633;
continue;
}
} else
{var a_6634 = cljs.core.first.call(null,seq__6523_6628__$1);crate.binding.bc_add.call(null,bc,a_6634,a_6634);
{
var G__6635 = cljs.core.next.call(null,seq__6523_6628__$1);
var G__6636 = null;
var G__6637 = 0;
var G__6638 = 0;
seq__6523_6618 = G__6635;
chunk__6524_6619 = G__6636;
count__6525_6620 = G__6637;
i__6526_6621 = G__6638;
continue;
}
}
} else
{}
}
break;
}
var seq__6527 = cljs.core.seq.call(null,removed);var chunk__6528 = null;var count__6529 = 0;var i__6530 = 0;while(true){
if((i__6530 < count__6529))
{var r = cljs.core._nth.call(null,chunk__6528,i__6530);crate.binding.bc_remove.call(null,bc,r);
{
var G__6639 = seq__6527;
var G__6640 = chunk__6528;
var G__6641 = count__6529;
var G__6642 = (i__6530 + 1);
seq__6527 = G__6639;
chunk__6528 = G__6640;
count__6529 = G__6641;
i__6530 = G__6642;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6527);if(temp__4092__auto__)
{var seq__6527__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6527__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6527__$1);{
var G__6643 = cljs.core.chunk_rest.call(null,seq__6527__$1);
var G__6644 = c__5632__auto__;
var G__6645 = cljs.core.count.call(null,c__5632__auto__);
var G__6646 = 0;
seq__6527 = G__6643;
chunk__6528 = G__6644;
count__6529 = G__6645;
i__6530 = G__6646;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__6527__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__6647 = cljs.core.next.call(null,seq__6527__$1);
var G__6648 = null;
var G__6649 = 0;
var G__6650 = 0;
seq__6527 = G__6647;
chunk__6528 = G__6648;
count__6529 = G__6649;
i__6530 = G__6650;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__6531){var vec__6534 = p__6531;var path = cljs.core.nth.call(null,vec__6534,0,null);var opts = cljs.core.nth.call(null,vec__6534,1,null);var vec__6535 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__6535,0,null);var opts__$1 = cljs.core.nth.call(null,vec__6535,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__6535,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__6534,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__6535,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__6534,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__6531 = null;if (arguments.length > 1) {
  p__6531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__6531);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__6651){
var atm = cljs.core.first(arglist__6651);
var p__6531 = cljs.core.rest(arglist__6651);
return bound_coll__delegate(atm,p__6531);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__6536){var vec__6538 = p__6536;var opts = cljs.core.nth.call(null,vec__6538,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__6538,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__6538,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__6536 = null;if (arguments.length > 2) {
  p__6536 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__6536);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__6652){
var as = cljs.core.first(arglist__6652);
arglist__6652 = cljs.core.next(arglist__6652);
var atm = cljs.core.first(arglist__6652);
var p__6536 = cljs.core.rest(arglist__6652);
return map_bound__delegate(as,atm,p__6536);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__6540 = b;if(G__6540)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__6540.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__6540.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__6540);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__6540);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__6542 = b;if(G__6542)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__6542.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__6542.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__6542);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__6542);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__6544 = atm;if(G__6544)
{var bit__5534__auto__ = (G__6544.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__5534__auto__) || (G__6544.cljs$core$IDeref$))
{return true;
} else
{if((!G__6544.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__6544);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__6544);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__6545){var vec__6547 = p__6545;var func = cljs.core.nth.call(null,vec__6547,0,null);var func__$1 = (function (){var or__4884__auto__ = func;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__6545 = null;if (arguments.length > 1) {
  p__6545 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__6545);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__6653){
var atm = cljs.core.first(arglist__6653);
var p__6545 = cljs.core.rest(arglist__6653);
return bound__delegate(atm,p__6545);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-parinfer')) {
goog.provide('lt.plugins.lt_parinfer');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.plugins');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.lt_parinfer.pi = require(lt.objs.plugins.local_module.call(null,"Parinfer","parinfer"));
lt.plugins.lt_parinfer.run_parinfer = (function run_parinfer(txt,cursor_line,cursor_x,cursor_dx,mode){var params = {"cursorDx": cursor_dx, "cursorX": cursor_x, "cursorLine": cursor_line};var G__6451 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"paren","paren",1120341116),G__6451))
{return lt.plugins.lt_parinfer.pi.parenMode(txt,params);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094),G__6451))
{return lt.plugins.lt_parinfer.pi.indentMode(txt,params);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return {"success": true, "text": txt};
} else
{return null;
}
}
}
});
cljs.core.js__GT_clj.call(null,{"a": 10});
lt.plugins.lt_parinfer.compute_cursor_dx = (function compute_cursor_dx(cursor,changes){return cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__5601__auto__ = (function iter__6456(s__6457){return (new cljs.core.LazySeq(null,(function (){var s__6457__$1 = s__6457;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6457__$1);if(temp__4092__auto__)
{var s__6457__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6457__$2))
{var c__5599__auto__ = cljs.core.chunk_first.call(null,s__6457__$2);var size__5600__auto__ = cljs.core.count.call(null,c__5599__auto__);var b__6459 = cljs.core.chunk_buffer.call(null,size__5600__auto__);if((function (){var i__6458 = 0;while(true){
if((i__6458 < size__5600__auto__))
{var change = cljs.core._nth.call(null,c__5599__auto__,i__6458);var new_lines = change.text;var len_last_line = cljs.core.count.call(null,cljs.core.last.call(null,new_lines));var end_x = (((cljs.core.count.call(null,new_lines) > 1))?len_last_line:(len_last_line + change.from.ch));var start_x = change.to.ch;cljs.core.chunk_append.call(null,b__6459,(end_x - start_x));
{
var G__6476 = (i__6458 + 1);
i__6458 = G__6476;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6459),iter__6456.call(null,cljs.core.chunk_rest.call(null,s__6457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6459),null);
}
} else
{var change = cljs.core.first.call(null,s__6457__$2);var new_lines = change.text;var len_last_line = cljs.core.count.call(null,cljs.core.last.call(null,new_lines));var end_x = (((cljs.core.count.call(null,new_lines) > 1))?len_last_line:(len_last_line + change.from.ch));var start_x = change.to.ch;return cljs.core.cons.call(null,(end_x - start_x),iter__6456.call(null,cljs.core.rest.call(null,s__6457__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5601__auto__.call(null,changes);
})());
});
lt.plugins.lt_parinfer.editor_changed = (function editor_changed(cm,changes){var old_txt = cm.getValue();var scroll = cm.getScrollInfo();var cursor = cm.getCursor();var dx = lt.plugins.lt_parinfer.compute_cursor_dx.call(null,cursor,changes);var history = cm.getHistory();var cursor_line = cursor.line;var cursor_x = cursor.ch;var result = lt.plugins.lt_parinfer.run_parinfer.call(null,old_txt,cursor_line,cursor_x,dx,cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.lt_parinfer.parinfer_editors),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null)));var txt = result.text;if(cljs.core.not_EQ_.call(null,old_txt,txt))
{lt.objs.editor.set_val.call(null,cm,txt);
lt.objs.editor.scroll_to.call(null,cm,scroll.left,scroll.top);
var temp__4090__auto___6477 = result.cursorX;if(cljs.core.truth_(temp__4090__auto___6477))
{var new_x_6478 = temp__4090__auto___6477;cm.setCursor(cursor.line,new_x_6478);
} else
{cm.setCursor(cursor);
}
return cm.setHistory(history);
} else
{return null;
}
});
lt.plugins.lt_parinfer.editor_id = (function editor_id(){return lt.object.__GT_id.call(null,lt.objs.editor.pool.last_active.call(null));
});
lt.plugins.lt_parinfer.__GT_mode_str = (function __GT_mode_str(p__6460){var map__6463 = p__6460;var map__6463__$1 = ((cljs.core.seq_QMARK_.call(null,map__6463))?cljs.core.apply.call(null,cljs.core.hash_map,map__6463):map__6463);var current_editor = cljs.core.get.call(null,map__6463__$1,new cljs.core.Keyword(null,"current-editor","current-editor",2029475763));var modes = cljs.core.get.call(null,map__6463__$1,new cljs.core.Keyword(null,"modes","modes",1117974178));var mode = cljs.core.get.call(null,modes,current_editor);var G__6464 = mode;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"disabled","disabled",1284845038),G__6464))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pos","span.pos",3069890850),"Parinfer: disabled"], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"paren","paren",1120341116),G__6464))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pos","span.pos",3069890850),"Parinfer: paren mode"], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094),G__6464))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pos","span.pos",3069890850),"Parinfer: indent mode"], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pos","span.pos",3069890850)], null);
} else
{return null;
}
}
}
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","parinfer.editors","lt.plugins.lt-parinfer/parinfer.editors",3581042988),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-parinfer","show-parinfer-mode","lt.plugins.lt-parinfer/show-parinfer-mode",1127221598),null], null), null),new cljs.core.Keyword(null,"modes","modes",1117974178),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-editor","current-editor",2029475763),null,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.objs.statusbar.statusbar_item.call(null,crate.binding.bound.call(null,this$,lt.plugins.lt_parinfer.__GT_mode_str),"");
}));
if(typeof lt.plugins.lt_parinfer.parinfer_editors !== 'undefined')
{} else
{lt.plugins.lt_parinfer.parinfer_editors = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","parinfer.editors","lt.plugins.lt-parinfer/parinfer.editors",3581042988));
}
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.lt_parinfer.parinfer_editors);
lt.plugins.lt_parinfer.update_editor_and_state = (function update_editor_and_state(ed,cm,result){lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null),new cljs.core.Keyword(null,"indent","indent",4124632094));
if(cljs.core.not_EQ_.call(null,result.text,lt.objs.editor.__GT_val.call(null,ed)))
{return lt.objs.editor.set_val.call(null,cm,result.text);
} else
{return null;
}
});
lt.plugins.lt_parinfer.unbalanced = (function unbalanced(ed){lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Unbalanced Parenthesis",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"The opened file is unbalanced. Parinfer is disabled"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Please, correct the file and activate parinfer again"], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Ok"], null)], null)], null));
return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null),new cljs.core.Keyword(null,"disabled","disabled",1284845038));
});
lt.plugins.lt_parinfer.start_parinfer = (function start_parinfer(ed){var cm = lt.objs.editor.__GT_cm_ed.call(null,ed);var old_txt = cm.getValue();var result = lt.plugins.lt_parinfer.pi.parenMode(old_txt);if(cljs.core.truth_(result.success))
{return lt.plugins.lt_parinfer.update_editor_and_state.call(null,ed,cm,result);
} else
{return lt.plugins.lt_parinfer.unbalanced.call(null,ed);
}
});
lt.plugins.lt_parinfer.start_or_continue_parinfer = (function start_or_continue_parinfer(ed){if(cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lt.plugins.lt_parinfer.parinfer_editors),new cljs.core.Keyword(null,"modes","modes",1117974178)),lt.plugins.lt_parinfer.editor_id.call(null)))
{} else
{lt.objs.editor.__GT_cm_ed.call(null,ed).on("changes",lt.plugins.lt_parinfer.editor_changed);
}
if((cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.lt_parinfer.parinfer_editors),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null)) == null))
{return lt.plugins.lt_parinfer.start_parinfer.call(null,ed);
} else
{return null;
}
});
lt.plugins.lt_parinfer.__BEH__start_parinfer = (function __BEH__start_parinfer(ed){return lt.plugins.lt_parinfer.start_or_continue_parinfer.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","start-parinfer","lt.plugins.lt-parinfer/start-parinfer",1942056535),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_parinfer.__BEH__start_parinfer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.plugins.lt_parinfer.__BEH__stop_parinfer = (function __BEH__stop_parinfer(obj){return lt.object.update_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178)], null),cljs.core.dissoc,lt.plugins.lt_parinfer.editor_id.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","stop-parinfer","lt.plugins.lt-parinfer/stop-parinfer",3582459639),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_parinfer.__BEH__stop_parinfer,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",3951351006),null], null), null));
lt.plugins.lt_parinfer.__BEH__update_parinfer_mode = (function __BEH__update_parinfer_mode(obj){return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-editor","current-editor",2029475763)], null),lt.plugins.lt_parinfer.editor_id.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-parinfer","update-parinfer-mode","lt.plugins.lt-parinfer/update-parinfer-mode",1027363346),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_parinfer.__BEH__update_parinfer_mode,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parinfer-enable","parinfer-enable",2408040053),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parinfer: enable parinfer in current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (_){lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null),null);
return lt.plugins.lt_parinfer.start_or_continue_parinfer.call(null,lt.objs.editor.pool.last_active.call(null));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parinfer-disable","parinfer-disable",4563343578),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parinfer: disable parinfer in current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (_){return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null),new cljs.core.Keyword(null,"disabled","disabled",1284845038));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"parinfer-toggle-mode","parinfer-toggle-mode",1566460526),new cljs.core.Keyword(null,"desc","desc",1016984067),"Parinfer: toggle mode (indent or paren) in current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (_){var e = lt.plugins.lt_parinfer.editor_id.call(null);var G__6465 = cljs.core.get_in.call(null,cljs.core.deref.call(null,lt.plugins.lt_parinfer.parinfer_editors),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.lt_parinfer.editor_id.call(null)], null));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"paren","paren",1120341116),G__6465))
{return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),e], null),new cljs.core.Keyword(null,"indent","indent",4124632094));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094),G__6465))
{return lt.object.assoc_in_BANG_.call(null,lt.plugins.lt_parinfer.parinfer_editors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178),e], null),new cljs.core.Keyword(null,"paren","paren",1120341116));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
})], null));
}

//# sourceMappingURL=parinfer_compiled.js.map