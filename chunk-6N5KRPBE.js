function s(c,r,n){let o=e=>`"${String(e??"").replace(/"/g,'""')}"`,a=[n.map(e=>o(e.titulo)).join(","),...r.map(e=>n.map(l=>o(l.valor(e))).join(","))],i=new Blob(["\uFEFF"+a.join(`\r
`)],{type:"text/csv;charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=`${c}.csv`,t.click(),URL.revokeObjectURL(t.href)}export{s as a};
