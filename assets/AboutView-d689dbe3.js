import{_ as s,o as a,c as n,a as c,t as r,b as _}from"./index-9bae1a48.js";const i={data(){return{data:{}}},mounted(){console.log("這是產品的環境");const e="https://randomuser.me/api/";this.$http.get(e).then(t=>{console.log(t),this.data=t.data.results[0],console.log(this.data)})}},l={class:"about"},d=_("h1",null,"This is an about page",-1);function u(e,t,p,h,o,g){return a(),n("div",l,[d,c(" "+r(o.data),1)])}const f=s(i,[["render",u]]);export{f as default};
