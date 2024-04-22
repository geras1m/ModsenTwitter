import{u as o,a as y,m as d,e as a,j as t,b as k,d as C,F as L,k as T,l as b,c as z,r as p,n as A,N as H,T as q,o as G,p as R,B as J,S as K,O as Q}from"./index-DUdeovaR.js";import{a as j}from"./index-Ca9tUTrv.js";import{P as $}from"./index-DUMPB9Vk.js";import{F as S,a as B,T as X}from"./index-C_Oo3Dte.js";import{g as N}from"./getFirebaseErrorMessage-BzpmAVAl.js";import{C as Y}from"./index-DuurqdaY.js";import"./index.esm-VvRJ2cnM.js";const{px1150:O}=y,Z=o.section`
  width: 26%;
  max-width: 373px;
  padding-top: 30px;
  margin: 0 15px;
  transition: 0.2s ease-in;

  @media (max-width: ${O}) {
    padding: 60px 10px;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    margin: 0;
    position: fixed;
    right: ${({$isShow:e})=>e?"0":"-400px"};
    z-index: 10;
    background-color: ${({theme:e})=>e.colors.bg};
  }
`,F=o.div`
  position: relative;
`,U=o.img`
  top: 13px;
  left: 20px;
  position: absolute;
  cursor: pointer;
`,W=o.input`
  width: 100%;
  padding: 15px 20px 15px 64px;
  border-radius: 31px;
  border: 1px solid ${({theme:e})=>e.colors.white1};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  transition: 0.3s ease;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.blue};
  }
`,M=o.div`
  padding: 43px 15px 15px;
  border-radius: 10px;
  margin-top: 32px;
  background-color: ${({theme:e})=>e.colors.bgSuggestion};
`,P=o.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.red};
  font-size: ${({theme:e})=>e.fontSizes.px14};
`,_=o.button`
  display: none;
  position: absolute;
  z-index: 5;
  top: 30px;
  left: 20px;
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.red};
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${O}) {
    display: block;
  }
`,ee="Search Twitter",te=o.div`
  margin-bottom: 25px;
  cursor: pointer;
  transition: 0.2s ease-in;

  ${d({alignItem:"center",justifyContent:"start"})};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`,oe=o.div`
  margin-left: 10px;
`,ne=o.div`
  margin-bottom: 5px;

  ${d({alignItem:"center",justifyContent:"start"})};
`,se=o.p`
  margin-right: 5px;
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
`,re=o.p`
  color: ${({theme:e})=>e.colors.grey};
  font-size: ${({theme:e})=>e.fontSizes.px18};
`,ie=o.p`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px14};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
`,w=(e,s)=>e.length>s?`${e.slice(0,s-3)}...`:e,ae=a.memo(e=>{const{authorName:s,date:i,text:c,id:r,handleOpenTweet:h}=e;return t.jsxs(te,{onClick:()=>h(r),children:[t.jsx($,{size:"s"}),t.jsxs(oe,{children:[t.jsxs(ne,{children:[t.jsx(se,{children:w(s,20)}),t.jsx(re,{children:i})]}),t.jsx(ie,{children:w(c,30)})]})]})}),D=o.h3`
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 30px;
  font-size: ${({theme:e})=>e.fontSizes.px24};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
`,E=(e,s=500)=>{const[i,c]=a.useState("");return a.useEffect(()=>{const r=setTimeout(()=>{c(e)},s);return()=>{clearInterval(r)}},[e]),i},{SearchIcon:ce}=j,le=()=>{const[e,s]=a.useState(""),[i,c]=a.useState([]),r=E(e),h=k(),l=C(),f=n=>{s(n.target.value)},m=a.useCallback(n=>{h(`tweets-search/${n}`)},[]);a.useEffect(()=>{try{r.length!==0&&S.GetTweetDataCollectionFromDB().then(n=>{const g=n.filter(u=>u.text.toLowerCase().includes(r.toLowerCase()));c(g)})}catch(n){n instanceof L?l==null||l.open(N(n),B.error):console.error(n)}},[r]);const x=i.map(({authorName:n,text:g,date:u,uis:v})=>t.jsx(ae,{authorName:n,date:u,text:g,id:v.toString(),handleOpenTweet:m},v));return t.jsxs(t.Fragment,{children:[t.jsxs(F,{children:[t.jsx(U,{src:ce}),t.jsx(W,{type:"text",placeholder:ee,value:e,onChange:f})]}),r.length!==0&&t.jsxs(M,{children:[t.jsx(D,{children:"Search results"}),t.jsxs("div",{children:[x,i.length===0&&t.jsx(P,{children:"The tweet was not found for your query 🙁"})]})]})]})},pe=o.div`
  margin-bottom: 25px;
  cursor: pointer;
  transition: 0.2s ease-in;

  ${d({alignItem:"center",justifyContent:"start"})};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`,de=o.div`
  flex-direction: column;
  margin-left: 13px;

  ${d({alignItem:"start",justifyContent:"start"})};
`,he=o.p`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
`,xe=o.p`
  color: ${({theme:e})=>e.colors.grey};
  font-size: ${({theme:e})=>e.fontSizes.px18};
`,ge=a.memo(e=>{const{id:s,name:i,tag:c,handleOpenUser:r}=e;return t.jsxs(pe,{onClick:()=>r(s),children:[t.jsx($,{size:"s"}),t.jsxs(de,{children:[t.jsx(he,{children:i}),t.jsx(xe,{children:c})]})]})}),{SearchIcon:ue}=j,me=()=>{const[e,s]=a.useState(""),[i,c]=a.useState([]),r=E(e),h=k(),l=C(),f=n=>{s(n.target.value)},m=a.useCallback(n=>{h(`users-search/${n}`)},[]);a.useEffect(()=>{try{r.length!==0&&S.GetUserDataCollectionFromDB().then(n=>{const g=n.filter(u=>u.name.toLowerCase().includes(r.toLowerCase()));c(g)})}catch(n){n instanceof L?l==null||l.open(N(n),B.error):console.error(n)}},[r]);const x=i.map(({uis:n,name:g,telegramLink:u})=>t.jsx(ge,{id:n,name:g,tag:u,handleOpenUser:m},n));return t.jsxs(t.Fragment,{children:[t.jsxs(F,{children:[t.jsx(U,{src:ue}),t.jsx(W,{type:"text",placeholder:"Search Users",value:e,onChange:f})]}),r.length!==0&&t.jsxs(M,{children:[t.jsx(D,{children:"Search results"}),t.jsxs("div",{children:[i.length===0&&t.jsx(P,{children:"The user was not found for your query 🙁"}),x]})]})]})},fe=a.memo(()=>{const e=T(),{isOpenSearchBar:s}=b(r=>r.theme),i=z(),c=e.pathname===p.profile||e.pathname.includes("/tweets-search");return t.jsxs(Z,{$isShow:s,children:[t.jsx(_,{onClick:()=>i(A(!s))}),c?t.jsx(le,{}):t.jsx(me,{})]})}),{HomeIcon:be,HomeLightIcon:we,ExploreIcon:je,ExploreLightIcon:$e,NotificationsIcon:Se,NotificationsLightIcon:ve,MessagesIcon:Ie,MessagesLightIcon:ye,BookmarksIcon:ke,BookmarksLightIcon:Ce,ListsIcon:Le,ListsLightIcon:Te,ProfileIcon:ze,ProfileLightIcon:Be,MoreIcon:Ne,MoreLightIcon:Oe}=j,Fe="No name",Ue="No telegram",We=[{title:"Home",icon:be,iconLight:we,path:p.home},{title:"Explore",icon:je,iconLight:$e,path:p.notFound},{title:"Notifications",icon:Se,iconLight:ve,path:p.notFound},{title:"Messages",icon:Ie,iconLight:ye,path:p.notFound},{title:"Bookmarks",icon:ke,iconLight:Ce,path:p.notFound},{title:"Lists",icon:Le,iconLight:Te,path:p.notFound},{title:"Profile",icon:ze,iconLight:Be,path:p.profile},{title:"More",icon:Ne,iconLight:Oe,path:p.notFound}],Me=o.nav``,Pe=o.ul`
  margin-top: 50px;
`,De=o(H)`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  font-weight: ${({theme:e})=>e.fontWeight.semiBold};
  margin: 30px 0;
  transition: 0.2s ease-in;
  cursor: pointer;

  ${d({alignItem:"center",justifyContent:"start"})};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.6;
  }

  &.active {
    color: ${({theme:e})=>e.colors.blue};
  }
`,Ee=o.img`
  margin-right: 20px;
`,Ve=a.memo(()=>{const{theme:e}=b(s=>s.theme);return t.jsx(Me,{children:t.jsx(Pe,{children:We.map(({title:s,icon:i,iconLight:c,path:r})=>t.jsxs(De,{to:r,children:[t.jsx(Ee,{src:e===q.light?i:c})," ",s]},s))})})}),{px1150:V}=y,Ae=o.section`
  width: 18%;
  max-width: 230px;
  padding: 30px 15px 0;
  transition: 0.2s ease-in;

  @media (max-width: ${V}) {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    position: fixed;
    left: ${({$isShow:e})=>e?"0":"-240px"};
    z-index: 10;
    background-color: ${({theme:e})=>e.colors.bg};
  }
`,He=o.img``,qe=o.button`
  display: none;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.red};
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${V}) {
    display: block;
  }
`,Ge=o.div`
  padding: 0 30px;
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({theme:e})=>e.colors.black2};

  ${d({alignItem:"center",justifyContent:"center"})};
`,Re=o.div`
  position: relative;
  padding: 15px;
  border-radius: 6px;
  width: 100%;
  max-width: 800px;
  background-color: ${({theme:e})=>e.colors.bg};
`,Je=o.button`
  position: absolute;
  top: -25px;
  right: -25px;
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.red};
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );

  &:hover {
    opacity: 0.7;
  }
`,I=o.button`
  margin-top: 30px;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 76px;
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  background-color: ${({theme:e})=>e.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${d({alignItem:"center",justifyContent:"center"})};

  &:hover {
    opacity: 0.8;
  }
`,Ke=o.div`
  overflow: hidden;
  padding: 20px 17px;
  margin-top: 75px;
  ${d({alignItem:"center",justifyContent:"start"})};
`,Qe=o.div`
  margin-left: 20px;
`,Xe=o.p`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px16};
  font-weight: ${({theme:e})=>e.fontWeight.semiBold};
  margin-bottom: 5px;
`,Ye=o.p`
  color: ${({theme:e})=>e.colors.grey};
  font-size: ${({theme:e})=>e.fontSizes.px16};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
`,Ze=a.memo(()=>{const[e,s]=a.useState(!1),i=T(),{name:c,telegramLink:r}=b(x=>x.user),{isOpenNavBar:h}=b(x=>x.theme),l=z();a.useEffect(()=>{document.body.style.overflow=e?"hidden":"auto"},[e]);const f=async()=>{await S.LogOut(),l(R())},m=()=>{s(!e)};return t.jsxs(Ae,{$isShow:h,children:[t.jsx(He,{src:X}),t.jsx(qe,{type:"button",onClick:()=>l(G(!1))}),t.jsx(Ve,{}),t.jsx(I,{type:"button",onClick:m,children:"Tweet"}),e&&t.jsx(Ge,{children:t.jsxs(Re,{children:[t.jsx(Y,{}),t.jsx(Je,{type:"button",onClick:m})]})}),t.jsxs(Ke,{children:[t.jsx($,{size:"s"}),t.jsxs(Qe,{children:[t.jsx(Xe,{children:c?w(c,12):Fe}),t.jsx(Ye,{children:r?w(r,14):Ue})]})]}),i.pathname===p.profile&&t.jsx(I,{type:"button",onClick:f,children:"Log out"})]})}),_e=o.div`
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  margin: 0 auto;

  ${d({alignItem:"start",justifyContent:"space-between"})};
`,at=()=>t.jsxs(_e,{children:[t.jsx(Ze,{}),t.jsx(a.Suspense,{fallback:t.jsx(J,{children:t.jsx(K,{width:"100px",border:"10px"})}),children:t.jsx(Q,{})}),t.jsx(fe,{})]});export{at as AppPage};
