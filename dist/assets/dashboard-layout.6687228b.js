import{G as h,u as p,b as v,a as b,c as a,N as g,j as e,C as t,B as u,L as r,f as d,g as x,h as f,i as C,r as m,O as z}from"./index.d6460b1b.js";function n(s){return h({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}}]})(s)}function k(s){return h({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 0 1-11.3 0L261.7 352a8.03 8.03 0 0 1 0-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 0 1-79.2 0 55.95 55.95 0 0 1 0-79.2 55.87 55.87 0 0 1 54.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 0 1 0-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 0 1-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z"}}]})(s)}const w=()=>{const s=p(),c=v(),{userInfo:i}=b(l=>l.login),N=()=>{s(f()),s(C()),c("/login")},o=()=>{const l=document.getElementById("sidebarCollapse");l&&(l.classList.contains("show")?l.classList.remove("show"):l.classList.add("show"))};return a(g,{expand:"lg",variant:"dark",className:" show navbar-vertical  px-0 py-3  border-bottom border-bottom-lg-0 ",id:"navbarVertical",style:{backgroundColor:"#1b1b1b"},children:e(t,{fluid:!0,children:[a(u,{className:"navbar-toggler ms-n2","data-bs-toggle":"collapse","data-bs-target":"#sidebarCollapse","aria-controls":"sidebarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",onClick:o,children:a("span",{className:"navbar-toggler-icon"})}),a(r,{className:"navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-flex align-items-center",to:"/",children:e("h2",{className:"logo text-white",children:[a("span",{className:"text-danger",children:"W2C"})," SPACE"]})}),e("div",{className:"collapse navbar-collapse",id:"sidebarCollapse",children:[e("ul",{className:"navbar-nav",onClick:o,children:[a("li",{className:"nav-item  ",children:e(r,{className:"nav-link p-5",to:"/dashboard",children:[a(k,{className:"me-2",size:"1.5rem"})," Stats"]})}),a("li",{className:"nav-item ",children:e(r,{className:"nav-link p-5",to:"/dashboard/product-list",children:[a(n,{className:"me-2",size:"1.5rem"})," Prodotti"]})}),a("li",{className:"nav-item ",children:e(r,{className:"nav-link p-5",to:"/dashboard/user-list",children:[a(n,{className:"me-2",size:"1.5rem"})," Users"]})}),a("li",{className:"nav-item ",children:e(r,{className:"nav-link p-5",to:"/dashboard/orders-list",children:[a(n,{className:"me-2",size:"1.5rem"})," Orders"]})})]}),a("hr",{className:"navbar-divider my-5 opacity-20"}),a("div",{className:""}),e("ul",{className:"navbar-nav",children:[a("li",{className:"nav-item",children:e(d.Link,{as:x,to:`/profile/${i==null?void 0:i._id}`,children:[a("i",{className:"bi bi-person-square"})," Profile"]})}),a("li",{className:"nav-item",children:e(d.Link,{onClick:N,children:[a("i",{className:"bi bi-box-arrow-left"})," Logout"]})})]})]})]})})},L=()=>a("header",{className:"border-bottom pt-6 shadow text-white ",style:{backgroundColor:"#1b1b1b"},children:a(t,{fluid:!0,children:a("div",{className:"mb-npx h-16",children:e("div",{className:"row align-items-center ",children:[a("div",{className:"col-sm-6 col-12 mb-4 mb-sm-0 ",children:a("h1",{className:"mb-2 ",children:a(g.Brand,{href:"#home"})})}),a("div",{className:"col-sm-6 col-12 text-sm-end text-xl",children:"Admin Dashboard"})]})})})}),M=()=>{const{userInfo:s}=b(i=>i.login),c=v();return m.exports.useEffect(()=>{!s&&!(s!=null&&s.isAdmin)&&c("/")},[s]),a(m.exports.Fragment,{children:e("div",{className:"d-flex flex-column flex-lg-row ",children:[a(w,{}),e("div",{style:{minHeight:"100vh"},className:" flex-grow-1 ",children:[a(L,{}),a("main",{children:a(t,{fluid:!0,children:a(z,{})})})]})]})})};export{M as default};
