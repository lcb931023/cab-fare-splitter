import{o as l,c as d,a as i,b as p,t as c,w as m,v as h,F as f,r as v,d as y,e as b}from"./vendor.deb81cfc.js";const _=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};_();var g=(r,t)=>{const n=r.__vccOpts||r;for(const[s,e]of t)n[s]=e;return n};const R={data(){return{riderDirectFare:[{value:10},{value:20}],totalPaidCabFare:25}},computed:{totalDirectFare(){return this.riderDirectFare.reduce((r,t)=>r+t.value,0)},fairRiderFare(){return this.riderDirectFare.map(({value:t})=>t/this.totalDirectFare*this.totalPaidCabFare)}},methods:{addRider(){this.riderDirectFare.push({value:30})},removeRider(){this.riderDirectFare.length<=2||this.riderDirectFare.pop()}}},D=R,C=p(" Total paid cab fare: "),k=["onUpdate:modelValue"],L=i("p",null,'We now calculate the "fair" car fare based on how much the riders are expected to pay, comparing to other riders.',-1);function N(r,t,n,s,e,o){return l(),d(f,null,[i("h3",null,[p(" Rider count: "+c(r.riderDirectFare.length)+" ",1),i("button",{onClick:t[0]||(t[0]=(...a)=>r.addRider&&r.addRider(...a))},"+"),i("button",{onClick:t[1]||(t[1]=(...a)=>r.removeRider&&r.removeRider(...a))},"-")]),i("h3",null,[C,m(i("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=a=>r.totalPaidCabFare=a)},null,512),[[h,r.totalPaidCabFare]])]),(l(!0),d(f,null,v(r.riderDirectFare,(a,u)=>(l(),d("h3",{key:u},[p(" Rider "+c(u+1)+"'s fare if they did not carpool: ",1),m(i("input",{type:"number","onUpdate:modelValue":F=>a.value=F},null,8,k),[[h,a.value]])]))),128)),L,(l(!0),d(f,null,v(r.fairRiderFare,(a,u)=>(l(),d("h3",{key:u}," Rider "+c(u+1)+"'s fair fare: "+c(a),1))),128))],64)}var P=g(D,[["render",N]]);const V=i("h1",null,"Cab Fare Splitter",-1),$={setup(r){return(t,n)=>(l(),d("div",null,[V,y(P)]))}};b($).mount("#app");
