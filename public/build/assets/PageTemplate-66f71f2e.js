import{a as e,j as o,r as I,F as u,L as h,q as y}from"./app-8ff90085.js";import{u as p,C as k,a as w,n as f,U as C}from"./GuestLayout-7ad501aa.js";import{o as s}from"./dropdown-71fc9d28.js";const l="/build/assets/saba-new-baner-1f1131f4.png",c="/build/assets/saba-new-baner-2-b6316562.png",S=()=>{const{isMobile:r}=p();return e("div",{children:o(k,{rowPerCount:r?1:2,children:[e("div",{className:"testimoni--wrapper",children:e("img",{src:l,alt:"carousel image"})}),e("div",{className:"testimoni--wrapper",children:e("img",{src:c,alt:"carousel image"})}),e("div",{className:"testimoni--wrapper",children:e("img",{src:l,alt:"carousel image"})}),e("div",{className:"testimoni--wrapper",children:e("img",{src:c,alt:"carousel image"})}),e("div",{className:"testimoni--wrapper",children:e("img",{src:l,alt:"carousel image"})}),e("div",{className:"testimoni--wrapper",children:e("img",{src:c,alt:"carousel image"})}),e("div",{className:"testimoni--wrapper",children:e("img",{src:l,alt:"carousel image"})}),e("div",{className:"testimoni--wrapper",children:e("img",{src:c,alt:"carousel image"})}),e("div",{className:"testimoni--wrapper",children:e("img",{src:l,alt:"carousel image"})}),e("div",{className:"testimoni--wrapper",children:e("img",{src:c,alt:"carousel image"})})]})})},F="/build/assets/overlayplay-d832e694.svg",z="/build/assets/titlebg-93e295f3.svg",T="/build/assets/leftcut-1c287b77.svg",R=s("div")(({})=>({position:"absolute",top:"0px",left:"0px",zIndex:300,background:`url(${z})`,backgroundRepeat:"no-repeat",display:"flex",height:"50px",width:"250px",alignItems:"center",paddingLeft:"20px","& img":{height:"25px"},"& p":{color:"#fff",fontSize:"16px",fontWeight:"bold",marginLeft:"10px"}})),L=s("div")(({isMobile:r})=>({position:"absolute",top:"-22px",left:"0",background:`url(${T})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",zIndex:200,height:r?"153px":"160px",width:"340px"})),N=s("div")(({isMobile:r,margin:i})=>({height:"fit-content",overflow:"hidden",padding:r?"20px 10px":"25px",margin:i?"25px":"0 25px 25px 25px",background:"#1D2036",borderRadius:"10px",position:"relative"})),W=({item:r,index:i,children:n})=>{const{isMobile:t}=p();return o(N,{isMobile:t,margin:r.margin,children:[e(L,{isMobile:t}),o(R,{children:[e("img",{src:r==null?void 0:r.icon,alt:"",style:{height:r.iconSize}}),e("p",{children:r==null?void 0:r.title})]}),n]},i)},M=s("div")(({})=>({})),E=s("div")(({perColumn:r,page:i})=>({display:"grid",gridGap:"10px",gridTemplateColumns:`repeat(${r}, minmax(100px, 1fr))`,marginTop:"60px","@media (max-width: 800px)":{gridTemplateColumns:"repeat(2, minmax(100px, 1fr))"},"@media (max-width: 500px)":{gridTemplateColumns:!["home","games"].includes(i)&&"repeat(1, minmax(100px, 1fr))"},position:"relative",zIndex:400})),v=s("img")(({height:r,width:i,hoverEffect:n})=>({height:r||"100px",width:i||"100px",cursor:"pointer",borderRadius:"10px",position:"relative","&:hover":{transform:n!=="overlay"&&"scale(1.05)",transition:"all 0.3s ease-in-out"}})),G=({item:r,parent:i,visible:n})=>e("div",{style:{visibility:n?"visible":"hidden",position:"absolute",bottom:"0",right:"0",height:"100%",width:"100%",background:"rgba(43, 41, 86, 0.8)",padding:"5px 10px",borderRadius:"10px",cursor:"pointer",zIndex:500,transition:"visibility 0.3s linear,opacity 0.3s linear;"},children:e("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"column",height:"100%",alignItems:"center"},children:i.hoverText?e("div",{style:{margin:"auto 0"},children:e(w,{text:i.hoverText,onSubmit:()=>y.Inertia.visit(r.link),background:"#3586FF",styles:{padding:"10px 20px",borderRadius:"15px"}})}):o(u,{children:[e("p",{style:{color:"#fff",fontSize:"18px",fontWeight:"bold",textDecoration:"none"},children:r==null?void 0:r.title}),e(h,{href:r.link,children:e("img",{src:F,alt:"",style:{height:"50px"}})}),e("p",{children:"Pragmatic play"})]})})}),H=({gridItems:r})=>{const{isMobile:i}=p(),[n,t]=I.exports.useState(-1);return e(M,{children:r.map((a,x)=>e(W,{item:a,index:x,children:o(u,{children:[e(E,{perColumn:a.perColumn,page:a.page,children:a.images.slice(0,i&&["home"].includes(a.page)?a.countOnMobile:a==null?void 0:a.images.length).map((d,g)=>e("div",{style:{position:"relative"},onMouseEnter:()=>t(g),onMouseLeave:()=>t(-1),children:a.hoverEffect==="overlay"?o(u,{children:[e(G,{item:d,parent:a,visible:n===g&&a.hoverEffect==="overlay"}),e(v,{src:d.image,width:a==null?void 0:a.imageWidth,height:a==null?void 0:a.imageHeight,hoverEffect:a==null?void 0:a.hoverEffect},g)]}):e(h,{href:d.link,children:e(v,{src:d.image,width:a==null?void 0:a.imageWidth,height:a==null?void 0:a.imageHeight,hoverEffect:a==null?void 0:a.hoverEffect},g)})}))}),a.page==="home"&&a.countOnMobile===4&&e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"},children:e(w,{text:"See more",background:"#3586FF",styles:{padding:"10px 30px",borderRadius:"15px"},onSubmit:()=>{y.Inertia.visit(a.urlForMore)}})})]})},x))})},j=s("div")(({isMobile:r})=>({padding:r?"20px 20px 0 20px":"15px 20px",display:"flex",justifyContent:"space-between",overflowX:"auto",gap:r&&"50px","-ms-overflow-style":"none","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"},background:r&&"#191D3A"})),b=s("div")(({isMobile:r})=>({display:"flex",alignItems:"center",gap:r?"50px":"20px",minWidth:"max-content"})),m=s("div")(({active:r})=>({display:"flex",cursor:"pointer",paddingBottom:"5px",borderBottom:r&&"2px solid #3586FF",p:{marginLeft:"5px",marginTop:"3px",fontSize:"14px",color:r?"#3586FF":"#8990AE",fontWeight:"700",fontFamily:"Montserrat, sans-serif",whiteSpace:"nowrap"}})),B=()=>{const{isMobile:r}=p(),i=typeof window!==void 0?window.location.pathname.split("/")[1]:"";return console.log("location",i),o(j,{isMobile:r,children:[e(b,{isMobile:r,children:f.slice(0,5).map((n,t)=>e(h,{href:n.link,children:o(m,{active:i==n.link.replace("/",""),children:[e("img",{src:n.icon,alt:n.name,style:{filter:i==n.link.replace("/","")&&"invert(41%) sepia(83%) saturate(2321%) hue-rotate(203deg) brightness(104%) contrast(103%)"}}),e("p",{children:n.name})]},t)}))}),o(b,{isMobile:r,children:[f.slice(5,8).map((n,t)=>o(h,{href:n.link,children:[o(m,{active:i==n.link.replace("/",""),children:[e("img",{src:n.icon,alt:n.name,style:{filter:i==n.link.replace("/","")&&"invert(41%) sepia(83%) saturate(2321%) hue-rotate(203deg) brightness(104%) contrast(103%)"}}),e("p",{children:n.name})]},t)," "]})),!r&&e(C,{isLoggedIn:!0})]})]})},P="/build/assets/mainBg-ca38ca97.svg",$="/build/assets/footercut-52f5e2dc.png",D=s("div")(({isMobile:r})=>({background:`url(${P})`,width:r?"100%":"95%",height:"fit-content",borderRadius:"10px",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"})),O=s("div")(({theme:r})=>({height:"100px",width:"100%",position:"absolute",background:`url(${$})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",bottom:"-70px",zIndex:100})),A=({innerHeader:r,homeCarousel:i,gridWithHeader:n,children:t})=>{const{isMobile:a}=p();return o(D,{isMobile:a,children:[r&&e(B,{}),i&&e(S,{}),t,n&&e(H,{gridItems:n}),!a&&e(O,{})]})},J=A;export{H as I,J as P,W as a};
