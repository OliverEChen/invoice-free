import{_ as v}from"./index.vue_vue_type_script_setup_true_lang-BM3Gt96A.js";import{I as x,q as b,_ as w,p as g}from"./index-B40Mx0hk.js";import{d as r,a as y,o as _,c as i,b as a,e as t,bp as B,x as m,a6 as I,br as R,r as k}from"./index-D6c8NPQG.js";import"./dayjs.min-tUQWaACv.js";import"./hasIn-h5yCdAMk.js";const q={class:"form-wrap"},C={class:"flex f-j-between mg-b10"},N=r({__name:"index",setup(p){const o=y({email:"",password:""});return(u,e)=>{const c=x,s=b,d=w,l=I,f=g;return _(),i("div",q,[a(f,{layout:"vertical",model:o,name:"basic","label-col":{span:8},"wrapper-col":{span:24},autocomplete:"off"},{default:t(()=>[a(s,{label:"To(required)"},{default:t(()=>[a(c,{placeholder:"name@example.com",value:o.email,"onUpdate:value":e[0]||(e[0]=n=>o.email=n)},null,8,["value"])]),_:1}),a(s,{label:"Message(required)"},{default:t(()=>[a(d,{value:o.message,"onUpdate:value":e[1]||(e[1]=n=>o.message=n),placeholder:"Autosize height with minimum and maximum number of lines","auto-size":{minRows:2,maxRows:5}},null,8,["value"])]),_:1}),B("div",C,[a(l,{type:"primary"},{default:t(()=>e[2]||(e[2]=[m("Send Invoice")])),_:1}),a(l,null,{default:t(()=>e[3]||(e[3]=[m("Cancel")])),_:1})])]),_:1},8,["model"])])}}}),S=R(N,[["__scopeId","data-v-07ad4ad0"]]),U=r({__name:"email",setup(p){const o=k(null);return(u,e)=>(_(),i("div",null,[a(S),a(v,{ref_key:"invoiceRef",ref:o},null,512)]))}});export{U as default};