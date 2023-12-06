import{r as t,c as n,e as p,d,j as T,F as X}from"./index.be2511ed.js";import{P as v}from"./index.65f1d40b.js";import{C as Y}from"./Col.59196bc7.js";function Z(e,o){return t.exports.Children.toArray(e).some(a=>t.exports.isValidElement(a)&&a.type===o)}const P={type:v.string,tooltip:v.bool,as:v.elementType},k=t.exports.forwardRef(({as:e="div",className:o,type:a="valid",tooltip:r=!1,...s},l)=>n(e,{...s,ref:l,className:p(o,`${a}-${r?"tooltip":"feedback"}`)}));k.displayName="Feedback";k.propTypes=P;var j=k;const ee=t.exports.createContext({});var F=ee;const b=t.exports.forwardRef(({id:e,bsPrefix:o,className:a,type:r="checkbox",isValid:s=!1,isInvalid:l=!1,as:m="input",...i},f)=>{const{controlId:c}=t.exports.useContext(F);return o=d(o,"form-check-input"),n(m,{...i,ref:f,type:r,id:e||c,className:p(a,o,s&&"is-valid",l&&"is-invalid")})});b.displayName="FormCheckInput";var O=b;const S=t.exports.forwardRef(({bsPrefix:e,className:o,htmlFor:a,...r},s)=>{const{controlId:l}=t.exports.useContext(F);return e=d(e,"form-check-label"),n("label",{...r,ref:s,htmlFor:a||l,className:p(o,e)})});S.displayName="FormCheckLabel";var w=S;const G=t.exports.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:a,inline:r=!1,reverse:s=!1,disabled:l=!1,isValid:m=!1,isInvalid:i=!1,feedbackTooltip:f=!1,feedback:c,feedbackType:u,className:y,style:C,title:$="",type:N="checkbox",label:x,children:g,as:J="input",...K},Q)=>{o=d(o,"form-check"),a=d(a,"form-switch");const{controlId:L}=t.exports.useContext(F),U=t.exports.useMemo(()=>({controlId:e||L}),[L,e]),I=!g&&x!=null&&x!==!1||Z(g,w),W=n(O,{...K,type:N==="switch"?"checkbox":N,ref:Q,isValid:m,isInvalid:i,disabled:l,as:J});return n(F.Provider,{value:U,children:n("div",{style:C,className:p(y,I&&o,r&&`${o}-inline`,s&&`${o}-reverse`,N==="switch"&&a),children:g||T(X,{children:[W,I&&n(w,{title:$,children:x}),c&&n(j,{type:u,tooltip:f,children:c})]})})})});G.displayName="FormCheck";var h=Object.assign(G,{Input:O,Label:w});const M=t.exports.forwardRef(({bsPrefix:e,type:o,size:a,htmlSize:r,id:s,className:l,isValid:m=!1,isInvalid:i=!1,plaintext:f,readOnly:c,as:u="input",...y},C)=>{const{controlId:$}=t.exports.useContext(F);return e=d(e,"form-control"),n(u,{...y,type:o,size:r,ref:C,readOnly:c,id:s||$,className:p(l,f?`${e}-plaintext`:e,a&&`${e}-${a}`,o==="color"&&`${e}-color`,m&&"is-valid",i&&"is-invalid")})});M.displayName="FormControl";var oe=Object.assign(M,{Feedback:j});const V=t.exports.forwardRef(({className:e,bsPrefix:o,as:a="div",...r},s)=>(o=d(o,"form-floating"),n(a,{ref:s,className:p(e,o),...r})));V.displayName="FormFloating";var ae=V;const A=t.exports.forwardRef(({controlId:e,as:o="div",...a},r)=>{const s=t.exports.useMemo(()=>({controlId:e}),[e]);return n(F.Provider,{value:s,children:n(o,{...a,ref:r})})});A.displayName="FormGroup";var B=A;const E=t.exports.forwardRef(({as:e="label",bsPrefix:o,column:a=!1,visuallyHidden:r=!1,className:s,htmlFor:l,...m},i)=>{const{controlId:f}=t.exports.useContext(F);o=d(o,"form-label");let c="col-form-label";typeof a=="string"&&(c=`${c} ${c}-${a}`);const u=p(s,o,r&&"visually-hidden",a&&c);return l=l||f,a?n(Y,{ref:i,as:"label",className:u,htmlFor:l,...m}):n(e,{ref:i,className:u,htmlFor:l,...m})});E.displayName="FormLabel";var re=E;const _=t.exports.forwardRef(({bsPrefix:e,className:o,id:a,...r},s)=>{const{controlId:l}=t.exports.useContext(F);return e=d(e,"form-range"),n("input",{...r,type:"range",ref:s,className:p(o,e),id:a||l})});_.displayName="FormRange";var te=_;const q=t.exports.forwardRef(({bsPrefix:e,size:o,htmlSize:a,className:r,isValid:s=!1,isInvalid:l=!1,id:m,...i},f)=>{const{controlId:c}=t.exports.useContext(F);return e=d(e,"form-select"),n("select",{...i,size:a,ref:f,className:p(r,e,o&&`${e}-${o}`,s&&"is-valid",l&&"is-invalid"),id:m||c})});q.displayName="FormSelect";var se=q;const z=t.exports.forwardRef(({bsPrefix:e,className:o,as:a="small",muted:r,...s},l)=>(e=d(e,"form-text"),n(a,{...s,ref:l,className:p(o,e,r&&"text-muted")})));z.displayName="FormText";var le=z;const D=t.exports.forwardRef((e,o)=>n(h,{...e,ref:o,type:"switch"}));D.displayName="Switch";var ne=Object.assign(D,{Input:h.Input,Label:h.Label});const H=t.exports.forwardRef(({bsPrefix:e,className:o,children:a,controlId:r,label:s,...l},m)=>(e=d(e,"form-floating"),T(B,{ref:m,className:p(o,e),controlId:r,...l,children:[a,n("label",{htmlFor:r,children:s})]})));H.displayName="FloatingLabel";var ce=H;const me={_ref:v.any,validated:v.bool,as:v.elementType},R=t.exports.forwardRef(({className:e,validated:o,as:a="form",...r},s)=>n(a,{...r,ref:s,className:p(e,o&&"was-validated")}));R.displayName="Form";R.propTypes=me;var fe=Object.assign(R,{Group:B,Control:oe,Floating:ae,Check:h,Switch:ne,Label:re,Text:le,Range:te,Select:se,FloatingLabel:ce});export{fe as F,ce as a};
