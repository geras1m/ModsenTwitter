import{u as s,m as a,a as B,N as C,d as N,b as R,c as A,e as G,j as t,i as f,S as O,r as b,s as U,h as H,F as J}from"./index-CH48g1iu.js";import{u as K,E as w}from"./index.esm-BrkksOYA.js";import{T as Q,F as $,a as j}from"./index-C86McuiY.js";import{a as V,P as X}from"./validation-CZciOOzV.js";import{g as Y}from"./getFirebaseErrorMessage-xBv1PUJL.js";import"./index-CsqDV37B.js";const Z={email:{name:"email",placeholder:"Email address",type:"email",required:"Required field"},password:{name:"password",placeholder:"Password",required:"Required field",pattern:"The password should be at least 6 symbols long and contain a digit"}},_=s.section`
  width: 100%;
  max-width: 450px;
  flex-direction: column;

  ${a({alignItem:"start",justifyContent:"start"})};
`,ee=s.img``,te=s.h2`
  margin: 35px 0;
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px42};
  font-weight: ${({theme:e})=>e.fontWeight.black};

  @media (max-width: ${B.px500}) {
    font-size: ${({theme:e})=>e.fontSizes.px30};
  }
`,oe=s.form`
  width: 100%;
`,se=s.input`
  width: 100%;
  padding: 24px 20px;
  border-radius: 6px;
  background-color: transparent;
  color: ${({theme:e})=>e.colors.text};
  border: 1px solid ${({theme:e})=>e.colors.white1};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  transition: 0.3s ease;
  margin-bottom: 25px;

  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.blue};
  }
`,ie=s.button`
  border: none;
  border-radius: 76px;
  padding: 20px;
  width: 100%;
  color: ${({theme:e})=>e.colors.white};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  background-color: ${({theme:e})=>e.colors.blue};
  transition: 0.2s ease;
  cursor: pointer;
  margin-bottom: 40px;

  ${a({alignItem:"center",justifyContent:"center"})};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: ${({theme:e})=>e.colors.black};
    background-color: ${({theme:e})=>e.colors.white1};
  }
`,re=s(C)`
  display: inline-block;
  width: 100%;
  text-align: end;
  font-weight: ${({theme:e})=>e.fontWeight.light};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  text-decoration: underline;
  color: ${({theme:e})=>e.colors.blue};
  transition: 0.2s ease-out;
  margin-bottom: 17px;

  &:hover {
    opacity: 0.7;
  }
`,ae=()=>{var p,m,u,g;const e=N(),S=R(),I=A(),[n,d]=G.useState(!1),{register:l,formState:{errors:o},handleSubmit:y,reset:L}=K({mode:"onBlur"}),z=async T=>{const{email:h,password:v}=T;d(!0);try{const i=await $.LogIn(h,v),x=await $.GetDataItemFromDB(i.uid,"users");if(x){const{uis:k,name:q,surname:E,phone:P,telegramLink:D,gender:M,born:W}=x;I(U({id:k,isGoogleAuth:!1,email:h,name:q,surname:E,phone:P,telegramLink:D,gender:M,born:W})),e==null||e.open(H,j.success),S(b.profile)}}catch(i){i instanceof J?e==null||e.open(Y(i),j.error):console.error(i)}d(!1),L()},{email:c,password:r}=Z,F=l("password",{required:r.required,pattern:{value:V,message:r.pattern}});return t.jsxs(_,{children:[t.jsx(ee,{src:Q}),t.jsx(te,{children:"Log in to Twitter"}),t.jsxs(oe,{"data-testid":"login-form",onSubmit:y(z),children:[(o==null?void 0:o.email)&&t.jsx(w,{children:((m=(p=o==null?void 0:o.email)==null?void 0:p.message)==null?void 0:m.toString())||f}),t.jsx(se,{"data-testid":"login-email-input",placeholder:c.placeholder,...l("email",{required:c.required})}),(o==null?void 0:o.password)&&t.jsx(w,{children:((g=(u=o==null?void 0:o.password)==null?void 0:u.message)==null?void 0:g.toString())||f}),t.jsx(X,{placeholder:r.placeholder,register:F}),t.jsx(ie,{type:"submit","data-testid":"login-submit-button",disabled:n,children:n?t.jsx(O,{width:"20px",border:"5px"}):"Log In"}),t.jsx(re,{to:b.home,children:"Sign up to Twitter"})]})]})},ne=s.div`
  height: 100vh;
  padding: 0 10px;

  ${a({alignItem:"center",justifyContent:"center"})};
`,ge=()=>t.jsx(ne,{children:t.jsx(ae,{})});export{ge as LogInPage};
