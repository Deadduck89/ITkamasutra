(this["webpackJsonpreact-kamasutra-01"]=this["webpackJsonpreact-kamasutra-01"]||[]).push([[1],{14:function(e,t,n){e.exports={loginButton:"Button_loginButton__1h1dP",logoutButton:"Button_logoutButton__2hP2C",send:"Button_send__3Eraa",followButton:"Button_followButton__1pkGa",button:"Button_button__3j0IC",inputWrapper:"Button_inputWrapper__2HByg",inputFile:"Button_inputFile__G7uTV",inputFileButtonText:"Button_inputFileButtonText__1gDrq",inputFileButton:"Button_inputFileButton__2tRB2",saveProfileDataChange:"Button_saveProfileDataChange__3PooU",profileDataChange:"Button_profileDataChange__2krvW"}},144:function(e,t,n){e.exports=n(254)},146:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},25:function(e,t,n){e.exports={navbar:"Navbar_navbar__UYZNb",item:"Navbar_item__1BfNU",active:"Navbar_active__34u-F"}},254:function(e,t,n){"use strict";n.r(t);var A=n(0),a=n.n(A);n(146),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(51),o=n.n(r),u=n(18),c=n(19),s=n(21),i=n(20),l=n(52),f=n.n(l),g=n(25),p=n.n(g),d=n(15),E=n(28),m=n.n(E),C=function(e){return a.a.createElement("div",{className:m.a.bfelement},a.a.createElement("div",{className:m.a.bfavatar},a.a.createElement("img",{src:e.bfpicture})),a.a.createElement("div",{className:m.a.bfname},e.bfname))},h=function(e){var t=e.friends.map((function(e){return a.a.createElement(C,{key:e.id,bfpicture:e.bfavatar,bfname:e.bfriend})}));return a.a.createElement("div",null,a.a.createElement("div",{className:m.a.friends},a.a.createElement(d.b,{to:"/friends",activeClassName:m.a.active},"\u0414\u0440\u0443\u0437\u044c\u044f")),a.a.createElement("div",{className:m.a.bestfriends},t))},b=n(22),B=(Object(b.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))(h),function(e){return a.a.createElement("div",{className:p.a.navbar},a.a.createElement("nav",{className:p.a.nav},a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/profile",activeClassName:p.a.active},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/dialogs",activeClassName:p.a.active},"\u0414\u0438\u0430\u043b\u043e\u0433\u0438")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/users",activeClassName:p.a.active},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"))))}),v=(n(154),n(155),n(156),n(89)),w=n.n(v),I=function(e){return a.a.createElement("div",{className:w.a.friends},a.a.createElement("h1",null,"Friends"))},Q=n(7),P=n(5),O=n.n(P),D=n(9),j=n(33),N=n(2),k=n(8),S=function(e,t,n,A){return e.map((function(e){return e[n]===t?Object(N.a)(Object(N.a)({},e),A):e}))},M={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},U=function(e){return{type:"FOLLOW",userId:e}},T=function(e){return{type:"UNFOLLOW",userId:e}},y=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},F=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},L=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},x=function(){var e=Object(D.a)(O.a.mark((function e(t,n,A,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,A(n);case 3:0==e.sent.resultCode&&t(a(n)),t(L(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,A,a){return e.apply(this,arguments)}}(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(N.a)(Object(N.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(N.a)(Object(N.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(N.a)(Object(N.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(N.a)(Object(N.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(N.a)(Object(N.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(j.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},G=n(64),Y=n(70),z=n(35),J=n.n(z),_=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,u=e.portionSize,c=void 0===u?10:u,s=Math.ceil(t/n),i=[],l=1;l<=s;l++)i.push(l);var f=Math.ceil(s/c),g=Object(A.useState)(1),p=Object(Y.a)(g,2),d=p[0],E=p[1],m=(d-1)*c+1,C=d*c;return a.a.createElement("div",{className:J.a.paginator},d>1&&a.a.createElement("button",{className:J.a.paginatorButton,onClick:function(){E(d-1)}},"\u041d\u0430\u0437\u0430\u0434"),i.filter((function(e){return e>=m&&e<=C})).map((function(e){return a.a.createElement("span",{className:r===e?J.a.selectedPage:J.a.unselectedPage,key:e,onClick:function(t){o(e)}},e,"  ")})),f>d&&a.a.createElement("button",{className:J.a.paginatorButton,onClick:function(){E(d+1)}},"\u0414\u0430\u043b\u0435\u0435"))},H=n(34),Z=n.n(H),W=n(81),V=n.n(W),X=n(38),K=function(e){var t=e.user,n=e.followingInProgress,A=e.unfollow,r=e.follow;return a.a.createElement("div",{className:Z.a.userList},a.a.createElement("span",null,a.a.createElement("div",{className:Z.a.user},a.a.createElement(d.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:V.a,className:Z.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement(X.a,{type:"unfollow",disabled:n.some((function(e){return e===t.id})),onClick:function(){A(t.id)}}):a.a.createElement(X.a,{type:"follow",disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}}))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},q=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],$=function(e){var t=e.currentPage,n=e.onPageChanged,A=e.totalUsersCount,r=e.pageSize,o=e.users,u=Object(G.a)(e,q);return a.a.createElement("div",null,a.a.createElement("div",{className:Z.a.usersPaginator},a.a.createElement(_,{currentPage:t,onPageChanged:n,totalItemsCount:A,pageSize:r})),a.a.createElement("div",null,o.map((function(e){return a.a.createElement(K,{user:e,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow,key:e.id})}))))},ee=n(42),te=n(24),ne=n(30),Ae=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e})),ae=Object(ne.a)((function(e){return e.usersPage.pageSize}),(function(e){return e})),re=Object(ne.a)((function(e){return e.usersPage.totalUsersCount}),(function(e){return e})),oe=Object(ne.a)((function(e){return e.usersPage.currentPage}),(function(e){return e})),ue=Object(ne.a)((function(e){return e.usersPage.isFetching}),(function(e){return e})),ce=Object(ne.a)((function(e){return e.usersPage.followingInProgress}),(function(e){return e})),se=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var A=arguments.length,a=new Array(A),r=0;r<A;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(ee.a,null):null,a.a.createElement($,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),ie=Object(te.d)(Object(b.b)((function(e){return{users:Ae(e),pageSize:ae(e),totalUsersCount:re(e),currentPage:oe(e),isFetching:ue(e),followingInProgress:ce(e)}}),{follow:function(e){return function(){var t=Object(D.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(n,e,k.c.follow.bind(k.c),U);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(D.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(n,e,k.c.unfollow.bind(k.c),T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:y,toggleFollowingProgress:L,getUsers:function(e,t){return function(){var n=Object(D.a)(O.a.mark((function n(A){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return A(F(!0)),A(y(e)),n.next=4,k.c.getUsers(e,t);case 4:a=n.sent,A(F(!1)),A({type:"SET-USERS",users:a.items}),A({type:"SET-TOTAL-USERS-COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(se),le=n(61),fe=n.n(le),ge=n(93),pe=n.n(ge),de=(n(96),function(e){return a.a.createElement("header",{className:fe.a.header},a.a.createElement("img",{src:pe.a}),a.a.createElement("div",{className:fe.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login,a.a.createElement(X.a,{type:"logout",logout:e.logout})):a.a.createElement(d.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438")))}),Ee=n(32),me=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(de,this.props)}}]),n}(a.a.Component),Ce=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:Ee.d})(me),he={initialized:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZED":return Object(N.a)(Object(N.a)({},e),{},{initialized:!0});default:return e}},Be={friends:[{id:1,bfavatar:"https://clck.ru/RaH6Z",bfriend:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:2,bfavatar:"https://clck.ru/RaH7G",bfriend:"\u0421\u0435\u0440\u0433\u0435\u0439"},{id:3,bfavatar:"https://clck.ru/RaH87",bfriend:"\u0418\u0440\u0438\u043d\u0430"}]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return e},we=n(82),Ie=n(65),Qe=n(94),Pe=n(88),Oe=Object(te.c)({profilePage:Ie.b,dialogsPage:we.a,sidebar:ve,usersPage:R,auth:Ee.a,form:Pe.a,app:be}),De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,je=Object(te.e)(Oe,De(Object(te.a)(Qe.a)));window._store_=je;var Ne=je,ke=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var A;return Object(u.a)(this,n),(A=t.call(this,e)).state={hasError:!1},A}return Object(c.a)(n,[{key:"render",value:function(){return this.state.hasError?a.a.createElement("div",null,a.a.createElement("h1",null,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043d\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0447\u0438\u043d\u0438\u0442\u0441\u044f."),a.a.createElement("h3",null,"\u0425\u043c, \u0430 \u0432\u044b \u043f\u0440\u043e\u0431\u043e\u0432\u0430\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438 \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440?")):this.props.children}}],[{key:"gedDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.a.Component),Se=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,337))})),Me=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,336))})),Ue=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,335))})),Te=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:f.a.appWrapper},a.a.createElement(Ce,null),a.a.createElement(B,null),a.a.createElement("div",{className:f.a.appWrapperContent},a.a.createElement(ke,null,a.a.createElement(A.Suspense,{fallback:a.a.createElement(ee.a,null)},a.a.createElement(Q.b,{path:"/dialogs",render:function(){return a.a.createElement(Se,null)}}),a.a.createElement(Q.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(Me,null)}}),a.a.createElement(Q.b,{path:"/login",render:function(){return a.a.createElement(Ue,null)}}))),a.a.createElement(Q.b,{path:"/users",render:function(){return a.a.createElement(ie,null)}}),a.a.createElement(Q.b,{path:"/friends",render:function(){return a.a.createElement(I,null)}}))):a.a.createElement(ee.a,null)}}]),n}(a.a.Component),ye=Object(te.d)(Q.f,Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(Ee.b)());Promise.all([t]).then((function(){e({type:"SET-INITIALIZED"})}))}}}))(Te),Fe=function(e){return a.a.createElement(a.a.StrictMode,null,a.a.createElement(b.a,{store:Ne},a.a.createElement(d.a,null,a.a.createElement(ye,null))))};o.a.render(a.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t,n){e.exports={bfavatar:"BestFriends_bfavatar__1tuuU",friends:"BestFriends_friends__1vPf0",active:"BestFriends_active__3lnxt",bfelement:"BestFriends_bfelement__ZzQ7P",bfname:"BestFriends_bfname__1aD4C",bestfriends:"BestFriends_bestfriends__CfNeV"}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return p}));var A=n(5),a=n.n(A),r=n(9),o=n(2),u=n(8),c=n(36),s="deadduck-network/auth/SET-USER-DATA",i={userId:null,login:null,email:null,isAuth:!1},l=function(e,t,n,A){return{type:s,payload:{userId:e,login:t,email:n,isAuth:A}}},f=function(){return function(){var e=Object(r.a)(a.a.mark((function e(t){var n,A,r,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.getAuthUserData();case 2:0===(n=e.sent).resultCode&&(A=n.data,r=A.id,o=A.login,c=A.email,t(l(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t,n){return function(){var A=Object(r.a)(a.a.mark((function A(r){var o,s;return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,u.a.loginUser(e,t,n);case 2:0===(o=A.sent).resultCode?r(f()):(s=o.messages.length>0?o.messages[0]:"Some error",r(Object(c.a)("login",{_error:s})));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},p=function(){return function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logoutUser();case 2:0===e.sent.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}},34:function(e,t,n){e.exports={usersPaginator:"Users_usersPaginator__4of9N",userList:"Users_userList__2Jnqw",user:"Users_user__sVcKx",userPhoto:"Users_userPhoto__1IkjE"}},35:function(e,t,n){e.exports={paginatorButton:"Paginator_paginatorButton__1QeDd",selectedPage:"Paginator_selectedPage__1qdpl",unselectedPage:"Paginator_unselectedPage__36fMo"}},38:function(e,t,n){"use strict";var A=n(0),a=n.n(A),r=n(14),o=n.n(r);t.a=function(e){switch(e.type){case"login":return a.a.createElement("button",{className:o.a.loginButton},"\u0412\u043e\u0439\u0442\u0438");case"logout":return a.a.createElement("button",{className:o.a.logoutButton,onClick:e.logout},"\u0412\u044b\u0439\u0442\u0438");case"send":return a.a.createElement("button",{className:o.a.send},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c");case"follow":return a.a.createElement("button",{className:o.a.followButton,onClick:e.onClick,disabled:e.disabled},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f");case"unfollow":return a.a.createElement("button",{className:o.a.followButton,onClick:e.onClick,disabled:e.disabled},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f");case"avatarChange":return a.a.createElement("div",{className:o.a.inputWrapper},a.a.createElement("input",{className:o.a.inputFile,type:"file",id:"inputFile",onChange:e.onMainPhotoSelected}),a.a.createElement("label",{htmlFor:"inputFile",className:o.a.inputFileButton},a.a.createElement("span",{className:o.a.inputFileButtonText},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b")));case"profileDataChange":return a.a.createElement("button",{className:o.a.profileDataChange,onClick:e.toEditMode},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c");case"saveProfileDataChange":return a.a.createElement("button",{className:o.a.saveProfileDataChange},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c");default:return a.a.createElement("button",{className:o.a.button},"Button")}}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var A=n(18),a=n(19),r=n(21),o=n(20),u=n(0),c=n.n(u),s=n(91),i=n.n(s),l=n(92),f=n.n(l),g=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:f.a.preloader},c.a.createElement(i.a,{type:"Circles",color:"#ff9133",height:80,width:80}))}}]),n}(c.a.Component)},52:function(e,t,n){e.exports={appWrapper:"App_appWrapper__3PCg-",appWrapperContent:"App_appWrapperContent__2dELA"}},61:function(e,t,n){e.exports={header:"Header_header__1pKPZ",loginBlock:"Header_loginBlock__1FPS_",username:"Header_username__cU_c0"}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return p})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return m}));var A=n(5),a=n.n(A),r=n(9),o=n(33),u=n(2),c=n(8),s=n(36),i={posts:[{id:1,post:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043a\u0430\u043a \u0432\u044b?",likesCount:15,avatar:"https://clck.ru/RaH6Z"},{id:2,post:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",likesCount:20,avatar:"https://clck.ru/RaH6Z"}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET-STATUS",status:e}},g=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var A;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:A=t.sent,n({type:"SET-USER-PROFILE",profile:A});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var A;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:A=t.sent,n(f(A));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var A;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.savePhoto(e);case 2:0===(A=t.sent).resultCode&&n({type:"SAVE-PHOTO-SUCCESS",photos:A.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n,A){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=A().auth.userId,t.next=3,c.b.saveProfile(e);case 3:if(0!==(o=t.sent).resultCode){t.next=8;break}n(g(r)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:o.messages})),t.abrupt("return",Promise.reject({_error:o.messages}));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,post:t.newPostText,likesCount:0,avatar:"https://clck.ru/RaH6Z"};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"DELETE-POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE-PHOTO-SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var A=n(90),a=A.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"842fcf68-1b9d-4e16-a7e5-e02cbf7809e4"}}),r={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),o.loadProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return a.put("profile",e).then((function(e){return e.data}))}},u={getAuthUserData:function(){return a.get("auth/me").then((function(e){return e.data}))},loginUser:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logoutUser:function(){return a.delete("auth/login").then((function(e){return e.data}))}}},81:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNkY4RTU5QzJBMTAxMUUzQkNFQkUxNzVDOTMyOTg1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNkY4RTU5RDJBMTAxMUUzQkNFQkUxNzVDOTMyOTg1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2RjhFNTlBMkExMDExRTNCQ0VCRTE3NUM5MzI5ODUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2RjhFNTlCMkExMDExRTNCQ0VCRTE3NUM5MzI5ODUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VD3xWgAAFhBJREFUeNrs3d91FEcW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"},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var A=n(33),a=n(2),r={messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u041a\u0430\u043a \u0436\u0438\u0437\u043d\u044c?"},{id:3,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439, \u043d\u0430\u043f\u0438\u0448\u0443 \u043f\u043e\u0437\u0436\u0435)"}],dialogs:[{id:1,user:"\u0410\u043d\u0434\u0440\u0435\u0439",avatar:"https://clck.ru/RaH6Z"},{id:2,user:"\u0418\u0433\u043e\u0440\u044c",avatar:"https://clck.ru/RQNNi"},{id:3,user:"\u0421\u0435\u0440\u0433\u0435\u0439",avatar:"https://clck.ru/RaH7G"},{id:4,user:"\u0418\u0440\u0438\u043d\u0430",avatar:"https://clck.ru/RaH87"},{id:5,user:"\u0414\u0430\u0448\u0430",avatar:"https://clck.ru/RhWYy"}]},o=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(A.a)(e.messages),[{id:4,message:n}])});default:return e}}},89:function(e,t,n){},92:function(e,t,n){e.exports={preloader:"Preloader_preloader__2bRtY"}},93:function(e,t,n){e.exports=n.p+"static/media/Android_O_Preview_Logo.525937d7.png"},96:function(e,t,n){e.exports={formControl:"FormControls_formControl__2dyIp",error:"FormControls_error__DqHhq",formSummaryError:"FormControls_formSummaryError__2QG-t",form:"FormControls_form__4bg1U"}}},[[144,2,3]]]);
//# sourceMappingURL=main.ace40a78.chunk.js.map