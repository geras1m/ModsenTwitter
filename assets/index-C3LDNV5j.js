import{u as r,m as l,t as p,T as t,l as h,c,j as s,v as d}from"./index-CH48g1iu.js";const g=r.button`
  width: 50px;
  min-height: 28px;
  border: 2px solid ${({theme:e})=>e.colors.grey};
  border-radius: 14px;

  ${l({alignItem:"center",justifyContent:"left"})};

  position: relative;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease-out;
  background-color: transparent;

  &:hover {
    box-shadow: 0 0 5px 2px ${({theme:e})=>e.colors.grey};
  }
`,x=r.div`
  width: 27px;
  height: 27px;
  border: 2px solid ${p.grey};
  border-radius: 50%;
  position: absolute;
  left: -1px;
  transition: 0.3s ease;
  transform: translate(${e=>e.theme===t.light?"0":"22px"});
`,u=()=>{const{theme:e}=h(o=>o.theme),i=c(),a=o=>{const n=o===t.light?t.dark:t.light;i(d(n))};return s.jsx(g,{"data-testid":"toggle",onClick:()=>a(e),children:s.jsx(x,{"data-testid":"toggle-element",theme:e})})};export{u as T};
