var et=Object.defineProperty,tt=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var Ce=(n,e,t)=>e in n?et(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,he=(n,e)=>{for(var t in e||(e={}))Re.call(e,t)&&Ce(n,t,e[t]);if(fe)for(var t of fe(e))ze.call(e,t)&&Ce(n,t,e[t]);return n},we=(n,e)=>tt(n,nt(e));var ke=(n,e)=>{var t={};for(var i in n)Re.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&fe)for(var i of fe(n))e.indexOf(i)<0&&ze.call(n,i)&&(t[i]=n[i]);return t};import{S as Z,i as J,s as K,e as p,t as F,a as O,b as M,c as u,d as G,f as L,g as w,n as U,l as N,h as v,j as it,r as ue,k as ot,m as ie,w as me,o as lt,p as ye,q as Se,N as Me,U as rt,u as st,v as Le,D as Ie,E as at,x as _e,y as Ke,z as j,A as be,B as ct,G as ut,L as q,C as Qe,F as Ee,H as ge,I as z,J as X,K as x,M as E,O as ee,P as te,Q as ne,R as ft,T as dt,V as le,W as pt,X as mt,Y as Ne,Z as _t,_ as bt,$ as se,a0 as gt,a1 as ht,a2 as wt}from"./vendor.2488a5cb.js";const kt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}};kt();function Ue(n){let e,t,i;return{c(){e=p("ion-item"),t=p("ion-label"),i=F(n[1]),O(t,"color","red")},m(o,l){M(o,e,l),u(e,t),u(t,i)},p(o,l){l&2&&G(i,o[1])},d(o){o&&L(e)}}}function Fe(n){let e,t;return{c(){e=p("ion-item"),t=p("ion-input"),w(t,"placeholder","Full Name"),w(t,"type","text"),w(t,"required","")},m(i,o){M(i,e,o),u(e,t),n[8](t)},p:U,d(i){i&&L(e),n[8](null)}}}function $e(n){let e,t,i,o;return{c(){e=p("ion-item"),t=p("ion-input"),w(t,"placeholder","confirm password"),w(t,"type","password"),w(t,"required","")},m(l,r){M(l,e,r),u(e,t),n[11](t),i||(o=N(t,"keypress",n[7]),i=!0)},p:U,d(l){l&&L(e),n[11](null),i=!1,o()}}}function yt(n){let e,t,i,o=n[0]?"Sign up":"Login",l,r,s,c,a,_,g,h,b,m,k,d,f,S,I,y=n[0]?"Sign up":"Login",R,T,D,A=n[0]?"Login instead":"Sign up instead",$,C,Y,P=n[1]!==""&&Ue(n),W=n[0]&&Fe(n),B=n[0]&&$e(n);return{c(){e=p("ion-header"),t=p("ion-toolbar"),i=p("ion-title"),l=F(o),r=v(),s=p("ion-icon"),c=v(),a=p("ion-list"),P&&P.c(),_=v(),W&&W.c(),g=v(),h=p("ion-item"),b=p("ion-input"),m=v(),k=p("ion-item"),d=p("ion-input"),f=v(),B&&B.c(),S=v(),I=p("ion-button"),R=F(y),T=v(),D=p("ion-button"),$=F(A),w(e,"translucent",""),O(s,"position","fixed"),O(s,"left","calc(50% - 64px)"),O(s,"margin-right","auto"),O(s,"top","15%"),O(s,"font-size","128px"),O(s,"color","lightgray"),w(s,"name","bicycle"),w(b,"placeholder","email"),w(b,"type","text"),w(b,"required",""),w(b,"autofocus",""),w(d,"placeholder","password"),w(d,"type","password"),w(d,"required",""),w(I,"expand","block"),w(a,"lines","full")},m(H,V){M(H,e,V),u(e,t),u(t,i),u(i,l),M(H,r,V),M(H,s,V),M(H,c,V),M(H,a,V),P&&P.m(a,null),u(a,_),W&&W.m(a,null),u(a,g),u(a,h),u(h,b),n[9](b),u(a,m),u(a,k),u(k,d),n[10](d),u(a,f),B&&B.m(a,null),u(a,S),u(a,I),u(I,R),M(H,T,V),M(H,D,V),u(D,$),b.focus(),C||(Y=[N(d,"keypress",function(){it(n[0]?void 0:n[7])&&(n[0]?void 0:n[7]).apply(this,arguments)}),N(I,"click",n[6]),N(D,"click",n[12])],C=!0)},p(H,[V]){n=H,V&1&&o!==(o=n[0]?"Sign up":"Login")&&G(l,o),n[1]!==""?P?P.p(n,V):(P=Ue(n),P.c(),P.m(a,_)):P&&(P.d(1),P=null),n[0]?W?W.p(n,V):(W=Fe(n),W.c(),W.m(a,g)):W&&(W.d(1),W=null),n[0]?B?B.p(n,V):(B=$e(n),B.c(),B.m(a,S)):B&&(B.d(1),B=null),V&1&&y!==(y=n[0]?"Sign up":"Login")&&G(R,y),V&1&&A!==(A=n[0]?"Login instead":"Sign up instead")&&G($,A)},i:U,o:U,d(H){H&&L(e),H&&L(r),H&&L(s),H&&L(c),H&&L(a),P&&P.d(),W&&W.d(),n[9](null),n[10](null),B&&B.d(),H&&L(T),H&&L(D),C=!1,ue(Y)}}}function Tt(n,e,t){const i=ot();function o(){!c||!a||l&&!_||i("submit",{name:s?s.value:void 0,email:c.value,password:a.value,confirmPassword:_?_.value:void 0,signup:l})}let{signup:l=!1}=e,{errorNote:r=""}=e,s,c,a,_;function g(f){f.key==="Enter"&&o()}function h(f){ie[f?"unshift":"push"](()=>{s=f,t(2,s)})}function b(f){ie[f?"unshift":"push"](()=>{c=f,t(3,c)})}function m(f){ie[f?"unshift":"push"](()=>{a=f,t(4,a)})}function k(f){ie[f?"unshift":"push"](()=>{_=f,t(5,_)})}const d=()=>t(0,l=!l);return n.$$set=f=>{"signup"in f&&t(0,l=f.signup),"errorNote"in f&&t(1,r=f.errorNote)},[l,r,s,c,a,_,o,g,h,b,m,k,d]}class vt extends Z{constructor(e){super();J(this,e,Tt,yt,K,{signup:0,errorNote:1})}}const St=(n,e)=>{const t=localStorage.getItem(n),i=me(t?JSON.parse(t):e);return i.subscribe(o=>localStorage.setItem(n,o?JSON.stringify(o):"")),i},de=me(!1),Q=me(null),Te=me(null),pe=St("currentTrip",null),Mt=n=>{pe.update(e=>e?(e.geopoints=[...e.geopoints,{timestamp:new Date().toISOString(),location:n}],e):null)},ve=n=>{if(!n.length)return 0;let e=0;for(let t=1;t<n.length-1;++t)e+=lt(n[t-1].location,n[t].location);return e},Lt=n=>{let e=n.geopoints.map(t=>({latitude:t.location.latitude,longitude:t.location.longitude})).reduce((t,i)=>({latitude:t.latitude+i.latitude,longitude:i.longitude+t.longitude}));return e.latitude/=n.geopoints.length,e.longitude/=n.geopoints.length,e},It={toFirestore:n=>({name:n.name,email:n.email,credits:n.credits,redeemedRewards:n.redeemedRewards}),fromFirestore:(n,e)=>{const t=n.data(e);return{name:t.name,email:t.email,credits:t.credits,redeemedRewards:t.redeemedRewards}}},De={toFirestore:n=>({id:n.id,userEmail:n.userEmail,startTime:ye.fromDate(n.startTime),endTime:n.endTime?ye.fromDate(n.endTime):null,transportType:n.transportType,distance:n.distance,geopoints:n.geopoints}),fromFirestore:(n,e)=>{const t=n.data(e);return{id:t.id,userEmail:t.userEmail,startTime:t.startTime.toDate(),endTime:t.endTime?t.endTime.toDate():null,transportType:t.transportType,distance:t.distance,geopoints:t.geopoints}}},je={toFirestore:n=>({id:n.id,name:n.name,description:n.description,price:n.price,provider:n.provider,expiration:n.expiration?ye.fromDate(n.expiration):null,remainingUnits:n.remainingUnits}),fromFirestore:(n,e)=>{const t=n.data(e);return{id:t.id,name:t.name,description:t.description,price:t.price,provider:t.provider,expiration:t.expiration?t.expiration.toDate():null,remainingUnits:t.remainingUnits}}},re=()=>rt(),Xe=n=>Me(re(),"users",n).withConverter(It),Dt=n=>Me(re(),"trips",n.id).withConverter(De),Ct=n=>Me(re(),"rewards",n.id).withConverter(je),Rt=async n=>{const o=n,{redeemedRewards:e}=o,t=ke(o,["redeemedRewards"]),i=we(he({},t),{redeemedRewards:e.map(l=>l.id)});await Se(Xe(n.email),i)},zt=async n=>{await Se(Dt(n),n)},Et=async n=>{await Se(Ct(n),n)},Nt=async n=>{const e=await st(Xe(n));if(!e.exists())return null;const t=e.data(),s=t,{redeemedRewards:i}=s,o=ke(s,["redeemedRewards"]),l=await Ut(t.email),r=(await xe()).filter(c=>(i||[]).includes(c.id));return we(he({},o),{trips:l,redeemedRewards:r})},Ut=async n=>{const e=[];return(await Le(Ie(re(),"trips").withConverter(De))).forEach(i=>i.exists()&&e.push(i.data())),e.filter(i=>i.userEmail===n)},Ft=async n=>{(await Le(Ie(re(),"trips").withConverter(De))).forEach(t=>{t.exists()&&t.data().id===n&&at(t.ref)})},xe=async()=>{const n=[];return(await Le(Ie(re(),"rewards").withConverter(je))).forEach(t=>t.exists()&&n.push(t.data())),n};var oe={fetchUser:Nt,fetchAllRewards:xe,updateUser:Rt,updateTrip:zt,updateReward:Et,deleteTrip:Ft};function ae(n){switch(n){case"bicycle":return"bicycle";case"publicTransport":return"bus";case"walk":default:return"walk"}}function Pe(n){switch(n){case"bicycle":return"bike trip";case"publicTransport":return"bus trip";case"walk":default:return"walk"}}const{window:$t}=ct;function He(n,e,t){const i=n.slice();return i[18]=e[t],i}function Pt(n){let e,t,i,o,l=n[6],r=[];for(let s=0;s<l.length;s+=1)r[s]=Oe(He(n,l,s));return{c(){e=p("ion-fab"),t=p("ion-fab-button"),t.innerHTML='<ion-icon name="add"></ion-icon>',i=v(),o=p("ion-fab-list");for(let s=0;s<r.length;s+=1)r[s].c();w(o,"side","top"),w(e,"horizontal","center"),w(e,"vertical","bottom"),w(e,"slot","fixed")},m(s,c){M(s,e,c),u(e,t),u(e,i),u(e,o);for(let a=0;a<r.length;a+=1)r[a].m(o,null)},p(s,c){if(c&80){l=s[6];let a;for(a=0;a<l.length;a+=1){const _=He(s,l,a);r[a]?r[a].p(_,c):(r[a]=Oe(_),r[a].c(),r[a].m(o,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=l.length}},d(s){s&&L(e),Qe(r,s)}}}function Ht(n){let e,t,i;return{c(){e=p("ion-fab"),e.innerHTML='<ion-fab-button><ion-icon name="close"></ion-icon></ion-fab-button>',w(e,"horizontal","center"),w(e,"vertical","bottom"),w(e,"slot","fixed")},m(o,l){M(o,e,l),t||(i=N(e,"click",n[3]),t=!0)},p:U,d(o){o&&L(e),t=!1,i()}}}function Oe(n){let e,t,i,o,l,r;function s(){return n[7](n[18])}return{c(){e=p("ion-fab-button"),t=p("ion-icon"),o=v(),w(t,"name",i=ae(n[18]))},m(c,a){M(c,e,a),u(e,t),u(e,o),l||(r=N(e,"click",s),l=!0)},p(c,a){n=c},d(c){c&&L(e),l=!1,r()}}}function Ot(n){let e,t,i,o,l,r,s;function c(g,h){return g[0]?Ht:Pt}let a=c(n),_=a(n);return{c(){e=p("ion-content"),t=p("ion-fab"),t.innerHTML='<ion-fab-button><ion-icon name="locate"></ion-icon></ion-fab-button>',i=v(),_.c(),o=v(),l=p("div"),w(t,"horizontal","end"),w(t,"vertical","top"),w(t,"slot","fixed"),_e(l,"class","map svelte-vsoji2"),O(l,"height","100%"),O(l,"width","100%")},m(g,h){M(g,e,h),u(e,t),u(e,i),_.m(e,null),u(e,o),u(e,l),r||(s=[N($t,"resize",n[2]),N(t,"click",n[5]),Ke(n[1].call(null,l))],r=!0)},p(g,[h]){a===(a=c(g))&&_?_.p(g,h):(_.d(1),_=a(g),_&&(_.c(),_.m(e,o)))},i:U,o:U,d(g){g&&L(e),_.d(),r=!1,ue(s)}}}function At(n,e,t){let i,o;j(n,pe,y=>t(0,i=y)),j(n,Q,y=>t(14,o=y));let l=null,r=null,s=null,c=null;const a=async()=>{const y=await ut.getCurrentPosition();return{lat:y.coords.latitude,lng:y.coords.longitude}},_=y=>(l=q.map(y,{preferCanvas:!0}),q.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xA9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:20,minZoom:1,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoicmVkNWg0ZDB3IiwiYSI6ImNrems4bzhzMzRrcG4yeHByYTgwN2draHcifQ.356a0A2cfoy3zrhq-IW_rA"}).addTo(l),q.control.scale().addTo(l),l.setView([45.504755,-73.612572],14),{destroy:()=>{l==null||l.remove(),l=null}}),g=()=>l==null?void 0:l.invalidateSize(),h=async y=>{!l||(s==null||s.removeFrom(l),r==null||r.removeFrom(l),c=q.circleMarker(y,{color:"red",weight:2,opacity:.7}),s=q.circleMarker(y,{color:"red",weight:2,opacity:.7}),r=q.polyline([y],{color:"red",weight:3,opacity:.5,smoothFactor:1}),c.addTo(l),s.addTo(l),r.addTo(l))},b=()=>{if(!l||!(i==null?void 0:i.geopoints.length))return;const y=i.geopoints.sort((R,T)=>R.timestamp<T.timestamp?-1:1).map(R=>[R.location.latitude,R.location.longitude]);s=q.circleMarker(y[0],{color:"red",weight:2,opacity:.7}),c=q.circleMarker(y[y.length-1],{color:"red",weight:2,opacity:.7}),r=q.polyline(y,{color:"red",weight:3,opacity:.5,smoothFactor:1}),s.addTo(l),c.addTo(l),r.addTo(l)};let m=null;const k=()=>{if(m&&(clearInterval(m),m=null),!i)return;const y=ve(i.geopoints),R={id:i.id,userEmail:i.userEmail,transportType:i.transportType,startTime:new Date(i.startTime),endTime:new Date,distance:y,geopoints:i.geopoints.map(({location:T,timestamp:D})=>({location:T,timestamp:D}))};oe.updateTrip(R),pe.set(null),l&&(r==null||r.removeFrom(l),s==null||s.removeFrom(l),c==null||c.removeFrom(l)),Q.update(T=>T?(T.credits+=Math.floor(.28*y/1e3),T.trips=[...T.trips,R],T):null)},d=async y=>{pe.set({id:Date.now().toString(),userEmail:o.email,startTime:new Date().toISOString(),transportType:y,geopoints:[]});const R=await a();h(R),m=window.setInterval(async()=>{if(!i)return;const T=await a();Mt({latitude:T.lat,longitude:T.lng}),c==null||c.setLatLng(await a()),i.geopoints.length==0?h(T):r==null||r.addLatLng(T)},3e3)},f=async()=>{const y=await a();l==null||l.setView(y),g()};return be(()=>{setTimeout(async()=>{const y=Date.now(),R=await a();l==null||l.setView(R),(i==null?void 0:i.geopoints.length)&&b(),g(),console.log("Done loading!",Date.now()-y,"ms")},300)}),[i,_,g,k,d,f,["publicTransport","walk","bicycle"],y=>d(y)]}class qt extends Z{constructor(e){super();J(this,e,At,Ot,K,{})}}function Wt(n){let e,t,i,o=n[0].name+"",l,r,s,c=n[0].description+"",a,_,g,h,b=n[0].price+"",m,k,d,f,S,I,y=n[0].expiration?`Expires on ${n[0].expiration.toDateString()}`:"",R,T,D,A;return{c(){e=p("ion-card"),t=p("ion-card-header"),i=p("ion-card-title"),l=F(o),r=v(),s=p("ion-card-subtitle"),a=F(c),_=v(),g=p("ion-card-content"),h=F("Cost: "),m=F(b),k=v(),d=p("ion-icon"),f=v(),S=p("br"),I=v(),R=F(y),w(s,"class","sub svelte-aab9bb"),O(d,"color","green"),O(d,"font-size","16px"),O(d,"padding-left","3px"),w(d,"name","leaf-outline"),w(g,"class","content svelte-aab9bb"),w(e,"class",T=Ee(n[1]?"redeemed":"notRedeemed")+" svelte-aab9bb")},m($,C){M($,e,C),u(e,t),u(t,i),u(i,l),u(t,r),u(t,s),u(s,a),u(e,_),u(e,g),u(g,h),u(g,m),u(g,k),u(g,d),u(g,f),u(g,S),u(g,I),u(g,R),D||(A=N(e,"click",n[3]),D=!0)},p($,[C]){C&1&&o!==(o=$[0].name+"")&&G(l,o),C&1&&c!==(c=$[0].description+"")&&G(a,c),C&1&&b!==(b=$[0].price+"")&&G(m,b),C&1&&y!==(y=$[0].expiration?`Expires on ${$[0].expiration.toDateString()}`:"")&&G(R,y),C&2&&T!==(T=Ee($[1]?"redeemed":"notRedeemed")+" svelte-aab9bb")&&w(e,"class",T)},i:U,o:U,d($){$&&L(e),D=!1,A()}}}function Bt(n,e,t){let i;j(n,Q,a=>t(4,i=a));let{reward:o}=e,l=(i==null?void 0:i.redeemedRewards.findIndex(a=>a.id===o.id))!==-1;function r(){!i||s()||!o.remainingUnits||i.credits<o.price||(Q.update(a=>a&&(t(1,l=!0),a.credits-=o.price,a.redeemedRewards=[...a.redeemedRewards,o],a)),t(0,o.remainingUnits--,o))}function s(){return(i==null?void 0:i.redeemedRewards.findIndex(a=>a.id===o.id))!==-1}const c=()=>r();return n.$$set=a=>{"reward"in a&&t(0,o=a.reward)},[o,l,r,c]}class Vt extends Z{constructor(e){super();J(this,e,Bt,Wt,K,{reward:0})}}function Ae(n,e,t){const i=n.slice();return i[2]=e[t],i}function qe(n){let e,t,i=n[1],o=[];for(let r=0;r<i.length;r+=1)o[r]=We(Ae(n,i,r));const l=r=>E(o[r],1,1,()=>{o[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=ge()},m(r,s){for(let c=0;c<o.length;c+=1)o[c].m(r,s);M(r,e,s),t=!0},p(r,s){if(s&2){i=r[1];let c;for(c=0;c<i.length;c+=1){const a=Ae(r,i,c);o[c]?(o[c].p(a,s),z(o[c],1)):(o[c]=We(a),o[c].c(),z(o[c],1),o[c].m(e.parentNode,e))}for(te(),c=i.length;c<o.length;c+=1)l(c);ne()}},i(r){if(!t){for(let s=0;s<i.length;s+=1)z(o[s]);t=!0}},o(r){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)E(o[s]);t=!1},d(r){Qe(o,r),r&&L(e)}}}function We(n){let e,t;return e=new Vt({props:{reward:n[2]}}),{c(){X(e.$$.fragment)},m(i,o){x(e,i,o),t=!0},p(i,o){const l={};o&2&&(l.reward=i[2]),e.$set(l)},i(i){t||(z(e.$$.fragment,i),t=!0)},o(i){E(e.$$.fragment,i),t=!1},d(i){ee(e,i)}}}function Gt(n){var k;let e,t,i,o,l,r,s,c=((k=n[0])==null?void 0:k.credits)+"",a,_,g,h,b,m=n[1]&&qe(n);return{c(){e=p("ion-header"),e.innerHTML="<ion-toolbar><ion-title>Rewards</ion-title></ion-toolbar>",t=v(),i=p("ion-content"),o=p("ion-list"),l=p("ion-list-header"),r=p("h2"),s=F("You have "),a=F(c),_=v(),g=p("ion-icon"),h=v(),m&&m.c(),w(e,"translucent",""),O(g,"color","green"),O(g,"font-size","32px"),O(g,"padding-left","3px"),w(g,"name","leaf-outline")},m(d,f){M(d,e,f),M(d,t,f),M(d,i,f),u(i,o),u(o,l),u(l,r),u(r,s),u(r,a),u(l,_),u(l,g),u(o,h),m&&m.m(o,null),b=!0},p(d,[f]){var S;(!b||f&1)&&c!==(c=((S=d[0])==null?void 0:S.credits)+"")&&G(a,c),d[1]?m?(m.p(d,f),f&2&&z(m,1)):(m=qe(d),m.c(),z(m,1),m.m(o,null)):m&&(te(),E(m,1,1,()=>{m=null}),ne())},i(d){b||(z(m),b=!0)},o(d){E(m),b=!1},d(d){d&&L(e),d&&L(t),d&&L(i),m&&m.d()}}}function Yt(n,e,t){let i,o;return j(n,Q,l=>t(0,i=l)),j(n,Te,l=>t(1,o=l)),[i,o]}class Zt extends Z{constructor(e){super();J(this,e,Yt,Gt,K,{})}}function Jt(n){let e,t,i,o,l,r,s,c;return{c(){e=p("ion-list"),t=p("ion-item"),t.innerHTML=`Logout
        <ion-icon name="log-out-outline" slot="end"></ion-icon>`,i=v(),o=p("ion-item"),o.innerHTML=`About Pricycle
        <ion-icon name="information-circle-outline" slot="end"></ion-icon>`,l=v(),r=p("ion-item"),r.innerHTML=`GitHub Repo
        <ion-icon name="logo-github" slot="end"></ion-icon>`,w(t,"button",""),w(o,"button",""),w(r,"lines","none"),w(r,"button",""),w(e,"lines","n")},m(a,_){M(a,e,_),u(e,t),u(e,i),u(e,o),u(e,l),u(e,r),s||(c=[N(t,"click",n[1]),N(o,"click",n[2]),N(r,"click",n[3])],s=!0)},p:U,i:U,o:U,d(a){a&&L(e),s=!1,ue(c)}}}function Kt(n){let e=document.querySelector("ion-popover");const t=r=>{e==null||e.dismiss(r)};return[t,()=>{t("logout")},()=>{t("about")},()=>{t("github")}]}class Qt extends Z{constructor(e){super();J(this,e,Kt,Jt,K,{})}}const jt=function(n){return document.createElement(n).constructor!==HTMLElement},Xt=(n,e)=>{jt(n)||dt(n,e,[])},xt=(n,e,t,i)=>(Xt(e,t),ft.create({component:e,event:n,componentProps:i}).then(o=>(o.present(),o.onWillDismiss()))),en=()=>!!le().currentUser,tn=()=>{var n;return((n=le().currentUser)==null?void 0:n.email)||null},nn=async(n,e)=>{try{return await pt(le(),n,e),!0}catch(t){return console.log("Failed to login"),console.log(t),!1}},on=()=>le().signOut(),ln=async(n,e,t)=>{try{return await mt(le(),e,t),await oe.updateUser({email:e,name:n,credits:100,redeemedRewards:[],trips:[]}),!0}catch(i){return console.log("Failed to sign up"),console.log(i),!1}};var ce={logout:on,login:nn,getCurrentUser:tn,isLoggedIn:en,signUp:ln};function Be(n){let e;return{c(){e=p("div"),e.innerHTML="<div>Loading...</div>",_e(e,"class","loading svelte-1okuqfg")},m(t,i){M(t,e,i)},d(t){t&&L(e)}}}function rn(n){let e,t,i,o,l=!n[0]&&Be();return{c(){l&&l.c(),e=v(),t=p("div"),_e(t,"class","map svelte-1okuqfg")},m(r,s){l&&l.m(r,s),M(r,e,s),M(r,t,s),i||(o=[N(window,"resize",n[2]),Ke(n[1].call(null,t))],i=!0)},p(r,[s]){r[0]?l&&(l.d(1),l=null):l||(l=Be(),l.c(),l.m(e.parentNode,e))},i:U,o:U,d(r){l&&l.d(r),r&&L(e),r&&L(t),i=!1,ue(o)}}}function sn(n,e,t){let{trip:i}=e,o=null,l=null,r=null,s=null,c=!1;const a=h=>(o=q.map(h,{preferCanvas:!0}),q.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xA9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:20,minZoom:1,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoicmVkNWg0ZDB3IiwiYSI6ImNrems4bzhzMzRrcG4yeHByYTgwN2draHcifQ.356a0A2cfoy3zrhq-IW_rA"}).addTo(o),q.control.scale().addTo(o),o.setView([45.504755,-73.612572],14),{destroy:()=>{o==null||o.remove(),o=null}}),_=()=>o==null?void 0:o.invalidateSize(),g=()=>{if(!o)return;const h=i.geopoints.sort((b,m)=>b.timestamp<m.timestamp?-1:1).map(b=>[b.location.latitude,b.location.longitude]);r=q.circleMarker(h[0],{color:"red",weight:2,opacity:.7}),s=q.circleMarker(h[h.length-1],{color:"red",weight:2,opacity:.7}),l=q.polyline(h,{color:"red",weight:3,opacity:.5,smoothFactor:1}),r.addTo(o),s.addTo(o),l.addTo(o)};return be(()=>{setTimeout(()=>{const h=Lt(i);o==null||o.setView([h.latitude,h.longitude]),g(),_(),t(0,c=!0)},300)}),n.$$set=h=>{"trip"in h&&t(3,i=h.trip)},[c,a,_,i]}class an extends Z{constructor(e){super();J(this,e,sn,rn,K,{trip:3})}}function Ve(n){let e,t,i,o,l,r,s,c,a=" ",_,g,h=Pe(n[0].transportType)+"",b,m,k,d,f,S,I=n[0].startTime.toDateString()+"",y,R,T,D,A,$;return T=new an({props:{trip:n[0]}}),{c(){e=p("ion-header"),t=p("ion-toolbar"),i=p("ion-buttons"),o=p("ion-button"),o.innerHTML='<ion-icon slot="icon-only" ios="arrow-back-outline" md="arrow-back-outline"></ion-icon>',l=v(),r=p("ion-title"),s=F(n[7]),c=v(),_=F(a),g=v(),b=F(h),m=v(),k=p("ion-subtitle"),d=p("ion-icon"),S=v(),y=F(I),R=v(),X(T.$$.fragment),w(i,"slot","start"),O(r,"padding-inline","0"),w(d,"name",f=ae(n[0].transportType))},m(C,Y){M(C,e,Y),u(e,t),u(t,i),u(i,o),u(t,l),u(t,r),u(r,s),u(r,c),u(r,_),u(r,g),u(r,b),u(t,m),u(t,k),u(k,d),u(k,S),u(k,y),M(C,R,Y),x(T,C,Y),D=!0,A||($=N(o,"click",n[6]),A=!0)},p(C,Y){(!D||Y&1)&&h!==(h=Pe(C[0].transportType)+"")&&G(b,h),(!D||Y&1&&f!==(f=ae(C[0].transportType)))&&w(d,"name",f),(!D||Y&1)&&I!==(I=C[0].startTime.toDateString()+"")&&G(y,I);const P={};Y&1&&(P.trip=C[0]),T.$set(P)},i(C){D||(z(T.$$.fragment,C),D=!0)},o(C){E(T.$$.fragment,C),D=!1},d(C){C&&L(e),C&&L(R),ee(T,C),A=!1,$()}}}function cn(n){let e,t,i,o,l,r=ve(n[0].geopoints).toLocaleString(void 0,{maximumFractionDigits:0})+" m",s,c,a,_,g,h,b,m,k,d,f=n[3]&&Ve(n);return{c(){e=p("ion-item"),t=p("ion-icon"),o=v(),l=p("ion-label"),s=F(r),c=v(),a=p("ion-button"),_=F("Delete"),h=v(),b=p("ion-modal"),f&&f.c(),w(t,"name",i=ae(n[0].transportType)),w(t,"slot","start"),a.hidden=g=!n[1],w(b,"is-open",n[3])},m(S,I){M(S,e,I),u(e,t),u(e,o),u(e,l),u(l,s),u(e,c),u(e,a),u(a,_),n[9](e),M(S,h,I),M(S,b,I),f&&f.m(b,null),m=!0,k||(d=[N(l,"click",n[5]),N(a,"click",n[8]),N(b,"didDismiss",n[6])],k=!0)},p(S,[I]){(!m||I&1&&i!==(i=ae(S[0].transportType)))&&w(t,"name",i),(!m||I&1)&&r!==(r=ve(S[0].geopoints).toLocaleString(void 0,{maximumFractionDigits:0})+" m")&&G(s,r),(!m||I&2&&g!==(g=!S[1]))&&(a.hidden=g),S[3]?f?(f.p(S,I),I&8&&z(f,1)):(f=Ve(S),f.c(),z(f,1),f.m(b,null)):f&&(te(),E(f,1,1,()=>{f=null}),ne()),(!m||I&8)&&w(b,"is-open",S[3])},i(S){m||(z(f),m=!0)},o(S){E(f),m=!1},d(S){S&&L(e),n[9](null),S&&L(h),S&&L(b),f&&f.d(),k=!1,ue(d)}}}function un(n,e,t){let{trip:i}=e,{editable:o=!1}=e,l;function r(){oe.deleteTrip(i.id)}let s=!1;const c=()=>t(3,s=!0),a=()=>t(3,s=!1);let _=i.distance>=1e3?`${Math.floor(i.distance/1e3)} km`:`${Math.ceil(i.distance)} m`;const g=()=>{var b;r(),(b=l==null?void 0:l.parentNode)==null||b.removeChild(l)};function h(b){ie[b?"unshift":"push"](()=>{l=b,t(2,l)})}return n.$$set=b=>{"trip"in b&&t(0,i=b.trip),"editable"in b&&t(1,o=b.editable)},[i,o,l,s,r,c,a,_,g,h]}class fn extends Z{constructor(e){super();J(this,e,un,cn,K,{trip:0,editable:1})}}function Ge(n,e,t){const i=n.slice();return i[6]=e[t],i}function dn(n){let e,t,i,o,l,r;return{c(){e=p("ion-item"),t=p("ion-label"),t.textContent="Failed to load user",i=v(),o=p("ion-button"),o.textContent="Go back to login page",w(o,"slot","end"),w(o,"fill","outline")},m(s,c){M(s,e,c),u(e,t),u(e,i),u(e,o),l||(r=N(o,"click",n[5]),l=!0)},p:U,i:U,o:U,d(s){s&&L(e),l=!1,r()}}}function pn(n){let e,t,i,o,l,r=[],s=new Map,c,a,_,g,h,b=n[1].trips;const m=d=>d[6].id;for(let d=0;d<b.length;d+=1){let f=Ge(n,b,d),S=m(f);s.set(S,r[d]=Ye(S,f))}let k=!n[1].trips.length&&Ze();return{c(){e=p("ion-list-header"),t=p("ion-label"),t.textContent="Trips",i=v(),o=p("ion-button"),o.textContent="Edit",l=v();for(let d=0;d<r.length;d+=1)r[d].c();c=v(),k&&k.c(),a=ge()},m(d,f){M(d,e,f),u(e,t),u(e,i),u(e,o),M(d,l,f);for(let S=0;S<r.length;S+=1)r[S].m(d,f);M(d,c,f),k&&k.m(d,f),M(d,a,f),_=!0,g||(h=N(o,"click",n[4]),g=!0)},p(d,f){f&3&&(b=d[1].trips,te(),r=_t(r,f,m,1,d,b,s,c.parentNode,bt,Ye,c,Ge),ne()),d[1].trips.length?k&&(k.d(1),k=null):k||(k=Ze(),k.c(),k.m(a.parentNode,a))},i(d){if(!_){for(let f=0;f<b.length;f+=1)z(r[f]);_=!0}},o(d){for(let f=0;f<r.length;f+=1)E(r[f]);_=!1},d(d){d&&L(e),d&&L(l);for(let f=0;f<r.length;f+=1)r[f].d(d);d&&L(c),k&&k.d(d),d&&L(a),g=!1,h()}}}function Ye(n,e){let t,i,o;return i=new fn({props:{editable:e[0],trip:e[6]}}),{key:n,first:null,c(){t=ge(),X(i.$$.fragment),this.first=t},m(l,r){M(l,t,r),x(i,l,r),o=!0},p(l,r){e=l;const s={};r&1&&(s.editable=e[0]),r&2&&(s.trip=e[6]),i.$set(s)},i(l){o||(z(i.$$.fragment,l),o=!0)},o(l){E(i.$$.fragment,l),o=!1},d(l){l&&L(t),ee(i,l)}}}function Ze(n){let e;return{c(){e=p("ion-item"),e.innerHTML='<ion-label color="medium">You don&#39;t have any trips yets</ion-label>',w(e,"lines","none")},m(t,i){M(t,e,i)},d(t){t&&L(e)}}}function mn(n){let e,t,i,o,l,r,s=(n[1]?n[1].name:"Profile")+"",c,a,_,g,h,b,m,k,d,f,S;const I=[pn,dn],y=[];function R(T,D){return T[1]?0:1}return m=R(n),k=y[m]=I[m](n),{c(){e=p("ion-header"),t=p("ion-toolbar"),i=p("ion-buttons"),o=p("ion-button"),o.innerHTML='<ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>',l=v(),r=p("ion-title"),c=F(s),a=v(),_=p("ion-content"),g=p("div"),h=v(),b=p("ion-list"),k.c(),w(i,"slot","primary"),w(e,"translucent",""),_e(g,"class","summary-map")},m(T,D){M(T,e,D),u(e,t),u(t,i),u(i,o),u(t,l),u(t,r),u(r,c),M(T,a,D),M(T,_,D),u(_,g),u(_,h),u(_,b),y[m].m(b,null),d=!0,f||(S=N(o,"click",n[2]),f=!0)},p(T,[D]){(!d||D&2)&&s!==(s=(T[1]?T[1].name:"Profile")+"")&&G(c,s);let A=m;m=R(T),m===A?y[m].p(T,D):(te(),E(y[A],1,1,()=>{y[A]=null}),ne(),k=y[m],k?k.p(T,D):(k=y[m]=I[m](T),k.c()),z(k,1),k.m(b,null))},i(T){d||(z(k),d=!0)},o(T){E(k),d=!1},d(T){T&&L(e),T&&L(a),T&&L(_),y[m].d(),f=!1,S()}}}function _n(n,e,t){let i;j(n,Q,a=>t(1,i=a));let o=!1;function l(a){xt(a,"popover-extra",Qt,{}).then(async _=>{switch(_.data){case"logout":await ce.logout();break;case"about":await Ne.open({url:"http://github.com/marr11317/Pricycles"});break;case"github":await Ne.open({url:"http://github.com/marr11317/Pricycle"});break}})}function r(){t(0,o=!o)}return[o,i,l,r,()=>r(),()=>ce.logout()]}class bn extends Z{constructor(e){super();J(this,e,_n,mn,K,{})}}function gn(n){let e,t,i,o,l,r,s,c,a,_,g,h,b;return o=new qt({}),s=new Zt({}),_=new bn({}),{c(){e=p("ion-app"),t=p("ion-tabs"),i=p("ion-tab"),X(o.$$.fragment),l=v(),r=p("ion-tab"),X(s.$$.fragment),c=v(),a=p("ion-tab"),X(_.$$.fragment),g=v(),h=p("ion-tab-bar"),h.innerHTML=`<ion-tab-button tab="map"><ion-label>Map</ion-label> 
        <ion-icon name="bicycle-outline"></ion-icon></ion-tab-button> 
      <ion-tab-button tab="rewards"><ion-label>Rewards</ion-label> 
        <ion-icon name="trophy-outline"></ion-icon></ion-tab-button> 
      <ion-tab-button tab="profile"><ion-label>Profile</ion-label> 
        <ion-icon name="analytics-outline"></ion-icon></ion-tab-button>`,w(i,"tab","map"),w(r,"tab","rewards"),w(a,"tab","profile"),w(h,"slot","bottom")},m(m,k){M(m,e,k),u(e,t),u(t,i),x(o,i,null),u(t,l),u(t,r),x(s,r,null),u(t,c),u(t,a),x(_,a,null),u(t,g),u(t,h),b=!0},p:U,i(m){b||(z(o.$$.fragment,m),z(s.$$.fragment,m),z(_.$$.fragment,m),b=!0)},o(m){E(o.$$.fragment,m),E(s.$$.fragment,m),E(_.$$.fragment,m),b=!1},d(m){m&&L(e),ee(o),ee(s),ee(_)}}}function hn(n,e,t){let i,o;return j(n,Te,l=>t(0,i=l)),j(n,Q,l=>t(1,o=l)),be(async()=>{const l=await oe.fetchUser(ce.getCurrentUser());se(Q,o=l,o);const r=await oe.fetchAllRewards();r.sort((s,c)=>s.id<c.id?-1:1),se(Te,i=r,i)}),Q.subscribe(async l=>{l&&await oe.updateUser(l)}),[]}class wn extends Z{constructor(e){super();J(this,e,hn,gn,K,{})}}function Je(n){let e,t,i,o;const l=[yn,kn],r=[];function s(c,a){return c[3]?1:0}return e=s(n),t=r[e]=l[e](n),{c(){t.c(),i=ge()},m(c,a){r[e].m(c,a),M(c,i,a),o=!0},p(c,a){let _=e;e=s(c),e===_?r[e].p(c,a):(te(),E(r[_],1,1,()=>{r[_]=null}),ne(),t=r[e],t?t.p(c,a):(t=r[e]=l[e](c),t.c()),z(t,1),t.m(i.parentNode,i))},i(c){o||(z(t),o=!0)},o(c){E(t),o=!1},d(c){r[e].d(c),c&&L(i)}}}function kn(n){let e,t;return e=new wn({}),{c(){X(e.$$.fragment)},m(i,o){x(e,i,o),t=!0},p:U,i(i){t||(z(e.$$.fragment,i),t=!0)},o(i){E(e.$$.fragment,i),t=!1},d(i){ee(e,i)}}}function yn(n){let e,t,i;function o(r){n[5](r)}let l={errorNote:n[2]};return n[1]!==void 0&&(l.signup=n[1]),e=new vt({props:l}),ie.push(()=>gt(e,"signup",o)),e.$on("submit",n[4]),{c(){X(e.$$.fragment)},m(r,s){x(e,r,s),i=!0},p(r,s){const c={};s&4&&(c.errorNote=r[2]),!t&&s&2&&(t=!0,c.signup=r[1],ht(()=>t=!1)),e.$set(c)},i(r){i||(z(e.$$.fragment,r),i=!0)},o(r){E(e.$$.fragment,r),i=!1},d(r){ee(e,r)}}}function Tn(n){let e,t,i=n[0]&&Je(n);return{c(){e=p("ion-app"),i&&i.c()},m(o,l){M(o,e,l),i&&i.m(e,null),t=!0},p(o,[l]){o[0]?i?(i.p(o,l),l&1&&z(i,1)):(i=Je(o),i.c(),z(i,1),i.m(e,null)):i&&(te(),E(i,1,1,()=>{i=null}),ne())},i(o){t||(z(i),t=!0)},o(o){E(i),t=!1},d(o){o&&L(e),i&&i.d()}}}function vn(n,e,t,i,o){return o&&t!==i?"Passwords do not match":""}function Sn(n,e,t){let i;j(n,de,a=>t(3,i=a)),be(()=>{wt({apiKey:"AIzaSyClWb9snAaau0p3gWecoCVMywUwIKgP7Eo",authDomain:"hackatown-2022.firebaseapp.com",projectId:"hackatown-2022",storageBucket:"hackatown-2022.appspot.com",messagingSenderId:"410454368204",appId:"1:410454368204:web:16fa9750c1621761564769"}),le().onAuthStateChanged(a=>{se(de,i=!!a,i),t(0,o=!0)})});let o=!1,l=!1,r="";async function s(a){const{name:_,email:g,password:h,confirmPassword:b,signup:m}=a.detail,k=vn(_,g,h,b,m);if(k!=""){t(2,r=k);return}m?await ce.signUp(_,g,h)?(t(2,r=""),se(de,i=!0,i)):t(2,r="Signup failed"):await ce.login(g,h)?(t(2,r=""),se(de,i=!0,i)):t(2,r="Invalid email or password")}function c(a){l=a,t(1,l)}return[o,l,r,i,s,c]}class Mn extends Z{constructor(e){super();J(this,e,Sn,Tn,K,{})}}new Mn({target:document.body});