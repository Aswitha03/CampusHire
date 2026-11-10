// Change to deployed backend URL before publishing frontend.
const API_BASE="http://127.0.0.1:8000";
const token=()=>localStorage.getItem("campushire_token");
async function request(url,opts={}){const h={...(opts.headers||{})};if(token())h.Authorization="Token "+token();const r=await fetch(url,{...opts,headers:h});const d=await r.json().catch(()=>({}));if(!r.ok)throw Error(d.detail||JSON.stringify(d));return d;}
