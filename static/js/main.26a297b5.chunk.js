(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(20),s=a.n(i),o=a(11),c=a(3),l=a(4),u=a(6),d=a(5),h=(a(26),a(27),a(0)),b=function(e){var t=e.props;return Object(h.jsx)("svg",{width:t.width,height:t.height,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:t.color,"aria-label":t.label,children:Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[Object(h.jsxs)("circle",{cx:"22",cy:"22",r:t.radius,strokeOpacity:"0",children:[Object(h.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),Object(h.jsxs)("circle",{cx:"22",cy:"22",r:t.radius,strokeOpacity:"0",children:[Object(h.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"strokeOpacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"strokeWidth",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),Object(h.jsx)("circle",{cx:"22",cy:"22",r:t.radius+2,children:Object(h.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})};console.log("fdsfdsafadsf");var g=function(){return Object(h.jsx)("div",{className:"LoadMoreIcon",children:Object(h.jsx)(b,{props:{height:500,width:500,color:"green",radius:6,label:"audio-loading"}})})},j=function(e){var t=e.onClick,a=e.onChange;return Object(h.jsx)("button",{type:"button",onClick:t,onChange:a,children:"Load More"})},p=function(){return Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})},m=function(e){var t=e.onSubmit,a=e.valueInput,n=e.onChange;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(h.jsx)(p,{}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:a,onChange:n})]})})})},f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){t.preventDefault(),t.target===t.currentTarget&&e.props.onModalClose()},e.closeByKey=function(t){"Escape"===t.code&&e.props.onModalClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeByKey),document.querySelector("body").style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeByKey),document.querySelector("body").style.overflow="auto"}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"Overlay",onClick:this.handleKeyDown,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.hits,alt:this.props.hits})})})}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isModalOpen:!1},e.onToggleModal=function(){e.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.src,n=e.alt,r=e.largeImageURL;return Object(h.jsxs)("li",{className:"ImageGalleryItem",id:t,children:[Object(h.jsx)("img",{src:a,alt:n,onClick:this.onToggleModal,className:"ImageGalleryItem-image"}),this.state.isModalOpen&&Object(h.jsx)(f,{onModalClose:this.onToggleModal,hits:r})]})}}]),a}(n.Component),v=function(e){e.children;var t=e.hits;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(h.jsx)(O,{id:e.id,src:e.webformatURL,largeImageURL:e.largeImageURL,alt:e.tags},e.webformatURL)}))})},y=a(21),x=a(9),w=a.n(x);w.a.defaults.baseURL="https://newsapi.org/v2";var C=function(e){return w.a.defaults.params=Object(y.a)({apiKey:"79fa6b1eb30a455588335102c0b1e4d1"},e)},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return C({q:e,webformatURL:"",largeImageURL:"",id:"",per_page:12,page:t}),w.a.get("everything").then((function(e){return e.data.articles.map((function(e){var t=e.urlToImage;return{webformatURL:t,tags:e.title,largeImageURL:t}}))}))},k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],query:"all",inputText:"",page:1,isLoading:!1},e.handleChange=function(t){e.setState({inputText:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({query:e.state.inputText,page:1,hits:[]})},e.getGallery=function(){e.setState({isLoading:!0}),S(e.state.query,e.state.page).then((function(t){return e.setState((function(e){return{hits:[].concat(Object(o.a)(e.hits),Object(o.a)(t))}}))}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.handleChangePage=function(){e.setState({isLoading:!0}),e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.query===t.query&&this.state.page===t.page||this.getGallery()}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.inputText;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{onSubmit:this.handleSubmit,valueInput:a,onChange:this.handleChange}),Object(h.jsx)(v,{hits:t}),this.state.isLoading&&Object(h.jsx)(g,{}),this.state.hits.length%12!==0&&this.state.hits!==[]&&Object(h.jsx)(j,{onClick:this.handleChangePage,onChange:this.windowSkroll})]})}}]),a}(n.Component);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.26a297b5.chunk.js.map