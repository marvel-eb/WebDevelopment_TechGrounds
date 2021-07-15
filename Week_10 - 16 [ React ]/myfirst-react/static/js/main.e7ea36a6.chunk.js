(this["webpackJsonpmyfirst-react"]=this["webpackJsonpmyfirst-react"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),r=c.n(a),j=(c(16),c(0)),i=function(){return Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsxs)("section",{className:"content",children:[Object(j.jsxs)("h1",{children:[" ","Getting started With ",Object(j.jsx)("span",{className:"tagline",children:" React"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"italic",children:"Handleiding React"})]}),Object(j.jsx)("hr",{})]})},l=c(2);var b=function(){var e=Object(n.useState)("Please, Change Me"),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:" 01// Introductie - Componenten, JSX en ReactDOM "}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"- Input on change: Functional Component "})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{placeholder:"Type...",type:"text",onChange:function(e){var t=e.target.value;s(t)}}),Object(j.jsxs)("div",{className:"output-result",children:[" ",Object(j.jsxs)("h5",{children:["Hello! Mr ",Object(j.jsxs)("span",{className:"changable-text",children:[" ",c]})," "]})]})]})},o=c(8),h=c(9),d=c(11),O=c(10),u=function(e){Object(d.a)(c,e);var t=Object(O.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).handleChangeName=function(e){n.setState({name:e.target.value})},n.state={name:"Please, Change Me"},n}return Object(h.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"- Input on change: Class Component "})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{placeholder:"Type...",type:"text",onChange:this.handleChangeName}),Object(j.jsxs)("div",{className:"output-result",children:[" ",Object(j.jsxs)("h5",{children:["Hello! Mr ",Object(j.jsxs)("span",{className:"changable-text",children:[" ",this.state.name]})," "]})]})]})}}]),c}(s.a.Component);var x=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:" 02// Controlled Components en Shared State "}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"- Shared State Opdracht"}),Object(j.jsx)("h2",{className:"italic",children:" In progress..."})]})},m=c(3),p=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(l.a)(a,2),i=r[0],b=r[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:" 03// Lists en Keys "}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"- Lists en Keys Opdracht"}),Object(j.jsx)("input",{placeholder:"Type...",value:c,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("button",{className:"btn btn--submit",onClick:function(){b((function(e){return[c].concat(Object(m.a)(e))})),s("")},children:"Submit Name"}),i.map((function(e){return Object(j.jsxs)("div",{className:"listItems",children:[" ",Object(j.jsxs)("p",{children:[" ",e," "]}),Object(j.jsx)("hr",{})]})}))]})},v=function(e){var t=e.task,c=e.index,n=e.removeTask;return Object(j.jsxs)("div",{className:"ToDo",style:{textDecoration:t.completed?"line-through":""},children:[t.title,Object(j.jsx)("button",{className:"btn btn--task",onClick:function(){return n(c)},children:"Task Complete!"})]})},f=function(e){var t=e.addTask,c=Object(n.useState)(""),s=Object(l.a)(c,2),a=s[0],r=s[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&(t(a),r("-"))},children:[Object(j.jsx)("input",{type:"text",className:"input",value:a,placeholder:"Add a new task to do",onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:"btn btn--submit",children:"Submit To Do"})]})};var N=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=function(e){var t=Object(m.a)(c);t[e].completed=!0,s(t)},r=function(e){var t=Object(m.a)(c);t.splice(e,1),s(t)};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:" 04// Side Effects en Lifecycle Methods "}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"- To-Do Opdracht"}),Object(j.jsx)("div",{className:"tasks",children:c.map((function(e,t){return Object(j.jsx)(v,{task:e,index:t,completeTask:a,removeTask:r},t)}))}),Object(j.jsx)("div",{className:"create-task",children:Object(j.jsx)(f,{addTask:function(e){var t=[].concat(Object(m.a)(c),[{title:e,completed:!1}]);s(t)}})})]})},g=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:"05// Random Names "}),Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:[["Ephrem","Serki","Paris","Amsterdam","Lozi","Selam","Saba"][Math.floor(3*Math.random())],"!"]})]})},C=function(){var e=new Date;return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{children:["EPHREM | Copyright \xa9 ",e.getFullYear()," "]})})};var S=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(i,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(b,{}),Object(j.jsx)(u,{}),Object(j.jsx)(x,{}),Object(j.jsx)(p,{}),Object(j.jsx)(N,{}),Object(j.jsx)(g,{})]}),Object(j.jsx)(C,{})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e7ea36a6.chunk.js.map