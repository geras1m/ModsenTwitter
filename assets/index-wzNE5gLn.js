import{u as n,m as i,e as y,d as oe,c as ne,l as J,j as t,P as se,i as u,S as re,s as ae,h as ie,F as le,a as de}from"./index-CH48g1iu.js";import{B as me,S as ce}from"./index-BNE5OGZE.js";import{C as pe}from"./index-CT7luQUx.js";import{P as ge}from"./index-DSf54jhu.js";import{T as he}from"./index-DVHYOLpU.js";import{u as xe,E as f}from"./index.esm-BrkksOYA.js";import{n as A,t as ue,P as N,a as G}from"./validation-CZciOOzV.js";import{F as k,a as H,E as fe}from"./index-C86McuiY.js";import{a as we}from"./index-CsqDV37B.js";const c=3,p=25,be={name:{name:"name",placeholder:"Name",type:"text",minLength:`The minimum line length is ${c}`,maxLength:`The maximum line length is ${p}`,pattern:"The name should start with letters"},surname:{name:"surname",placeholder:"Surname",type:"text",minLength:`The minimum line length is ${c}`,maxLength:`The maximum line length is ${p}`,pattern:"The surname should start with letters"},telegramLink:{name:"telegramLink",placeholder:"Telegram nickname",type:"text",minLength:`The minimum line length is ${c}`,maxLength:`The maximum line length is ${p}`,pattern:"Telegram nickname should follow the pattern: @nick "},newPassword:{name:"newPassword",placeholder:"New password",pattern:"The password should be at least 6 symbols long and contain a digit"},currentPassword:{name:"currentPassword",placeholder:"Сurrent password",pattern:"The password should be at least 6 symbols long and contain a digit"}},$e=n.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({theme:e})=>e.colors.black2};

  ${i({alignItem:"center",justifyContent:"center"})};
`,je=n.form`
  position: fixed;
  max-width: 500px;
  height: 100%;
  max-height: 700px;
  padding: 40px 10px 20px;
  border: 1px solid ${({theme:e})=>e.colors.grey};
  background-color: ${({theme:e})=>e.colors.bg};
  border-radius: 6px;
  margin: 30px;
  overflow-y: scroll;
`,ye=n.legend`
  margin-left: 20px;
  font-size: ${({theme:e})=>e.fontSizes.px18};
  color: ${({theme:e})=>e.colors.text};
`,Le=n.fieldset`
  border: 1px solid ${({theme:e})=>e.colors.white1};
  border-radius: 6px;
  flex-direction: column;
  padding: 10px 20px;
  margin-bottom: 15px;

  ${i({alignItem:"start",justifyContent:"center"})};

  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.blue};
  }
`,O=n.label`
  font-size: ${({theme:e})=>e.fontSizes.px18};
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  margin-bottom: 10px;

  ${i({alignItem:"center",justifyContent:"center"})};

  &:last-child {
    margin-bottom: 0;
  }

  & input {
    margin-right: 10px;
  }
`,w=n.input`
  width: 100%;
  padding: 24px 20px;
  border-radius: 6px;
  background-color: transparent;
  color: ${({theme:e})=>e.colors.text};
  border: 1px solid ${({theme:e})=>e.colors.white1};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  transition: 0.3s ease;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.blue};
  }
`,Pe=n.button`
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

  ${i({alignItem:"center",justifyContent:"center"})};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: ${({theme:e})=>e.colors.black};
    background-color: ${({theme:e})=>e.colors.white1};
  }
`,ke=n.button`
  position: absolute;
  top: 7px;
  right: 5px;
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
`,ve=({closeModal:e})=>{var T,I,F,C,E,B,W,M,D,U;const[l,a]=y.useState(!1),r=oe(),b=ne(),{id:m,email:L,isGoogleAuth:$}=J(P=>P.user),{register:d,formState:{errors:o},handleSubmit:K,reset:Q}=xe({mode:"onBlur"}),V=async P=>{a(!0);const{name:X,surname:Y,gender:Z,telegramLink:_,currentPassword:ee,newPassword:te}=P;try{await k.ChangeUserData({id:m,email:L,name:X,surname:Y,gender:Z,telegramLink:_,currentPassword:ee,newPassword:te});const s=await k.GetDataItemFromDB(m,"users");s&&await k.UpdateUserDataInTweets(m,s.name,s.telegramLink),s&&b(ae({id:s.uis,isGoogleAuth:s.isGoogleAuth,telegramLink:s.telegramLink,name:s.name,surname:s.surname,gender:s.gender,phone:s.phone,email:s.email,born:s.born})),r==null||r.open(ie,H.success)}catch(s){s instanceof le?r==null||r.open(fe.unexpectedError,H.error):console.error(s)}a(!1),Q()},{name:g,surname:h,telegramLink:x,currentPassword:S,newPassword:z}=be;return t.jsx(se,{children:t.jsx($e,{children:t.jsxs(je,{onSubmit:K(V),children:[t.jsx(ke,{"data-testid":"edit-form",type:"button",onClick:e}),(o==null?void 0:o.name)&&t.jsx(f,{children:((I=(T=o==null?void 0:o.name)==null?void 0:T.message)==null?void 0:I.toString())||u}),t.jsx(w,{"data-testid":"profile-input-name",type:g.type,placeholder:g.placeholder,...d("name",{minLength:{value:c,message:g.minLength},maxLength:{value:p,message:g.maxLength},pattern:{value:A,message:g.pattern}})}),(o==null?void 0:o.surname)&&t.jsx(f,{children:((C=(F=o==null?void 0:o.surname)==null?void 0:F.message)==null?void 0:C.toString())||u}),t.jsx(w,{"data-testid":"profile-input-surname",type:h.type,placeholder:h.placeholder,...d("surname",{minLength:{value:c,message:h.minLength},maxLength:{value:p,message:h.maxLength},pattern:{value:A,message:h.pattern}})}),t.jsxs(Le,{children:[t.jsx(ye,{children:"What is your gender?"}),t.jsxs(O,{htmlFor:"female",children:[t.jsx(w,{id:"female",type:"radio",value:"female",...d("gender")}),"Female"]}),t.jsxs(O,{htmlFor:"male",children:[t.jsx(w,{id:"male",type:"radio",value:"male",...d("gender")}),"Male"]})]}),(o==null?void 0:o.telegramLink)&&t.jsx(f,{children:((B=(E=o==null?void 0:o.telegramLink)==null?void 0:E.message)==null?void 0:B.toString())||u}),t.jsx(w,{type:x.type,placeholder:x.placeholder,...d("telegramLink",{minLength:{value:c,message:x.minLength},maxLength:{value:p,message:x.maxLength},pattern:{value:ue,message:x.pattern}})}),(o==null?void 0:o.currentPassword)&&t.jsx(f,{children:((M=(W=o==null?void 0:o.currentPassword)==null?void 0:W.message)==null?void 0:M.toString())||u}),!$&&t.jsx(N,{placeholder:S.placeholder,register:{...d("currentPassword",{pattern:{value:G,message:S.pattern}})}}),(o==null?void 0:o.newPassword)&&t.jsx(f,{children:((U=(D=o==null?void 0:o.newPassword)==null?void 0:D.message)==null?void 0:U.toString())||u}),!$&&t.jsx(N,{placeholder:z.placeholder,register:{...d("newPassword",{pattern:{value:G,message:z.pattern}})}}),t.jsx(Pe,{"data-testid":"profile-edit-button",disabled:l,type:"submit",children:l?t.jsx(re,{width:"20px",border:"5px"}):"Save"})]})})})},Se=n.button`
  position: absolute;
  top: 20px;
  right: 25px;
  border-radius: 50px;
  border: 1px solid ${({theme:e})=>e.colors.grey};
  padding: 10px 15px;
  color: ${({theme:e})=>e.colors.text};
  background-color: ${({theme:e})=>e.colors.bg};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  font-weight: ${({theme:e})=>e.fontWeight.semiBold};
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }
`,ze=()=>{const[e,l]=y.useState(!1),a=()=>{l(!e)};return y.useEffect(()=>{document.body.style.overflow=e?"hidden":"auto"},[e]),t.jsxs(t.Fragment,{children:[e&&t.jsx(ve,{"data-testid":"edit-modal",closeModal:a}),t.jsx(Se,{"data-testid":"edit-button",type:"button",onClick:a,children:"Edit profile"})]})},{BannerProfile:Te}=we,{px1150:v}=de,Ie=n.main`
  width: 60%;
  max-width: 910px;
  border: 1px solid ${({theme:e})=>e.colors.grey};
  border-top: none;

  @media (max-width: ${v}) {
    width: 100%;
    max-width: 100%;
  }
`,Fe=n.header`
  width: 100%;
  padding: 20px 15px;

  ${i({alignItem:"center",justifyContent:"space-between"})};
`,Ce=n.div`
  @media (max-width: ${v}) {
    margin-left: 20px;
    ${i({alignItem:"center",justifyContent:"start"})};
  }
`,Ee=n.p`
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px20};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
  margin-bottom: 5px;

  @media (max-width: ${v}) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`,Be=n.p`
  color: ${({theme:e})=>e.colors.grey};
  font-size: ${({theme:e})=>e.fontSizes.px16};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
`,We=n.div`
  width: 100%;
  height: 280px;
  background-image: url(${Te});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`,Me=n.div`
  position: relative;
  width: 100%;
  padding: 20px 25px 50px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.grey};
`,De=n.div`
  position: absolute;
  border-radius: 50%;
  top: -60px;

  ${i({alignItem:"center",justifyContent:"center"})};
`,Ue=n.h1`
  margin-top: 65px;
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px24};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
`,Ae=n.h2`
  margin-top: 5px;
  color: ${({theme:e})=>e.colors.grey};
  font-size: ${({theme:e})=>e.fontSizes.px16};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
`,j=n.p`
  margin: 17px 0;
  color: ${({theme:e})=>e.colors.text};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  font-weight: ${({theme:e})=>e.fontWeight.normal};

  &:last-child {
    margin-bottom: 57px;
  }
`,Ne=n.div`
  ${i({alignItem:"center",justifyContent:"start"})};
`,R=n.p`
  color: ${({theme:e})=>e.colors.grey};
  font-size: ${({theme:e})=>e.fontSizes.px18};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`,q=n.span`
  color: ${({theme:e})=>e.colors.text};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
`,Xe=y.memo(()=>{const{id:e,name:l,surname:a,telegramLink:r,phone:b,gender:m,email:L}=J($=>$.user);return t.jsxs(Ie,{children:[t.jsxs(Fe,{children:[t.jsx(me,{}),t.jsxs(Ce,{children:[t.jsxs(Ee,{children:[l," ",a]}),t.jsx(Be,{children:"1,070 Tweets"})]}),t.jsx(ce,{})]}),t.jsx(We,{}),t.jsxs(Me,{children:[t.jsx(De,{children:t.jsx(ge,{size:"l"})}),t.jsxs(Ue,{children:[l," ",a]}),r&&t.jsx(Ae,{children:r}),m&&t.jsx(j,{children:m}),b&&t.jsx(j,{children:b}),t.jsx(j,{children:L}),t.jsx(j,{children:"Software developer at Modsen"}),t.jsxs(Ne,{children:[t.jsxs(R,{children:[t.jsx(q,{children:"67"})," Following"]}),t.jsxs(R,{children:[t.jsx(q,{children:"47"})," Followers"]})]}),t.jsx(ze,{})]}),t.jsx(pe,{}),t.jsx(he,{page:"profile",id:e})]})});export{Xe as Profile};
