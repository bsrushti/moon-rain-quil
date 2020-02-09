// Compiled by ClojureScript 1.10.520 {}
goog.provide('my_sketch.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
my_sketch.core.canvas_height = (660);
my_sketch.core.canvas_width = (800);
my_sketch.core.create_spark = (function my_sketch$core$create_spark(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(800)),(cljs.core.rand_int.call(null,(30)) - (40))], null),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),(80),new cljs.core.Keyword(null,"length","length",588987862),((15) + cljs.core.rand_int.call(null,(10))),new cljs.core.Keyword(null,"speed","speed",1257663751),((8) + cljs.core.rand_int.call(null,(3))),new cljs.core.Keyword(null,"width","width",-384071477),((cljs.core.rand_int.call(null,(2)) + (1)) / 2.0)], null);
});
my_sketch.core.building_start_point = (function (){var iter__4523__auto__ = (function my_sketch$core$iter__29798(s__29799){
return (new cljs.core.LazySeq(null,(function (){
var s__29799__$1 = s__29799;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__29799__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__29799__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function my_sketch$core$iter__29798_$_iter__29800(s__29801){
return (new cljs.core.LazySeq(null,((function (s__29799__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__29801__$1 = s__29801;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__29801__$1);
if(temp__5735__auto____$1){
var s__29801__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29801__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__29801__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__29803 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__29802 = (0);
while(true){
if((i__29802 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__29802);
cljs.core.chunk_append.call(null,b__29803,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(my_sketch.core.canvas_height - y)], null));

var G__29804 = (i__29802 + (1));
i__29802 = G__29804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29803),my_sketch$core$iter__29798_$_iter__29800.call(null,cljs.core.chunk_rest.call(null,s__29801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29803),null);
}
} else {
var y = cljs.core.first.call(null,s__29801__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(my_sketch.core.canvas_height - y)], null),my_sketch$core$iter__29798_$_iter__29800.call(null,cljs.core.rest.call(null,s__29801__$2)));
}
} else {
return null;
}
break;
}
});})(s__29799__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__29799__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(60),(70),(120),(150),(180),(100)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,my_sketch$core$iter__29798.call(null,cljs.core.rest.call(null,s__29799__$1)));
} else {
var G__29805 = cljs.core.rest.call(null,s__29799__$1);
s__29799__$1 = G__29805;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,((function (iter__4523__auto__){
return (function (p1__29797_SHARP_){
return (cljs.core.rem.call(null,p1__29797_SHARP_,(50)) === (0));
});})(iter__4523__auto__))
,cljs.core.range.call(null,(850))));
})();
my_sketch.core.building_height_width = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"height","height",1025178622),(180)], null);
my_sketch.core.create_building = (function my_sketch$core$create_building(){
var startPoint = cljs.core.rand_nth.call(null,my_sketch.core.building_start_point);
var heightWidth = my_sketch.core.building_height_width;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(startPoint),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(startPoint),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(heightWidth),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(heightWidth)], null);
});
my_sketch.core.create_stars = (function my_sketch$core$create_stars(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,(800)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,(150))], null);
});
my_sketch.core.setup = (function my_sketch$core$setup(){
quil.core.frame_rate.call(null,(20));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.take.call(null,(100),cljs.core.repeatedly.call(null,my_sketch.core.create_spark)),new cljs.core.Keyword(null,"buildings","buildings",-308691065),cljs.core.take.call(null,(50),cljs.core.repeatedly.call(null,my_sketch.core.create_building)),new cljs.core.Keyword(null,"stars","stars",-556837771),cljs.core.take.call(null,(80),cljs.core.repeatedly.call(null,my_sketch.core.create_stars)),new cljs.core.Keyword(null,"cycle","cycle",710365284),(3)], null);
});
my_sketch.core.colors = (function my_sketch$core$colors(lifetime){
var pred__29806 = cljs.core._LT_;
var expr__29807 = lifetime;
if(cljs.core.truth_(pred__29806.call(null,(60),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
} else {
if(cljs.core.truth_(pred__29806.call(null,(40),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50),(50)], null);
} else {
if(cljs.core.truth_(pred__29806.call(null,(30),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(100)], null);
} else {
if(cljs.core.truth_(pred__29806.call(null,(20),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(150),(150)], null);
} else {
if(cljs.core.truth_(pred__29806.call(null,(10),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200),(200)], null);
} else {
if(cljs.core.truth_(pred__29806.call(null,(8),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(210),(210)], null);
} else {
if(cljs.core.truth_(pred__29806.call(null,(6),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(220),(220),(220)], null);
} else {
if(cljs.core.truth_(pred__29806.call(null,(4),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(230),(230),(230)], null);
} else {
if(cljs.core.truth_(pred__29806.call(null,(2),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(240),(240)], null);
} else {
if(cljs.core.truth_(pred__29806.call(null,(0),expr__29807))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(250)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29807)].join('')));
}
}
}
}
}
}
}
}
}
}
});
my_sketch.core.draw_pipe = (function my_sketch$core$draw_pipe(point){
quil.core.stroke_weight.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(point));

cljs.core.apply.call(null,quil.core.stroke,my_sketch.core.colors.call(null,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(point)));

var p = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(point);
return quil.core.line.call(null,p,cljs.core.update.call(null,p,(1),cljs.core._PLUS_,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(point)));
});
my_sketch.core.draw_buildings = (function my_sketch$core$draw_buildings(p__29809){
var map__29810 = p__29809;
var map__29810__$1 = (((((!((map__29810 == null))))?(((((map__29810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29810):map__29810);
var x = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword(null,"height","height",1025178622));
quil.core.fill.call(null,(10),(10),(10));

quil.core.stroke.call(null,(255),(255),(255));

return quil.core.rect.call(null,x,y,width,height);
});
my_sketch.core.draw_moon = (function my_sketch$core$draw_moon(){
quil.core.fill.call(null,(220),(220),(220));

return quil.core.ellipse.call(null,(650),(250),(50),(50));
});
my_sketch.core.draw_stars = (function my_sketch$core$draw_stars(p__29812){
var map__29813 = p__29812;
var map__29813__$1 = (((((!((map__29813 == null))))?(((((map__29813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29813):map__29813);
var x = cljs.core.get.call(null,map__29813__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__29813__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quil.core.fill.call(null,(220),(220),(220));

return quil.core.ellipse.call(null,x,y,(2),(2));
});
my_sketch.core.draw_state = (function my_sketch$core$draw_state(p__29815){
var map__29816 = p__29815;
var map__29816__$1 = (((((!((map__29816 == null))))?(((((map__29816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29816):map__29816);
var points = cljs.core.get.call(null,map__29816__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var buildings = cljs.core.get.call(null,map__29816__$1,new cljs.core.Keyword(null,"buildings","buildings",-308691065));
var stars = cljs.core.get.call(null,map__29816__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var seq__29818_29830 = cljs.core.seq.call(null,buildings);
var chunk__29819_29831 = null;
var count__29820_29832 = (0);
var i__29821_29833 = (0);
while(true){
if((i__29821_29833 < count__29820_29832)){
var building_29834 = cljs.core._nth.call(null,chunk__29819_29831,i__29821_29833);
my_sketch.core.draw_buildings.call(null,building_29834);


var G__29835 = seq__29818_29830;
var G__29836 = chunk__29819_29831;
var G__29837 = count__29820_29832;
var G__29838 = (i__29821_29833 + (1));
seq__29818_29830 = G__29835;
chunk__29819_29831 = G__29836;
count__29820_29832 = G__29837;
i__29821_29833 = G__29838;
continue;
} else {
var temp__5735__auto___29839 = cljs.core.seq.call(null,seq__29818_29830);
if(temp__5735__auto___29839){
var seq__29818_29840__$1 = temp__5735__auto___29839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29818_29840__$1)){
var c__4550__auto___29841 = cljs.core.chunk_first.call(null,seq__29818_29840__$1);
var G__29842 = cljs.core.chunk_rest.call(null,seq__29818_29840__$1);
var G__29843 = c__4550__auto___29841;
var G__29844 = cljs.core.count.call(null,c__4550__auto___29841);
var G__29845 = (0);
seq__29818_29830 = G__29842;
chunk__29819_29831 = G__29843;
count__29820_29832 = G__29844;
i__29821_29833 = G__29845;
continue;
} else {
var building_29846 = cljs.core.first.call(null,seq__29818_29840__$1);
my_sketch.core.draw_buildings.call(null,building_29846);


var G__29847 = cljs.core.next.call(null,seq__29818_29840__$1);
var G__29848 = null;
var G__29849 = (0);
var G__29850 = (0);
seq__29818_29830 = G__29847;
chunk__29819_29831 = G__29848;
count__29820_29832 = G__29849;
i__29821_29833 = G__29850;
continue;
}
} else {
}
}
break;
}

var seq__29822_29851 = cljs.core.seq.call(null,points);
var chunk__29823_29852 = null;
var count__29824_29853 = (0);
var i__29825_29854 = (0);
while(true){
if((i__29825_29854 < count__29824_29853)){
var point_29855 = cljs.core._nth.call(null,chunk__29823_29852,i__29825_29854);
my_sketch.core.draw_pipe.call(null,point_29855);


var G__29856 = seq__29822_29851;
var G__29857 = chunk__29823_29852;
var G__29858 = count__29824_29853;
var G__29859 = (i__29825_29854 + (1));
seq__29822_29851 = G__29856;
chunk__29823_29852 = G__29857;
count__29824_29853 = G__29858;
i__29825_29854 = G__29859;
continue;
} else {
var temp__5735__auto___29860 = cljs.core.seq.call(null,seq__29822_29851);
if(temp__5735__auto___29860){
var seq__29822_29861__$1 = temp__5735__auto___29860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29822_29861__$1)){
var c__4550__auto___29862 = cljs.core.chunk_first.call(null,seq__29822_29861__$1);
var G__29863 = cljs.core.chunk_rest.call(null,seq__29822_29861__$1);
var G__29864 = c__4550__auto___29862;
var G__29865 = cljs.core.count.call(null,c__4550__auto___29862);
var G__29866 = (0);
seq__29822_29851 = G__29863;
chunk__29823_29852 = G__29864;
count__29824_29853 = G__29865;
i__29825_29854 = G__29866;
continue;
} else {
var point_29867 = cljs.core.first.call(null,seq__29822_29861__$1);
my_sketch.core.draw_pipe.call(null,point_29867);


var G__29868 = cljs.core.next.call(null,seq__29822_29861__$1);
var G__29869 = null;
var G__29870 = (0);
var G__29871 = (0);
seq__29822_29851 = G__29868;
chunk__29823_29852 = G__29869;
count__29824_29853 = G__29870;
i__29825_29854 = G__29871;
continue;
}
} else {
}
}
break;
}

var seq__29826_29872 = cljs.core.seq.call(null,stars);
var chunk__29827_29873 = null;
var count__29828_29874 = (0);
var i__29829_29875 = (0);
while(true){
if((i__29829_29875 < count__29828_29874)){
var star_29876 = cljs.core._nth.call(null,chunk__29827_29873,i__29829_29875);
my_sketch.core.draw_stars.call(null,star_29876);


var G__29877 = seq__29826_29872;
var G__29878 = chunk__29827_29873;
var G__29879 = count__29828_29874;
var G__29880 = (i__29829_29875 + (1));
seq__29826_29872 = G__29877;
chunk__29827_29873 = G__29878;
count__29828_29874 = G__29879;
i__29829_29875 = G__29880;
continue;
} else {
var temp__5735__auto___29881 = cljs.core.seq.call(null,seq__29826_29872);
if(temp__5735__auto___29881){
var seq__29826_29882__$1 = temp__5735__auto___29881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29826_29882__$1)){
var c__4550__auto___29883 = cljs.core.chunk_first.call(null,seq__29826_29882__$1);
var G__29884 = cljs.core.chunk_rest.call(null,seq__29826_29882__$1);
var G__29885 = c__4550__auto___29883;
var G__29886 = cljs.core.count.call(null,c__4550__auto___29883);
var G__29887 = (0);
seq__29826_29872 = G__29884;
chunk__29827_29873 = G__29885;
count__29828_29874 = G__29886;
i__29829_29875 = G__29887;
continue;
} else {
var star_29888 = cljs.core.first.call(null,seq__29826_29882__$1);
my_sketch.core.draw_stars.call(null,star_29888);


var G__29889 = cljs.core.next.call(null,seq__29826_29882__$1);
var G__29890 = null;
var G__29891 = (0);
var G__29892 = (0);
seq__29826_29872 = G__29889;
chunk__29827_29873 = G__29890;
count__29828_29874 = G__29891;
i__29829_29875 = G__29892;
continue;
}
} else {
}
}
break;
}

return my_sketch.core.draw_moon.call(null);
});
my_sketch.core.add_spark_at_end_of_cycle = (function my_sketch$core$add_spark_at_end_of_cycle(state){
if((new cljs.core.Keyword(null,"cycle","cycle",710365284).cljs$core$IFn$_invoke$arity$1(state) === (0))){
return cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.concat,cljs.core.take.call(null,(100),cljs.core.repeatedly.call(null,my_sketch.core.create_spark))),new cljs.core.Keyword(null,"cycle","cycle",710365284),(3));
} else {
return state;
}
});
my_sketch.core.update_state = (function my_sketch$core$update_state(state){
return my_sketch.core.add_spark_at_end_of_cycle.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"points","points",-1486596883),(function (points){
return cljs.core.map.call(null,(function (p1__29893_SHARP_){
return cljs.core.update.call(null,p1__29893_SHARP_,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),cljs.core.dec);
}),points);
})),new cljs.core.Keyword(null,"points","points",-1486596883),(function (points){
return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.zero_QMARK_,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)),points);
})),new cljs.core.Keyword(null,"points","points",-1486596883),(function (points){
return cljs.core.map.call(null,(function (p1__29894_SHARP_){
return cljs.core.update_in.call(null,p1__29894_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(p1__29894_SHARP_));
}),points);
})),new cljs.core.Keyword(null,"cycle","cycle",710365284),cljs.core.dec));
});
my_sketch.core.run_sketch = (function my_sketch$core$run_sketch(){
my_sketch.core.my_sketch = (function my_sketch$core$run_sketch_$_my_sketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"my-sketch",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,my_sketch.core.update_state))?(function() { 
var G__29895__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.update_state,args);
};
var G__29895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29896__i = 0, G__29896__a = new Array(arguments.length -  0);
while (G__29896__i < G__29896__a.length) {G__29896__a[G__29896__i] = arguments[G__29896__i + 0]; ++G__29896__i;}
  args = new cljs.core.IndexedSeq(G__29896__a,0,null);
} 
return G__29895__delegate.call(this,args);};
G__29895.cljs$lang$maxFixedArity = 0;
G__29895.cljs$lang$applyTo = (function (arglist__29897){
var args = cljs.core.seq(arglist__29897);
return G__29895__delegate(args);
});
G__29895.cljs$core$IFn$_invoke$arity$variadic = G__29895__delegate;
return G__29895;
})()
:my_sketch.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_sketch.core.canvas_width,my_sketch.core.canvas_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,my_sketch.core.setup))?(function() { 
var G__29898__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.setup,args);
};
var G__29898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29899__i = 0, G__29899__a = new Array(arguments.length -  0);
while (G__29899__i < G__29899__a.length) {G__29899__a[G__29899__i] = arguments[G__29899__i + 0]; ++G__29899__i;}
  args = new cljs.core.IndexedSeq(G__29899__a,0,null);
} 
return G__29898__delegate.call(this,args);};
G__29898.cljs$lang$maxFixedArity = 0;
G__29898.cljs$lang$applyTo = (function (arglist__29900){
var args = cljs.core.seq(arglist__29900);
return G__29898__delegate(args);
});
G__29898.cljs$core$IFn$_invoke$arity$variadic = G__29898__delegate;
return G__29898;
})()
:my_sketch.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,my_sketch.core.draw_state))?(function() { 
var G__29901__delegate = function (args){
return cljs.core.apply.call(null,my_sketch.core.draw_state,args);
};
var G__29901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29902__i = 0, G__29902__a = new Array(arguments.length -  0);
while (G__29902__i < G__29902__a.length) {G__29902__a[G__29902__i] = arguments[G__29902__i + 0]; ++G__29902__i;}
  args = new cljs.core.IndexedSeq(G__29902__a,0,null);
} 
return G__29901__delegate.call(this,args);};
G__29901.cljs$lang$maxFixedArity = 0;
G__29901.cljs$lang$applyTo = (function (arglist__29903){
var args = cljs.core.seq(arglist__29903);
return G__29901__delegate(args);
});
G__29901.cljs$core$IFn$_invoke$arity$variadic = G__29901__delegate;
return G__29901;
})()
:my_sketch.core.draw_state));
});
goog.exportSymbol('my_sketch.core.my_sketch', my_sketch.core.my_sketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20845__20846__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20845__20846__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),my_sketch.core.my_sketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"my-sketch"], null));
}
});
goog.exportSymbol('my_sketch.core.run_sketch', my_sketch.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581235315164
