import{d as b,a as x,bs as y,o as F,c as S,bp as t,b as o,e as a,R as m,x as d,c3 as c,a6 as U,br as k}from"./index-D6c8NPQG.js";import{v as I,c as B}from"./utils-B-KJdbYi.js";import{p as C,a as E}from"./http-4JtdeHVt.js";import{I as q,q as N,z as V,p as h}from"./index-B40Mx0hk.js";import"./CloseOutlined-B17n0a4A.js";import"./hasIn-h5yCdAMk.js";const D={class:"page-wrap"},L={class:"container"},P={class:"form-wrap"},T={class:"flex f-a-center f-j-end mg-t20"},j=b({__name:"index",setup(z){const n=x({email:"",password:""}),u=y(),_=()=>{c.push("/signup")},f=async l=>{console.log("Success:",l);const{code:e,data:r,msg:s}=await C("/api/v1/user/login",l);e==="00000"?(u.setToken(r.token),u.setUserInfo(r),c.push("/")):E.error(s)},v=l=>{console.log("Failed:",l)};return(l,e)=>{const r=q,s=N,g=V,i=U,w=h;return F(),S("div",D,[t("div",L,[e[6]||(e[6]=t("div",{class:"mg-b10 f20 c-ED6337"},"InvoiceFree",-1)),e[7]||(e[7]=t("div",{class:"mg-b20"},"Login to your account",-1)),t("div",P,[o(w,{layout:"vertical",model:n,name:"basic","label-col":{span:8},"wrapper-col":{span:24},autocomplete:"off",onFinish:f,onFinishFailed:v},{default:a(()=>[o(s,{label:"Email",name:"email",rules:[{required:!0,validator:m(I),trigger:"change"}]},{default:a(()=>[o(r,{placeholder:"name@example.com",value:n.email,"onUpdate:value":e[0]||(e[0]=p=>n.email=p)},null,8,["value"])]),_:1},8,["rules"]),o(s,{label:"Password",name:"password",rules:[{required:!0,validator:m(B),trigger:"change"}]},{default:a(()=>[o(g,{placeholder:"******",value:n.password,"onUpdate:value":e[1]||(e[1]=p=>n.password=p)},null,8,["value"])]),_:1},8,["rules"]),o(s,null,{default:a(()=>[o(i,{type:"primary","html-type":"submit",style:{width:"100%"}},{default:a(()=>e[2]||(e[2]=[d("Login")])),_:1})]),_:1}),o(s,null,{default:a(()=>[o(i,{style:{width:"100%"}},{default:a(()=>e[3]||(e[3]=[d("Cancel")])),_:1})]),_:1})]),_:1},8,["model"])]),t("div",T,[e[5]||(e[5]=t("div",{class:"mg-r10"},"Don't have an account?",-1)),o(i,{onClick:_},{default:a(()=>e[4]||(e[4]=[d("Sign Up")])),_:1})])])])}}}),M=k(j,[["__scopeId","data-v-f96ffc4d"]]);export{M as default};