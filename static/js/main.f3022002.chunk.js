(this.webpackJsonpmoviej=this.webpackJsonpmoviej||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),o=(a(65),a(4)),l=a(3),s=a(5),u=a(6),m=a(7),p=a(9),d=a.n(p),v=a(12),h=(a(67),a(36)),f=a.n(h),g=a(17),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleError=function(){return f.a},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.release_date,c=e.poster,i=e.overview,o=e.view,l=e.lan,s=e.avg_rate,u="https://image.tmdb.org/t/p/w500"+c;return r.a.createElement("div",{className:o},r.a.createElement("div",{className:"movie_container"},r.a.createElement("div",{className:o+"img_contents"},r.a.createElement(g.b,{to:"/MovieJ/movie_detail/"+t+"/"+l},r.a.createElement("img",{alt:a,src:u,onError:this.handleError}))),r.a.createElement("div",{className:o+"item_content"},r.a.createElement("div",null,r.a.createElement("h2",{className:"item_title"},a)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"en-US"===l?"Release Date: "+n:"\uac1c\ubd09 \uc77c: "+n)),r.a.createElement("h3",{className:"item_rate"},"".concat(s,"/10"))),r.a.createElement("div",{className:"overview_container"},r.a.createElement("p",{className:"overview"},""===i?"\ud574\ub2f9 \uc5b8\uc5b4\uc758 \uc904\uac70\ub9ac\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4":i)),r.a.createElement("div",{className:"more"},r.a.createElement(g.b,{to:"/MovieJ/movie_detail/"+t+"/"+l},"en-US"===l?"More...":"\ub354 \ubcf4\uae30...")))))}}]),t}(r.a.Component),E=a(116),y=(a(72),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.value;return r.a.createElement("div",null,e<100?r.a.createElement("div",{id:"loading_wrapper"},r.a.createElement(E.a,{color:"secondary",value:this.props.value,variant:"determinate"})):r.a.createElement("div",null))}}]),t}(r.a.Component)),w=(a(73),a(26)),_="PAGE",O="NEXT_BTN",A="PREV_BTN",k="VIEW",j="MOVIELIST",N="KEYWORD",R="SEARCH",S="LANGUAGE",C="ACTOR_INFO",M="ACTOR_IMG",x="LOADING";var P=a(21),J=a.n(P);function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ko-KR";return J.a.get("https://api.themoviedb.org/3/discover/movie?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+t+"&sort_by=popularity.desc&include_adult=false&include_video=false&page="+e)}function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ko-KR";return J.a.get("https://api.themoviedb.org/3/movie/"+e+"?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+t)}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ko-KR";return J.a.get("https://api.themoviedb.org/3/movie/"+e+"/reviews?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+t)}function I(e){return J.a.get("https://api.themoviedb.org/3/review/"+e+"?api_key=93041e50ffd37dbace90ae54a55c67f3")}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ko-KR";return J.a.get("https://api.themoviedb.org/3/movie/"+e+"/recommendations?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+t+"&page=1")}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ko-KR";return J.a.get("https://api.themoviedb.org/3/search/movie?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+t+"&query="+e+"&include_adult=false")}function L(e){return J.a.get("https://api.themoviedb.org/3/movie/"+e+"/credits?api_key=93041e50ffd37dbace90ae54a55c67f3")}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US";return J.a.get("https://api.themoviedb.org/3/person/"+e+"/movie_credits?api_key=93041e50ffd37dbace90ae54a55c67f3&language="+t)}function H(e){return J.a.get("https://api.themoviedb.org/3/person/"+e+"?api_key=93041e50ffd37dbace90ae54a55c67f3")}var V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).progress=function(){var e=a.props.completed;e>=100?clearInterval(a.timer):a.props.page_loading(e+1)},a.getMovies=function(){var e=Object(v.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.lang,e.next=3,K(t,n);case 3:r=e.sent,a.props.handleMovielist(r.data.results,r.data.total_pages,t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.ChangeView=function(e){a.props.handleView(e.target.value)},a.To_first=function(){a.getMovies(1)},a.To_end=function(){var e=a.props.total_pages;a.getMovies(e)},a.onNext=function(){var e=a.props,t=e.cur_page;t<e.total_pages?a.getMovies(Number(t)+1):alert("Done")},a.onPrev=function(){var e=a.props.cur_page;e>1?a.getMovies(Number(e)-1):alert("Page can not less than 1")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.lan!==e.lan||(this.props.cur_page!==e.cur_page||(this.props.view!==e.view||this.props.completed!==e.completed))}},{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,30);var e=localStorage.cur_page;e||(e=this.props.cur_page),-1===e?this.getMovies(1):this.getMovies(e)}},{key:"componentDidUpdate",value:function(e,t){e.cur_page!==this.props.cur_page&&(localStorage.cur_page=this.props.cur_page)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.movie_list,a=e.cur_page,n=e.view,c=e.lan,i=e.total_pages,o=e.completed,l=t.map((function(e,t){return r.a.createElement(b,{id:e.id,key:e.id,title:e.title,release_date:e.release_date,poster:"poster"===n?e.poster_path:e.backdrop_path,overview:e.overview,view:n,lan:c,avg_rate:e.vote_average})}));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(y,{value:o})),r.a.createElement("div",{className:"select_wrapper"},r.a.createElement("span",null,r.a.createElement("b",null,"View ")),r.a.createElement("select",{onChange:this.ChangeView},r.a.createElement("option",{value:"poster"},"Poster Card"),r.a.createElement("option",{value:"backdrop"},"Backdrop Card"))),r.a.createElement("div",{className:"movies_wrapper"},l),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{onClick:this.To_first,disabled:!(a>1)},"ko-KR"!==c?"To First":"\ucc98\uc74c"),r.a.createElement("button",{onClick:this.onPrev,disabled:!(a>1)},"ko-KR"!==c?"Previous":"\uc774\uc804"),r.a.createElement("span",null,r.a.createElement("b",null,"".concat(a,"/").concat(i))),r.a.createElement("button",{onClick:this.onNext,disabled:!(a<i)},"ko-KR"!==c?"Next":"\ub2e4\uc74c"),r.a.createElement("button",{onClick:this.To_end,disabled:!(a<i)},"ko-KR"!==c?"To End":"\ub9c8\uc9c0\ub9c9")))}}]),t}(r.a.Component),z=Object(w.b)((function(e){return{total_pages:e.movielist.total_pages,movie_list:e.movielist.movie_list,cur_page:e.movielist.cur_page,view:e.movielist.view,lan:e.movielist.lan,completed:e.load.completed}}),(function(e){return{handlePage:function(t){e(function(e){return{type:_,cur_page:e}}(t))},handleView:function(t){e(function(e){return{type:k,view:e}}(t))},handleMovielist:function(t,a,n){e(function(e,t,a){return{type:j,movie_list:e,total_pages:t,cur_page:a}}(t,a,n))},page_loading:function(t){e(function(e){return{type:x,completed:e}}(t))}}}))(V),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.to,a=e.id,n=e.lan;return console.log("Header: "+n),r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("a",{href:n},"MovieJ")),r.a.createElement("p",{className:"language-container"},r.a.createElement("a",{href:"en-US"!==n?"/MovieJ"+t+a+"/en-US":"#"},r.a.createElement("span",{className:"en"},"En")),r.a.createElement("a",{href:"ko-KR"!==n?"/MovieJ"+t+a+"/ko-KR":"#"},r.a.createElement("span",{className:"kr"},"Kr")))))}}]),t}(r.a.Component);q.defaultProps={to:"",id:"",lan:"/ko-KR"};var F=q,Z=(a(91),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).doSearch=function(){var e=Object(v.a)(d.a.mark((function e(t){var n,r,c=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"ko-KR",e.next=3,T(t,n);case 3:r=e.sent,a.props.handleSearch(r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target.value,n=a.props.lan;a.props.handleInput(t);var r=document.querySelector(".search-animation-container");if(""===t){var c=r.className.split(" ");c[1]="search_hide",r.className=c.join(" ")}else{a.doSearch(t,n);var i=r.className.split(" ");i[1]="search_active",r.className=i.join(" ")}},a.handleClick=function(){var e=a.props,t=e.keyword,n=e.lan;window.location.assign("/MovieJ/search?p="+t+"&language="+n)},a.handleEnter=function(e){13===e.charCode&&a.handleClick()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.results,a=t.map((function(e){return r.a.createElement("li",{key:e.id,id:e.id},r.a.createElement("a",{href:"/MovieJ/search?p="+encodeURI(e.title)},e.title))}));return r.a.createElement("div",{className:"search_bar"},r.a.createElement("section",{className:"search"},r.a.createElement("div",{className:"sub"},r.a.createElement("input",{ref:function(t){return e.input=t},type:"text",placeholder:"Movie Title",className:"input",onChange:this.handleChange,value:this.props.keyword,onKeyPress:this.handleEnter}))),r.a.createElement("div",{className:"search-animation-container search_hide"},r.a.createElement("h3",null,"Keyword Searches"),r.a.createElement("div",{className:"search-list-container"},r.a.createElement("ul",null,t.length>0?a:" No result"))))}}]),t}(r.a.Component)),W=Object(w.b)((function(e){return{keyword:e.search.keyword,results:e.search.results}}),(function(e){return{handleInput:function(t){e(function(e){return{type:N,keyword:e}}(t))},handleSearch:function(t){e(function(e){return{type:R,results:e}}(t))}}}))(Z),X=function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).props.match.url;return a.props.handleLanguage(n.substr(1,n.length)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match.url,t="";return console.log(this.props.lan),"/"===e||"/ko-KR"===e?t=r.a.createElement(z,{lang:"ko-KR"}):"/en-US"===e&&(t=r.a.createElement(z,{lang:"en-US"})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(F,{lan:"/"===e||"/ko-KR"===e?"ko-KR":"en-US"}),r.a.createElement(W,{lan:"/"===e||"/ko-KR"===e?"ko-KR":"en-US"})),t)}}]),t}(r.a.Component),Y=Object(w.b)((function(e){return{lan:e.movielist.lan}}),(function(e){return{handleLanguage:function(t){e(function(e){return{type:S,lan:e}}(t))}}}))(X),Q=(a(92),a(119)),$=a(117),ee=(a(93),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getRecommendations=Object(v.a)(d.a.mark((function e(){var t,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.id,r=t.lan,console.log("id: "+n),e.next=4,B(n,r);case 4:c=e.sent,a.setState({recommendations:c.data.results}),console.log(a.state.recommendations);case 7:case"end":return e.stop()}}),e)}))),a.state={recommendations:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getRecommendations()}},{key:"render",value:function(){var e=this.state.recommendations,t=this.props.lan,a=e.slice(0,10),n=a.map((function(e){return r.a.createElement(Q.a,{key:e.id},r.a.createElement("div",{className:"recommendation_wrapper",key:e.id,onClick:function(){}},r.a.createElement($.a,null,r.a.createElement("a",{href:"/MovieJ/movie_detail/"+e.id+"/"+t},r.a.createElement("img",{alt:e.title,src:"https://image.tmdb.org/t/p/w500"+e.poster_path}),r.a.createElement("p",null,e.title)))))}));return r.a.createElement("div",{className:"recommendation"},r.a.createElement("div",{className:"menu"},r.a.createElement("h3",null,"en-US"===t?"Recommendations":"\ucd94\ucc9c \uc601\ud654")),r.a.createElement("div",{className:"recommendation_container"},0===a.length?"ko-KR"!==t?"No recommendation":"\ucd94\ucc9c \uc601\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.":n))}}]),t}(r.a.Component)),te=a(32),ae=a.n(te),ne=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.profile,a=e.chacter,n=e.name,c=e.id;return r.a.createElement("div",{className:"cast_item"},r.a.createElement("a",{href:"/people/"+c},r.a.createElement("img",{src:null!==t?"https://image.tmdb.org/t/p/w500"+t:ae.a,alt:n}),r.a.createElement("p",null,r.a.createElement("b",null,n)),r.a.createElement("p",null,a)))}}]),t}(r.a.Component),re=(a(94),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getCredits=function(){var e=Object(v.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:n=e.sent,console.log(n.data.cast),a.setState({cast:n.data.cast,crew:n.data.crew});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={cast:[],crew:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.id;this.getCredits(e)}},{key:"render",value:function(){var e=this.state.cast;console.log(e);var t=e.map((function(e){return r.a.createElement(ne,{id:e.id,key:e.cast_id,chacter:e.character,name:e.name,profile:e.profile_path})}));return r.a.createElement("div",{className:"cast_container"},t,r.a.createElement("div",{className:"arrow_btn",direction:"left"},r.a.createElement("div",{className:"backward"})),r.a.createElement("div",{className:"arrow_btn",direction:"right"},r.a.createElement("div",{className:"forward"})))}}]),t}(r.a.Component)),ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).progress=function(){var e=a.state.completed;a.setState({completed:e>=100?clearInterval(a.timer):e+1})},a.getDetail=function(){var e=Object(v.a)(d.a.mark((function e(t,n){var r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t,n);case 2:return r=e.sent,e.next=5,D(t,n);case 5:(c=e.sent).data.results.length>0?a.setState({info:{id:t,title:r.data.title,overview:r.data.overview,vote_average:r.data.vote_average,backdrop:r.data.backdrop_path,poster_path:r.data.poster_path,state:r.data.status,runtime:r.data.runtime,release_date:r.data.release_date,tagline:r.data.tagline,revenue:r.data.revenue,review:c.data.results[c.data.results.length-1]}}):a.setState({info:{id:t,title:r.data.title,overview:r.data.overview,vote_average:r.data.vote_average,backdrop:r.data.backdrop_path,poster_path:r.data.poster_path,state:r.data.status,runtime:r.data.runtime,release_date:r.data.release_date,tagline:r.data.tagline,revenue:r.data.revenue}}),i=document.getElementsByClassName("detail"),void 0!==a.state.info.backdrop?i[0].style.backgroundImage="url(https://image.tmdb.org/t/p/w500"+a.state.info.backdrop+")":i[0].style.backgroundImage="url(/Users/yjlee/Documents/WorkSpace/moviej/src/img/collect.gif)";case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.state={info:{id:0,title:"",overview:"",vote_average:0,backdrop:"",poster_path:"",status:"",runtime:0,release_date:"",tagline:"",revenue:0,review:void 0},completed:0,load:!1,credits:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return t!==this.state}},{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,30);var e=this.props,t=e.id,a=e.lan;this.getDetail(t,a),this.setState({load:!0})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state,t=e.info,a=e.load,n=t.id,c=t.title,i=t.overview,o=t.vote_average,l=t.poster_path,s=t.tagline,u=t.runtime,m=t.release_date,p=t.revenue,d=t.review,v=this.props.lan,h=r.a.createElement("div",{className:"review_notice"},"en-US"===v?"Sorry, We do not have any reviews for this movie":"\ub9ac\ubdf0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");return void 0!==d&&(h=r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("h3",{className:"review_author"},"A review Written by ",d.author),r.a.createElement("p",{className:"review_content"},d.content),r.a.createElement(g.b,{to:"/MovieJ/movie_review/"+n+"/"+v+"/"+d.id+"?title="+c},"Read more...")),r.a.createElement("p",{className:"read_all"},r.a.createElement(g.b,{to:"/MovieJ/movie_review/"+n+"/"+v+"?title="+c},"Read All Reviews")))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(y,{value:this.state.completed,load:a})),r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"custom_bg"},r.a.createElement("div",{className:"movie_wrapper",style:{width:"1350px",display:"flex",padding:"10px"}},r.a.createElement("div",{className:"img_container"},r.a.createElement("img",{alt:c,src:"https://image.tmdb.org/t/p/w500"+l})),r.a.createElement("div",{className:"info_container"},r.a.createElement("h2",{className:"movie_title"},c),r.a.createElement("h3",null,s),r.a.createElement("div",{className:"overview"},r.a.createElement("h3",null,"en-US"===v?"OverView":"\uc904\uac70\ub9ac"),r.a.createElement("p",null,r.a.createElement("b",null,""===i?"\uc904\uac70\ub9ac\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4":i))),r.a.createElement("div",{className:"vote_rate"},r.a.createElement("h2",null,"en-US"===v?"Average Rate: "+o:"\ud3c9\uade0 \ud3c9\uc810: "+o,"/10")),r.a.createElement("p",null,"es-US"===v?"Release Date: "+m:"\uac1c\ubd09 \uc77c: "+m),r.a.createElement("p",null," ","en-US"===v?"Running Time: "+u+"mins":"\uc7ac\uc0dd \uc2dc\uac04: "+u+"\ubd84"," "),r.a.createElement("p",null,"Box Office: $",void 0!==p?p.toLocaleString():0),r.a.createElement("div",{className:"movie_link",style:{color:"white"}},"Link Space"))))),r.a.createElement("div",{className:"casting menu"},r.a.createElement("h3",null,"en-US"===v?"Actors":"\ucd9c\uc5f0\uc9c4"),r.a.createElement(re,{id:this.props.id})),r.a.createElement("div",{className:"menu"},r.a.createElement("h3",null,"en-US"===v?"Review":"\ub9ac\ubdf0")),r.a.createElement("div",{className:"review_container"},h),r.a.createElement("hr",null),r.a.createElement(ee,{id:this.props.id,lan:v}))}}]),t}(r.a.Component),ie=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match;return console.log(e.params.lan),r.a.createElement("div",null,r.a.createElement(F,{to:"/movie_detail",lan:"/"+e.params.lan,id:"/"+e.params.id}),r.a.createElement(W,{lan:"/"+e.params.lan}),r.a.createElement(ce,{id:e.params.id,lan:e.params.lan}))}}]),t}(r.a.Component),oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getData=Object(v.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.r_id,e.next=3,I(t);case 3:n=e.sent,a.setState({review:n.data});case 5:case"end":return e.stop()}}),e)}))),a.state={review:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.review;return r.a.createElement("div",{className:"review card"},r.a.createElement("h2",{className:"review_author"},"A review written by ",e.author),r.a.createElement("p",{className:"all"},e.content))}}]),t}(r.a.Component),le=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getReviews=function(){var e=Object(v.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t,n);case 2:r=e.sent,console.log(r.data.results),a.setState({reviews:r.data.results});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.state={reviews:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.id,a=e.lan;this.getReviews(t,a)}},{key:"render",value:function(){var e=this.state.reviews,t=this.props,a=t.id,n=t.title,c=t.lan;console.log(c);var i=e.map((function(e){return r.a.createElement("div",{key:e.id,className:"card"},r.a.createElement("h2",{className:"review_author"},"A review written by ",e.author),r.a.createElement("p",{className:"review_content"},e.content),r.a.createElement(g.b,{to:"/MovieJ/movie_review/"+a+"/"+c+"/"+e.id+"?title="+n},"Read more..."))}));return r.a.createElement("div",{className:"r_wrapper"},r.a.createElement("div",{className:"review_list"},i))}}]),t}(r.a.Component),se=(a(95),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleBack=function(){console.log("Back Clicked");var e=a.props,t=e.history,n=e.match,r=e.location,c=new URLSearchParams(r.search).get("title");void 0===n.params.r_id?t.push("MovieJ/movie_detail/"+n.params.id+"/"+n.params.lan):t.push("MovieJ/movie_review/"+n.params.id+"/"+n.params.lan+"?title="+c)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.location,n="",c=new URLSearchParams(a.search).get("title");return n=void 0===t.params.r_id?r.a.createElement(le,{id:t.params.id,title:c,lan:t.params.lan}):r.a.createElement(oe,{id:t.params.id,r_id:t.params.r_id,title:c,lan:t.params.lan}),r.a.createElement("div",null,r.a.createElement(W,{lan:t.params.lan}),r.a.createElement("div",{className:"back",onClick:this.handleBack},r.a.createElement("h2",null,c),r.a.createElement("h3",null,"\u2190 Back to Detail")),n)}}]),t}(r.a.Component)),ue=function(){return r.a.createElement("div",{className:"no_match",style:{height:"1300px",textAlign:"center"}},r.a.createElement("h1",null,"Not Found 404"))},me=a(118),pe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={total_pages:0,page:0,results:[]},a.getSearchResults=function(){var e=Object(v.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t,n);case 2:r=e.sent,a.setState({total_pages:r.data.total_pages,page:r.data.page,results:r.data.results}),console.log(r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentDidMount",value:function(){var e=this.props.location,t=new URLSearchParams(e.search);this.getSearchResults(t.get("p"),t.get("language"))}},{key:"render",value:function(){var e=this.props.location,t=this.state,a=t.results,n=t.page,c=new URLSearchParams(e.search),i=c.get("language");console.log("location: "+c);var o=a.map((function(e){return r.a.createElement(b,{id:e.id,key:e.id,title:e.title,release_date:e.release_date,poster:e.poster_path,overview:e.overview,view:"poster",lan:"/"+i,avg_rate:e.vote_average})}));return r.a.createElement("div",null,r.a.createElement(F,{lan:"ko-KR"===i?"ko-KR":"en-US"}),r.a.createElement(W,{lan:"ko-KR"===i?"ko-KR":"en-US"}),r.a.createElement("div",{className:"search_results_container",style:{padding:"10px"}},r.a.createElement("h2",null,"Search > Results"),o,r.a.createElement("div",{className:"btns"},r.a.createElement(me.a,{variant:"contained",color:"primary",onClick:this.handlePrev},"ko-KR"!==i?"Previous":"\uc774\uc804"),r.a.createElement("span",null,r.a.createElement("b",null,n)),r.a.createElement(me.a,{variant:"contained",color:"primary",onClick:this.handleNext},"ko-KR"!==i?"Previous":"\ub2e4\uc74c"))))}}]),t}(r.a.Component),de=(a(96),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getMovieCredit=function(){var e=Object(v.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t,n);case 2:r=e.sent,a.setState({m_credits:r.data.cast});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.getInfo=function(){var e=Object(v.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=t,J.a.get("https://api.themoviedb.org/3/person/"+c+"/images?api_key=93041e50ffd37dbace90ae54a55c67f3");case 2:return n=e.sent,e.next=5,H(t);case 5:r=e.sent,a.setState({actor_img:"https://image.tmdb.org/t/p/w500"+n.data.profiles[0].file_path,actor_info:r.data});case 7:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),a.data_more=function(){var e=document.querySelector("[data-read-more-toggle]"),t=document.querySelector("[arial-expanded]"),a=document.querySelector(".shade");"false"===e.getAttribute("more")?(e.innerHTML="Read less",e.setAttribute("more",!0),t.setAttribute("arial-expanded",!0),a.style.visibility="hidden"):"true"===e.getAttribute("more")&&(e.innerHTML="Read more",e.setAttribute("more",!1),t.setAttribute("arial-expanded",!1),a.style.visibility="visible")},a.state={m_credits:[],actor_img:ae.a,actor_info:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match;this.getMovieCredit(e.params.name),this.getInfo(e.params.name)}},{key:"render",value:function(){var e=this.state,t=e.m_credits,a=e.actor_img,n=e.actor_info,c=t.map((function(e,t){return r.a.createElement(g.b,{to:"/movie_detail/"+e.id},r.a.createElement("div",{className:"m_item",key:t,id:t},r.a.createElement("img",{src:null!==e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:f.a,alt:e.title}),r.a.createElement("div",null,r.a.createElement("p",null,e.title),r.a.createElement("p",null,""!==e.character?e.character:"None"))))}));return console.log(t),r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(W,null),r.a.createElement("div",{className:"m_container"},r.a.createElement("aside",{className:"m_aside"},r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:"actor"}),r.a.createElement("p",null,r.a.createElement("a",{href:"#overview"},"Biography")),r.a.createElement("p",null,r.a.createElement("a",{href:"#credits"},"Credits")))),r.a.createElement("section",{className:"m_div",onScroll:this.handleShowup},r.a.createElement("div",null,r.a.createElement("h1",null,n.name),r.a.createElement("div",{className:"actor_info",id:"overview","arial-expanded":"false"},r.a.createElement("div",{className:"shade"}),r.a.createElement("p",null,n.biography)),r.a.createElement("span",{"data-read-more-toggle":"overview",more:"false",onClick:this.data_more},"Read more")),r.a.createElement("h2",{id:"credits"},"Credits"),r.a.createElement("div",{className:"m_wrapper"},c))))}}]),t}(r.a.Component)),ve=a(28),he=a(55),fe=a(56),ge=a(57),be=a.n(ge);a(99);var Ee=function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ve.c,null,r.a.createElement(ve.a,{exact:!0,path:"/MovieJ",component:Y}),r.a.createElement(ve.a,{path:"/MovieJ/ko-KR",component:Y}),r.a.createElement(ve.a,{path:"/MovieJ/en-US",component:Y}),r.a.createElement(ve.a,{path:"/MovieJ//movie_detail/:id/:lan",component:ie}),r.a.createElement(ve.a,{path:"/MovieJ//movie_detail/:id",component:ie}),r.a.createElement(ve.a,{path:"/MovieJ//movie_review/:id/:lan/:r_id",component:se}),r.a.createElement(ve.a,{path:"/MovieJ//movie_review/:id/:lan",component:se}),r.a.createElement(ve.a,{path:"/MovieJ/search",component:pe}),r.a.createElement(ve.a,{path:"/MovieJ//people/:name",component:de}),r.a.createElement(ve.a,{component:ue})),r.a.createElement("footer",null,r.a.createElement("a",{className:"giticon",href:"https://github.com/leye195"},r.a.createElement(fe.a,{icon:he.a,size:"2x"})),r.a.createElement("p",{style:{marginTop:"0px"}},"CopyRight@YJDaniel"),r.a.createElement("div",null,r.a.createElement("img",{src:be.a,alt:"tmdb",style:{width:"150px"}})))))},ye=a(31),we=a(20);function _e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_e(a,!0).forEach((function(t){Object(we.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_e(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ae={total_pages:0,movie_list:[],cur_page:-1,lan:"ko-KR",view:"poster"};function ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ke(a,!0).forEach((function(t){Object(we.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ke(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ne={keyword:"",results:[]};function Re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Re(a,!0).forEach((function(t){Object(we.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Re(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ce={m_credits:[],actor_img:ae.a};var Me={completed:-1};var xe=Object(ye.b)({movielist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Oe({},e,{cur_page:t.cur_page});case O:return Oe({},e,{cur_page:e.cur_page+1});case A:return Oe({},e,{cur_page:e.cur_page-1});case k:return Oe({},e,{view:t.view});case j:return Oe({},e,{movie_list:t.movie_list,total_pages:t.total_pages,cur_page:t.cur_page});case S:return Oe({},e,{lan:t.lan});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return je({},e,{results:t.results});case N:return je({},e,{keyword:t.keyword});default:return e}},actor_info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Se({},e,{m_credits:t.m_credits});case M:return Se({},e,{actor_img:t.actor_img});default:return e}},load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;return t.type===x?{completed:t.completed}:e}}),Pe=function(){return Object(ye.c)(xe)}();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w.a,{store:Pe},r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,a){e.exports=a.p+"static/media/user.ac194a4b.svg"},36:function(e,t){e.exports="data:image/png;base64,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"},57:function(e,t,a){e.exports=a.p+"static/media/powered_by_rectangle_green.27b65cb4.svg"},60:function(e,t,a){e.exports=a(100)},65:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},99:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.f3022002.chunk.js.map