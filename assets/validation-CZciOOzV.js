import{u as o,e as a,l as x,T as i,j as t}from"./index-CH48g1iu.js";import{a as h}from"./index-CsqDV37B.js";const w=o.div`
  position: relative;
  width: 100%;
`,b=o.input`
  width: 100%;
  padding: 24px 20px;
  border-radius: 6px;
  background-color: transparent;
  color: ${({theme:s})=>s.colors.text};
  border: 1px solid ${({theme:s})=>s.colors.white1};
  font-size: ${({theme:s})=>s.fontSizes.px18};
  transition: 0.3s ease;
  margin-bottom: 25px;

  &:hover {
    border: 1px solid ${({theme:s})=>s.colors.blue};
  }
`,g=o.img``,I=o.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 20px;
  right: 20px;
  cursor: pointer;
`,{CloseEyeIcon:P,CloseEyeLightIcon:$,OpenEyeIcon:y,OpenEyeLightIcon:z}=h,f=a.memo(s=>{const{placeholder:n,register:p}=s,[e,c]=a.useState(!1),{theme:r}=x(m=>m.theme),d=r===i.dark?$:P,l=r===i.dark?z:y,u=()=>c(!e);return t.jsxs(w,{children:[t.jsx(b,{"data-testid":`login-password-input-${n.split(" ").join("-").toLowerCase()}`,type:e?"text":"password",placeholder:n,...p}),t.jsx(I,{type:"button",onClick:u,children:t.jsx(g,{src:e?d:l})})]})}),k=/^(\+375) \((29|25|44|33)\) (\d{3})(\d{2})(\d{2})$/,C=/^[a-z][a-z0-9-]*$/i,S=/^@(?=\w{3,20}\b)[a-z][a-z0-9-]*$/i,O=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,v=/(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g;export{f as P,v as a,O as e,C as n,k as p,S as t};
