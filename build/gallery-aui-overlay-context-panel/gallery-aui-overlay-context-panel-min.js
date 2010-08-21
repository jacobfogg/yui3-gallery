YUI.add("gallery-aui-overlay-context-panel",function(N){var I=N.Lang,e=I.isBoolean,J=I.isString,h=I.isObject,t="align",C="anim",g="arrow",K="backgroundColor",P="",p="boundingBox",i="click",Y="contentBox",u="overlaycontextpanel",k="default",T=".",m="end",n="hidden",d="inner",Q="opacity",q="pointer",D="showArrow",F="state",r="style",s="visible",j="bc",f="bl",b="br",R="cc",V="lb",U="lc",O="lt",Z="rb",X="rc",S="rl",G=N.ClassNameManager.getClassName,M=G(u),l=G(u,g,P),o=G(u,n),a=G(u,q),H=G(u,q,d),W=G(F,k),B='<div class="'+[W,a].join(" ")+'"></div>',c='<div class="'+H+'"></div>';var E=N.Component.create({NAME:u,ATTRS:{anim:{lazyAdd:false,value:{show:false},setter:function(A){return this._setAnim(A);}},arrow:{value:null,validator:J},hideOn:{value:i},showOn:{value:i},showArrow:{lazyAdd:false,value:true,validator:e},stack:{lazyAdd:false,value:true,setter:function(A){return this._setStack(A);},validator:e}},EXTENDS:N.OverlayContext,prototype:{bindUI:function(){var A=this;A.after("showArrowChange",A._afterShowArrowChange);A.before("show",A._beforeShow);E.superclass.bindUI.apply(A,arguments);},renderUI:function(){var A=this;A._renderElements();},syncUI:function(){var A=this;A._syncElements();},align:function(v,L){var A=this;E.superclass.align.apply(this,arguments);A._syncElements();},fixPointerColor:function(){var L=this;var v=L.get(Y);var AA=v.one(T+H);AA.removeAttribute(r);var A=v.getStyle(K);var x="borderBottomColor";var y=[T+l+Z,T+l+X,T+l+S].join(",");var w=[T+l+b,T+l+j,T+l+f].join(",");var z=[T+l+V,T+l+U,T+l+O].join(",");if(v.test(y)){x="borderLeftColor";}else{if(v.test(w)){x="borderTopColor";}else{if(v.test(z)){x="borderRightColor";}}}AA.setStyle(x,A);},getAlignPoint:function(){var A=this;var L=A.get(t).points[0];if(L==R){L=j;}return A.get(g)||L;},hide:function(v){var A=this;var L=A.get(p);if(A._hideAnim){var w=A.get(s);if(w){A._hideAnim.run();A._hideAnim.on(m,function(){E.superclass.hide.apply(A,arguments);});}}else{E.superclass.hide.apply(A,arguments);}},_renderElements:function(){var A=this;var L=A.get(Y);var w=A.get(t);var v=w.points[0];L.addClass(W);A._pointerNode=N.Node.create(B).append(c);L.append(A._pointerNode);},_syncElements:function(){var A=this;var v=A.get(Y);var L=A._pointerNode;var w=A.getAlignPoint();if(A.get(D)){L.removeClass(o);v.removeClass(l+A._lastOverlayPoint);v.addClass(l+w);A.fixPointerColor();}else{L.addClass(o);}A._lastOverlayPoint=w;},_setStack:function(L){var A=this;if(L){N.OverlayContextPanelManager.register(A);}else{N.OverlayContextPanelManager.remove(A);}return L;},_setAnim:function(x){var A=this;var L=A.get(p);if(x){var y={node:L,duration:0.1};var v=N.merge(y,{from:{opacity:0},to:{opacity:1}});var w=N.merge(y,{from:{opacity:1},to:{opacity:0}});if(h(x)){v=N.merge(v,x.show);w=N.merge(w,x.hide);}A._showAnim=new N.Anim(v);A._hideAnim=new N.Anim(w);if(h(x)){if(x.show===false){A._showAnim=null;}if(x.hide===false){A._hideAnim=null;}}}return x;},_beforeShow:function(v){var A=this;var L=A.get(p);var w=A.get(s);if(!w&&A._showAnim){L.setStyle(Q,0);A._showAnim.run();}else{L.setStyle(Q,1);}},_afterShowArrowChange:function(){var A=this;A._syncElements();}}});N.OverlayContextPanel=E;N.OverlayContextPanelManager=new N.OverlayManager({zIndexBase:1000});},"gallery-2010.08.18-17-12",{skinnable:true,requires:["gallery-aui-overlay-context","anim"]});