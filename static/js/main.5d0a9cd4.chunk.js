(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(83),o=a.n(l),c=a(17),i=a(18),u=a(23),s=a(19),d=a(22),m=(a(92),function(e){return r.a.createElement("div",{className:"ui center aligned container"},r.a.createElement("h2",null,e.heading),r.a.createElement("p",null,e.tagline))}),b=a(196),p=a(195),E=a(11),g=(a(96),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).onFormSubmit=function(e){a.props.createBlog(e.title,e.blogBody)},a.renderInput=function(e){var t=e.input;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"What's the title?"),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})))},a.renderTextArea=function(e){var t=e.input;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Type it out!"),r.a.createElement("textarea",t))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onFormSubmit),className:"ui form text-area"},r.a.createElement(b.a,{name:"title",component:this.renderInput}),r.a.createElement(b.a,{name:"blogBody",component:this.renderTextArea}),r.a.createElement("button",{className:"ui black button"},"Blog It!"))}}]),t}(r.a.Component)),f=Object(p.a)({form:"createBlog"})(g),y=Object(E.b)(null,{createBlog:function(e,t){return{type:"CREATE_BLOG",payload:{title:e,body:t}}}})(f),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).onDeleteClick=function(e){a.props.deleteBlog(e.target.dataset.title,e.target.dataset.body)},a.renderBlogs=function(){return a.props.blogs.map(function(e){return r.a.createElement("div",{key:e.title,className:"item"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"description"},e.body)),r.a.createElement("button",{className:"ui right floated red button",onClick:a.onDeleteClick,"data-title":e.title,"data-body":e.body},"Delete Blog"))})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui relaxed divided list"},this.renderBlogs())}}]),t}(r.a.Component),h=Object(E.b)(function(e){return{blogs:e.blogs}},{deleteBlog:function(e,t){return{type:"DELETE_BLOG",payload:{title:e,body:t}}}})(O),v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(m,{heading:"Blog It",tagline:"\u201cBlogging is a conversation, not a code.\u201d"}),r.a.createElement("div",{className:"ui container"},r.a.createElement(y,null)),r.a.createElement("div",{className:"list-heading"},r.a.createElement(m,{heading:"Your Blogs",tagline:"\u201cIf you want to continually grow your blog, you need to learn to blog on a consistent basis.\u201d"})),r.a.createElement("div",{className:"ui container blog-list"},r.a.createElement(h,null)))}}]),t}(n.Component),j=a(5),B=a(197),N=a(85),w=Object(j.c)({blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_BLOG":return[].concat(Object(N.a)(e),[t.payload]);case"DELETE_BLOG":return e.filter(function(e){return e.title!==t.payload.title||e.body!==t.payload.body});default:return e}},form:B.a}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,k=Object(j.e)(w,_(Object(j.a)()));o.a.render(r.a.createElement(E.a,{store:k},r.a.createElement(v,null)),document.querySelector("#root"))},87:function(e,t,a){e.exports=a(194)},92:function(e,t,a){},96:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.5d0a9cd4.chunk.js.map