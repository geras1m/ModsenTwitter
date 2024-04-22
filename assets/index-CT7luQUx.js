import{u as s,m as d,a as N,e as c,l as W,d as k,j as t,i as A,S as B,h as O,F as J}from"./index-CH48g1iu.js";import{u as P,E as R}from"./index.esm-BrkksOYA.js";import{a as q}from"./index-CsqDV37B.js";import{P as G}from"./index-DSf54jhu.js";import{F as $,a as I,E as H}from"./index-C86McuiY.js";const m="textarea",K="What’s happening",x={textarea:"Please, add some text.",maxWeightOfFile:"Overweight, maximum size of image is 2MB",symbolLimit:"The maximum number of symbols is 200"},{px800:g}=N,Q=s.div`
  padding: 18px 12px 12px 27px;

  ${d({alignItem:"start",justifyContent:"space-between"})};

  @media (max-width: ${g}) {
    padding: 18px 5px 12px;
  }
`,V=s.form`
  margin-left: 28px;
  width: 100%;

  @media (max-width: ${g}) {
    margin-left: 5px;
  }
`,X=s.textarea`
  resize: none;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 6px;
  width: 100%;
  font-size: ${({theme:e})=>e.fontSizes.px18};
  color: ${({theme:e})=>e.colors.text};
  transition: 0.2s ease-in;
  padding: 10px;
  height: 80px;

  &::placeholder {
    font-weight: ${({theme:e})=>e.fontWeight.semiBold};
    font-size: ${({theme:e})=>e.fontSizes.px22};
    color: ${({theme:e})=>e.colors.grey};
  }

  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.blue};
  }
`,Y=s.div`
  ${d({alignItem:"center",justifyContent:"space-between"})}
`,Z=s.div`
  position: relative;
  transition: 0.2s ease-in;

  ${d({alignItem:"center",justifyContent:"space-between"})}

  & label:hover {
    opacity: 0.7;
  }
`,_=s.input`
  visibility: hidden;
  width: 0;
  height: 0;
`,ee=s.img`
  cursor: pointer;
`,te=s.label``,se=s.span`
  margin-left: 10px;
  color: ${({theme:e})=>e.colors.grey};
  font-size: ${({theme:e})=>e.fontSizes.px16};
`,ae=s.button`
  padding: 15px 30px;
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

  &:disabled {
    color: ${({theme:e})=>e.colors.black};
    background-color: ${({theme:e})=>e.colors.white1};
  }

  @media (max-width: ${g}) {
    padding: 10px 15px;
    font-size: ${({theme:e})=>e.fontSizes.px16};
  }
`,oe=()=>{const e=new Date().getMonth(),l=new Date().getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e]} ${l}`},re=1048576,pe=c.memo(()=>{var b,w;const[e,l]=c.useState(!1),[p,u]=c.useState(null),[j,h]=c.useState(!1),{id:S,name:y,telegramLink:T}=W(a=>a.user),o=k(),{register:F,formState:{errors:r},handleSubmit:z,reset:v,setError:f,clearErrors:C}=P({mode:"onBlur"}),{UploadImageIcon:E}=q,M=async a=>{const{textarea:n}=a;if(n.length===0){f(m,{message:x.textarea});return}l(!0);try{const i=Date.now(),L=oe(),U=p?await $.AddImageToStorage(i,p):null;await $.CreateNewTweetInDB({id:i,authorName:y,authorId:S,text:n,imgLink:U,authorTag:T,date:L}),o==null||o.open(O,I.success)}catch(i){i instanceof J?o==null||o.open(H.unexpectedError,I.error):console.error(i)}v(),h(!1),u(null),l(!1)},D=a=>{var n;if((n=a.target.files)!=null&&n[0]){if(2*re<a.target.files[0].size){f(m,{message:x.maxWeightOfFile});return}C(),h(!0),u(a.target.files[0])}};return t.jsxs(Q,{children:[t.jsx(G,{size:"s"}),t.jsxs(V,{onSubmit:z(M),children:[(r==null?void 0:r.textarea)&&t.jsx(R,{children:((w=(b=r==null?void 0:r.textarea)==null?void 0:b.message)==null?void 0:w.toString())||A}),t.jsx(X,{"data-testid":"tweet-textarea-input",placeholder:K,...F(m,{maxLength:{value:200,message:x.symbolLimit}})}),t.jsxs(Y,{children:[t.jsxs(Z,{children:[t.jsx(_,{"data-testid":"tweet-image-input",id:"file",type:"file",accept:"image/jpeg",onChange:D}),t.jsx(te,{htmlFor:"file",children:t.jsx(ee,{src:E})}),j&&t.jsx(se,{children:"File is attached!"})]}),t.jsx(ae,{"data-testid":"tweet-create-button",disabled:e,children:e?t.jsx(B,{width:"20px",border:"5px"}):"Tweet"})]})]})]})});export{pe as C};
