(window["webpackJsonpreact-redux-demo"]=window["webpackJsonpreact-redux-demo"]||[]).push([[0],{31:function(e,t,r){e.exports=r(60)},36:function(e,t,r){},41:function(e,t,r){},60:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),l=r.n(c),o=(r(36),r(10)),u=(r(41),r(5)),i=r(25),s=r(26),m=r.n(s),d=r(27),E=r(7);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach(function(t){Object(E.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={loading:!1,users:[],error:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS_REQUEST":return f({},e,{loading:!0});case"FETCH_USERS_SUCCESS":return{loading:!1,users:t.payload,error:""};case"FETCH_USERS_FAILURE":return{loading:!1,users:[],error:t.payload};default:return e}},b=Object(u.combineReducers)({user:g}),y=Object(u.createStore)(b,Object(i.composeWithDevTools)(Object(u.applyMiddleware)(m.a,d.a))),v=r(28),S=r.n(v),O=function(){return{type:"FETCH_USERS_REQUEST"}},w=function(e){return{type:"FETCH_USERS_SUCCESS",payload:e}},j=function(e){return{type:"FETCH_USERS_FAILURE",payload:e}},U=r(30);var _=Object(o.b)(function(e){return{userData:e.user}},function(e){return{fetchUsers:function(){return e(function(e){e(O()),S.a.get("https://reqres.in/api/users?page=1").then(function(t){var r=t.data.data;e(w(r))}).catch(function(t){e(j(t.message))})})}}})(function(e){var t=e.userData,r=e.fetchUsers;return Object(n.useEffect)(function(){r()},[]),t.loading?a.a.createElement("h2",null,"Loading"):t.error?a.a.createElement("h2",null,t.error):a.a.createElement("div",null,a.a.createElement("h2",null,"Users List using Redux API"),a.a.createElement(U.a,{striped:!0,bordered:!0,hover:!0,className:"redux-table",style:{textAlign:"center"}},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Sl No"),a.a.createElement("th",null,"Avathar"),a.a.createElement("th",null,"First Name"),a.a.createElement("th",null,"Last Name"),a.a.createElement("th",null,"Email"))),a.a.createElement("tbody",null,t&&t.users&&t.users.map(function(e,t){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,t+1),a.a.createElement("td",{className:"text-center"},a.a.createElement("img",{src:e.avatar,alt:"",className:"img-avatar img-fluid rounded mx-auto"}),"  "),a.a.createElement("td",null,e.first_name," "),a.a.createElement("td",null,e.last_name," "),a.a.createElement("td",null,e.email," "))}))))});var R=function(){return a.a.createElement(o.a,{store:y},a.a.createElement("div",{className:"App"},a.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.4c9e6f25.chunk.js.map