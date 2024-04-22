import{u as f,e as P,j as t,g as B,b as Q,c as _,d as H,s as J,h as K,r as O,F as X,i as j,S as Z,m as V}from"./index-CH48g1iu.js";import{F as ee,a as U,T as te}from"./index-C86McuiY.js";import{n as ae,p as ne,e as se,P as k,a as R}from"./validation-CZciOOzV.js";import{u as re,F as ie,E as S,I as Y,T as oe,D as le,P as de,a as ce,S as ue}from"./index.esm-BrkksOYA.js";import{g as me}from"./getFirebaseErrorMessage-xBv1PUJL.js";import"./index-CsqDV37B.js";const pe=f.select`
  width: 100%;
  margin-right: 20px;
  padding: 24px 20px;
  border-radius: 6px;
  background-color: transparent;
  color: ${({theme:a})=>a.colors.text};
  border: 1px solid ${({theme:a})=>a.colors.white1};
  cursor: pointer;
  transition: 0.2s ease-in;
  appearance: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: 1px solid ${({theme:a})=>a.colors.blue};
  }
`,W=f.option`
  background-color: ${({theme:a})=>a.colors.bg};
  color: ${({theme:a})=>a.colors.text};
`,C=P.memo(a=>{const{inputsName:s,handleChange:n,data:r,label:i}=a;return t.jsxs(pe,{"data-testid":`signup-select-${s}`,required:!0,name:s,onChange:n,children:[t.jsx(W,{label:i,hidden:!0}),r.map((o,d)=>t.jsx(W,{"data-testid":`signup-select-${s}-${o}`,value:s==="month"?d:Number(o),children:o},o))]})}),he=`Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante
phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id
ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
congue.`,M={year:"year",month:"month",day:"day"},A=3,E=25,ge=17,xe={name:{name:"name",placeholder:"Name",type:"text",required:"Required field",minLength:`The minimum line length is ${A}`,maxLength:`The maximum line length is ${E}`},phone:{name:"phone",placeholder:"Phone number",type:"tel",required:"Required field",pattern:"Phone number should follow the pattern +375 (29/25/44/33) 1234567"},email:{name:"email",placeholder:"Email",type:"email",required:"Required field",pattern:"Invalid email"},password:{name:"password",placeholder:"Password",required:"Required field",pattern:"The password should be at least 6 symbols long and contain a digit"},confirmPassword:{name:"confirmPassword",placeholder:"Сonfirm password",required:"Required field",pattern:"The password should be at least 6 symbols long and contain a digit"}},fe=()=>{const s=new Date().getFullYear(),n=[];for(let r=0;r<=s-1900;r+=1)n.push(1900+r);return n.reverse()},be=a=>{const s=new Date,n=s.getFullYear(),r=s.getMonth();return n===a?B.filter((i,o)=>o<=r):B},we=(a,s)=>{const n=[];if(!a||!s){for(let e=1;e<=31;e+=1)n.push(e);return n}const i=new Date,o=i.getFullYear(),d=i.getMonth(),c=32-new Date(s,a,32).getDate();if(o===s&&d===a){for(let e=1;e<=i.getDate();e+=1)n.push(e);return n}for(let e=1;e<=c;e+=1)n.push(e);return n},ye=()=>{const a=Q(),s=_(),[n,r]=P.useState(null),[i,o]=P.useState(null),[d,c]=P.useState(null),[e,v]=P.useState(!1),l=H(),{register:h,formState:{errors:g},handleSubmit:b,reset:w,setValue:D,setError:q}=re({mode:"onBlur"}),F=u=>{const m=u.target.name,{year:p,month:x,day:I}=M;m===x&&o(Number(u.target.value)),m===p&&c(Number(u.target.value)),m===I&&r(Number(u.target.value))},L=async u=>{const{email:m,name:p,phone:x,password:I,confirmPassword:z}=u;if(I!==z){q("confirmPassword",{message:"Password and Confirm password fields must match!"});return}try{v(!0);const y=await ee.SignUpWithForm({name:p,email:m,password:I,phone:x,yearBirth:d,monthBirth:i,dayBirth:n}),G=new Date(d,i,n);s(J({id:y.uid,isGoogleAuth:!1,surname:null,telegramLink:null,gender:null,email:m,born:G,phone:x,name:p})),l==null||l.open(K,U.success),a(O.profile)}catch(y){y instanceof X?l==null||l.open(me(y),U.error):console.error(y)}v(!1),w()},N=we(i,d),T=be(d),$=fe();return{dates:N,months:T,years:$,handlerOnSubmit:L,handleChange:F,isLoading:e,register:h,errors:g,handleSubmit:b,setValue:D}},je=(a,s)=>{const{value:n}=a.target;if(n.length>=18)return;const r=n.replace(/\D/g,"");if(r.length>5){const i=`+${r.slice(0,3)} (${r.slice(3,5)}) ${r.slice(5)}`;s("phone",i);return}s("phone",`+${r}`)},Se=()=>{var D,q,F,L,N,T,$,u,m,p;const{years:a,months:s,dates:n,isLoading:r,handleChange:i,handlerOnSubmit:o,handleSubmit:d,register:c,errors:e,setValue:v}=ye(),{name:l,phone:h,email:g,password:b,confirmPassword:w}=xe;return t.jsxs(ie,{onSubmit:d(o),children:[(e==null?void 0:e.name)&&t.jsx(S,{children:((q=(D=e==null?void 0:e.name)==null?void 0:D.message)==null?void 0:q.toString())||j}),t.jsx(Y,{"data-testid":"signup-input-name",placeholder:l.placeholder,type:l.type,maxLength:E,...c("name",{required:l.required,minLength:{value:A,message:l.minLength},maxLength:{value:E,message:l.maxLength},pattern:ae})}),(e==null?void 0:e.phone)&&t.jsx(S,{children:((L=(F=e==null?void 0:e.phone)==null?void 0:F.message)==null?void 0:L.toString())||j}),t.jsx(Y,{"data-testid":"signup-input-phone",placeholder:h.placeholder,type:h.type,maxLength:ge,...c("phone",{required:h.required,pattern:{value:ne,message:h.pattern},onChange:x=>je(x,v)})}),(e==null?void 0:e.email)&&t.jsx(S,{"data-testid":"signup-error-email",children:((T=(N=e==null?void 0:e.email)==null?void 0:N.message)==null?void 0:T.toString())||j}),t.jsx(Y,{"data-testid":"signup-input-email",placeholder:g.placeholder,type:g.type,...c("email",{required:g.required,pattern:{value:se,message:g.pattern}})}),(e==null?void 0:e.password)&&t.jsx(S,{children:((u=($=e==null?void 0:e.password)==null?void 0:$.message)==null?void 0:u.toString())||j}),t.jsx(k,{placeholder:b.placeholder,register:{...c("password",{required:b.required,pattern:{value:R,message:b.pattern}})}}),(e==null?void 0:e.confirmPassword)&&t.jsx(S,{children:((p=(m=e==null?void 0:e.confirmPassword)==null?void 0:m.message)==null?void 0:p.toString())||j}),t.jsx(k,{placeholder:w.placeholder,register:{...c("confirmPassword",{required:w.required,pattern:{value:R,message:w.pattern}})}}),t.jsx(oe,{to:O.home,children:"Use email"}),t.jsx(le,{children:"Date of birth"}),t.jsx(de,{children:he}),t.jsxs(ce,{children:[t.jsx(C,{label:"Month",data:s,inputsName:M.month,handleChange:i}),t.jsx(C,{label:"Day",data:n,inputsName:M.day,handleChange:i}),t.jsx(C,{label:"Year",data:a,inputsName:M.year,handleChange:i})]}),t.jsx(ue,{"data-testid":"signup-button",type:"submit",disabled:r,children:r?t.jsx(Z,{width:"20px",border:"5px"}):"Next"})]})},Pe=f.section`
  width: 100%;
  height: 100%;

  ${V({alignItem:"center",justifyContent:"center"})};
`,ve=f.div`
  width: 100%;
  max-width: 750px;
  padding: 30px 40px 40px;
  flex-direction: column;

  ${V({alignItem:"center",justifyContent:"center"})};
`,De=f.img`
  width: 40px;
  margin-bottom: 40px;
`,qe=f.h1`
  color: ${({theme:a})=>a.colors.text};
  font-size: 30px;
  align-self: flex-start;
  margin-bottom: 40px;
`,Me=()=>t.jsx(Pe,{children:t.jsxs(ve,{children:[t.jsx(De,{src:te}),t.jsx(qe,{children:"Create an account"}),t.jsx(Se,{})]})});export{Me as SignUpWithFormPage};
