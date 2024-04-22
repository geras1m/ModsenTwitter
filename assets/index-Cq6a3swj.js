import{u as o,m as s,N as r,e as n,j as t,r as i}from"./index-DUdeovaR.js";import{a}from"./index-Ca9tUTrv.js";import{B as m,S as c}from"./index-DEkkooFv.js";import{T as p}from"./index-B79PJ86N.js";const x=o.header`
  padding: 25px 34px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.grey};

  ${s({alignItem:"center",justifyContent:"space-between"})}
`,g=o.img`
  margin-right: 13px;
`,l=o(r)`
  transition: 0.2s ease-in;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px24};
  font-weight: ${({theme:e})=>e.fontWeight.semiBold};

  ${s({alignItem:"center",justifyContent:"start"})};

  &:hover {
    opacity: 0.6;
  }
`,d=o.div`
  gap: 20px;

  ${s({alignItem:"center",justifyContent:"center"})};
`,{LeftArrowIcon:f}=a,I=n.memo(()=>t.jsxs(x,{children:[t.jsx(m,{}),t.jsxs(l,{to:i.home,children:[t.jsx(g,{src:f}),"Home"]}),t.jsxs(d,{children:[t.jsx(c,{}),t.jsx(p,{})]})]}));export{I as S};
