import{u as o,a as h,c as b,l as u,e as a,j as e,P as m,o as C,n as B,m as c}from"./index-CH48g1iu.js";import{a as g}from"./index-CsqDV37B.js";import{P as S}from"./index-DSf54jhu.js";const{px1150:$}=h,z=o.nav`
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  overflow: hidden;
  //z-index: 2;

  div {
    width: 24px;
    height: 4px;
    background-color: ${({theme:t})=>t.colors.toggle};
    border-radius: 10px;
    transition: 0.3s ease;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({open:t})=>t?"rotate(45deg)":"rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({open:t})=>t?"0":"1"};
      transform: ${({open:t})=>t?"translateX(20px)":"translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({open:t})=>t?"rotate(-45deg)":"rotate(0)"};
    }
  }

  @media (max-width: ${$}) {
    display: flex;

    div {
      width: 24px;
      height: 2px;
    }
  }
`;o.div`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${({theme:t})=>t.gradients.text};
  transform: ${({open:t})=>t?"translateX(0)":"translateX(100%)"};
  text-align: left;
  padding: 80px 20px;
  position: fixed;
  //z-index: 0;
  top: 0;
  right: 0;
  transition: ${({theme:t})=>t.transition};

  @media (max-width: ${$}) {
    display: flex;
  }
`;const T=o.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({theme:t})=>t.colors.black2};
`,at=()=>{const t=b(),{isOpenNavBar:n}=u(i=>i.theme);a.useEffect(()=>{document.body.style.overflow=n?"hidden":"auto"},[n]);const r=()=>{t(C(!n))};return e.jsxs(e.Fragment,{children:[e.jsxs(z,{tabIndex:0,open:n,onClick:r,children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),n&&e.jsx(m,{children:e.jsx(T,{})})]})},{px1150:O}=h,M=o.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: none;
  cursor: pointer;

  @media (max-width: ${O}) {
    display: block;
  }
`,L=o.img``,R=o.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({theme:t})=>t.colors.black2};
`,{SearchIcon:A}=g,ct=()=>{const{isOpenSearchBar:t}=u(i=>i.theme),n=b();a.useEffect(()=>{document.body.style.overflow=t?"hidden":"auto"},[t]);const r=()=>{n(B(!t))};return e.jsxs(e.Fragment,{children:[e.jsx(M,{onClick:r,children:e.jsx(L,{src:A})}),t&&e.jsx(m,{children:e.jsx(R,{})})]})},E=o.img`
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`,W=o.button`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }
`,N=o.button`
  position: absolute;
  right: -22px;
  bottom: -40px;
  padding: 5px;
  border: none;
  border-radius: 6px;
  color: ${({theme:t})=>t.colors.white};
  font-size: ${({theme:t})=>t.fontSizes.px14};
  background-color: ${({theme:t})=>t.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${c({alignItem:"center",justifyContent:"center"})};

  &:hover {
    opacity: 0.8;
  }
`,F=o.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({theme:t})=>t.colors.black2};

  ${c({alignItem:"center",justifyContent:"center"})};
`,P=o.div`
  position: relative;
  padding: 30px 15px;
  border-radius: 6px;
  width: 100%;
  max-width: 400px;
  background-color: ${({theme:t})=>t.colors.bg};
  border: 1px solid ${({theme:t})=>t.colors.grey};
  flex-direction: column;
  margin: 0 30px;

  ${c({alignItem:"center",justifyContent:"center"})};
`,U=o.p`
  text-align: center;
  color: ${({theme:t})=>t.colors.text};
  font-size: ${({theme:t})=>t.fontSizes.px18};
`,X=o.button`
  margin-top: 15px;
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  color: ${({theme:t})=>t.colors.white};
  font-size: ${({theme:t})=>t.fontSizes.px18};
  background-color: ${({theme:t})=>t.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;

  ${c({alignItem:"center",justifyContent:"center"})};

  &:hover {
    opacity: 0.8;
  }
`,D=o.button`
  position: absolute;
  top: -25px;
  right: -25px;
  width: 20px;
  height: 20px;
  background-color: ${({theme:t})=>t.colors.red};
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
`,{EllipsisIcon:Y}=g,q=({handleRemoveTweet:t,tweetId:n})=>{const[r,i]=a.useState(!1),[s,d]=a.useState(!1);a.useEffect(()=>{document.body.style.overflow=s?"hidden":"auto"},[s]);const p=()=>{t(n),d(!1)},l=()=>{d(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(W,{"data-testid":"remove-tweet-menu-button",type:"button",onClick:()=>i(!r),children:[e.jsx(E,{src:Y}),r&&e.jsx(N,{"data-testid":"remove-tweet-button",type:"button",onClick:()=>d(!s),children:"Remove"})]}),s&&e.jsx(m,{children:e.jsx(F,{children:e.jsxs(P,{children:[e.jsx(U,{children:"Are you sure you want to delete the tweet?"}),e.jsx(X,{"data-testid":"remove-confirm-tweet-remove-button",type:"button",onClick:p,children:"Yes, I'm sure!"}),e.jsx(D,{type:"button",onClick:l})]})})})]})},{px800:j}=h,G=o.article`
  padding: 10px 34px 20px;
  width: 100%;
  border-bottom: 1px solid ${({theme:t})=>t.colors.grey};

  ${c({alignItem:"start",justifyContent:"space-between"})};

  @media (max-width: ${j}) {
    padding: 10px 5px 20px;
  }
`,H=o.div`
  width: 100%;
  margin-left: 7px;
`,J=o.div`
  margin-bottom: 5px;
`,K=o.h3`
  display: inline-block;
  color: ${({theme:t})=>t.colors.text};
  font-size: ${({theme:t})=>t.fontSizes.px20};
  font-weight: ${({theme:t})=>t.fontWeight.bold};
  margin-right: 5px;

  @media (max-width: ${j}) {
    font-size: ${({theme:t})=>t.fontSizes.px18};
  }
`,Q=o.span`
  font-size: ${({theme:t})=>t.fontSizes.px18};
  color: ${({theme:t})=>t.colors.grey};
`,V=o.p`
  width: 100%;
  max-width: 750px;
  word-break: break-word;
  margin-bottom: 15px;
  color: ${({theme:t})=>t.colors.text};
  font-size: ${({theme:t})=>t.fontSizes.px18};
`,Z=o.img`
  border-radius: 6px;
  width: 100%;
  max-width: 679px;
  height: 100%;
  max-height: 450px;
  object-fit: contain;
`,_=o.div`
  margin-top: 22px;

  ${c({alignItem:"center",justifyContent:"start"})};
`,tt=o.span`
  color: ${({theme:t})=>t.colors.text};
  margin-left: 10px;
`,et=o.img`
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`,{ActiveLikeIcon:ot,DefaultLikeIcon:nt}=g,dt=a.memo(t=>{const{id:n}=u(I=>I.user),{uis:r,authorName:i,authorTag:s,date:d,text:p,imgLink:l,likes:v,userId:x,authorId:w,isActiveLikeIcon:f,handleChangeLike:k,handleRemoveTweet:y}=t;return e.jsxs(G,{children:[e.jsx(S,{size:"s"}),e.jsxs(H,{children:[e.jsxs(J,{children:[e.jsx(K,{children:i}),e.jsxs(Q,{children:[s," ",d]})]}),e.jsx(V,{children:p}),l&&e.jsx(Z,{src:l}),e.jsxs(_,{children:[e.jsx(et,{"data-testid":`active-like-${f}`,onClick:()=>k(r,x),src:f?ot:nt}),e.jsx(tt,{children:v})]})]}),w===x&&n===x&&e.jsx(q,{tweetId:r.toString(),handleRemoveTweet:y})]})});export{at as B,ct as S,dt as T};
