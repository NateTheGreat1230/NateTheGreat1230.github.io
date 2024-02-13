import{d as u,m as h,r as v,k as _,o as r,c,g as t,j as o,h as l,a as e,i as m,X as p,_ as x,u as g,f as w}from"./entry.d-x_R0Hf.js";const k={class:"bg-slate-900 p-4 h-16 text-white flex flex-row justify-between items-center"},y={class:"hidden md:flex flex-row justify-right items-center gap-4"},j=e("button",{class:"text-lg p-2 w-24 border-2 border-white hover:border-violet-500 hover:text-violet-500 rounded-full font-semibold"},"Home",-1),N=e("button",{class:"text-lg p-2 w-36 border-2 border-white hover:border-violet-500 hover:text-violet-500 rounded-full font-semibold"},"Portfolio",-1),C=e("button",{class:"text-lg p-2 w-28 border-white hover:border-violet-500 border-2 hover:text-violet-500 rounded-full font-semibold"},"Contact",-1),$={class:"flex md:hidden"},T={key:0,class:"absolute top-20 right-4 p-4 bg-slate-900 text-white border rounded-lg border-gray-200 space-y-2 md:hidden"},H=u({__name:"Header",setup(f){h();const n=v(!1),d=()=>{n.value=!n.value},s=()=>{n.value=!1};return(a,Z)=>{const i=x,b=_("font-awesome-icon");return r(),c("div",k,[t(i,{to:"/",class:"text-4xl font-bold hover:text-violet-500 transition-all ease-in-out duration-300"},{default:o(()=>[l("Nate Washburn")]),_:1}),e("div",y,[t(i,{href:"/"},{default:o(()=>[j]),_:1}),t(i,{href:"/portfolio"},{default:o(()=>[N]),_:1}),t(i,{href:"/contact"},{default:o(()=>[C]),_:1})]),e("div",$,[e("button",{onClick:d,class:"text-2xl w-14 p-2 border-2 border-white hover:border-violet-500 rounded-full"},[t(b,{icon:["fas","bars"]})])]),m(n)?(r(),c("div",T,[t(i,{href:"/"},{default:o(()=>[e("button",{onClick:s,class:"block w-24 h-7 mb-2 border border-white text-center rounded-full hover:bg-violet-900"},"Home")]),_:1}),t(i,{href:"/portfolio"},{default:o(()=>[e("button",{onClick:s,class:"block w-24 h-7 mb-2 border border-white text-center rounded-full hover:bg-violet-900"},"Portfolio")]),_:1}),t(i,{href:"/contact"},{default:o(()=>[e("button",{onClick:s,class:"block w-24 h-7 border border-white text-center rounded-full hover:bg-violet-900"},"Contact")]),_:1})])):p("",!0)])}}}),G=""+globalThis.__publicAssetsURL("favicon.png"),L={class:"bg-slate-900 w-full sm:p-10 p-5 text-white"},M={class:"p-5 bg-slate-800 rounded-xl"},W={class:"p-2 flex flex-row justify-evenly"},B={class:"hidden md:flex flex-col space-x-5 justify-right mb-5"},P=e("img",{src:G,class:"w-48 object-cover hover:border rounded-3xl hover:border-violet-500 transition-all ease-in-out duration-100"},null,-1),S={class:"flex flex-col justify-right items-left gap-4"},V=e("p",{class:"font-bold text-lg"},"Useful links",-1),E={class:"flex flex-col justify-right items-left gap-4"},O=e("p",{class:"font-bold text-lg"},"Other Info",-1),R={class:"hidden sm:flex flex-col justify-right items-left gap-4"},F=e("p",{class:"font-bold text-lg"},"External Links",-1),I=e("div",{class:"w-full flex justify-center"},[e("div",{class:"w-11/12 rounded border-t-4 border-violet-500"})],-1),U={class:"pt-10 flex flex-row justify-evenly items-center"},A=e("p",{class:"hidden sm:flex"},[l("Made with Nuxt 3 and TailwindCSS "),e("br"),l("By Nate Washburn @NateTheGreat1230")],-1),X={class:"flex flex-col"},q=e("p",{class:"flex justify-center font-bold text-lg"},"Social Links",-1),z={class:"flex flex-row w-max justify-between"},D=e("p",{class:"hidden md:flex"},"© Copyright 2024 Nate Washburn",-1),J=u({__name:"Footer",setup(f){return h(),(n,d)=>{const s=x,a=_("font-awesome-icon");return r(),c("div",L,[e("div",M,[e("div",W,[e("div",B,[t(s,{to:"/"},{default:o(()=>[P]),_:1})]),e("div",S,[V,t(s,{to:"/",class:"duration-100 hover:text-violet-500"},{default:o(()=>[l("Home")]),_:1}),t(s,{to:"/portfolio",class:"duration-100 hover:text-violet-500"},{default:o(()=>[l("Portfolio")]),_:1}),t(s,{to:"/contact",class:"duration-100 hover:text-violet-500"},{default:o(()=>[l("Contact")]),_:1})]),e("div",E,[O,t(s,{to:"/resume.pdf",target:"_blank",class:"duration-100 hover:text-violet-500"},{default:o(()=>[l("Resume")]),_:1}),t(s,{to:"https://github.com/NateTheGreat1230?tab=overview&from=2023-12-01&to=2023-12-31",target:"_blank",class:"duration-100 hover:text-violet-500"},{default:o(()=>[l("Commit History")]),_:1}),t(s,{to:"https://github.com/PrismNet",target:"_blank",class:"duration-100 hover:text-violet-500"},{default:o(()=>[l("Organisation")]),_:1})]),e("div",R,[F,t(s,{to:"https://github.com/NateTheGreat1230",target:"_blank",class:"duration-100 hover:text-violet-500"},{default:o(()=>[l("GitHub")]),_:1}),t(s,{to:"https://www.linkedin.com/in/nathanpwashburn",target:"_blank",class:"duration-100 hover:text-violet-500"},{default:o(()=>[l("LinkedIn")]),_:1}),t(s,{to:"mailto:nathanprattwashburn@gmail.com",class:"duration-100 hover:text-violet-500"},{default:o(()=>[l("Email Me")]),_:1})])]),I,e("div",U,[A,e("div",X,[q,e("div",z,[t(s,{to:"https://github.com/NateTheGreat1230/",target:"_blank",class:"w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500"},{default:o(()=>[t(a,{icon:["fab","github"]})]),_:1}),t(s,{to:"https://www.linkedin.com/in/nathanpwashburn/",target:"_blank",class:"w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500"},{default:o(()=>[t(a,{icon:["fab","linkedin"]})]),_:1}),t(s,{to:"mailto:nathanprattwashburn@gmail.com",target:"_blank",class:"w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500"},{default:o(()=>[t(a,{icon:["fas","envelope"]})]),_:1}),t(s,{to:"https://discord.com/users/968603251664625764",target:"_blank",class:"w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500"},{default:o(()=>[t(a,{icon:["fab","discord"]})]),_:1}),t(s,{to:"https://codepen.io/NateTheGreat1230",target:"_blank",class:"w-10 h-10 flex justify-center items-center text-2xl transition-all ease-in-out duration-100 hover:text-violet-500"},{default:o(()=>[t(a,{icon:["fab","codepen"]})]),_:1})])]),D])])])}}}),K={class:"flex flex-col h-screen font-sans"},Q={class:"flex-1 bckgrnd"},Y={class:"h-full w-full"},et=u({__name:"default",setup(f){return g({titleTemplate:n=>n?`${n} | Nate Washburn`:"Nate Washburn",link:[{rel:"icon",type:"image/x-png",href:"/favicon.png"}]}),(n,d)=>{const s=H,a=J;return r(),c("div",K,[t(s),e("div",Q,[e("main",Y,[w(n.$slots,"default")])]),t(a)])}}});export{et as default};