(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"6aRn":function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),c=n("o0o1"),a=n.n(c),i=n("HaE+"),s=n("1OyB"),o=n("vuIU"),u=n("JX7q"),l=n("Ji7U"),p=n("md7G"),d=n("foSv"),j=n("rePB"),b=n("q1tI"),f=n("/MKj"),h=n("55Ip"),O=n("Ty5D"),m=n("e+cM"),v=n("ZpDd"),x=n("LADp");n("9SDL");function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var w=n("vDqi"),y=function(t){Object(l.a)(n,t);var e=g(n);function n(t){var r;return Object(s.a)(this,n),r=e.call(this,t),Object(j.a)(Object(u.a)(r),"submit",function(){var t=Object(i.a)(a.a.mark((function t(e){var n,c,i,s,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),n=r.state,c=n.email,i=n.password,c&&i){t.next=4;break}return t.abrupt("return");case 4:return r.props.dispatch(Object(v.P)()),s="",t.next=8,w.get("https://api.ipify.org?format=json");case 8:(o=t.sent)&&o.data&&o.data.ip&&(s=o.data.ip),r.props.dispatch(Object(x.t)(c,i,s,(function(){}),(function(){r.props.dispatch(Object(v.y)())})));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.state={email:"",password:""},r}return Object(o.a)(n,[{key:"inputField",value:function(t,e){this.setState(Object(j.a)({},e,t.target.value))}},{key:"render",value:function(){var t=this,e=this.state,n=e.email,c=e.password;return Object(r.jsx)("div",{id:"login-page",children:Object(r.jsx)("div",{className:"white-box",children:Object(r.jsxs)("form",{action:"",method:"POST",onSubmit:this.submit,children:[Object(r.jsx)("img",{src:"/cleareststake.png",alt:""}),Object(r.jsx)("h2",{children:"Sign In"}),Object(r.jsxs)("div",{className:"c-form-row",children:[Object(r.jsx)("label",{children:"Email"}),Object(r.jsx)(m.c,{type:"email",value:n,onChange:function(e){return t.inputField(e,"email")},required:!0,height:"3rem"})]}),Object(r.jsxs)("div",{className:"c-form-row",children:[Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)(m.c,{type:"password",value:c,onChange:function(e){return t.inputField(e,"password")},required:!0,height:"3rem"})]}),Object(r.jsxs)("div",{id:"login-page__button",children:[Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"font-size-14",children:Object(r.jsx)(h.b,{to:"/forgot-password",children:"Forgot Password?"})})}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign In"})]})]})})})}}]),n}(b.Component);e.default=Object(f.b)((function(){return{}}))(Object(O.g)(y))}}]);