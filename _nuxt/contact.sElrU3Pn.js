import{r as u,u as v,c as f,a as e,w as h,b as i,v as c,o as x}from"./entry.o_m7ryPW.js";const g={class:"flex items-center justify-center h-full"},w={class:"text-center text-white p-6 m-10 rounded-2xl w-full bg-black bg-opacity-50 max-w-md"},y=e("h1",{class:"text-2xl mb-2"},"Contact Me",-1),_=e("p",{id:"error",class:"text-red-600 mb-2"},null,-1),j={class:"mb-4"},M={class:"mb-4"},F={class:"mb-4"},E=e("button",{type:"submit",class:"bg-violet-900 hover:bg-violet-700 border-white border-2 rounded-lg text-white px-6 py-2 mt-4"},"Send Message",-1),S="33acbebf-f081-4f5a-9f1e-cb54731ea6e4",I={__name:"contact",setup(k){const a=u(""),o=u(""),r=u(""),n=u(""),l=u("");v({title:"Contact"});const d=async()=>{await p()&&((await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:S,name:a.value,email:o.value,subject:r.value,message:n.value})})).json()).success?(alert("Message Sent!"),m()):alert("Message failed. Try again."))},m=()=>{a.value="",o.value="",r.value="",n.value="",l.value=""},p=()=>a.value?o.value?r.value?n.value?(l.value="",!0):(l.value="Form Incomplete. Enter your message.",!1):(l.value="Form Incomplete. Enter a subject.",!1):(l.value="Form Incomplete. Enter your email.",!1):(l.value="Form Incomplete. Enter your name.",!1);return(b,t)=>(x(),f("div",g,[e("div",w,[y,_,e("form",{onSubmit:h(d,["prevent"]),class:"flex flex-col"},[e("div",j,[i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),type:"text",id:"name",placeholder:"Name",class:"bg-slate-900 border-white border-2 rounded-lg text-white w-full px-3 py-2 mt-2"},null,512),[[c,a.value]])]),e("div",M,[i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.value=s),type:"email",id:"email",placeholder:"Email Address",class:"bg-slate-900 border-white rounded-lg border-2 text-white w-full px-3 py-2 mt-2"},null,512),[[c,o.value]])]),e("div",F,[i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>r.value=s),type:"text",id:"subject",placeholder:"Subject",class:"bg-slate-900 border-white border-2 rounded-lg text-white w-full px-3 py-2 mt-2"},null,512),[[c,r.value]])]),i(e("textarea",{class:"bg-slate-900 border-white border-2 rounded-lg text-white w-full px-3 py-2 mt-2",id:"message",placeholder:"Message","onUpdate:modelValue":t[3]||(t[3]=s=>n.value=s),name:"message"},null,512),[[c,n.value]]),E],32)])]))}};export{I as default};