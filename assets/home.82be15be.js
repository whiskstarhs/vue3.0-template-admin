var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&s(e,a,t[a]);return e},l=(e,o)=>t(e,a(o));import{v as c}from"./index.88d2d034.js";import{r as p,U as d,l as u,C as m}from"./index.3e6c037a.js";import{r as f}from"./request.059795f0.js";import{d as v,m as b,e as g,q as h,p as w,a as y,i as k,o as j,c as x,b as S,F as P,j as _,w as O,A as I,Q as C}from"./vendor.5b52a89b.js";var z=v({name:"Home",components:{},setup(){const e=b({swiperItems:[{name:"vue-next",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c588b8ab65a74d59aa379801136df4e0~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vuejs/docs-next-zh-cn"},{name:"vitejs",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7351d2dcd7846158604ac8bd57222b5~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vitejs"},{name:"element-plus",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48a7fd198df44cca9c0dc10a8047bbef~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/element-plus/element-plus"},{name:"tslang",itemSrc:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/610fc57450884ceaae9578689663fe2f~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/Microsoft/TypeScript"}]});p("point","cloud",{draw(e,t){const a=(e=>{var t;return l(n(n({},e.defaultStyle),e.style),{fontSize:e.data.size,text:e.data.text,textAlign:"center",fontFamily:e.data.font,fill:e.color||(null==(t=null==e?void 0:e.defaultStyle)?void 0:t.stroke),textBaseline:"alphabetic"})})(e),o=t.addShape("text",{attrs:l(n({},a),{x:null==e?void 0:e.x,y:null==e?void 0:e.y})}),r=e.data;return r.rotate&&d.rotate(o,r.rotate*Math.PI/180),o}});const t=async()=>{try{const e=await class{static getWorldPopulation(){return f({url:"/api/data/world-population",method:"get",json:!0}).then((e=>200===e.status?Promise.resolve(e):Promise.reject(e)))}}.getWorldPopulation(),{dataSets:t}=e.data,a=(new u.View).source(t),o=a.range("value"),r=o[0],i=o[1];a.transform({type:"tag-cloud",fields:["x","value"],size:[800,600],font:"Verdana",padding:0,timeInterval:5e3,rotate(){let e=~~(4*Math.random())%4;return 2===e&&(e=0),90*e},fontSize:e=>e.value?(e.value-r)/(i-r)*56+24:0});const s=new m({container:"container",autoFit:!1,width:800,height:600,padding:0});s.data(a.rows),s.scale({x:{nice:!1},y:{nice:!1}}),s.legend(!1),s.axis(!1),s.tooltip({showTitle:!1,showMarkers:!1}),s.coordinate().reflect("x"),s.point().position("x*y").color("CornflowerBlue").shape("cloud").tooltip("value*category"),s.interaction("element-active"),s.render()}catch(e){console.error(e)}};return g((()=>{t()})),l(n({handleClickImg:e=>{window.open(e,"_blank")}},h(e)),{logo:c})}});const L=O();w("data-v-21b1862e");const M={class:"home-container page-container"},V={class:"top-container"},F=S("div",{class:"title"},"搜索词云",-1),T={class:"page-title"},q=I("信息链接:"),A=I("Vite2.x +"),B=I("Vue3.x +"),E=I("TypeScript +"),W=I("Element Plus"),D=C('<div class="word-cloud-wrapper" data-v-21b1862e><div class="right-bottom" data-v-21b1862e></div><div class="word-sets" data-v-21b1862e><div class="sets-module" data-v-21b1862e><div id="container" data-v-21b1862e></div></div></div></div>',1);y();const H=L(((e,t,a,o,r,i)=>{const s=k("el-carousel-item"),n=k("el-carousel"),l=k("el-link");return j(),x("div",M,[S(n,{interval:4e3,"indicator-position":"outside"},{default:L((()=>[(j(!0),x(P,null,_(e.swiperItems,(t=>(j(),x(s,{key:t},{default:L((()=>[S("img",{class:"vue-element-plus-logo",alt:t.name,src:t.itemSrc,onClick:a=>e.handleClickImg(t.targetLink)},null,8,["alt","src","onClick"])])),_:2},1024)))),128))])),_:1}),S("div",V,[F,S("div",T,[S(l,{type:"info"},{default:L((()=>[q])),_:1}),S(l,{type:"primary",href:"https://www.vitejs.net/guide/"},{default:L((()=>[A])),_:1}),S(l,{type:"success",href:"https://v3.cn.vuejs.org/"},{default:L((()=>[B])),_:1}),S(l,{type:"warning",href:"https://www.tslang.cn/"},{default:L((()=>[E])),_:1}),S(l,{type:"danger",href:"https://element-plus.gitee.io/#/zh-CN/component/link"},{default:L((()=>[W])),_:1})])]),D])}));z.render=H,z.__scopeId="data-v-21b1862e";export default z;
