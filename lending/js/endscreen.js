(function(g){var window=this;'use strict';var iPa=function(a,b){a.Ma("onAutonavCoundownStarted",b)},w5=function(a,b,c){var d=b.jb();
g.N(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Te(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.$G&&(b.lengthText?(f=b.lengthText||null,h=b.Cy||null):b.lengthSeconds&&(f=g.eM(b.lengthSeconds),h=g.eM(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.kN(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.$G?b.isLivePlayback:null,n=b instanceof g.$G?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.Vq||g.MI("\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.jn(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.Ot};b instanceof g.lN&&(d.playlist_length=b.length);a.update(d)},x5=function(a){var b=a.T(),c=b.l;
g.V.call(this,{D:"a",K:"ytp-autonav-suggestion-card",U:{href:"{{url}}",target:c?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",Ea:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ea:["ytp-autonav-timestamp"],ra:"{{duration}}"},{D:"div",Ea:["ytp-autonav-live-stamp"],ra:"\u0412 \u044d\u0444\u0438\u0440\u0435"},
{D:"div",Ea:["ytp-autonav-upcoming-stamp"],ra:"\u0421\u043a\u043e\u0440\u043e \u0432 \u044d\u0444\u0438\u0440\u0435"},{D:"div",K:"ytp-autonav-list-overlay",S:[{D:"div",K:"ytp-autonav-mix-text",ra:"\u041c\u0438\u043a\u0441"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Ea:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],ra:"{{title}}"},{D:"div",Ea:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],ra:"{{author}}"},{D:"div",Ea:["ytp-autonav-endscreen-upnext-author",
"ytp-autonav-view-and-date-card"],ra:"{{views_and_publish_time}}"}]});this.I=a;this.suggestion=null;this.i=c;this.Pa("click",this.onClick);this.Pa("keypress",this.l)},z5=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.C=b;this.l=0;b=a.T();var d=b.l;this.I=a;this.suggestion=null;this.i=new g.V({D:"div",K:"ytp-autonav-endscreen-upnext-container",U:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",ra:"{{autoplayAlternativeHeader}}"},
{D:"a",K:"ytp-autonav-endscreen-link-container",U:{href:"{{url}}",target:d?b.G:""},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ea:["ytp-autonav-timestamp"],ra:"{{duration}}"},{D:"div",Ea:["ytp-autonav-live-stamp"],ra:"\u0412 \u044d\u0444\u0438\u0440\u0435"},{D:"div",Ea:["ytp-autonav-upcoming-stamp"],ra:"\u0421\u043a\u043e\u0440\u043e \u0432 \u044d\u0444\u0438\u0440\u0435"}]},{D:"div",K:"ytp-autonav-endscreen-video-info",
S:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",ra:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",ra:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",ra:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",ra:"{{author_and_views}}"}]}]}]});g.J(this,this.i);this.i.Ba(this.element);d||this.N(this.i.Da("ytp-autonav-endscreen-link-container"),"click",this.rG);this.I.Yb(this.element,this,115127);this.I.Yb(this.i.Da("ytp-autonav-endscreen-link-container"),
this,115128);this.overlay=new g.V({D:"div",K:"ytp-autonav-overlay"});g.J(this,this.overlay);this.overlay.Ba(this.element);this.u=new g.V({D:"div",K:"ytp-autonav-endscreen-button-container"});g.J(this,this.u);this.u.Ba(this.element);this.cancelButton=new g.V({D:"button",Ea:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],U:{"aria-label":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},
ra:"\u041e\u0442\u043c\u0435\u043d\u0430"});g.J(this,this.cancelButton);this.cancelButton.Ba(this.u.element);this.cancelButton.Pa("click",this.wO,this);this.I.Yb(this.cancelButton.element,this,115129);this.playButton=new g.V({D:"a",Ea:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],U:{href:"{{url}}",role:"button","aria-label":"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e"},
ra:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438"});g.J(this,this.playButton);this.playButton.Ba(this.u.element);this.playButton.Pa("click",this.rG,this);this.I.Yb(this.playButton.element,this,115130);this.B=new g.K(function(){y5(c)},500);
g.J(this,this.B);this.qG();this.N(a,"autonavvisibility",this.qG)},C5=function(a){var b=a.I.gj(!0,a.I.isFullscreen());
g.N(a.element,"ytp-autonav-endscreen-small-mode",a.jf(b));g.N(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.Qz);g.N(a.I.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.I.Qd());g.N(a.I.getRootNode(),"countdown-running",a.Hh());g.N(a.element,"ytp-player-content",a.I.Qd());g.yl(a.overlay.element,{width:b.width+"px"});if(!a.Hh()){a.I.Qd()?A5(a,Math.round(B5(a)/1E3)):A5(a);b=!!a.suggestion&&!!a.suggestion.Ot;var c=a.I.Qd()||!b;g.N(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.N(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.iL(a.u,a.I.Qd())}},y5=function(a){var b=B5(a),c=Math,d=c.min;
var e=a.l?Date.now()-a.l:0;c=d.call(c,e,b);A5(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Hh()?a.select(!0):a.Hh()&&a.B.start()},B5=function(a){var b=a.I.ep();
return 0<=b?b:g.TE(a.I.T().experiments,"autoplay_time")||1E4},A5=function(a,b){b=void 0===b?-1:b;
a=a.i.Da("ytp-autonav-endscreen-upnext-header");g.sg(a);if(0<=b){b=String(b);var c="\u0412\u0438\u0434\u0435\u043e \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 $SECONDS".match(/\$SECONDS/gi)[0],d="\u0412\u0438\u0434\u0435\u043e \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.rg("\u0412\u0438\u0434\u0435\u043e \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 $SECONDS".slice(0,
d)));var e=g.qg("span");g.Kq(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.xg(e,b);a.appendChild(e);a.appendChild(g.rg("\u0412\u0438\u0434\u0435\u043e \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 $SECONDS".slice(d+c.length)));return}}g.xg(a,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435")},D5=function(a,b){g.V.call(this,{D:"div",
Ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},F5=function(a){g.V.call(this,{D:"div",
Ea:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",S:[{D:"span",K:"ytp-upnext-header",ra:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435"},{D:"span",K:"ytp-upnext-title",ra:"{{title}}"},{D:"span",K:"ytp-upnext-author",ra:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e"},
S:[{D:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},S:[{D:"circle",K:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",
S:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",ra:"\u0410\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e."}]}]});this.api=a;this.cancelButton=null;this.C=this.Da("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.K(this.jx,5E3,this);this.l=0;var b=this.Da("ytp-upnext-cancel");this.cancelButton=
new g.V({D:"button",Ea:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},ra:"\u041e\u0442\u043c\u0435\u043d\u0430"});g.J(this,this.cancelButton);this.cancelButton.Pa("click",this.xO,this);this.cancelButton.Ba(b);this.cancelButton&&this.api.Yb(this.cancelButton.element,this,115129);g.J(this,this.B);this.api.Yb(this.element,
this,18788);b=this.Da("ytp-upnext-autoplay-icon");this.N(b,"click",this.yO);this.api.Yb(b,this,115130);this.sG();this.N(a,"autonavvisibility",this.sG);this.N(a,"mdxnowautoplaying",this.qT);this.N(a,"mdxautoplaycanceled",this.rT);this.N(a,"mdxautoplayupnext",this.GM);E5(this)&&(a=(a=g.bN(this.api.sb()))?a.vQ():null)&&this.GM(a);g.N(this.element,"ytp-upnext-mobile",this.api.T().i)},E5=function(a){return 3===a.api.getPresentingPlayerType()},jPa=function(a,b){return b?b:0<=a.api.ep()?a.api.ep():g.TE(a.api.T().experiments,
"autoplay_time")||1E4},G5=function(a,b){b=jPa(a,b);
var c=Math,d=c.min;var e=(0,g.P)()-a.l;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Hh()&&!E5(a)?a.select(!0):a.Hh()&&a.i.start()},H5=function(a){D5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=this.suggestions=null;this.table=new g.V({D:"div",K:"ytp-suggestion-panel",S:[{D:"div",Ea:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],ra:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"}]});this.J=new g.V({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.G=!1;this.l=new z5(this.player);g.J(this,this.l);this.l.Ba(this.element);a.getVideoData().Zb?
this.i=this.l:(this.i=new F5(a),g.fN(this.player,this.i.element,4),g.J(this,this.i));this.overlay=new g.V({D:"div",K:"ytp-autonav-overlay-cancelled-state"});g.J(this,this.overlay);this.overlay.Ba(this.element);this.B=new g.iN(this);g.J(this,this.B);g.J(this,this.table);this.table.Ba(this.element);this.table.show();g.J(this,this.J);this.J.Ba(this.table.element);this.hide()},kPa=function(a,b){return g.Pe(b.suggestions,function(c){c=g.GP(a.player.T(),c);
g.J(a,c);return c})},I5=function(a){var b=a.Qd();
b!==a.C&&(a.C=b,a.player.Z("autonavvisibility"),a.C?(a.l!==a.i&&a.l.hide(),a.table.hide()):(a.l!==a.i&&a.l.show(),a.table.show()))},J5=function(a){D5.call(this,a,"subscribecard-endscreen");
this.i=new g.V({D:"div",K:"ytp-subscribe-card",S:[{D:"img",K:"ytp-author-image",U:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",S:[{D:"div",K:"ytp-author-name",ra:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.J(this,this.i);this.i.Ba(this.element);var b=a.getVideoData();this.subscribeButton=new g.uO("\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",null,"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443",
null,!0,!1,b.Si,b.subscribed,"trailer-endscreen",null,null,a);g.J(this,this.subscribeButton);this.subscribeButton.Ba(this.i.Da("html5-subscribe-button-container"));this.N(a,"videodatachange",this.Na);this.Na();this.hide()},K5=function(a){var b=a.T(),c=g.bj||g.wF?{style:"will-change: opacity"}:void 0,d=b.l,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.V.call(this,{D:"a",Ea:e,U:{href:"{{url}}",target:d?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{D:"div",K:"ytp-videowall-still-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",S:[{D:"span",K:"ytp-videowall-still-info-bg",S:[{D:"span",K:"ytp-videowall-still-info-content",U:c,S:[{D:"span",K:"ytp-videowall-still-info-title",ra:"{{title}}"},{D:"span",K:"ytp-videowall-still-info-author",
ra:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",ra:"\u0412 \u044d\u0444\u0438\u0440\u0435"},{D:"span",K:"ytp-videowall-still-info-duration",ra:"{{duration}}"}]}]}]},{D:"span",Ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442",{D:"span",K:"ytp-videowall-still-listlabel-length",S:[" (",{D:"span",ra:"{{playlist_length}}"},")"]}]},{D:"span",Ea:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],S:[{D:"span",K:"ytp-videowall-still-listlabel-mix-icon"},"\u041c\u0438\u043a\u0441",{D:"span",K:"ytp-videowall-still-listlabel-length",ra:" (50+)"}]}]});this.suggestion=null;this.l=d;this.api=a;this.i=new g.iN(this);g.J(this,this.i);this.Pa("click",this.onClick);this.Pa("keypress",this.u);this.i.N(a,"videodatachange",this.ob);a.Mg(this.element,this);this.ob()},L5=function(a){D5.call(this,a,"videowall-endscreen");
var b=this;this.I=a;this.u=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.J=!1;this.L=null;this.l=new g.iN(this);g.J(this,this.l);this.G=new g.K(function(){g.M(b.element,"ytp-show-tiles")},0);
g.J(this,this.G);var c=new g.V({D:"button",Ea:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"\u041d\u0430\u0437\u0430\u0434"},S:[g.nL()]});g.J(this,c);c.Ba(this.element);c.Pa("click",this.CO,this);this.table=new g.fL({D:"div",K:"ytp-endscreen-content"});g.J(this,this.table);this.table.Ba(this.element);c=new g.V({D:"button",Ea:["ytp-button","ytp-endscreen-next"],U:{"aria-label":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435"},S:[g.oL()]});g.J(this,c);c.Ba(this.element);c.Pa("click",
this.BO,this);a.getVideoData().Zb?this.i=new z5(a,!0):this.i=new F5(a);g.J(this,this.i);g.fN(this.player,this.i.element,4);this.hide()},M5=function(a){return g.gN(a.player)&&a.Nt()&&!a.B},lPa=function(a,b){return g.Pe(b.suggestions,function(c){c=g.GP(a.I.T(),c);
g.J(a,c);return c})},N5=function(a){var b=a.Qd();
b!==a.J&&(a.J=b,a.player.Z("autonavvisibility"))},O5=function(a){g.pN.call(this,a);
var b=this;this.endScreen=null;this.i=this.l=this.u=!1;this.listeners=new g.iN(this);g.J(this,this.listeners);this.env=a.T();mPa(a)?(this.u=!0,nPa(this),this.i?this.endScreen=new H5(a):this.endScreen=new L5(this.player)):this.env.Oc?this.endScreen=new J5(this.player):this.endScreen=new D5(this.player);g.J(this,this.endScreen);g.fN(this.player,this.endScreen.element,4);oPa(this);this.listeners.N(a,"videodatachange",this.ob,this);this.listeners.N(a,g.eA("endscreen"),function(c){b.Ad(c)});
this.listeners.N(a,g.fA("endscreen"),function(c){b.mf(c)})},nPa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Ih&&a.l===b.Zb)return!1;a.i=b.Ih;a.l=b.Zb;return!0},mPa=function(a){a=a.T();
return a.zb&&!a.Oc},oPa=function(a){a.player.Ve("endscreen");
var b=a.player.getVideoData();b=new g.bA(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.bA(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});a.player.Gd([b,c])};
g.ZM.prototype.ep=g.ca(2,function(){return this.app.ep()});
g.OX.prototype.ep=g.ca(1,function(){return this.getVideoData().qH});
g.w(x5,g.V);x5.prototype.select=function(){(this.I.Jj(this.suggestion.jb().videoId,this.suggestion.Kd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.oC||void 0)||this.I.Y("web_player_endscreen_double_log_fix_killswitch"))&&this.I.Hb(this.element)};
x5.prototype.onClick=function(a){g.ON(a,this.I,this.i,this.suggestion.Kd||void 0)&&this.select()};
x5.prototype.l=function(a){switch(a.keyCode){case 13:case 32:g.ou(a)||(this.select(),g.nu(a))}};g.w(z5,g.V);g.k=z5.prototype;g.k.At=function(a){this.suggestion!==a&&(this.suggestion=a,w5(this.i,a),this.playButton.Ra("url",this.suggestion.jn()),C5(this))};
g.k.Hh=function(){return 0<this.l};
g.k.Gs=function(){this.Hh()||(this.l=Date.now(),y5(this),iPa(this.I,B5(this)),g.N(this.I.getRootNode(),"countdown-running",this.Hh()))};
g.k.Sp=function(){this.lm();y5(this);var a=this.i.Da("ytp-autonav-endscreen-upnext-header");a&&g.xg(a,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435")};
g.k.lm=function(){this.Hh()&&(this.B.stop(),this.l=0)};
g.k.select=function(a){this.I.nextVideo(!1,void 0===a?!1:a);this.lm()};
g.k.rG=function(a){g.ON(a,this.I)&&(a.currentTarget===this.playButton.element?this.I.Hb(this.playButton.element):a.currentTarget===this.i.Da("ytp-autonav-endscreen-link-container")&&(a=this.i.Da("ytp-autonav-endscreen-link-container"),this.I.kb(a,!0),this.I.Hb(a)),this.select())};
g.k.wO=function(){this.I.Hb(this.cancelButton.element);g.aN(this.I,!0)};
g.k.qG=function(){var a=this.I.Qd();this.C&&this.xb!==a&&g.iL(this,a);C5(this);this.I.kb(this.element,a);this.I.kb(this.cancelButton.element,a);this.I.kb(this.i.Da("ytp-autonav-endscreen-link-container"),a);this.I.kb(this.playButton.element,a)};
g.k.jf=function(a){return 400>a.width||459>a.height};g.w(D5,g.V);g.k=D5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Nt=function(){return!1};
g.k.Qd=function(){return!1};
g.k.DJ=function(){return!1};g.w(F5,g.V);g.k=F5.prototype;g.k.jx=function(){this.notification&&(this.B.stop(),this.hc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.At=function(a){this.suggestion=a;w5(this,a,"hqdefault.jpg")};
g.k.sG=function(){g.iL(this,this.api.Qd());this.api.kb(this.element,this.api.Qd());this.api.kb(this.Da("ytp-upnext-autoplay-icon"),this.api.Qd());this.cancelButton&&this.api.kb(this.cancelButton.element,this.api.Qd())};
g.k.AT=function(){window.focus();this.jx()};
g.k.Gs=function(a){var b=this;this.Hh()||(g.Su("a11y-announce","\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 "+this.suggestion.title),this.l=(0,g.P)(),this.i=new g.K(function(){G5(b,a)},25),G5(this,a),iPa(this.api,jPa(this,a)));
g.Nq(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.Hh=function(){return!!this.i};
g.k.Sp=function(){this.lm();this.l=(0,g.P)();G5(this);g.M(this.element,"ytp-upnext-autoplay-paused")};
g.k.lm=function(){this.Hh()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.T(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.jb(),this.jx(),this.notification=new Notification("\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435",{body:b.title,icon:b.Te()}),this.u=this.N(this.notification,"click",this.AT),this.B.start())}this.lm();this.api.nextVideo(!1,
a)};
g.k.yO=function(a){!g.wg(this.cancelButton.element,g.ju(a))&&g.ON(a,this.api)&&(this.api.Qd()&&this.api.Hb(this.Da("ytp-upnext-autoplay-icon")),this.select())};
g.k.xO=function(){this.api.Qd()&&this.cancelButton&&this.api.Hb(this.cancelButton.element);g.aN(this.api,!0)};
g.k.qT=function(a){E5(this);this.show();this.Gs(a)};
g.k.GM=function(a){E5(this);this.suggestion&&this.suggestion.jb().videoId===a.jb().videoId||this.At(a)};
g.k.rT=function(){E5(this);this.lm();this.hide()};
g.k.va=function(){this.lm();this.jx();g.V.prototype.va.call(this)};g.w(H5,D5);g.k=H5.prototype;g.k.create=function(){D5.prototype.create.call(this);this.B.N(this.player,"appresize",this.zt);this.B.N(this.player,"onVideoAreaChange",this.zt);this.B.N(this.player,"videodatachange",this.ob);this.B.N(this.player,"autonavchange",this.tG);this.B.N(this.player,"autonavcancel",this.zO);this.ob()};
g.k.show=function(){D5.prototype.show.call(this);(this.G||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.aN(this.player,!1);g.gN(this.player)&&this.Nt()&&!this.u?(I5(this),2===this.videoData.autonavState?this.player.T().Y("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Gs():3===this.videoData.autonavState&&this.i.Sp()):(g.aN(this.player,!0),I5(this));this.zt()};
g.k.hide=function(){D5.prototype.hide.call(this);this.i.Sp();I5(this)};
g.k.zt=function(){var a=this.player.gj(!0,this.player.isFullscreen());I5(this);C5(this.l);g.N(this.element,"ytp-autonav-cancelled-small-mode",this.jf(a));g.N(this.element,"ytp-autonav-cancelled-tiny-mode",this.uy(a));g.N(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.yl(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.r(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.r(b.value);b=c.next().value;c=c.next().value;g.N(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.ob=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=kPa(this,a))&&this.suggestions.length)for(this.i.At(this.suggestions[0]),this.i!==this.l&&this.l.At(this.suggestions[0]),a=0;a<pPa.length;++a){var b=pPa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new x5(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,w5(c,b));g.J(this,this.videos[a]);this.videos[a].Ba(this.J.element)}}this.zt()}};
g.k.tG=function(a){1===a?(this.G=!1,this.u=this.videoData.clientPlaybackNonce,this.i.lm(),this.xb&&this.zt()):(this.G=!0,this.Qd()&&(2===a?this.i.Gs():3===a&&this.i.Sp()))};
g.k.zO=function(a){a?this.tG(1):(this.u=null,this.G=!1)};
g.k.Nt=function(){return 1!==this.videoData.autonavState};
g.k.jf=function(a){return(910>a.width||459>a.height)&&!this.uy(a)&&!(400>=a.width||360>=a.height)};
g.k.uy=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Qd=function(){return this.xb&&g.gN(this.player)&&this.Nt()&&!this.u};
var pPa=[1,3,2,4];g.w(J5,D5);J5.prototype.Na=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.Lh,author:a.author});this.subscribeButton.channelId=a.Si;var b=this.subscribeButton;a.subscribed?b.l():b.u()};g.w(K5,g.V);K5.prototype.select=function(){(this.api.Jj(this.suggestion.jb().videoId,this.suggestion.Kd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.oC||void 0)||this.api.Y("web_player_endscreen_double_log_fix_killswitch"))&&this.api.Hb(this.element)};
K5.prototype.onClick=function(a){g.ON(a,this.api,this.l,this.suggestion.Kd||void 0)&&this.select()};
K5.prototype.u=function(a){switch(a.keyCode){case 13:case 32:g.ou(a)||(this.select(),g.nu(a))}};
K5.prototype.ob=function(){var a=this.api.getVideoData(),b=this.api.T();this.l=a.C?!1:b.l};g.w(L5,D5);g.k=L5.prototype;g.k.create=function(){D5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=lPa(this,a),this.videoData=a);this.Yk();this.l.N(this.player,"appresize",this.Yk);this.l.N(this.player,"onVideoAreaChange",this.Yk);this.l.N(this.player,"videodatachange",this.ob);this.l.N(this.player,"autonavchange",this.YA);this.l.N(this.player,"autonavcancel",this.AO);a=this.videoData.autonavState;a!==this.L&&this.YA(a);this.l.N(this.element,"transitionend",this.SU)};
g.k.destroy=function(){g.Ix(this.l);g.hf(this.stills);this.stills=[];this.suggestions=null;D5.prototype.destroy.call(this);g.Nq(this.element,"ytp-show-tiles");this.G.stop();this.L=this.videoData.autonavState};
g.k.Nt=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){D5.prototype.show.call(this);g.Nq(this.element,"ytp-show-tiles");this.player.T().i?g.Gq(this.G):this.G.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.aN(this.player,!1);M5(this)?(N5(this),2===this.videoData.autonavState?this.player.T().Y("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Gs():3===this.videoData.autonavState&&this.i.Sp()):(g.aN(this.player,!0),N5(this))};
g.k.hide=function(){D5.prototype.hide.call(this);this.i.Sp();N5(this)};
g.k.SU=function(a){g.ju(a)===this.element&&this.Yk()};
g.k.Yk=function(){if(this.suggestions&&this.suggestions.length){g.M(this.element,"ytp-endscreen-paginate");var a=this.I.gj(!0,this.I.isFullscreen()),b=g.WM(this.I);b&&(b=b.Le()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,q=e/2,t=b<=f-2&&n>=q*m,u=e<=h-2&&n>=p*m;if((p+1)/q*d/c>c/(p/(q+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=
q*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Ml(a,m,n);g.yl(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.At(this.suggestions[0]);this.i instanceof z5&&C5(this.i);g.N(this.element,"ytp-endscreen-takeover",M5(this));N5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,q=0,d&&f>=b-2&&h>=e-2?q=
1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(q=2):q=2),p=g.Pf(p+this.u,l),0!==q){t=this.stills[c];t||(t=new K5(this.player),this.stills[c]=t,a.appendChild(t.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+q)/e)-u-4,A=Math.floor(m*(f+q)/b)-x-4;g.Fl(t.element,x,u);g.Ml(t.element,A,y);g.yl(t.element,"transitionDelay",(h+f)/20+"s");g.N(t.element,"ytp-videowall-still-mini",1===q);g.N(t.element,"ytp-videowall-still-large",2<q);q=t;p=this.suggestions[p];q.suggestion!==p&&(q.suggestion=
p,t=q.api.T(),u=g.Lq(q.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",w5(q,p,u),g.yF(t)&&(t=p.jn(),t=g.ti(t,g.OM("emb_rel_end")),q.Ra("url",t)),(p=(p=p.Kd)&&p.itct)&&q.api.im(q.element,p));c++}g.N(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.ug(e.element),g.gf(e);this.stills.length=c}};
g.k.ob=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.suggestions=lPa(this,a),this.videoData=a,this.Yk())};
g.k.BO=function(){this.u+=this.stills.length;this.Yk()};
g.k.CO=function(){this.u-=this.stills.length;this.Yk()};
g.k.DJ=function(){return this.i.Hh()};
g.k.YA=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.lm(),this.xb&&this.Yk()):(this.C=!0,this.xb&&M5(this)&&(2===a?this.i.Gs():3===a&&this.i.Sp()))};
g.k.AO=function(a){if(a){for(a=0;a<this.stills.length;a++)this.I.kb(this.stills[a].element,!0);this.YA(1)}else this.B=null,this.C=!1;this.Yk()};
g.k.Qd=function(){return this.xb&&M5(this)};g.w(O5,g.pN);g.k=O5.prototype;g.k.gq=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!mPa(this.player)||b;var c=a.ze||g.JF(a.B),d=this.player.Au();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Qd=function(){return this.endScreen.Qd()};
g.k.hR=function(){return this.Qd()?this.endScreen.DJ():!1};
g.k.va=function(){this.player.Ve("endscreen");g.pN.prototype.va.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.rH;if(b&&b.videoId){var c=this.player.sb().rd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.SF?a=!1:(this.player.Jj(b.videoId,void 0,void 0,!0,!0,b),c&&c.Fy("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.pN.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.pN.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.Ad=function(a){this.gq()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.mf=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.ob=function(){oPa(this);this.u&&nPa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new H5(this.player):this.endScreen=new L5(this.player),g.J(this,this.endScreen),g.fN(this.player,this.endScreen.element,4))};g.AN.endscreen=O5;})(_yt_player);