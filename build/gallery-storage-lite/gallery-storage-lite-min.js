YUI.add("gallery-storage-lite",function(B){var O=B.config.doc,H=B.config.win,C=B.JSON,N=B.namespace("StorageLite"),G="yui_storage_lite",R="YUI StorageLite data",T=1048576,M="1.0",P="ready",S=0,F=1,A=2,K=3,I=4,D="yui_storage_lite",J="data",Q={},L,E;if(H.localStorage){E=F;}else{if(H.globalStorage){E=A;}else{if(H.openDatabase&&navigator.userAgent.indexOf("Chrome")===-1){E=K;}else{if(B.UA.ie>=5){E=I;}else{E=S;}}}}B.StorageFullError=function(U){B.StorageFullError.superclass.constructor.call(U);this.name="StorageFullError";this.message=U||"Maximum storage capacity reached";if(B.UA.ie){this.description=this.message;}};B.extend(B.StorageFullError,Error);B.augment(N,B.EventTarget,true,null,{emitFacade:true,prefix:"storage-lite",preventable:false});N.publish(P,{fireOnce:true});B.mix(N,{clear:function(){},getItem:function(V,U){return null;},length:function(){return 0;},removeItem:function(U){},setItem:function(U,V){}});if(E===F||E===A){B.mix(N,{length:function(){return L.length;},removeItem:function(U){L.removeItem(U);},setItem:function(V,W,U){L.setItem(V,U?C.stringify(W):W);}},true);if(E===F){L=H.localStorage;B.mix(N,{clear:function(){L.clear();},getItem:function(W,V){try{return V?C.parse(L.getItem(W)):L.getItem(W);}catch(U){return null;}}},true);}else{if(E===A){L=H.globalStorage[H.location.hostname];B.mix(N,{clear:function(){for(var U in L){if(L.hasOwnProperty(U)){L.removeItem(U);delete L[U];}}},getItem:function(W,V){try{return V?C.parse(L[W].value):L[W].value;}catch(U){return null;}}},true);}}N.fire(P);}else{if(E===K||E===I){B.mix(N,{clear:function(){Q={};N._save();},getItem:function(V,U){return Q.hasOwnProperty(V)?Q[V]:null;},length:function(){var V=0,U;for(U in Q){if(Q.hasOwnProperty(U)){V+=1;}}return V;},removeItem:function(U){delete Q[U];N._save();},setItem:function(V,W,U){Q[V]=W;N._save();}},true);if(E===K){L=H.openDatabase(G,M,R,T);B.mix(N,{_save:function(){L.transaction(function(U){U.executeSql("REPLACE INTO "+G+" (name, value) VALUES ('data', ?)",[C.stringify(Q)]);});}},true);L.transaction(function(U){U.executeSql("CREATE TABLE IF NOT EXISTS "+G+"(name TEXT PRIMARY KEY, value TEXT NOT NULL)");U.executeSql("SELECT value FROM "+G+" WHERE name = 'data'",[],function(X,W){if(W.rows.length){try{Q=C.parse(W.rows.item(0).value);}catch(V){Q={};}}N.fire(P);});});}else{if(E===I){L=O.createElement("span");L.addBehavior("#default#userData");B.mix(N,{_save:function(){var V=C.stringify(Q);try{L.setAttribute(J,V);L.save(D);}catch(U){throw new B.StorageFullError();}}},true);B.on("domready",function(){O.body.appendChild(L);L.load(D);try{Q=C.parse(L.getAttribute(J));}catch(U){Q={};}N.fire(P);});}}}else{N.fire(P);}}},"gallery-2010.02.22-22",{requires:["event-base","event-custom","event-custom-complex","json"]});