(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var qPa=function(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return(0,g.sKa)("0",Math.max(0,2-b))+a},rPa=function(){return{D:"svg",
U:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},S:[{D:"path",U:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},sPa=function(){return{D:"svg",
U:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},S:[{D:"path",U:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},Q5=function(a){"number"===typeof a?(this.date=tPa(a,0,1),P5(this,1)):g.La(a)?(this.date=tPa(a.getFullYear(),a.getMonth(),a.getDate()),P5(this,a.getDate())):(this.date=new Date(g.Pa()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),P5(this,a))},tPa=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},P5=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},R5=function(a,b){g.aO.call(this,a,{D:"div",
K:"ytp-reminder-menu",U:{role:"menu",tabindex:"-1"},S:[{D:"div",K:"ytp-reminder-menu-contents",S:[{D:"div",K:"ytp-reminder-menu-items"}]}]},100,!0);this.i=b;this.u=[];this.menuPopupRenderer=void 0;this.items=this.Da("ytp-reminder-menu-items");this.hide()},vPa=function(a){var b=uPa(a),c=0,d={};
for(c=0;c<b.length;d={sA:d.sA},c++){var e=a.u[c];e||(e=new g.V({D:"div",K:"ytp-reminder-menu-item",U:{role:"menuitem",tabindex:"0"},S:[{D:"div",K:"ytp-reminder-menu-item-icon",ra:"{{icon}}"},{D:"div",K:"ytp-reminder-menu-item-label",ra:"{{text}}"}]}),d.sA=c,e.Pa("click",function(l){return function(){var m=l.sA;a.Bb();m=uPa(a)[m];a.Z("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.Ba(a.items),a.u[c]=e);
var f=b[c],h=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":h=rPa();break;case "NOTIFICATIONS_NONE":h=sPa();break;case "NOTIFICATIONS_ACTIVE":h=g.tL()}f=f.text?g.lA(f.text):"";e.update({icon:h,text:f})}for(;c<a.u.length;)a.u.pop().dispose();0===c?a.Bb():a.Zc(a.i)},uPa=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},S5=function(a){g.V.call(this,{D:"div",
S:[{D:"button",Ea:["ytp-offline-slate-button","ytp-button"],S:[{D:"div",K:"ytp-offline-slate-button-icon",ra:"{{icon}}"},{D:"div",K:"ytp-offline-slate-button-text",ra:"{{text}}"}]}]});this.I=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.l=void 0;this.B=this.i=null;(this.C=this.Da("ytp-offline-slate-button"))&&this.N(this.C,"click",this.G);this.hide()},wPa=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=b.toggleButtonRenderer:
b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&c.upcomingEventReminderButtonRenderer?a.upcomingEventReminderButtonRenderer=c.upcomingEventReminderButtonRenderer:c&&c.upcomingEventReminderButtonRenderer||(a.upcomingEventReminderButtonRenderer=null);T5(a)},T5=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.lA(b.toggledText):"";a.update({text:c,icon:U5(b.toggledIcon)})}else c=b.defaultText?g.lA(b.defaultText):"",a.update({text:c,icon:U5(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=xPa(a))?(c=b.text?g.lA(b.text):"",a.update({text:c,icon:U5(b.icon)}),a.show()):a.hide():a.hide()},zPa=function(a,b,c){a.B||(a.B=new g.vx(a.I.T().Og));
var d={context:g.fv(a.B.config_||g.gv())};g.cy()&&(d.context.clientScreenNonce=g.cy());d.params=c;g.hv(a.B,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.l&&(a.upcomingEventReminderButtonRenderer.currentState=a.l,a.l=void 0)},
onError:function(){yPa(a)},
onTimeout:function(){yPa(a)}})},yPa=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,T5(a)):a.upcomingEventReminderButtonRenderer&&(a.l=void 0,T5(a))},U5=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return rPa();case "NOTIFICATIONS_NONE":return sPa();case "NOTIFICATIONS_ACTIVE":return g.tL();default:return null}},xPa=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.l||a.upcomingEventReminderButtonRenderer.currentState;a=g.r(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=c.value.upcomingEventReminderButtonStateRenderer)&&c.state===b&&c.button&&c.button.buttonRenderer)return c.button.buttonRenderer;return null},V5=function(a){g.V.call(this,{D:"div",
K:"ytp-offline-slate",S:[{D:"div",K:"ytp-offline-slate-background"},{D:"div",K:"ytp-offline-slate-bar",S:[{D:"span",K:"ytp-offline-slate-icon",S:[{D:"svg",U:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},S:[{D:"path",U:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{D:"circle",U:{cx:"12",cy:"12",r:"3"}}]}]},{D:"span",K:"ytp-offline-slate-messages",S:[{D:"div",K:"ytp-offline-slate-main-text",U:{"aria-label":"{{label}}"},ra:"{{mainText}}"},{D:"div",K:"ytp-offline-slate-subtitle-text",ra:"{{subtitleText}}"}]},{D:"span",K:"ytp-offline-slate-buttons"}]},{D:"button",Ea:["ytp-offline-slate-close-button","ytp-button"],S:[g.oL()]},{D:"button",Ea:["ytp-offline-slate-open-button","ytp-button"],S:[g.nL()]},{D:"div",K:"ytp-offline-slate-trailer-chip",ra:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440"}]});
var b=this;this.api=a;this.i=this.l=null;this.background=this.Da("ytp-offline-slate-background");this.u=this.Da("ytp-offline-slate-bar");this.C=new g.K(function(){g.M(b.u,"ytp-offline-slate-bar-fade")},15E3);
this.G=!1;this.B=new g.K(function(){g.M(b.element,"ytp-offline-slate-collapsed")},15E3);
g.J(this,this.B);g.J(this,this.C);this.countdownTimer=new g.K(this.BM,1E3,this);this.N(a,"presentingplayerstatechange",this.FM);this.N(a,"livestatedata",this.Na);a=this.Da("ytp-offline-slate-close-button");this.N(a,"click",function(){g.M(b.element,"ytp-offline-slate-collapsed")});
a=this.Da("ytp-offline-slate-open-button");this.N(a,"click",function(){g.Nq(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.Na(a)},W5=function(a,b,c){var d,e,f,h;
if(b){var l=null!=b.subtitleText?g.lA(b.subtitleText):"";c=c?c:null!=b.mainText?g.lA(b.mainText):"";b=null!==(h=null===(f=null===(e=null===(d=b.mainText)||void 0===d?void 0:d.accessibility)||void 0===e?void 0:e.accessibilityData)||void 0===f?void 0:f.label)&&void 0!==h?h:c;a.update({mainText:c,subtitleText:l,label:b});g.N(a.element,"ytp-offline-slate-single-text-line",!l);g.N(a.u,"ytp-offline-slate-bar-hidden",!c&&!l)}},X5=function(a,b){var c=(0,g.P)();
this.trigger=a;this.i=b;this.u=c},Z5=function(a){g.pN.call(this,a);
var b=this;this.J=!1;this.L=0;this.C=!1;this.l=new g.K(function(){var e=b.player.T(),f=b.getVideoData();if(Y5(b))if(APa(b)){var h;null!==(h=b.heartbeatParams)&&void 0!==h&&h.url&&(e=g.ti(b.heartbeatParams.url,{request_id:g.Vx()}),f.Fa&&(e=g.ti(e,{vvt:f.Fa}),f.mdxEnvironment&&(e=g.ti(e,{mdx_environment:f.mdxEnvironment}))),f.oauthToken&&(e=g.ti(e,{access_token:f.oauthToken})),BPa(b,f,e))}else CPa(b),DPa(b,e,f)},0);
this.i=this.heartbeatParams=null;this.B=!1;this.G=new g.Ye(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.ea=new g.vx(void 0);this.V=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new Q5).date.getTimezoneOffset();this.u=new g.iN(this);g.J(this,this.l);g.J(this,this.u);CPa(this);EPa(this);this.u.N(a,"heartbeatparams",this.Iv);this.u.N(a,"presentingplayerstatechange",this.DO);this.u.N(a,"videoplayerreset",this.EO);this.u.N(a,g.eA("heartbeat"),this.Ad);this.B&&this.i&&FPa(this,
this.i);var c=new g.bA(1E3,0x7ffffffffffff,{priority:0,namespace:"heartbeat"}),d=new g.bA(0x8000000000000,0x8000000000000,{id:"stream_end",priority:0,namespace:"heartbeat"});a.Gd([c,d])},CPa=function(a){var b=a.getVideoData();
if(b.Pj){b=new g.Wsa(b);var c=null;if(b.videoData.Aa){var d=g.Xsa(b);if(d){c={};var e={};d=d.split("&");d=g.r(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=GPa[Number(e.r1c)]);c.challenge=b.videoData.Aa}}a.attestationResponse=c||void 0}},APa=function(a){var b=a.getVideoData();
if(!g.rH(a.getVideoData())||b.wM)return!1;if(b.useInnertubeDrmService()&&b.G){a="playready"===b.G.flavor&&b.Y("html5_innertube_heartbeats_for_playready");var c="widevine"===b.G.flavor&&b.Y("html5_innertube_heartbeats_for_widevine");b=g.SE(b.G)&&b.Y("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},$5=function(a){if(APa(a))return!!a.heartbeatParams;
var b=a.player.T(),c=a.getVideoData();return g.T(b.experiments,"html5_heartbeat_wait_for_drm_killswitch")||!g.rH(a.getVideoData())||!c.useInnertubeDrmService()||c.Jg||c.TB?!!c.heartbeatToken:!1},a6=function(a,b){if(!a.l.isActive()&&a.J){var c=a.getVideoData();
if($5(a)||c.isLivePlayback){if(void 0===b)if(a.C){var d;b=a.B?7500:(null===(d=a.heartbeatParams)||void 0===d?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().nK||6E4}else b=1E3;a.l.start(b)}}},BPa=function(a,b,c){b.Ti&&(c=g.ti(c,{internalipoverride:b.Ti}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.rb&&(d.kpt=b.rb);c=g.ti(c,d);g.it(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.l.isActive()&&Y5(a)){a.G.reset();a.sequenceNumber++;e=e.responseText;var f=HPa(e);if(f){a.player.Ma("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(IPa))?"0"===h[1]?0:1:-1;JPa(a,f,e,h)}},
onError:function(e){Y5(a)&&b6(a,!0,"net-"+e.status)},
onTimeout:function(){Y5(a)&&b6(a,!0,"timeout")},
withCredentials:!0})},Y5=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.U(a.player.vb(a.getPlayerType()),4)?!1:$5(a)||b.isLivePlayback?!0:(c6(a),!1)},DPa=function(a,b,c){var d,e,f={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!==(d=a.X)&&void 0!==d?d:c.heartbeatServerData};a.V=a.attestationResponse;c.Pj&&(f.attestationResponse=a.V);var h=g.LM(c),l=null!==(e=h.client)&&void 0!==e?e:{};l.utcOffsetMinutes=a.utcOffsetMinutes;f.context=h;f.cpn=c.clientPlaybackNonce;if(h="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)l.timeZone=h;l={heartbeatChecks:[]};if(h=c.getPlayerResponse())c.heartbeatToken&&(f.heartbeatToken=c.heartbeatToken),
(h=h.playabilityStatus)&&(h=h.liveStreamability)&&h.liveStreamabilityRenderer&&l.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&l.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");g.$F(b)&&(l.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED"),h=KPa(a),null!==h&&(l.unpluggedParams={clientPlayerPositionUtcMillis:h}));f.heartbeatRequestParams=l;b.Y("enable_linear_player_handling")&&c.isLivePlayback&&(b=KPa(a),null!==b&&(f.playbackState||(f.playbackState={}),f.playbackState.playbackPosition=
{utcTimeMillis:b}));b={timeout:3E4,onSuccess:function(m){var n;if(!a.l.isActive()&&Y5(a)){var p=a.getVideoData(),q=p.Pj&&null==a.V;p.Pj=!(null===(n=m.heartbeatAttestationConfig)||void 0===n||!n.requiresAttestation)||q;n=m.playabilityStatus;p=JSON.stringify(n)||"{}";m.authenticationMismatch&&a.player.Ca("authshear","");q=-1;var t=m.playabilityStatus;t&&(a.player.Ma("onHeartbeat",t),"OK"===t.status?q=m.stopHeartbeat?2:0:"UNPLAYABLE"===t.status?q=1:"LIVE_STREAM_OFFLINE"===t.status&&(q=0));a.sequenceNumber&&
-1===q||a.G.reset();a.sequenceNumber++;m.heartbeatServerData&&(a.X=m.heartbeatServerData);JPa(a,n,p,q)}},
onError:function(m){Y5(a)&&b6(a,!0,"net-"+m.status)},
onTimeout:function(){Y5(a)&&b6(a,!0,"timeout")}};
c.df()&&(b.BH="Bearer "+c.df());g.hv(a.ea,"player/heartbeat",f,b)},JPa=function(a,b,c,d){-1===d?(b="decode "+g.de(g.Va(c),3),b6(a,!1,b)):2===d?(c6(a),a.C=!0):(a.L=0,a.l.stop(),1===d?(a.C=!1,a.player.Ef("heartbeat.stop",a.pe(c)),g.Sv("heartbeatActionPlayerHalted",LPa(b))):(a.C=!0,c=0,a.B&&b&&(c=FPa(a,b),a.player.Z("livestatedata",b)),c?a6(a,c):a6(a)))},FPa=function(a,b){var c,d,e=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,f=!(!e||!e.switchStreamsImmediately),h=MPa(e),l=a.getVideoData(),
m=a.player.vb(a.getPlayerType()),n=m.xc()&&!g.wH(l)&&!a.player.isAtLiveHead(a.getPlayerType());
if(g.kH(l)){var p=(null===(c=a.player.cd())||void 0===c?void 0:c.Gb())||{};p.status=b.status||"";p.dvr=""+ +n;p["switch"]=""+ +f;p.ended=""+ +!(!e||!e.displayEndscreen);a.player.Ca("heartbeat",g.kE(p))}if(n&&!f)return h;f=e&&e.streamTransitionEndpoint&&e.streamTransitionEndpoint.watchEndpoint;if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(e&&e.transitionTiming))a.getVideoData().rH=f;else{if(n=f)(n=f&&f.videoId)?(a.player.Jj(n,void 0,void 0,!0,!0,f),a.Fy("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",
b),n=!0):n=!1;if(n)return h}if("OK"===b.status.toUpperCase()){f=e&&e.broadcastId;n=a.i&&a.i.liveStreamability&&a.i.liveStreamability.liveStreamabilityRenderer&&a.i.liveStreamability.liveStreamabilityRenderer.broadcastId;p=f!==n&&(null!=f||a.player.Y("web_player_heartbeat_undefined_killswitch"));if(!l.hlsvp&&!l.Ya||p)return e={video_id:l.videoId},l.AD&&(e.is_live_destination="1"),a.player.Y("web_player_heartbeat_request_watch_next")||(e.disable_watch_next=!0,e.raw_watch_next_response=l.watchNextResponse),
e.autonav_state=l.autonavState,e.oauth_token=l.oauthToken,e.force_gvi=l.Qg,e.ji=l.ji,8===a.player.getPresentingPlayerType()&&a.player.Sn(8),m=void 0,l.hlsvp||l.Ya?p&&(m=new X5("broadcastIdChanged",n+","+f),a.Fy("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",b)):(f&&(m=new X5("formatsReceived",""+f)),a.Fy("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",b)),a.player.loadVideoByPlayerVars(e,void 0,void 0,
void 0,m),h;a.player.Cd("heartbeat",a.getPlayerType())}e&&e.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.G=!0,a.xb&&a.api.Es()):g.uK(m)&&(l=(null===(d=a.player.cd())||void 0===d?void 0:d.Gb())||{},a.player.Ca("hbse",g.kE(l),!0),a.player.Es(),a.player.Ma("onLiveMediaEnded",b)));return h},MPa=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},b6=function(a,b,c){if(!a.l.isActive()){a.l.stop();
a.L++;var d=a.getVideoData();if(d.yL||b&&!g.rH(a.getVideoData())&&!$5(a)&&d.isLivePlayback)var e=!1;else{var f;(null===(e=a.heartbeatParams)||void 0===e?0:e.bw)?f=a.heartbeatParams.bw:f=d.jL||5;e=a.L>=f}e?(b?(b="heartbeat.net",e={enforcedPolicyToHaltOnNetworkFailure:!0}):(b="heartbeat.servererror",e=LPa()),g.Sv("heartbeatActionPlayerHalted",e),(e=a.getVideoData())&&e.isLivePlayback?a.player.Ef(b,"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0440\u0432\u0430\u043d\u043e. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.",
c):a.player.Ef(b,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043e \u0438\u0437-\u0437\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0435\u0439.",c)):(a6(a,a.G.getValue()),g.Ze(a.G))}},LPa=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},c6=function(a){a.L=0;
a.l.stop();a.C=!1;a.sequenceNumber=0},EPa=function(a){var b,c=a.getVideoData(),d=a.player.T();
if(c.isLivePlayback)if(g.$E(d.B)){a.B=!0;a.J=!0;if(!g.OF(d)||g.$F(d))a.offlineSlate=new V5(a.player),g.J(a,a.offlineSlate),g.fN(a.player,a.offlineSlate.element,4);(c=c.getPlayerResponse())&&c.playabilityStatus&&(a.i=c.playabilityStatus);if("UNPLAYABLE"!==(null===(b=a.i)||void 0===b?void 0:b.status)||a.player.Y("stop_heartbeat_on_unplayable_live_videos_killswitch"))a.i?(c=MPa(a.i.liveStreamability&&a.i.liveStreamability.liveStreamabilityRenderer))?a6(a,c):a6(a,7500):a6(a,1E3)}else a.player.Ef("html5.unsupportedlive",
"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");else!g.T(d.experiments,"html5_release_post_live_heartbeat_killswitch")&&g.gb(c.V,"heartbeat")&&a.player.Cd("heartbeat",a.getPlayerType())},KPa=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},HPa=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},GPa=["ATTESTATION_ERROR_UNKNOWN",
"ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],d6={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),
SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),
SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
d6={ERAS:["\u0434\u043e \u043d. \u044d.","\u043d. \u044d."],ERANAMES:["\u0434\u043e \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043e\u0432\u0430","\u043e\u0442 \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043e\u0432\u0430"],NARROWMONTHS:"\u042f\u0424\u041c\u0410\u041c\u0418\u0418\u0410\u0421\u041e\u041d\u0414".split(""),STANDALONENARROWMONTHS:"\u042f\u0424\u041c\u0410\u041c\u0418\u0418\u0410\u0421\u041e\u041d\u0414".split(""),
MONTHS:"\u044f\u043d\u0432\u0430\u0440\u044f \u0444\u0435\u0432\u0440\u0430\u043b\u044f \u043c\u0430\u0440\u0442\u0430 \u0430\u043f\u0440\u0435\u043b\u044f \u043c\u0430\u044f \u0438\u044e\u043d\u044f \u0438\u044e\u043b\u044f \u0430\u0432\u0433\u0443\u0441\u0442\u0430 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u043d\u043e\u044f\u0431\u0440\u044f \u0434\u0435\u043a\u0430\u0431\u0440\u044f".split(" "),STANDALONEMONTHS:"\u044f\u043d\u0432\u0430\u0440\u044c \u0444\u0435\u0432\u0440\u0430\u043b\u044c \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0435\u043b\u044c \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u043e\u043a\u0442\u044f\u0431\u0440\u044c \u043d\u043e\u044f\u0431\u0440\u044c \u0434\u0435\u043a\u0430\u0431\u0440\u044c".split(" "),
SHORTMONTHS:"\u044f\u043d\u0432. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440. \u0430\u043f\u0440. \u043c\u0430\u044f \u0438\u044e\u043d. \u0438\u044e\u043b. \u0430\u0432\u0433. \u0441\u0435\u043d\u0442. \u043e\u043a\u0442. \u043d\u043e\u044f\u0431. \u0434\u0435\u043a.".split(" "),STANDALONESHORTMONTHS:"\u044f\u043d\u0432. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440\u0442 \u0430\u043f\u0440. \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433. \u0441\u0435\u043d\u0442. \u043e\u043a\u0442. \u043d\u043e\u044f\u0431. \u0434\u0435\u043a.".split(" "),
WEEKDAYS:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0433 \u043f\u044f\u0442\u043d\u0438\u0446\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),STANDALONEWEEKDAYS:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0433 \u043f\u044f\u0442\u043d\u0438\u0446\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),
SHORTWEEKDAYS:"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),STANDALONESHORTWEEKDAYS:"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),NARROWWEEKDAYS:"\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),STANDALONENARROWWEEKDAYS:"\u0412\u041f\u0412\u0421\u0427\u041f\u0421".split(""),SHORTQUARTERS:["1-\u0439 \u043a\u0432.","2-\u0439 \u043a\u0432.",
"3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],QUARTERS:["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, d MMMM y '\u0433'.","d MMMM y '\u0433'.","d MMM y '\u0433'.","dd.MM.y"],TIMEFORMATS:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],DATETIMEFORMATS:["{1}, {0}","{1}, {0}","{1}, {0}","{1}, {0}"],
FIRSTDAYOFWEEK:0,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:3};g.k=Q5.prototype;g.k.zI=d6.FIRSTDAYOFWEEK;g.k.AI=d6.FIRSTWEEKCUTOFFDAY;g.k.clone=function(){var a=new Q5(this.date);a.zI=this.zI;a.AI=this.AI;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.add=function(a){if(a.l||a.i){var b=this.getMonth()+a.i+12*a.l,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),P5(this,a.getDate()))};
g.k.toString=function(){return[this.getFullYear(),qPa(this.getMonth()+1),qPa(this.getDate())].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};g.w(R5,g.aO);R5.prototype.hide=function(){this.i&&this.i.removeAttribute("aria-haspopup");g.aO.prototype.hide.call(this)};
R5.prototype.show=function(){this.i&&this.i.setAttribute("aria-haspopup","true");g.aO.prototype.show.call(this)};
R5.prototype.va=function(){g.hf(this.u);g.aO.prototype.va.call(this)};g.w(S5,g.V);
S5.prototype.G=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.u(a.toggledServiceEndpoint):this.u(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;T5(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.i&&this.i.xb)this.i.Bb();else{var b=xPa(this);b&&this.u(b.serviceEndpoint||b.command);b=g.r(b&&b.command&&b.command.commandExecutorCommand&&b.command.commandExecutorCommand.commands||[]);for(var c=b.next();!c.done;c=b.next())if((c=c.value)&&c.openPopupAction&&
c.openPopupAction.popup&&c.openPopupAction.popup.menuPopupRenderer){a=c.openPopupAction.popup.menuPopupRenderer;break}this.i||(this.i=new R5(this.I,this.C),this.i.Ba(this.element),g.J(this,this.i),this.i.subscribe("reminderMenuItemClicked",this.u,this));b=this.i;b.menuPopupRenderer=a;vPa(b)}};
S5.prototype.u=function(a){if(a&&(a.addUpcomingEventReminderEndpoint||a.removeUpcomingEventReminderEndpoint)){if(a.addUpcomingEventReminderEndpoint){var b=a.addUpcomingEventReminderEndpoint;var c="notification/add_upcoming_event_reminder"}else a.removeUpcomingEventReminderEndpoint&&(b=a.removeUpcomingEventReminderEndpoint,c="notification/remove_upcoming_event_reminder");if(c&&b&&b.params)for(zPa(this,c,b.params),a=g.r(b.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&b.updateUpcomingEventReminderButtonStateCommand){this.l=
b.updateUpcomingEventReminderButtonStateCommand.state;T5(this);break}}};g.w(V5,g.V);g.k=V5.prototype;g.k.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Na=function(a){var b,c,d=null===(c=null===(b=null===a||void 0===a?void 0:a.liveStreamability)||void 0===b?void 0:b.liveStreamabilityRenderer)||void 0===c?void 0:c.offlineSlate;if(d){this.l=a;d=d.liveStreamOfflineSlateRenderer;d.canShowCountdown?this.BM():W5(this,d);var e,f,h,l,m=null===(l=null===(h=null===(f=null===(e=null===a||void 0===a?void 0:a.liveStreamability)||void 0===e?void 0:e.liveStreamabilityRenderer)||void 0===f?void 0:f.offlineSlate)||void 0===h?void 0:h.liveStreamOfflineSlateRenderer)||
void 0===l?void 0:l.thumbnail;if(m){e=0;f=null;m=m.thumbnails;for(h=0;h<m.length;h++)m[h].width>e&&(e=m[h].width||0,f=m[h].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";d.actionButtons||d.reminderButton?(this.i||(this.i=new S5(this.api),this.i.Ba(this.Da("ytp-offline-slate-buttons")),g.J(this,this.i)),wPa(this.i,d.actionButtons&&d.actionButtons[0],d.reminderButton)):this.i&&wPa(this.i,null,null);this.l=a}else this.l=null;this.FM()};
g.k.FM=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.vb(),d=this.getVideoData();b=d.isLivePlayback&&(g.uK(c)||g.U(c,2)||g.U(c,64));var e=2===d.autonavState&&g.U(c,2);c=c.xc()&&!g.wH(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}if(b&&this.l)if(this.xb){if(null===a||void 0===a?0:g.BI(a,2))g.Nq(this.element,"ytp-offline-slate-collapsed"),this.B.stop(),g.Nq(this.u,"ytp-offline-slate-bar-fade"),this.C.start()}else a=8===this.api.getPresentingPlayerType()&&!this.getVideoData().ck,
b=8===this.api.getPresentingPlayerType(),g.N(this.element,"ytp-offline-slate-premiere-trailer",a),g.N(this.element,"ytp-offline-slate-hide-background",b),this.show(),this.B.start(),this.api.Z("offlineslatestatechange"),this.G&&this.api.Es();else this.xb&&(this.hide(),this.api.Z("offlineslatestatechange"))};
g.k.BM=function(){var a,b,c,d,e=null===(d=null===(c=null===(b=null===(a=this.l)||void 0===a?void 0:a.liveStreamability)||void 0===b?void 0:b.liveStreamabilityRenderer)||void 0===c?void 0:c.offlineSlate)||void 0===d?void 0:d.liveStreamOfflineSlateRenderer;if(e){var f=Math.floor(g.Pa()/1E3),h=e.canShowCountdown&&Number(e.scheduledStartTime);!h||h<=f?(W5(this,e),this.countdownTimer.stop()):(f=g.eM(h-f),W5(this,e,f),g.Fq(this.countdownTimer))}};
g.k.va=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.V.prototype.va.call(this)};X5.prototype.l=function(a){return this.trigger&&a.trigger?this.trigger===a.trigger&&this.i===a.i:!1};
X5.prototype.isExpired=function(){return 6E4<(0,g.P)()-this.u};
X5.prototype.toString=function(){return"heartbeat:"+this.trigger+":"+this.i};g.w(Z5,g.pN);g.k=Z5.prototype;g.k.va=function(){c6(this);this.player.Ve("heartbeat");g.pN.prototype.va.call(this)};
g.k.Ad=function(){this.J=!0;a6(this,2E3)};
g.k.Iv=function(a){this.heartbeatParams=a;a6(this,2E3)};
g.k.DO=function(a){var b;8===this.player.getPresentingPlayerType()||"UNPLAYABLE"===(null===(b=this.i)||void 0===b?void 0:b.status)&&!this.player.Y("stop_heartbeat_on_unplayable_live_videos_killswitch")||(g.U(a.state,2)||g.U(a.state,64)?(c6(this),this.B&&(this.J=!0,a6(this,1E3))):(g.U(a.state,1)||g.U(a.state,8))&&a6(this,2E3))};
g.k.EO=function(){3!==this.player.getPresentingPlayerType()&&a6(this,2E3)};
g.k.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.Ji=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.Fy=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.Sv("heartbeatActionPlayerTransitioned",a)};
g.k.pe=function(a){var b="LICENSE",c=HPa(a);if(c)return c.reason||g.VN[b]||"";(a=a.match(IPa))&&(a=Number(a[1]))&&(b=g.Bpa(a));return g.VN[b]||""};
g.k.bv=function(){return!!this.offlineSlate&&this.offlineSlate.xb};
var IPa=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.AN.heartbeat=Z5;})(_yt_player);