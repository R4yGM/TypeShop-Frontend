import{a as r,u as b,r as p,K as x,j as s,c as e,s as u}from"./index.be2511ed.js";import{R as l}from"./Row.a0fee04d.js";import{C as c}from"./Col.59196bc7.js";import{C as i}from"./Card.8f88ff3a.js";import"./CardHeaderContext.cda22203.js";const C=()=>{const{total:m}=r(t=>t.productFilter),{orders:d}=r(t=>t.orders),{users:a}=r(t=>t.userList),o=b(),h=(()=>{let t=0;return d?(d.map(n=>{!n||(t+=n.totalPrice)}),t):500.3})();return p.exports.useEffect(()=>{o(x())},[o]),s(l,{className:"g-6 my-6",children:[e(c,{md:4,children:e(i,{className:" shadow border-0",children:s(i.Body,{children:[s(l,{children:[s(c,{children:[e("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Price"}),e("span",{className:"h3 font-bold mb-0",children:u(h)})]}),e("div",{className:"col-auto",children:e("div",{className:"icon icon-shape bg-tertiary text-white text-lg rounded-circle",children:e("i",{className:"bi bi-credit-card"})})})]}),s("div",{className:"mt-2 mb-0 text-sm",children:[s("span",{className:"badge badge-pill bg-soft-success text-success me-2",children:[e("i",{className:"bi bi-arrow-up me-1"}),"13%"]}),e("span",{className:"text-nowrap text-xs text-muted",children:"Depuis le mois dernier"})]})]})})}),e(c,{md:4,children:e(i,{className:" shadow border-0",children:s(i.Body,{children:[s(l,{children:[s(c,{children:[e("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Clients"}),e("span",{className:"h3 font-bold mb-0",children:(a==null?void 0:a.length)&&(a==null?void 0:a.length)})]}),e("div",{className:"col-auto",children:e("div",{className:"icon icon-shape bg-primary text-white text-lg rounded-circle",children:e("i",{className:"bi bi-people"})})})]}),s("div",{className:"mt-2 mb-0 text-sm",children:[s("span",{className:"badge badge-pill bg-soft-success text-success me-2",children:[e("i",{className:"bi bi-arrow-up me-1"}),"30%"]}),e("span",{className:"text-nowrap text-xs text-muted",children:"Depuis le mois dernier"})]})]})})}),e(c,{md:4,children:e(i,{className:" shadow border-0",children:s(i.Body,{children:[s(l,{children:[s(c,{children:[e("span",{className:"h6 font-semibold text-muted text-sm d-block mb-2",children:"Products"}),e("span",{className:"h3 font-bold mb-0",children:m})]}),e("div",{className:"col-auto",children:e("div",{className:"icon icon-shape bg-info text-white text-lg rounded-circle",children:e("i",{className:"bi bi-clock-history"})})})]}),s("div",{className:"mt-2 mb-0 text-sm",children:[s("span",{className:"badge badge-pill bg-soft-danger text-danger me-2",children:[e("i",{className:"bi bi-arrow-down me-1"}),"-5%"]}),e("span",{className:"text-nowrap text-xs text-muted",children:"Depuis le mois dernier"})]})]})})})]})};export{C as default};