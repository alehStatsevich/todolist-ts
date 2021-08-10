(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{132:function(e,t,a){e.exports=a(182)},137:function(e,t,a){},138:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r);a(137),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(138);var c,l,s=a(219),u=a(220),d=a(221),m=a(222),f=a(212),b=a(187),O=a(216),E=a(215),g=a(224),T=a(225),v=a(223),p=a(18),j=a(8),h=a(78),k=a(110),I=a.n(k).a.create(Object(j.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"4639bc32-175b-491d-bffa-dafbb9461a4c"}})),S=function(){return I.get("todo-lists")},C=function(e){return I.post("todo-lists",{title:e})},y=function(e){return I.delete("todo-lists/".concat(e))},w=function(e,t){return I.put("todo-lists/".concat(e),{title:t})},A=function(e){return I.get("todo-lists/".concat(e,"/tasks"))},D=function(e,t){return I.delete("todo-lists/".concat(e,"/tasks/").concat(t))},L=function(e,t){return I.post("todo-lists/".concat(e,"/tasks"),{title:t})},P=function(e,t,a){return I.put("todo-lists/".concat(e,"/tasks/").concat(t),a)},N=function(e){return I.post("auth/login",e)},R=function(){return I.delete("auth/login")},x=function(){return I.get("auth/me")};!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(c||(c={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(l||(l={}));var F=function(e,t){e.messages.length?t(U(e.messages[0])):t(U("Some error occurred")),t(V("failed"))},G=function(e,t){t(U(e.message?e.message:"Some error occurred")),t(V("failed"))},K={isLoggedIn:!1},M=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},H={status:"idle",error:null,isInitialized:!1},U=function(e){return{type:"APP/SET-ERROR",error:e}},V=function(e){return{type:"APP/SET-STATUS",status:e}},B=[],q=a(41),z={},Y=function(e,t,a){return function(n,o){var r=o().tasks[a].find((function(t){return t.id===e}));if(r){var i=Object(j.a)({deadline:r.deadline,description:r.description,priority:r.priority,startDate:r.startDate,title:r.title,status:r.status},t);P(a,e,i).then((function(o){if(0===o.data.resultCode){var r=function(e,t,a){return{type:"UPDATE-TASK",model:t,todolistId:a,taskId:e}}(e,t,a);n(r)}else F(o.data,n)})).catch((function(e){G(e,n)}))}else console.warn("task not found in the state")}},J=a(186),W=a(52),$=a(226),_=a(213),Q=o.a.memo((function(e){var t=e.addItem,a=e.disabled,r=void 0!==a&&a;console.log("AddItemForm called");var i=Object(n.useState)(""),c=Object(W.a)(i,2),l=c[0],s=c[1],u=Object(n.useState)(null),d=Object(W.a)(u,2),m=d[0],b=d[1],O=function(){""!==l.trim()?(t(l),s("")):b("Title is required")};return o.a.createElement("div",null,o.a.createElement($.a,{variant:"outlined",disabled:r,error:!!m,value:l,onChange:function(e){s(e.currentTarget.value)},onKeyPress:function(e){null!==m&&b(null),13===e.charCode&&O()},label:"Title",helperText:m}),o.a.createElement(f.a,{color:"primary",onClick:O,disabled:r},o.a.createElement(_.a,null)))})),X=a(119),Z=o.a.memo((function(e){console.log("EditableSpan called");var t=Object(n.useState)(!1),a=Object(W.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(e.value),l=Object(W.a)(c,2),s=l[0],u=l[1];return r?o.a.createElement($.a,{value:s,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){i(!0),u(e.value)}},e.value)})),ee=a(214),te=a(228),ae=o.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.removeTask(e.task.id,e.todolistId)}),[e.task.id,e.todolistId]),a=Object(n.useCallback)((function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a?c.Completed:c.New,e.todolistId)}),[e.task.id,e.todolistId]),r=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.todolistId]);return o.a.createElement("div",{key:e.task.id,className:e.task.status===c.Completed?"is-done":""},o.a.createElement(te.a,{checked:e.task.status===c.Completed,color:"primary",onChange:a}),o.a.createElement(Z,{value:e.task.title,onChange:r}),o.a.createElement(f.a,{onClick:t},o.a.createElement(ee.a,null)))})),ne=o.a.memo((function(e){var t=e.demo,a=void 0!==t&&t,r=Object(X.a)(e,["demo"]);console.log("Todolist called");var i=Object(p.b)();Object(n.useEffect)((function(){if(!a){var e,t=(e=r.todolist.id,function(t){t(V("loading")),A(e).then((function(a){var n=a.data.items;t(function(e,t){return{type:"SET-TASKS",tasks:e,todolistId:t}}(n,e)),t(V("succeeded"))}))});i(t)}}),[]);var l=Object(n.useCallback)((function(e){r.addTask(e,r.todolist.id)}),[r.addTask,r.todolist.id]),s=Object(n.useCallback)((function(e){r.changeTodolistTitle(r.todolist.id,e)}),[r.todolist.id,r.changeTodolistTitle]),u=Object(n.useCallback)((function(){return r.changeFilter("all",r.todolist.id)}),[r.todolist.id,r.changeFilter]),d=Object(n.useCallback)((function(){return r.changeFilter("active",r.todolist.id)}),[r.todolist.id,r.changeFilter]),m=Object(n.useCallback)((function(){return r.changeFilter("completed",r.todolist.id)}),[r.todolist.id,r.changeFilter]),b=r.tasks;return"active"===r.todolist.filter&&(b=r.tasks.filter((function(e){return e.status===c.New}))),"completed"===r.todolist.filter&&(b=r.tasks.filter((function(e){return e.status===c.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(Z,{value:r.todolist.title,onChange:s}),o.a.createElement(f.a,{onClick:function(){r.removeTodolist(r.todolist.id)},disabled:"loading"===r.todolist.entityStatus},o.a.createElement(ee.a,null))),o.a.createElement(Q,{addItem:l,disabled:"loading"===r.todolist.entityStatus}),o.a.createElement("div",null,b.map((function(e){return o.a.createElement(ae,{key:e.id,task:e,todolistId:r.todolist.id,removeTask:r.removeTask,changeTaskTitle:r.changeTaskTitle,changeTaskStatus:r.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(E.a,{variant:"all"===r.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),o.a.createElement(E.a,{variant:"active"===r.todolist.filter?"outlined":"text",onClick:d,color:"primary"},"Active"),o.a.createElement(E.a,{variant:"completed"===r.todolist.filter?"outlined":"text",onClick:m,color:"secondary"},"Completed")))})),oe=a(14),re=function(e){var t=e.demo,a=void 0!==t&&t,r=Object(p.c)((function(e){return e.todolists})),i=Object(p.c)((function(e){return e.tasks})),c=Object(p.c)((function(e){return e.auth.isLoggedIn})),l=Object(p.b)();Object(n.useEffect)((function(){if(!a&&c){var e=function(e){e(V("loading")),S().then((function(t){e({type:"SET-TODOLISTS",todolists:t.data}),e(V("succeeded"))})).catch((function(t){G(t,e)}))};l(e)}}),[]);var s=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){D(t,e).then((function(n){var o=function(e,t){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(e,t);a(o)}))}}(e,t);l(a)}),[]),u=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){a(V("loading")),L(t,e).then((function(e){if(0===e.data.resultCode){var t=function(e){return{type:"ADD-TASK",task:e}}(e.data.data.item);a(t),a(V("succeeded"))}else F(e.data,a)})).catch((function(e){G(e,a)}))}}(e,t);l(a)}),[]),d=Object(n.useCallback)((function(e,t,a){var n=Y(e,{status:t},a);l(n)}),[]),m=Object(n.useCallback)((function(e,t,a){var n=Y(e,{title:t},a);l(n)}),[]),f=Object(n.useCallback)((function(e,t){var a={type:"CHANGE-TODOLIST-FILTER",id:t,filter:e};l(a)}),[]),b=Object(n.useCallback)((function(e){var t,a=(t=e,function(e){e(V("loading")),e({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:t,status:"loading"}),y(t).then((function(a){e(function(e){return{type:"REMOVE-TODOLIST",id:e}}(t)),e(V("succeeded"))}))});l(a)}),[]),E=Object(n.useCallback)((function(e,t){var a=function(e,t){return function(a){w(e,t).then((function(n){a(function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(e,t))}))}}(e,t);l(a)}),[]),g=Object(n.useCallback)((function(e){var t=function(e){return function(t){t(V("loading")),C(e).then((function(e){t({type:"ADD-TODOLIST",todolist:e.data.data.item}),t(V("succeeded"))}))}}(e);l(t)}),[l]);return c?o.a.createElement(o.a.Fragment,null,o.a.createElement(O.a,{container:!0,style:{padding:"20px"}},o.a.createElement(Q,{addItem:g})),o.a.createElement(O.a,{container:!0,spacing:3},r.map((function(e){var t=i[e.id];return o.a.createElement(O.a,{item:!0,key:e.id},o.a.createElement(J.a,{style:{padding:"10px"}},o.a.createElement(ne,{todolist:e,tasks:t,removeTask:s,changeFilter:f,addTask:u,changeTaskStatus:d,removeTodolist:b,changeTaskTitle:m,changeTodolistTitle:E,demo:a})))})))):o.a.createElement(oe.a,{to:"/login"})},ie=a(230),ce=a(227);function le(e){return o.a.createElement(ce.a,Object.assign({elevation:6,variant:"filled"},e))}function se(){var e=Object(p.c)((function(e){return e.app.error})),t=Object(p.b)(),a=function(e,a){"clickaway"!==a&&t(U(null))},n=null!==e;return o.a.createElement(ie.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(le,{onClose:a,severity:"error"},e))}var ue=a(231),de=a(211),me=a(217),fe=a(218),be=a(118),Oe=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.auth.isLoggedIn})),a=Object(be.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var a;e((a=t,function(e){e(V("loading")),N(a).then((function(t){0===t.data.resultCode?(e(M(!0)),e(V("succeeded"))):F(t.data,e)})).catch((function(t){G(t,e)}))}))}});return t?o.a.createElement(oe.a,{to:"/"}):o.a.createElement(O.a,{container:!0,justify:"center"},o.a.createElement(O.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(ue.a,null,o.a.createElement(de.a,null,o.a.createElement("p",null,"To log in get registered ",o.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),o.a.createElement("p",null,"or use common test account credentials:"),o.a.createElement("p",null," Email: free@samuraijs.com"),o.a.createElement("p",null,"Password: free")),o.a.createElement(me.a,null,o.a.createElement($.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement($.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(fe.a,{label:"Remember me",control:o.a.createElement(te.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},Ee=a(116),ge=a.n(Ee);var Te=function(e){var t=e.demo,a=void 0!==t&&t,r=Object(p.c)((function(e){return e.app.status})),i=Object(p.c)((function(e){return e.app.isInitialized})),c=Object(p.c)((function(e){return e.auth.isLoggedIn})),l=Object(p.b)(),j=Object(oe.f)();console.log(j),Object(n.useEffect)((function(){l((function(e){x().then((function(t){0===t.data.resultCode&&e(M(!0)),e({type:"APP/SET-IS-INITIALIED",value:!0})}))}))}),[]);var h=Object(n.useCallback)((function(){l((function(e){e(V("loading")),R().then((function(t){0===t.data.resultCode?(e(M(!1)),e(V("succeeded"))):F(t.data,e)})).catch((function(t){G(t,e)}))}))}),[]),k=ge()((function(e){return Object(s.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}))();return i?c||"/login"===j.pathname?o.a.createElement("div",{className:"App"},o.a.createElement(se,null),o.a.createElement(d.a,{position:"static"},o.a.createElement(m.a,null,o.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(v.a,null)),o.a.createElement(b.a,{variant:"h6"},"News"),o.a.createElement(b.a,{variant:"h6",className:k.title}),o.a.createElement(O.a,{style:{padding:"20px"}},c&&o.a.createElement(E.a,{color:"inherit",onClick:h},"Log out"))),"loading"===r&&o.a.createElement(g.a,null)),o.a.createElement(T.a,{fixed:!0},o.a.createElement(oe.b,{path:"/",render:function(){return o.a.createElement(re,{demo:a})}}),o.a.createElement(oe.b,{path:"/login",render:function(){return o.a.createElement(Oe,null)}}))):o.a.createElement(oe.a,{to:"/login"}):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(u.a,null))},ve=a(50),pe=a(117),je=Object(ve.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":return Object(j.a)(Object(j.a)({},e),{},Object(q.a)({},t.todolistId,e[t.todolistId].filter((function(e){return e.id!=t.taskId}))));case"ADD-TASK":return Object(j.a)(Object(j.a)({},e),{},Object(q.a)({},t.task.todoListId,[t.task].concat(Object(h.a)(e[t.task.todoListId]))));case"UPDATE-TASK":return Object(j.a)(Object(j.a)({},e),{},Object(q.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(j.a)(Object(j.a)({},e),t.model):e}))));case"ADD-TODOLIST":return Object(j.a)(Object(j.a)({},e),{},Object(q.a)({},t.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(j.a)({},e);return delete a[t.id],a;case"SET-TODOLISTS":var n=Object(j.a)({},e);return t.todolists.forEach((function(e){n[e.id]=[]})),n;case"SET-TASKS":return Object(j.a)(Object(j.a)({},e),{},Object(q.a)({},t.todolistId,t.tasks));default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!=t.id}));case"ADD-TODOLIST":return[Object(j.a)(Object(j.a)({},t.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(h.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{filter:t.filter}):e}));case"CHANGE-TODOLIST-ENTITY-STATUS":return e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{entityStatus:t.status}):e}));case"SET-TODOLISTS":return t.todolists.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{filter:"all",entityStatus:"idle"})}));default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});case"APP/SET-IS-INITIALIED":return Object(j.a)(Object(j.a)({},e),{},{isInitialized:t.value});default:return Object(j.a)({},e)}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:t.value});default:return e}}}),he=Object(ve.d)(je,Object(ve.a)(pe.a));window.store=he;var ke=a(57);i.a.render(o.a.createElement(p.a,{store:he},o.a.createElement(ke.a,null,o.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[132,1,2]]]);
//# sourceMappingURL=main.ab41043b.chunk.js.map