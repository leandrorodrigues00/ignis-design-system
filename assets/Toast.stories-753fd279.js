var i=Object.defineProperty;var n=(e,t)=>i(e,"name",{value:t,configurable:!0});import{a as c,d as m}from"./index-e3947a17.js";import{r}from"./index-fdf2b0d9.js";import{a as u,F as d,j as a}from"./jsx-runtime-85d5c9ba.js";import"./index-fd0bd2fb.js";import"./es.object.get-own-property-descriptor-e1434d3f.js";const l=n(e=>{const[t,o]=r.useState(!1),s=r.useRef(0);return r.useEffect(()=>()=>clearTimeout(s.current),[]),u(d,{children:[a(c,{onClick:()=>{o(!1),window.clearTimeout(s.current),s.current=window.setTimeout(()=>{o(!0)},100)},children:"Schedule"}),a(m,{open:t,onOpenChange:o,...e})]})},"ExposedToast"),w={title:"Feedback/Toast",component:l,args:{text:"Wednesday, October 23 at 4pm",title:"Scheduling done"}},C={},E={args:{duration:1e3}},O=["Primary","millisecondsToAutoClose"];export{C as Primary,O as __namedExportsOrder,w as default,E as millisecondsToAutoClose};
//# sourceMappingURL=Toast.stories-753fd279.js.map