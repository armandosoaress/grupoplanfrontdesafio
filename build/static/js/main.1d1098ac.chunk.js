(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{24:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var c,r,o,a,s,i,d,b,p,j,l,x,u,h,O,f,g,m,v,w,k,y,S,z,C,I,T,E,D,A,N,P,F,R,B,L,M,J,V,q,Q,U,G,H,K,W,X,Y,Z,$,_,nn,en,tn,cn=t(1),rn=t.n(cn),on=t(25),an=t.n(on),sn=t(7),dn=t(6),bn=t(4),pn=t.n(bn),jn=t(9),ln=t(5),xn=(t(24),t(2)),un=t(3),hn=un.a.section(c||(c=Object(xn.a)(["\n    max-width: 960px;\n    margin: 20px auto;\n    box-shadow: 0 0 1em #6c757d;\n    padding: 0px 20px 20px;\n"]))),On=(un.a.section(r||(r=Object(xn.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),un.a.section(o||(o=Object(xn.a)(["\n    margin: 25px 0px;\n"]))),un.a.button(a||(a=Object(xn.a)(["\nwidth: 130px;\nheight: 40px;\ncolor: #fff;\nborder-radius: 5px;\npadding: 10px 25px;\nfont-family: 'Lato', sans-serif;\nfont-weight: 500;\nbackground: transparent;\ncursor: pointer;\ntransition: all 0.3s ease;\nposition: relative;\ndisplay: inline-block;\n box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),\n 7px 7px 20px 0px rgba(0,0,0,.1),\n 4px 4px 5px 0px rgba(0,0,0,.1);\noutline: none;\n\nborder: none;\ntransition: all 0.3s ease;\noverflow: hidden;\n\n:after {\n    position: absolute;\n    content: \" \";\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n     background-color: #f5811d;\n  background-image: linear-gradient(515deg, #242424 70%, #f5811d 4%);\n    transition: all 0.3s ease;\n  }\n\n  hover {\n    background: transparent;\n    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),\n                -4px -4px 6px 0 rgba(116, 125, 136, .2), \n      inset -4px -4px 6px 0 rgba(255,255,255,.5),\n      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);\n    color: #fff;\n  }\n\n  :hover:after {\n    -webkit-transform: scale(2) rotate(180deg);\n    transform: scale(2) rotate(180deg);\n    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),\n                -4px -4px 6px 0 rgba(116, 125, 136, .2), \n      inset -4px -4px 6px 0 rgba(255,255,255,.5),\n      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);\n  }\n    \n"]))),un.a.button(s||(s=Object(xn.a)(["\n    background-color: #fff;\n    color: #0d6efd;\n    padding: 5px 8px;\n    border: 1px solid #0d6efd;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    :hover{\n        background-color: #0d6efd;\n        color: #fff;\n    }\n"]))),un.a.button(i||(i=Object(xn.a)(["\n    background-color: #fff;\n    color: #ffc107;\n    padding: 5px 8px;\n    border: 1px solid #ffc107;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    :hover{\n        background-color: #ffc107;\n        color: #fff;\n    }\n"]))),un.a.button(d||(d=Object(xn.a)(["\n    background-color: #fff;\n    color: #dc3545;\n    padding: 5px 8px;\n    border: 1px solid #dc3545;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    :hover{\n        background-color: #dc3545;\n        color: #fff;\n    }\n"]))),un.a.div(b||(b=Object(xn.a)(["\n    display: inline-block;\n    margin-top:12px;\na {\n    color: black;\n    background-color: white;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n  }\n a.active {\n    background-color: #4CAF50;\n    color: white;\n  }\n  a:hover:not(.active) {background-color: #ddd;}\n\n"])))),fn=un.a.p(p||(p=Object(xn.a)(["\n    background-color: #d1e7dd;\n    color: #0f5132;\n    margin: 20px 0;\n    border: 1px solid #badbcc;\n    border-radius: 4px;\n    padding: 7px;\n"]))),gn=un.a.p(j||(j=Object(xn.a)(["\n    background-color: #f8d7da;\n    color: #842029;\n    margin: 20px 0;\n    border: 1px solid #f5c2c7;\n    border-radius: 4px;\n    padding: 7px;\n"]))),mn=(un.a.h1(l||(l=Object(xn.a)(["\n    color: #3e3e3e;\n    font-size: 23px;\n"]))),un.a.table(x||(x=Object(xn.a)(["\n\n   \n"]))),t(0)),vn=function(){var n=Object(cn.useState)([]),e=Object(ln.a)(n,2),t=e[0],c=e[1],r=Object(cn.useState)([]),o=Object(ln.a)(r,2),a=o[0],s=o[1],i=Object(cn.useState)({type:"",mensagem:""}),d=Object(ln.a)(i,2),b=d[0],p=d[1],j=function(){var n=Object(jn.a)(pn.a.mark((function n(e){return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:document.getElementById("anterior").style.display="none",fetch("https://www.armandosoares.com.br/grupoplan/api/produtos?page=1").then((function(n){return n.json()})).then((function(n){return localStorage.setItem("proxima",n.proxima),localStorage.setItem("anterior",n.Anterior),localStorage.setItem("atual",n.npagina),localStorage.setItem("ultima",n.nTotpagina),l(n)}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=Object(jn.a)(pn.a.mark((function n(e){return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"p\xe1gina n\xe3o dispon\xedvel"==e.message?(c([{nome:"Nenhum registro encontrado"}]),document.getElementById("b").style.display="none"):(c(e.records),s(e.nTotpagina));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=Object(jn.a)(pn.a.mark((function n(e){return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:document.getElementById("anterior").style.display="https://www.armandosoares.com.br/grupoplan/api/produtos?page=1"==e?"none":"inline",fetch(e).then((function(n){return n.json()})).then((function(n){return localStorage.setItem("proxima",n.proxima),localStorage.setItem("anterior",n.Anterior),localStorage.setItem("atual",n.npagina),localStorage.setItem("ultima",n.nTotpagina),c(n.records),u(n.npagina)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function u(n){n==localStorage.getItem("ultima")?document.getElementById("proxima").style.display="none":document.getElementById("proxima").style.display="inline"}var h=function(){var n=Object(jn.a)(pn.a.mark((function n(e){return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://www.armandosoares.com.br/grupoplan/api/produto?id="+e,{method:"delete",headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(n){n.erro?p({type:"erro",mensagem:n.status}):(p({type:"success",mensagem:n.status}),j())})).catch((function(){p({type:"erro",mensagem:"Erro: Produto n\xe3o apagado com sucesso, tente mais tarde"})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();Object(cn.useEffect)((function(){j()}),[]);var O=function(){for(var n=[],e=function(e){e==localStorage.getItem("atual")?n.push(Object(mn.jsx)("a",{onClick:function(){return x("https://www.armandosoares.com.br/grupoplan/api/produtos?page="+e)},class:"active",href:"#",children:e})):n.push(Object(mn.jsx)("a",{onClick:function(){return x("https://www.armandosoares.com.br/grupoplan/api/produtos?page="+e)},href:"#",children:e}))},t=1;t<=a;t++)e(t);return n};return Object(mn.jsxs)(hn,{children:["erro"===b.type?Object(mn.jsxs)(gn,{children:['"',"erro",'"']}):"","success"===b.type?Object(mn.jsx)(fn,{children:"Eletronico deletado com sucesso"}):"",Object(mn.jsx)("center",{children:Object(mn.jsx)("h2",{className:"crud",children:"Crud eletrodomestico"})}),Object(mn.jsx)("div",{class:"grid-container",children:Object(mn.jsx)("div",{children:Object(mn.jsx)(sn.b,{to:"/Seach",children:Object(mn.jsxs)("button",{class:"button button--nanuk button--round-l button--text-thick button--inverted",children:["\ud83d\udd0e ",Object(mn.jsx)("span",{children:"P"}),Object(mn.jsx)("span",{children:"E"}),Object(mn.jsx)("span",{children:"S"}),Object(mn.jsx)("span",{children:"Q"}),Object(mn.jsx)("span",{children:"U"}),Object(mn.jsx)("span",{children:"I"}),Object(mn.jsx)("span",{children:"S"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"R"})]})})})}),Object(mn.jsx)("div",{children:Object(mn.jsxs)("table",{children:[Object(mn.jsxs)("tr",{children:[Object(mn.jsx)("th",{children:"ID"}),Object(mn.jsx)("th",{children:"Nome"}),Object(mn.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(mn.jsx)("th",{children:"Tens\xe3o"}),Object(mn.jsx)("th",{children:"Marca"})]}),Object(mn.jsx)("tbody",{children:Object.values(t).map((function(n){return Object(mn.jsxs)(mn.Fragment,{children:[Object(mn.jsxs)("tr",{children:[Object(mn.jsx)("td",{children:n.id}),Object(mn.jsx)("td",{children:n.nome}),Object(mn.jsx)("td",{children:n.descricao}),Object(mn.jsx)("td",{children:n.tensao}),Object(mn.jsx)("td",{children:n.marca}),Object(mn.jsx)("td",{children:Object(mn.jsxs)("ul",{id:"b",children:[Object(mn.jsxs)("li",{children:[Object(mn.jsx)(sn.b,{to:"/visualizar/"+n.id,children:Object(mn.jsxs)("button",{class:"button button--moema button--inverted button--text-thick button--size-s",children:[Object(mn.jsx)("span",{children:"V"}),Object(mn.jsx)("span",{children:"i"}),Object(mn.jsx)("span",{children:"z"}),Object(mn.jsx)("span",{children:"u"}),Object(mn.jsx)("span",{children:"a"}),Object(mn.jsx)("span",{children:"l"}),Object(mn.jsx)("span",{children:"i"}),Object(mn.jsx)("span",{children:"z"}),Object(mn.jsx)("span",{children:"a"}),Object(mn.jsx)("span",{children:"r"})]})})," "]}),Object(mn.jsxs)("li",{children:[" ",Object(mn.jsx)(sn.b,{to:"/editar/"+n.id,children:Object(mn.jsxs)("button",{class:" editar button button--moema button--inverted button--text-thick button--size-s",children:[Object(mn.jsx)("span",{children:"E"}),Object(mn.jsx)("span",{children:"d"}),Object(mn.jsx)("span",{children:"i"}),Object(mn.jsx)("span",{children:"t"}),Object(mn.jsx)("span",{children:"a"}),Object(mn.jsx)("span",{children:"r"})]})})," "]}),Object(mn.jsx)("li",{children:Object(mn.jsxs)("button",{onClick:function(){return h(n.id)},class:"deletar button button--moema button--inverted button--text-thick button--size-s",children:[Object(mn.jsx)("span",{children:"D"}),Object(mn.jsx)("span",{children:"e"}),Object(mn.jsx)("span",{children:"l"}),Object(mn.jsx)("span",{children:"e"}),Object(mn.jsx)("span",{children:"t"}),Object(mn.jsx)("span",{children:"a"}),Object(mn.jsx)("span",{children:"r"})]})})]})})]},n.id),Object(mn.jsx)("br",{})]})}))})]})}),Object(mn.jsx)("div",{class:"grid-container",children:Object(mn.jsx)("div",{children:Object(mn.jsx)(sn.b,{to:"/cadastrar",children:Object(mn.jsxs)("button",{class:"button button--nanuk button--round-l button--text-thick button--inverted",children:["\u2795 ",Object(mn.jsx)("span",{children:"C"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"D"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"S"}),Object(mn.jsx)("span",{children:"T"}),Object(mn.jsx)("span",{children:"R"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"R"})]})})})}),Object(mn.jsx)("center",{children:Object(mn.jsxs)(On,{children:[Object(mn.jsx)("a",{id:"anterior",onClick:function(){return x(localStorage.getItem("anterior"))},href:"#",children:"\xab"}),Object(mn.jsx)(O,{}),Object(mn.jsx)("a",{id:"proxima",onClick:function(){return x(localStorage.getItem("proxima"))},href:"#",children:"\xbb"})]})})]})},wn=t(14),kn=t(15),yn=un.a.section(u||(u=Object(xn.a)(["\n    max-width: 960px;\n    margin: 20px auto;\n    box-shadow: 0 0 1em #6c757d;\n"]))),Sn=un.a.section(h||(h=Object(xn.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),zn=un.a.section(O||(O=Object(xn.a)(["\n    margin: 25px 0px;\n"]))),Cn=(un.a.button(f||(f=Object(xn.a)(["\n    background-color: #fff;\n    color: #0dcaf0;\n    padding: 6px 9px;\n    border: 1px solid #0dcaf0;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 18px;\n    :hover{\n        background-color: #31d2f2;\n        color: #fff;\n    }\n"]))),un.a.h1(g||(g=Object(xn.a)(["\n    color: #whi;\n    font-size: 23px;\n"])))),In=un.a.p(m||(m=Object(xn.a)(["\n    background-color: #d1e7dd;\n    color: #0f5132;\n    margin: 20px 0;\n    border: 1px solid #badbcc;\n    border-radius: 4px;\n    padding: 7px;\n"]))),Tn=un.a.p(v||(v=Object(xn.a)(["\n    background-color: #f8d7da;\n    color: #842029;\n    margin: 20px 0;\n    border: 1px solid #f5c2c7;\n    border-radius: 4px;\n    padding: 7px;\n"]))),En=un.a.section(w||(w=Object(xn.a)(["\n    max-width: 960px;\n    padding: 10px 30px 30px;\n"]))),Dn=un.a.form(k||(k=Object(xn.a)(["\n    margin: 0px auto;\n"]))),An=un.a.label(y||(y=Object(xn.a)(["\n    width: 100%;\n    padding: 12px;\n    margin-top: 6px;\n    margin-bottom: 16px;\n"]))),Nn=un.a.input(S||(S=Object(xn.a)(["\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    margin-top: 6px;\n    margin-bottom: 16px;\n    resize: vertical;\n"]))),Pn=un.a.button(z||(z=Object(xn.a)(["\n    background-color: #fff;\n    color: #198754;\n    padding: 8px 12px;\n    border: 1px solid #198754;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 18px;\n    :hover{\n        background-color: #157347;\n        color: #fff;\n    }\n"]))),Fn=function(){var n=Object(cn.useState)({nome:"",descricao:"",tensao:"",marca:""}),e=Object(ln.a)(n,2),t=e[0],c=e[1],r=Object(cn.useState)({type:"",mensagem:""}),o=Object(ln.a)(r,2),a=o[0],s=o[1],i=function(n){return c(Object(kn.a)(Object(kn.a)({},t),{},Object(wn.a)({},n.target.name,n.target.value)))},d=function(){var n=Object(jn.a)(pn.a.mark((function n(e){return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,fetch("https://www.armandosoares.com.br/grupoplan/api/produto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(n){return n.json()})).then((function(n){n.erro?s({type:"erro",mensagem:n.status}):s({type:"success",mensagem:n.status})})).catch((function(){s({type:"erro",mensagem:"Produto n\xe3o cadastro com sucesso, tente mais tarde!"})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(mn.jsx)(yn,{children:Object(mn.jsxs)(En,{children:[Object(mn.jsxs)(Sn,{children:[Object(mn.jsx)(Cn,{children:"Cadastrar"}),Object(mn.jsx)(zn,{children:Object(mn.jsx)(sn.b,{to:"/",children:Object(mn.jsxs)("button",{class:"button button--nanuk button--round-l button--text-thick button--inverted",children:["\ud83d\udcd3 ",Object(mn.jsx)("span",{children:"L"}),Object(mn.jsx)("span",{children:"I"}),Object(mn.jsx)("span",{children:"S"}),Object(mn.jsx)("span",{children:"T"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"R"})]})})})]}),"erro"===a.type?Object(mn.jsx)(Tn,{children:a.mensagem}):"","success"===a.type?Object(mn.jsx)(In,{children:a.mensagem}):"",Object(mn.jsxs)(Dn,{onSubmit:d,children:[Object(mn.jsx)(An,{children:"Nome: "}),Object(mn.jsx)(Nn,{type:"text",name:"nome",placeholder:"Nome do produto",onChange:i}),Object(mn.jsx)(An,{children:"Descri\xe7\xe3o: "}),Object(mn.jsx)(Nn,{type:"text",name:"descricao",placeholder:"Descri\xe7\xe3o do produto",onChange:i}),Object(mn.jsx)(An,{children:"Tens\xe3o: "}),Object(mn.jsx)(Nn,{type:"text",name:"tensao",placeholder:"Tens\xe3o do produto",onChange:i}),Object(mn.jsx)(An,{children:"Marca: "}),Object(mn.jsx)(Nn,{type:"text",name:"marca",placeholder:"Marca do produto",onChange:i}),Object(mn.jsx)(Pn,{type:"submit",children:"Cadastrar"})]})]})})},Rn=un.a.section(C||(C=Object(xn.a)(["\n    max-width: 960px;\n    margin: 20px auto;\n    box-shadow: 0 0 1em #6c757d;\n    padding: 20px;\n"]))),Bn=un.a.section(I||(I=Object(xn.a)(["\ndisplay: flex;\njustify-content: space-between;\n"]))),Ln=un.a.section(T||(T=Object(xn.a)(["\nmargin: 20px 0px;\n"]))),Mn=(un.a.button(E||(E=Object(xn.a)(["\nbackground-color: #fff;\ncolor: #0dcaf0;\npadding: 6px 9px;\nborder: 1px solid #0dcaf0;\nborder-radius: 4px;\ncursor: pointer;\nfont-size: 18px;\n:hover{\n    background-color: #31d2f2;\n    color: #fff;\n}\n"]))),un.a.h1(D||(D=Object(xn.a)(["\n    color: #3e3e3e;\n    font-size: 23px;\n"])))),Jn=un.a.p(A||(A=Object(xn.a)(["\n    color: #3e3e3e;\n    font-size: 16px;\n"]))),Vn=function(n){var e=Object(cn.useState)([]),t=Object(ln.a)(e,2),c=t[0],r=t[1],o=Object(cn.useState)(n.match.params.id),a=Object(ln.a)(o,1)[0];return Object(cn.useEffect)((function(){(function(){var n=Object(jn.a)(pn.a.mark((function n(){return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://www.armandosoares.com.br/grupoplan/api/produto?id="+a).then((function(n){return n.json()})).then((function(n){console.log(n),r(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[a]),Object(mn.jsxs)(Rn,{children:[Object(mn.jsxs)(Bn,{children:[Object(mn.jsx)(Mn,{children:"Visualizar"}),Object(mn.jsxs)(Ln,{children:[Object(mn.jsx)(sn.b,{to:"/",children:Object(mn.jsxs)("button",{class:"button button--nanuk button--round-l button--text-thick button--inverted",children:["\ud83d\udcd3 ",Object(mn.jsx)("span",{children:"L"}),Object(mn.jsx)("span",{children:"I"}),Object(mn.jsx)("span",{children:"S"}),Object(mn.jsx)("span",{children:"T"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"R"})]})})," ",Object(mn.jsx)(sn.b,{to:"/"})]})]}),Object(mn.jsxs)(Jn,{children:["ID: ",c.id]}),Object(mn.jsxs)(Jn,{children:["Nome: ",c.nome]}),Object(mn.jsxs)(Jn,{children:["Descri\xe7\xe3o: ",c.descricao]}),Object(mn.jsxs)(Jn,{children:["Tens\xe3o: ",c.tensao]}),Object(mn.jsxs)(Jn,{children:["Marca: ",c.marca]})]})},qn=un.a.section(N||(N=Object(xn.a)(["\n    max-width: 960px;\n    margin: 20px auto;\n    box-shadow: 0 0 2em #6c757d;\n    padding: 10px 20px 20px 10px;\n"]))),Qn=(un.a.section(P||(P=Object(xn.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding:25px;\n    "]))),un.a.section(F||(F=Object(xn.a)(["\n    margin: 25px 0px;\n"]))),un.a.button(R||(R=Object(xn.a)(["\nwidth: 130px;\nheight: 40px;\ncolor: #fff;\nborder-radius: 5px;\npadding: 10px 25px;\nfont-family: 'Lato', sans-serif;\nfont-weight: 500;\nbackground: transparent;\ncursor: pointer;\ntransition: all 0.3s ease;\nposition: relative;\ndisplay: inline-block;\n box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),\n 7px 7px 20px 0px rgba(0,0,0,.1),\n 4px 4px 5px 0px rgba(0,0,0,.1);\noutline: none;\n\nborder: none;\ntransition: all 0.3s ease;\noverflow: hidden;\n\n:after {\n    position: absolute;\n    content: \" \";\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n     background-color: #f5811d;\n  background-image: linear-gradient(515deg, #242424 70%, #f5811d 4%);\n    transition: all 0.3s ease;\n  }\n\n  hover {\n    background: transparent;\n    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),\n                -4px -4px 6px 0 rgba(116, 125, 136, .2), \n      inset -4px -4px 6px 0 rgba(255,255,255,.5),\n      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);\n    color: #fff;\n  }\n\n  :hover:after {\n    -webkit-transform: scale(2) rotate(180deg);\n    transform: scale(2) rotate(180deg);\n    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),\n                -4px -4px 6px 0 rgba(116, 125, 136, .2), \n      inset -4px -4px 6px 0 rgba(255,255,255,.5),\n      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);\n  }\n    \n"]))),un.a.button(B||(B=Object(xn.a)(["\n    background-color: #fff;\n    color: #0d6efd;\n    padding: 5px 8px;\n    border: 1px solid #0d6efd;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    :hover{\n        background-color: #0d6efd;\n        color: #fff;\n    }\n"]))),un.a.button(L||(L=Object(xn.a)(["\n    background-color: #fff;\n    color: #ffc107;\n    padding: 5px 8px;\n    border: 1px solid #ffc107;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    :hover{\n        background-color: #ffc107;\n        color: #fff;\n    }\n"]))),un.a.button(M||(M=Object(xn.a)(["\n    background-color: #fff;\n    color: #dc3545;\n    padding: 5px 8px;\n    border: 1px solid #dc3545;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    :hover{\n        background-color: #dc3545;\n        color: #fff;\n    }\n"]))),un.a.div(J||(J=Object(xn.a)(["\n    display: inline-block;\n    margin-top:12px;\na {\n    color: black;\n    background-color: white;\n    float: left;\n    padding: 8px 16px;\n    text-decoration: none;\n  }\n a.active {\n    background-color: #4CAF50;\n    color: white;\n  }\n  a:hover:not(.active) {background-color: #ddd;}\n\n"])))),Un=un.a.p(V||(V=Object(xn.a)(["\n    background-color: #d1e7dd;\n    color: #0f5132;\n    margin: 20px 0;\n    border: 1px solid #badbcc;\n    border-radius: 4px;\n    padding: 7px;\n"]))),Gn=un.a.p(q||(q=Object(xn.a)(["\n    background-color: #f8d7da;\n    color: #842029;\n    margin: 20px 0;\n    border: 1px solid #f5c2c7;\n    border-radius: 4px;\n    padding: 7px;\n"]))),Hn=(un.a.h1(Q||(Q=Object(xn.a)(["\n    color: #3e3e3e;\n    font-size: 23px;\n"]))),un.a.table(U||(U=Object(xn.a)(["\n    width: 100%;\n    border-collapse: collapse;\n    th{\n        background-color:#4f4f4d;\n        color: white;\n        padding: 10px;\n      \n       \n    }\n    td{\n        background-color: #f6f6f6;\n        color: #3e3e3e;\n        padding: 19px;\n        text-align: center;\n        \n    }\n"]))),function(){var n=Object(cn.useState)([]),e=Object(ln.a)(n,2),t=e[0],c=e[1],r=Object(cn.useState)([]),o=Object(ln.a)(r,2),a=o[0],s=(o[1],Object(cn.useState)({type:"",mensagem:""})),i=Object(ln.a)(s,2),d=i[0],b=i[1],p=Object(cn.useState)({Seach:""}),j=Object(ln.a)(p,2),l=j[0],x=j[1];localStorage.setItem("seach",l.Seach);var u=function(n){console.log(n),fetch("https://www.armandosoares.com.br/grupoplan/api/produtos/s?titulo="+n).then((function(n){return n.json()})).then((function(n){return function(n){if(204==n){console.log("nehum econtrado"),c([{nome:"Nenhum registro encontrado"}]),document.getElementById("b").style.display="none"}else c(n)}(n.Produtos)}))};var h=function(){var n=Object(jn.a)(pn.a.mark((function n(e){return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://www.armandosoares.com.br/grupoplan/api/produto?id="+e,{method:"delete",headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(n){n.erro?b({type:"erro",mensagem:n.status}):b({type:"success",mensagem:n.status})})).catch((function(){b({type:"erro",mensagem:"Erro: Produto n\xe3o apagado com sucesso, tente mais tarde"})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();Object(cn.useEffect)((function(){}),[]);var O=function(){for(var n=[],e=function(e){e==localStorage.getItem("atual")?n.push(Object(mn.jsx)("a",{onClick:function(){return u("https://www.armandosoares.com.br/grupoplan/api/produtos?page="+e)},class:"active",href:"#",children:e})):n.push(Object(mn.jsx)("a",{onClick:function(){return u("https://www.armandosoares.com.br/grupoplan/api/produtos?page="+e)},href:"#",children:e}))},t=1;t<=a;t++)e(t);return n};return Object(mn.jsxs)(qn,{children:["erro"===d.type?Object(mn.jsx)(Gn,{children:d.mensagem}):"","success"===d.type?Object(mn.jsx)(Un,{children:d.mensagem}):"",Object(mn.jsx)("div",{class:"grid-container",children:Object(mn.jsx)("div",{children:Object(mn.jsx)("div",{class:"webflow-style-input",children:Object(mn.jsx)("input",{class:"",name:"Seach",onChange:function(n){x(Object(kn.a)(Object(kn.a)({},l),{},Object(wn.a)({},n.target.name,n.target.value))),setTimeout((function(){console.log(l.Seach),u(localStorage.getItem("seach"))}),600)},placeholder:"\ud83d\udd0e Pesquisar"})})})}),Object(mn.jsx)("div",{className:"tt",children:Object(mn.jsxs)("table",{children:[Object(mn.jsxs)("tr",{children:[Object(mn.jsx)("th",{children:"ID"}),Object(mn.jsx)("th",{children:"Nome"}),Object(mn.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(mn.jsx)("th",{children:"Tens\xe3o"}),Object(mn.jsx)("th",{children:"Marca"})]}),Object(mn.jsx)("tbody",{children:Object.values(t).map((function(n){return console.log(n),Object(mn.jsxs)(mn.Fragment,{children:[Object(mn.jsxs)("tr",{children:[Object(mn.jsx)("td",{children:n.id}),Object(mn.jsx)("td",{children:n.nome}),Object(mn.jsx)("td",{children:n.descricao}),Object(mn.jsx)("td",{children:n.tensao}),Object(mn.jsx)("td",{children:n.marca}),Object(mn.jsx)("td",{children:Object(mn.jsxs)("ul",{id:"b",children:[Object(mn.jsxs)("li",{children:[Object(mn.jsx)(sn.b,{to:"/visualizar/"+n.id,children:Object(mn.jsxs)("button",{class:"button button--moema button--inverted button--text-thick button--size-s",children:[Object(mn.jsx)("span",{children:"V"}),Object(mn.jsx)("span",{children:"i"}),Object(mn.jsx)("span",{children:"z"}),Object(mn.jsx)("span",{children:"u"}),Object(mn.jsx)("span",{children:"a"}),Object(mn.jsx)("span",{children:"l"}),Object(mn.jsx)("span",{children:"i"}),Object(mn.jsx)("span",{children:"z"}),Object(mn.jsx)("span",{children:"a"}),Object(mn.jsx)("span",{children:"r"})]})})," "]}),Object(mn.jsxs)("li",{children:[" ",Object(mn.jsx)(sn.b,{to:"/editar/"+n.id,children:Object(mn.jsxs)("button",{class:" editar button button--moema button--inverted button--text-thick button--size-s",children:[Object(mn.jsx)("span",{children:"E"}),Object(mn.jsx)("span",{children:"d"}),Object(mn.jsx)("span",{children:"i"}),Object(mn.jsx)("span",{children:"t"}),Object(mn.jsx)("span",{children:"a"}),Object(mn.jsx)("span",{children:"r"})]})})," "]}),Object(mn.jsx)("li",{children:Object(mn.jsxs)("button",{onClick:function(){return h(n.id)},class:"deletar button button--moema button--inverted button--text-thick button--size-s",children:[Object(mn.jsx)("span",{children:"D"}),Object(mn.jsx)("span",{children:"e"}),Object(mn.jsx)("span",{children:"l"}),Object(mn.jsx)("span",{children:"e"}),Object(mn.jsx)("span",{children:"t"}),Object(mn.jsx)("span",{children:"a"}),Object(mn.jsx)("span",{children:"r"})]})})]})})]},n.id),Object(mn.jsx)("br",{})]})}))})]})}),Object(mn.jsx)("div",{class:"grid-container",children:Object(mn.jsxs)("div",{children:[Object(mn.jsx)(sn.b,{to:"/cadastrar",children:Object(mn.jsxs)("button",{class:"button button--nanuk button--round-l button--text-thick button--inverted",children:["\u2795 ",Object(mn.jsx)("span",{children:"C"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"D"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"S"}),Object(mn.jsx)("span",{children:"T"}),Object(mn.jsx)("span",{children:"R"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"R"})]})}),Object(mn.jsx)(sn.b,{to:"/",children:Object(mn.jsxs)("button",{class:"button button--nanuk button--round-l button--text-thick button--inverted",children:["\ud83d\udcd3 ",Object(mn.jsx)("span",{children:"L"}),Object(mn.jsx)("span",{children:"I"}),Object(mn.jsx)("span",{children:"S"}),Object(mn.jsx)("span",{children:"T"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"R"})]})})]})}),Object(mn.jsx)("center",{children:Object(mn.jsxs)(Qn,{children:[Object(mn.jsx)("a",{id:"anterior",onClick:function(){return u(localStorage.getItem("anterior"))},href:"#",children:"\xab"}),Object(mn.jsx)(O,{}),Object(mn.jsx)("a",{id:"proxima",onClick:function(){return u(localStorage.getItem("proxima"))},href:"#",children:"\xbb"})]})})]})}),Kn=un.a.section(G||(G=Object(xn.a)(["\n    max-width: 960px;\n    margin: 20px auto;\n    box-shadow: 0 0 1em #6c757d;\n"]))),Wn=un.a.section(H||(H=Object(xn.a)(["\n    display: flex;\n    justify-content: space-between;\n"]))),Xn=un.a.section(K||(K=Object(xn.a)(["\n    margin: 25px 0px;\n"]))),Yn=(un.a.button(W||(W=Object(xn.a)(["\n    background-color: #fff;\n    color: #0dcaf0;\n    padding: 6px 9px;\n    border: 1px solid #0dcaf0;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 18px;\n    :hover{\n        background-color: #31d2f2;\n        color: #fff;\n    }\n"]))),un.a.h1(X||(X=Object(xn.a)(["\n    color: #3e3e3e;\n    font-size: 23px;\n"])))),Zn=un.a.p(Y||(Y=Object(xn.a)(["\n    background-color: #d1e7dd;\n    color: #0f5132;\n    margin: 20px 0;\n    border: 1px solid #badbcc;\n    border-radius: 4px;\n    padding: 7px;\n"]))),$n=un.a.p(Z||(Z=Object(xn.a)(["\n    background-color: #f8d7da;\n    color: #842029;\n    margin: 20px 0;\n    border: 1px solid #f5c2c7;\n    border-radius: 4px;\n    padding: 7px;\n"]))),_n=un.a.section($||($=Object(xn.a)(["\n    max-width: 960px;\n    padding: 10px 30px 30px;\n"]))),ne=un.a.form(_||(_=Object(xn.a)(["\n    margin: 0px auto;\n"]))),ee=un.a.label(nn||(nn=Object(xn.a)(["\n    width: 100%;\n    padding: 12px;\n    margin-top: 6px;\n    margin-bottom: 16px;\n"]))),te=un.a.input(en||(en=Object(xn.a)(["\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    margin-top: 6px;\n    margin-bottom: 16px;\n    resize: vertical;\n"]))),ce=un.a.button(tn||(tn=Object(xn.a)(["\n    background-color: #fff;\n    color: #ffc107;\n    padding: 8px 12px;\n    border: 1px solid #ffc107;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 18px;\n    :hover{\n        background-color: #ffc107;\n        color: #fff;\n    }\n"]))),re=function(n){var e=Object(cn.useState)(n.match.params.id),t=Object(ln.a)(e,1)[0],c=Object(cn.useState)(""),r=Object(ln.a)(c,2),o=r[0],a=r[1],s=Object(cn.useState)(""),i=Object(ln.a)(s,2),d=i[0],b=i[1],p=Object(cn.useState)(""),j=Object(ln.a)(p,2),l=j[0],x=j[1],u=Object(cn.useState)(""),h=Object(ln.a)(u,2),O=h[0],f=h[1],g=Object(cn.useState)({type:"",mensagem:""}),m=Object(ln.a)(g,2),v=m[0],w=m[1],k=function(){var n=Object(jn.a)(pn.a.mark((function n(e){return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,fetch("https://www.armandosoares.com.br/grupoplan/api/produto",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,nome:o,descricao:d,tensao:l,marca:O})}).then((function(n){return n.json()})).then((function(n){n.erro?w({type:"erro",mensagem:"erro"}):w({type:"success",mensagem:"Eletronico editado com sucesso"})})).catch((function(){w({type:"erro",mensagem:"Produto n\xe3o editado com sucesso, tente mais tarde!"})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(cn.useEffect)((function(){(function(){var n=Object(jn.a)(pn.a.mark((function n(){return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://www.armandosoares.com.br/grupoplan/api/produto?id="+t).then((function(n){return n.json()})).then((function(n){a(n.nome),b(n.descricao),x(n.tensao),f(n.marca)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[t]),Object(mn.jsx)(Kn,{children:Object(mn.jsxs)(_n,{children:[Object(mn.jsxs)(Wn,{children:[Object(mn.jsx)(Yn,{children:"Editar"}),Object(mn.jsx)(Xn,{children:Object(mn.jsx)(sn.b,{to:"/",children:Object(mn.jsxs)("button",{class:"button button--nanuk button--round-l button--text-thick button--inverted",children:["\ud83d\udcd3 ",Object(mn.jsx)("span",{children:"L"}),Object(mn.jsx)("span",{children:"I"}),Object(mn.jsx)("span",{children:"S"}),Object(mn.jsx)("span",{children:"T"}),Object(mn.jsx)("span",{children:"A"}),Object(mn.jsx)("span",{children:"R"})]})})})]}),"erro"===v.type?Object(mn.jsx)($n,{children:v.mensagem}):"","success"===v.type?Object(mn.jsx)(Zn,{children:v.mensagem}):"",Object(mn.jsxs)(ne,{onSubmit:k,children:[Object(mn.jsx)(ee,{children:"Nome: "}),Object(mn.jsx)(te,{type:"text",name:"nome",placeholder:"T\xedtulo do produto",value:o,onChange:function(n){return a(n.target.value)}}),Object(mn.jsx)(ee,{children:"Descri\xe7\xe3o: "}),Object(mn.jsx)(te,{type:"text",name:"descricao",placeholder:"Descri\xe7\xe3o do produto",value:d,onChange:function(n){return b(n.target.value)}}),Object(mn.jsx)(ee,{children:"Tens\xe3o: "}),Object(mn.jsx)(te,{type:"text",name:"tensao",placeholder:"Tens\xe3o do produto",value:l,onChange:function(n){return x(n.target.value)}}),Object(mn.jsx)(ee,{children:"Marca: "}),Object(mn.jsx)(te,{type:"text",name:"marca",placeholder:"Marca do produto",value:O,onChange:function(n){return f(n.target.value)}}),Object(mn.jsx)(ce,{className:"botaoeditar",type:"submit",children:"Editar"})]})]})})};var oe=function(){return Object(mn.jsx)("div",{children:Object(mn.jsx)(sn.a,{children:Object(mn.jsxs)(dn.c,{children:[Object(mn.jsx)(dn.a,{exact:!0,path:"/",component:vn}),Object(mn.jsx)(dn.a,{exact:!0,path:"/Seach",component:Hn}),Object(mn.jsx)(dn.a,{path:"/cadastrar",component:Fn}),Object(mn.jsx)(dn.a,{path:"/visualizar/:id",component:Vn}),Object(mn.jsx)(dn.a,{path:"/editar/:id",component:re})]})})})},ae=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),c(n),r(n),o(n),a(n)}))};an.a.render(Object(mn.jsx)(rn.a.Fragment,{children:Object(mn.jsx)(oe,{})}),document.getElementById("root")),ae()}},[[41,1,2]]]);
//# sourceMappingURL=main.1d1098ac.chunk.js.map