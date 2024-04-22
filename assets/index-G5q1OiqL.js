import{u as i,m as r,a as m,N as x,b as f,c as u,d as $,j as t,r as a,f as w,s as j,F as b}from"./index-CH48g1iu.js";import{B as y,T as z,G as S,F as v,a as k}from"./index-C86McuiY.js";import{g as T}from"./getFirebaseErrorMessage-xBv1PUJL.js";const{px1500:I,px1150:l,px800:n}=m,L=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`,W=i.section`
  flex: 1 0 auto;
  display: flex;

  @media (max-width: ${n}) {
    justify-content: center;
  }
`,F=i.div`
  width: 50%;
  min-height: 100%;
  background-image: url(${y});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${n}) {
    display: none;
  }
`,P=i.div`
  margin-left: 40px;
  flex-direction: column;
  padding: 10px;

  ${r({alignItem:"start",justifyContent:"center"})};

  @media (max-width: ${l}) {
    margin-left: 15px;
  }

  @media (max-width: ${n}) {
    align-items: center;
    margin-left: 0;
  }
`,U=i.img`
  width: 50px;
  margin-bottom: 57px;
`,B=i.h1`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px80};
  font-weight: ${({theme:e})=>e.fontWeight.black};
  margin-bottom: 46px;

  @media (max-width: ${I}) {
    font-size: ${({theme:e})=>e.fontSizes.px60};
  }

  @media (max-width: ${l}) {
    font-size: ${({theme:e})=>e.fontSizes.px40};
  }
`,C=i.p`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px42};
  font-weight: ${({theme:e})=>e.fontWeight.black};
  margin-bottom: 30px;

  @media (max-width: ${l}) {
    font-size: ${({theme:e})=>e.fontSizes.px24};
  }
`,G=i.img``,N=i.div`
  width: 100%;
  max-width: 403px;
  margin-bottom: 30px;
`,d=i.button`
  position: relative;
  width: 100%;
  font-size: ${({theme:e})=>e.fontSizes.px20};
  font-weight: ${({theme:e})=>e.fontWeight.medium};
  padding: 18px 0;
  border-radius: 42px;
  color: ${({theme:e})=>e.colors.text};
  border: 1px solid ${({theme:e})=>e.colors.white1};
  cursor: pointer;
  background-color: transparent;
  transition: 0.2s ease-in;

  ${r({alignItem:"center",justifyContent:"center"})};

  & > img {
    width: 24px;
    margin-right: 5px;
  }

  &:first-child {
    margin-bottom: 20px;
  }

  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.blue};
  }
`,A=i.p`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px14};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  line-height: 20px;
  max-width: 375px;
  margin-bottom: 20px;

  @media (max-width: ${n}) {
    text-align: center;
  }
`,E=i.p`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px16};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
`,c=i.a`
  color: ${({theme:e})=>e.colors.blue};
  transition: 0.2s ease-in;

  &:hover {
    text-decoration: underline;
  }
`,D=i.footer`
  flex: 0 0 auto;
  height: 55px;
  padding: 0 20px;
  ${r({alignItem:"center",justifyContent:"center"})};

  @media (max-width: ${n}) {
    height: 80px;
  }
`,H=i.ul`
  width: 100%;
  font-size: ${({theme:e})=>e.fontSizes.px13};
  flex-wrap: wrap;

  ${r({alignItem:"center",justifyContent:"center"})};
`,J=i(x)`
  font-weight: ${({theme:e})=>e.fontWeight.light};
  font-size: ${({theme:e})=>e.fontSizes.px16};
  text-decoration: underline;
  color: ${({theme:e})=>e.colors.blue};
  transition: 0.2s ease-out;

  &:hover {
    opacity: 0.7;
  }
`,M=i(x)`
  text-decoration: none;
  display: inline-block;
  color: ${({theme:e})=>e.colors.text};
  width: 100%;
`,R=i.li`
  margin-right: 15px;
  cursor: pointer;
  transition: 0.2s ease-in;
  color: ${({theme:e})=>e.colors.text};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`,O=()=>{const e=f(),h=u(),s=$(),p=w.map(o=>t.jsx(R,{children:o},o)),g=async()=>{try{const o=await v.SignUpWithGoogle();h(j({id:o.uid,email:o.email,isGoogleAuth:!0,name:o.displayName,surname:null,phone:o.phoneNumber,telegramLink:null,gender:null,born:null})),e(a.profile)}catch(o){o instanceof b?s==null||s.open(T(o),k.error):console.error(o)}};return t.jsxs(L,{children:[t.jsxs(W,{children:[t.jsx(F,{}),t.jsxs(P,{children:[t.jsx(U,{src:z}),t.jsx(B,{children:"Happening now"}),t.jsx(C,{children:"Join Twitter today"}),t.jsxs(N,{children:[t.jsxs(d,{onClick:g,children:[t.jsx(G,{src:S}),"Sign up with Google"]}),t.jsx(d,{children:t.jsx(M,{to:a.sign_up,children:"Sign up with phone or email"})})]}),t.jsxs(A,{children:["By singing up you agree to the",t.jsx(c,{href:"#",children:"Terms of Service"})," and"," ",t.jsx(c,{href:"#",children:"Privacy Policy"}),", including"," ",t.jsx(c,{href:"#",children:"Cookie Use"})," ."]}),t.jsxs(E,{children:["Already have an account? ",t.jsx(J,{to:a.login,children:"Log in"})," "]})]})]}),t.jsx(D,{children:t.jsx(H,{children:p})})]})};export{O as SignUpPage};
