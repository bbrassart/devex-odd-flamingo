(this.webpackJsonppulse=this.webpackJsonppulse||[]).push([[0],{56:function(e,t,a){e.exports=a(84)},61:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(33),s=a.n(r),l=(a(61),a(62),a(5)),c=a(6),o=a(8),u=a(7),m=a(9),p=a(11),h=a(14),d=a.n(h),f=a(25),b=a(37),v=a(31),g={maxzoom:9,type:"heatmap",paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,9,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",.9,"rgb(255,201,101)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,9,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var w=i.a.createElement("g",null,i.a.createElement("path",{fill:"#00AEEF",d:"M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9   C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8   c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"})),j=function(e){var t=e.svgRef,a=e.title,n=E(e,["svgRef","title"]);return i.a.createElement("svg",y({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 365 560",enableBackground:"new 0 0 365 560",xmlSpace:"preserve",ref:t},n),a?i.a.createElement("title",null,a):null,w)},k=i.a.forwardRef((function(e,t){return i.a.createElement(j,y({svgRef:t},e))})),O=(a.p,a(67),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={viewport:{width:window.innerWidth/2,height:window.innerHeight,latitude:37.7577,longitude:-122.4376,zoom:1}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(v.d,Object.assign({},this.state.viewport,{mapStyle:"mapbox://styles/mapbox/dark-v10",onViewportChange:function(t){return e.setState({viewport:t})},mapboxApiAccessToken:this.props.mapboxApiAccessToken}),this.props.heatMapData&&i.a.createElement(v.c,{type:"geojson",data:this.props.heatMapData},i.a.createElement(v.a,g)),!this.props.heatMapData&&this.props.markerCoordinateArray.map((function(e,t){return i.a.createElement(v.b,{key:t,longitude:e.lng,latitude:e.lat},i.a.createElement(k,{className:"marker-icon"}))})))}}]),t}(n.Component)),D=a(13),x=a(35),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).selectResult=a.selectResult.bind(Object(p.a)(a)),a.selectWidth=window.innerWidth/3,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"selectResult",value:function(e){this.props.selectResult(this.props.data[e.target.value])}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(D.a,{className:"mb-1 mr-3",variant:"primary"},"Select result to see its locations on map, related results and articles"),this.props.selectedResult&&i.a.createElement(x.a,{variant:"secondary",size:"sm",onClick:this.props.undoSelectedResult},"Undo selection"),i.a.createElement("div",{className:"mt-2"},i.a.createElement("select",{onChange:this.selectResult,style:{width:this.selectWidth+"px",fontSize:"11px"}},this.props.data.map((function(e,t){return i.a.createElement("option",{key:t,value:t},e.title)})))))}}]),t}(n.Component),C=a(26),N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(D.a,{className:"mb-1",variant:"secondary"},"Selected result"),this.props.selectedResult?i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{data:this.props.selectedResult})):i.a.createElement("p",null,"No result selected"))}}]),t}(n.Component),R=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"mt-3"},i.a.createElement(S,{undoSelectedResult:this.props.undoSelectedResult,selectResult:this.props.selectResult,selectedResult:this.props.selectedResult,data:this.props.data})),i.a.createElement("div",{className:"mt-4"},i.a.createElement(N,{selectedResult:this.props.selectedResult})))}}]),t}(n.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"mt-4 mb-4"},i.a.createElement(D.a,{className:"mb-3",variant:"secondary"},"Related results based on locations"),i.a.createElement("p",null,this.props.data.total," related result",0===this.props.data.total?"":"s"),i.a.createElement(C.a,{data:this.props.data.data})))}}]),t}(n.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderArticles",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,this.props.articles.total," related article",0===this.props.articles.total?"":"s"),i.a.createElement("p",null,"First 20 results"),i.a.createElement("ul",null,this.props.articles.data.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{target:"_blank",href:"https://www.devex.com/news/"+e.slud_and_id},e.title))}))))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"mt-1 mb-5"},i.a.createElement(D.a,{className:"mb-3",variant:"secondary"},"Related articles"),Object.keys(this.props.articles).length?this.renderArticles():i.a.createElement("p",null,"No related articles yet")))}}]),t}(n.Component),I=a(34),W=a(29),A=a(27),T=(a(70),function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.devex.com/api/public/search/articles?".concat(t));case 3:if(!(a=e.sent).ok){e.next=8;break}return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",a.json().then((function(e){console.log("".concat(e.error||a.status,": ").concat(e.message||a.statusText))})).catch((function(){console.log("".concat(a.status,": ").concat(a.statusText))})));case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.toString());case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),B=a(71),F=function(e){var t=[];return e.forEach((function(e){Object.keys(e.locations).length&&e.locations.forEach((function(e){Object.keys(e).length&&t.push(e.location)}))})),function(e){return B.parse(e,{Point:["lat","lng"]})}(t)},z=function(e,t){var a=L(e,t);return F(a)},L=function(e,t){if(!t.length)return e;var a=[];return t.forEach((function(t){switch(Object.keys(t)[0]){case"news_topics":e.forEach((function(e){if(Object.keys(e.news_topics).length){var n=t.news_topics.map((function(e){return e.toLowerCase()}));e.news_topics.forEach((function(t){t.name&&n.includes(t.name.toLowerCase())&&a.push(e)}))}}));break;case"publish_date":e.forEach((function(e){var n=t.publish_date,i=n.minDate,r=n.maxDate;e.publish_date>i&&e.publish_date<r&&a.push(e)}))}})),a},Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).backToInjector=a.backToInjector.bind(Object(p.a)(a)),a.onNewsTopicsChange=a.onNewsTopicsChange.bind(Object(p.a)(a)),a.onNewsTopicsSubmit=a.onNewsTopicsSubmit.bind(Object(p.a)(a)),a.onMaxDateChange=a.onMaxDateChange.bind(Object(p.a)(a)),a.onMinDateChange=a.onMinDateChange.bind(Object(p.a)(a)),a.onDateFilterSubmit=a.onDateFilterSubmit.bind(Object(p.a)(a)),a.state={markerCoordinateArray:[],selectedResult:null,articles:[],newsTopicsFilter:"",maxDate:"",minDate:"",heatMapData:F(a.props.data),relatedResults:{total:0,data:[]},maxIncomingDate:"",minIncomingDate:"",locationNames:[],mapboxApiAccessToken:"pk.eyJ1IjoiYmJyYXNzYXJ0IiwiYSI6IjU2MTZjMjRmMjE2MmE4M2Q0OWEwMDVkYTc5YzM3M2Y3In0.V44T7lzZarK4_QwAwoEClw"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){if(this.props.data.length){var e=this.props.data[0].publish_date,t=this.props.data[0].publish_date;this.props.data.forEach((function(a){a.publish_date&&(a.publish_date>e&&(e=a.publish_date),a.publish_date<t&&(t=a.publish_date))})),this.setState({maxIncomingDate:e,minIncomingDate:t})}}},{key:"backToInjector",value:function(){window.location.href="".concat(window.location.origin).concat(window.location.pathname)}},{key:"onMaxDateChange",value:function(e){this.setState({maxDate:e.target.value})}},{key:"onMinDateChange",value:function(e){this.setState({minDate:e.target.value})}},{key:"onDateFilterSubmit",value:function(e){e.preventDefault();var t=this.state,a=[{publish_date:{maxDate:t.maxDate,minDate:t.minDate}}];this.setState({markerCoordinateArray:[],selectedResult:null,articles:[],relatedResults:{total:0,data:[]},newsTopicsFilter:"",heatMapData:z(this.props.data,a),locationNames:[]})}},{key:"onNewsTopicsChange",value:function(e){this.setState({newsTopicsFilter:e.target.value})}},{key:"onNewsTopicsSubmit",value:function(e){e.preventDefault();var t=[{news_topics:this.state.newsTopicsFilter.split("/")}];this.setState({markerCoordinateArray:[],selectedResult:null,articles:[],relatedResults:{total:0,data:[]},maxDate:"",minDate:"",heatMapData:z(this.props.data,t),locationNames:[]})}},{key:"extractLocationsAsNames",value:function(e){return new Set(e.locations.map((function(e){return e.name})))}},{key:"findRelatedResults",value:function(e,t){var a=this;if(!e.locations.length)return[];var n=[];return t.forEach((function(t){void 0!==t&&a.props.data.forEach((function(i){e.title!==i.title&&i.locations.length&&a.extractLocationsAsNames(i).has(t)&&(i.matches_with=t,n.push(i))}))})),new Set(n)}},{key:"generateQueryParams",value:function(e){var t=void 0===e.news_topics?[]:e.news_topics.map((function(e){return e.name.substring(5)})),a=void 0===e.locations?[]:this.extractLocationsAsNames(e),n="page[size]=20&query=".concat(encodeURIComponent(Object(b.a)(a).join("+")));return t.forEach((function(e){n+="&filter[news_topics][]=".concat(encodeURIComponent(e))})),n}},{key:"createRelatedChunks",value:function(e){var t={};return e.forEach((function(e){void 0===t[e.matches_with]?t[e.matches_with]=[e]:t[e.matches_with].push(e)})),t}},{key:"undoSelectedResult",value:function(){this.setState({markerCoordinateArray:[],selectedResult:null,newsTopicsFilter:"",articles:[],relatedResults:{total:0,data:[]},heatMapData:F(this.props.data),locationNames:[]})}},{key:"selectResult",value:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n,i,r,s,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.locations.length>0?new Set(t.locations.map((function(e){return e.location}))):[],n=Object(b.a)(a).filter((function(e){return null!=e})),i=this.extractLocationsAsNames(t),r=t.locations.length>0?this.findRelatedResults(t,i):[],s=Object(b.a)(r),e.next=7,T(this.generateQueryParams(t));case 7:l=e.sent,this.setState({selectedResult:t,articles:l,relatedResults:{total:s.length,data:this.createRelatedChunks(s)},maxDate:"",minDate:"",newsTopicsFilter:"",heatMapData:null,locationNames:i,markerCoordinateArray:n});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement(I.a,{fluid:!0},i.a.createElement(W.a,null,i.a.createElement(A.a,null,i.a.createElement(x.a,{className:"mt-4",variant:"primary",onClick:this.backToInjector},"Back to injector"),i.a.createElement("div",{className:"mt-4 search-filters"},i.a.createElement(D.a,{className:"mb-2",variant:"primary"},"Heatmap filters"),i.a.createElement("div",null,i.a.createElement(D.a,{className:"mb-3",variant:"secondary"},"Filter by publish_date")),i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.onDateFilterSubmit,style:{fontSize:"11px"}},i.a.createElement("label",null,"Min date in dataset: ",this.state.minIncomingDate,i.a.createElement("div",null,i.a.createElement("input",{className:"mr-4",id:"minDate",style:{width:window.innerWidth/11+"px"},type:"text",value:this.state.minDate,placeholder:"Enter min date with format YYYY-MM-DD",onChange:this.onMinDateChange}))),i.a.createElement("label",{className:"mr-2"},"Max date in dataset: ",this.state.maxIncomingDate,i.a.createElement("div",null,i.a.createElement("input",{id:"maxDate",style:{width:window.innerWidth/11+"px"},type:"text",value:this.state.maxDate,placeholder:"Enter min date with format YYYY-MM-DD",onChange:this.onMaxDateChange}))),i.a.createElement("input",{className:"ml-3",type:"submit",value:"Filter by publish_date"}))),i.a.createElement(D.a,{className:"mb-4 mt-4",variant:"secondary"},"Filter by news topics"),i.a.createElement("p",{style:{fontSize:"11px"}},"Here is the list of news topics."),i.a.createElement("ul",{style:{fontSize:"11px"}},i.a.createElement("li",null,"[GH] Global Health"),i.a.createElement("li",null,"[CE] Careers & Education"),i.a.createElement("li",null,"[FU] Funding"),i.a.createElement("li",null,"[WS] Water & Sanitation")),i.a.createElement("p",{style:{fontSize:"11px"}},"You can combine them using '/'. Example of correct request: \"[GH] Global Health/[WS] Water & Sanitation\". See results on heatmap"),i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.onNewsTopicsSubmit,style:{fontSize:"11px"}},i.a.createElement("input",{style:{width:window.innerWidth/3+"px"},type:"text",value:this.state.newsTopicsFilter,placeholder:"Enter full name of one or multipe news topics (separated by /)",onChange:this.onNewsTopicsChange}),i.a.createElement("div",{className:"mt-3"},i.a.createElement("input",{type:"submit",value:"Filter by news_topics"}))))),i.a.createElement(R,{data:this.props.data,undoSelectedResult:this.undoSelectedResult.bind(this),selectResult:this.selectResult.bind(this),selectedResult:this.state.selectedResult}),i.a.createElement(_,{data:this.state.relatedResults}),i.a.createElement(M,{articles:this.state.articles})),i.a.createElement(A.a,null,i.a.createElement(O,{heatMapData:this.state.heatMapData,data:this.props.data,markerCoordinateArray:this.state.markerCoordinateArray,mapboxApiAccessToken:this.state.mapboxApiAccessToken,selectedResult:this.state.selectedResult}))))}}]),t}(n.Component),U=a(52),J=a.n(U),P=[{data_source:"meltwater",url:"https://www.daily-sun.com/post/435110/Bangladesh-WB-sign-100mn-financing-deal-for-safe-water-sanitation-in-municipalities",document_type:"news_article",title:"Bangladesh, WB sign $100mn financing deal for safe water, sanitation in municipalities",hit_sentence:"Bangladesh, WB sign $100mn financing deal for safe water, sanitation in municipalities",publish_date:"2019-10-29",relevant:!0,relevance_confidence:1,funders:["Asian Infrastructure Investment Bank","International Development Association","World Bank Group"],funders_new:["NCMM","Osun State Government","World Bank Country Director for Bangladesh","World Bank\u2019s International Development Association","government of Bangladesh"],companies:["Asian Infrastructure Investment Bank","Bhutan Mercy Tembon","ERD","National Strategy for Water Supply and Sanitation","WB","World Bank","World Bank 's International Development Association"],news_topics:[{confidence:.985,name:"[WS] Water & Sanitation"},{confidence:.773,name:"[IN] Infrastructure"},{confidence:.75,name:"[UD] Urban Development"}],wb_sectors:[{confidence:.903,name:"[WC] Water supply"},{confidence:.775,name:"[WA] Sanitation"},{confidence:.634,name:"[WV] Wastewater Treatment and Disposal"}],locations:[{location:{lat:23.684994,lng:90.356331},name:"Bangladesh"}]}],H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={jsonData:[],link:"",loading:!1},a.submitData=a.submitData.bind(Object(p.a)(a)),a.submitLink=a.submitLink.bind(Object(p.a)(a)),a.handleInjectedDataChange=a.handleInjectedDataChange.bind(Object(p.a)(a)),a.handleLinkChange=a.handleLinkChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.incomingUrl){e.next=2;break}return e.abrupt("return",null);case 2:this.setState({loading:!0}),fetch("https://cors-anywhere.herokuapp.com/"+this.props.incomingUrl,{}).then((function(e){return e.ok?e.json():(alert("Something went wrong: ".concat(e.status,": ").concat(e.statusText)),!1)})).then((function(e){t.setState({loading:!1,jsonData:JSON.stringify(e)}),t.props.injectData(t.state.jsonData)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hasIncorrectUrlParam",value:function(e){return 2!==e.length}},{key:"submitData",value:function(e){e.preventDefault(),this.props.injectData(this.state.jsonData)}},{key:"submitLink",value:function(e){e.preventDefault(),window.location.href="".concat(window.location.origin).concat(window.location.pathname,"?url=").concat(this.state.link)}},{key:"handleLinkChange",value:function(e){this.setState({link:e.target.value})}},{key:"handleInjectedDataChange",value:function(e){this.setState({jsonData:e.target.value})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{active:this.state.loading,spinner:!0,text:"Incoming URL detected. Sit back and relax..."},this.state.loading&&i.a.createElement("img",{src:"https://i.pinimg.com/236x/52/bc/39/52bc3928fd63daa22ebfb555f9ae07dd.jpg"})),i.a.createElement(I.a,{className:"mt-4"},i.a.createElement(W.a,null,i.a.createElement(A.a,null,i.a.createElement("div",null,i.a.createElement(D.a,{className:"m-4",variant:"primary"},"Patse #dxy link")),i.a.createElement("form",{className:"m-4",onSubmit:this.submitLink},i.a.createElement("input",{type:"text",style:{width:window.innerWidth/4+"px"},placeholder:"Paste #dxy link here",value:this.state.link,onChange:this.handleLinkChange}),i.a.createElement("div",{className:"mt-3"},i.a.createElement("input",{type:"submit",value:"Load results from link",disabled:!this.state.link.length})))),i.a.createElement(A.a,null,i.a.createElement("div",null,i.a.createElement(D.a,{className:"m-4",variant:"primary"},"Copy paste JSON data")),i.a.createElement("form",{className:"m-4",onSubmit:this.submitData},i.a.createElement("textarea",{style:{width:window.innerWidth/4+"px",height:window.innerWidth/4+"px"},placeholder:"Insert your JSON data here",onChange:this.handleInjectedDataChange}),i.a.createElement("div",{className:"mt-3"},i.a.createElement("input",{type:"submit",value:"Import JSON data",disabled:!this.state.jsonData.length}))))),i.a.createElement(W.a,{className:"mt-5"},i.a.createElement("p",null,"Example of compatible JSON data"),i.a.createElement(C.a,{data:P,expandLevel:10}))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).injectData=a.injectData.bind(Object(p.a)(a)),a.state={data:[]},a.url=a.getUrlParam(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getUrlParam",value:function(){var e=window.location.href.split("/?url=");return e[1]?e[1]:null}},{key:"injectData",value:function(e){this.setState({data:JSON.parse(e)})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.state.data.length?i.a.createElement(Y,{data:this.state.data}):i.a.createElement(H,{incomingUrl:this.url,injectData:this.injectData}))}}]),t}(n.Component),Q=a(53),V=a(22),$=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(Q.a,null,i.a.createElement(V.a,{path:"/",component:G}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.6e7ca0c7.chunk.js.map