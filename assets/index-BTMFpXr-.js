import{u as f,a as w,l as b,q as S,e as i,d as k,F as u,j as n}from"./index-CH48g1iu.js";import{S as y}from"./index-BfiuTdk-.js";import{T as F}from"./index-BNE5OGZE.js";import{F as c,a as d}from"./index-C86McuiY.js";import{g as p}from"./getFirebaseErrorMessage-xBv1PUJL.js";import"./index-CsqDV37B.js";import"./index-C3LDNV5j.js";import"./index-DSf54jhu.js";const{px1150:I}=w,j=f.main`
  width: 60%;
  max-width: 910px;
  border: 1px solid ${({theme:a})=>a.colors.grey};
  border-top: none;

  @media (max-width: ${I}) {
    width: 100%;
    max-width: 100%;
  }
`,A=()=>{const{id:a}=b(r=>r.user),{id:o}=S(),[e,h]=i.useState(null),t=k();i.useEffect(()=>{let r=()=>{};return o&&(async()=>c.SubscriptionOnTweetUpdateForSearchPage(o,h))().then(s=>{r=s}),()=>{r()}},[o]);const l=async()=>{if(e)try{await c.RemoveTweet(e.uis.toString())}catch(r){r instanceof u?t==null||t.open(p(r),d.error):console.error(r)}},g=i.useCallback(async(r,m)=>{try{await c.ChangeTweetLike(m,r.toString())}catch(s){s instanceof u?t==null||t.open(p(s),d.error):console.error(s)}},[]),x=e==null?void 0:e.likes.length,T=(e==null?void 0:e.likes.indexOf(a))!==-1;return n.jsxs(j,{children:[n.jsx(y,{}),e&&n.jsx(F,{uis:e.uis,authorId:e.authorId,date:e.date,text:e.text,imgLink:e.imgLink,authorName:e.authorName,authorTag:e.authorTag,userId:a.toString(),handleRemoveTweet:l,handleChangeLike:g,likes:x,isActiveLikeIcon:T})]})};export{A as TweetSearchPage};
