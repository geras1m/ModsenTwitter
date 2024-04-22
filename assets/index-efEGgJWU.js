import{u as s,m as n,a as p,e as i,q as d,d as l,F as x,j as r}from"./index-CH48g1iu.js";import{P as h}from"./index-DSf54jhu.js";import{S as f}from"./index-BfiuTdk-.js";import{T as g}from"./index-DVHYOLpU.js";import{a as u}from"./index-CsqDV37B.js";import{F as j,a as b}from"./index-C86McuiY.js";import{g as $}from"./getFirebaseErrorMessage-xBv1PUJL.js";import"./index-BNE5OGZE.js";import"./index-C3LDNV5j.js";const{BannerProfile:v}=u,{px1150:w}=p,F=s.main`
  width: 60%;
  max-width: 910px;
  border: 1px solid ${({theme:e})=>e.colors.grey};
  border-top: none;

  @media (max-width: ${w}) {
    width: 100%;
    max-width: 100%;
  }
`,S=s.div`
  width: 100%;
  height: 280px;
  background-image: url(${v});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`,U=s.div`
  position: relative;
  height: 100px;
  border-radius: 50%;
  top: -60px;

  ${n({alignItem:"center",justifyContent:"center"})};
`,k=s.div`
  position: relative;
  min-height: 100px;

  ${n({alignItem:"center",justifyContent:"start"})};
`,y=s.p`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px24};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
`,z=s.span`
  color: ${({theme:e})=>e.colors.grey};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
`,q=i.memo(()=>{const[e,c]=i.useState(null),{id:t}=d(),a=l();return i.useEffect(()=>{if(t)try{(async()=>j.GetDataItemFromDB(t,"users"))().then(m=>c(m))}catch(o){o instanceof x?a==null||a.open($(o),b.error):console.error(o)}},[t]),r.jsxs(F,{children:[r.jsx(f,{}),r.jsx(S,{}),r.jsxs(k,{children:[r.jsx(U,{children:r.jsx(h,{size:"l"})}),e&&r.jsxs(y,{children:[e.name," ",r.jsx(z,{children:e.telegramLink})]})]}),t&&r.jsx(g,{page:"users-search",id:t})]})});export{q as UserSearchPage};
