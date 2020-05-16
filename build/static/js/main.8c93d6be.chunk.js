(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(19),c=a.n(r),s=a(6),l=a(7),i=a(9),u=a(8),h=a(10),m=a(4),b=a(16),d="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:f},v=function(){return fetch("".concat(d,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books})},p=(a(26),a(5)),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e,t){console.log("****"+JSON.stringify(t)),console.log("Event: "+e.target.value),a.setState({value:e.target.value}),a.props.changeShelves(t,e.target.value)},a.state={value:""},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({value:this.props.category})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.books.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'.concat(t.imageLinks.thumbnail,'")')}}),o.a.createElement("div",{className:"book-shelf-changer"},console.log("shelf: "+t.shelf),o.a.createElement("select",{value:t.shelf||"none",onChange:function(a){return e.handleChange(a,t)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},t.title),o.a.createElement("div",{className:"book-authors"},t.authors)))})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateQuery=function(e){a.setState(function(){return{query:e}})},a.clearQuery=function(){a.updateQuery("")},a.state={query:"",books:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e,t=this;""!==this.setState.query&&(e=this.state.query,fetch("".concat(d,"/search"),{method:"POST",headers:Object(b.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})).then(function(e){console.log(e),void 0!==e?Array.isArray(e)?t.setState(function(){return{books:e.filter(function(e){return e.hasOwnProperty("imageLinks")}).filter(function(e){return e.hasOwnProperty("authors")})}}):t.setState(function(){return{query:"",books:[]}}):t.setState(function(){return{books:[]}})})}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(p.b,{className:"close-search",to:"/"},"Close "),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:function(t){return e.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement(g,{category:"none",books:this.state.books,changeShelves:this.props.searchForBooks})))}}]),t}(n.Component);var E=function(e){var t=e.books.filter(function(e){return"currentlyReading"===e.shelf}),a=e.books.filter(function(e){return"wantToRead"===e.shelf}),n=e.books.filter(function(e){return"read"===e.shelf});return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement(g,{category:"currentlyReading",books:t,changeShelves:e.searchForBooks})),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),o.a.createElement(g,{category:"wantToRead",books:a,changeShelves:e.searchForBooks})),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement(g,{category:"read",books:n,changeShelves:e.searchForBooks})))),o.a.createElement(p.b,{to:"/search",className:"open-search-link"},"Add a book"))},N=a(0),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={books:[]},a.changeShelves=a.changeShelves.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;v().then(function(t){e.setState(function(){return{books:t}})})}},{key:"changeShelves",value:function(e,t){var a=this;!function(e,t){fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})}(e,t),v().then(function(e){a.setState(function(){return{books:e}})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(N.a,{exact:!0,path:"/",render:function(){return o.a.createElement(E,{books:e.state.books,searchForBooks:e.changeShelves})}}),o.a.createElement(N.a,{path:"/search",render:function(){return o.a.createElement(y,{searchForBooks:e.changeShelves})}}))}}]),t}(o.a.Component);a(33);c.a.render(o.a.createElement(p.a,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.8c93d6be.chunk.js.map