!function(e){function t(t){for(var i,s,a=t[0],l=t[1],c=t[2],u=0,h=[];u<a.length;u++)s=a[u],o[s]&&h.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(p&&p(t);h.length;)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={1:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var p=l;r.push([73,0]),n()}(Array(20).concat([function(e,t,n){"use strict";var i=n(63),o=n.n(i);t.a={filters:{names:e=>(e||[]).filter(e=>e).join(",")},props:{content:{type:Array,required:!0},highlighted:{type:String},lineNumber:{type:Boolean,default:!1}},data:()=>({maxWidth:0,viewport:[0,0]}),computed:{displayRange(){return[Math.max(0,Math.floor((this.viewport[0]-2)/this.lineHeight)-10),Math.floor(this.viewport[1]/this.lineHeight)+20]},displayLines(){return this.content.slice(this.displayRange[0],this.displayRange[0]+this.displayRange[1]+2)},translateY(){return this.displayRange[0]*this.lineHeight}},created(){this.lineHeight=18,this.currentScrollTop=null,this.onHover=o()(this.onHover).bind(this),this.onViewportUpdate=this.onViewportUpdate.bind(this)},mounted(){this.onViewportUpdate(),this.$refs.resizeDetector.contentWindow.addEventListener("resize",this.onViewportUpdate)},beforeDestroy(){this.$refs.resizeDetector.contentWindow&&this.$refs.resizeDetector.contentWindow.removeEventListener("resize",this.onViewportUpdate)},watch:{content(){this.$nextTick(()=>{this.maxWidth=this.$el.scrollWidth})}},methods:{scrollTo(e){this.currentScrollTop!==e&&(this.currentScrollTop=e,this.$el.scrollTop=e)},scrollToLine(e){this.scrollTo(e*this.lineHeight-this.lineHeight/2+2-this.$el.offsetHeight/2)},getOffset(){return this.currentScrollTop},onViewportUpdate(){const{scrollTop:e,offsetHeight:t}=this.$el;this.viewport=[e,t],this.currentScrollTop=e,this.$emit("scroll",e),this.$nextTick(()=>{this.maxWidth=Math.max(this.maxWidth,this.$el.scrollWidth)})},onSelect(e){e.id&&this.$emit("select",e.mapping)},onCancelSelect(){this.$emit("hover",null)},onHover(e){e.id&&this.$emit("hover",e.id)}}}},function(e,t,n){"use strict";var i=n(64);t.a={components:{SourceView:i.a},props:{content:{type:Array},highlighted:{type:String},lineNumber:{type:Boolean,default:!1}},methods:{scrollTo(e){this.$refs.sourceView&&this.$refs.sourceView.scrollTo(e)},scrollToLine(e){this.$refs.sourceView&&this.$refs.sourceView.scrollToLine(e)},getOffset(){if(this.$refs.sourceView)return this.$refs.sourceView.getOffset()},onHover(e){this.$emit("hover",e)},onSelect(e){this.$emit("select",e)},onScroll(e){this.$emit("scroll",e)},onSelectFiles(e){this.$emit("upload",e.target.files)},onDropFiles(e){this.$emit("upload",e.dataTransfer.files)},onMouseOver(){this.$emit("mouseover")}}}},function(e,t,n){"use strict";t.a={computed:{display(){return this.$ctrl.tips.display},msg(){return this.$ctrl.tips.msg},type(){return this.$ctrl.tips.type}}}},function(e,t,n){"use strict";var i=n(67),o=n.n(i);t.a={components:{Menu:o()},props:{panels:{type:Array,required:!0},enabledPanels:{type:Object,required:!0}},data:()=>({displayFileList:!1}),created(){this.onHideFileList=this.onHideFileList.bind(this)},mounted(){window.addEventListener("mousedown",this.onHideFileList)},beforeDestroy(){window.removeEventListener("mousedown",this.onHideFileList)},methods:{onToggleFileList(){this.displayFileList=!this.displayFileList},onHideFileList(){this.displayFileList=!1},onSelectOriginal(e){this.displayFileList=!1,this.$ctrl.resource.selectedIndex=e},onTogglePanel(e){this.$emit("toggle",e)}}}},function(e,t,n){"use strict";var i=n(31),o=n.n(i),r=n(69),s=n.n(r),a=n(68),l=n(66),c=n(65);const p={generated:"sourceMap",sourceMap:"generated"},u=`${location.protocol}//${location.host}/#/json/`;t.a={components:{Nav:a.a,Tips:l.a,SourcePanel:c.a},data:()=>({orientation:"landscape",hovering:null,highlighted:null,enabledPanels:{generated:!0,sourceMap:!0,original:!0}}),computed:{title(){const{resource:e}=this.$ctrl,t=[e.generatedFileName||e.expectedGeneratedFileName,e.sourceMapFileName||e.expectedSourceMapFileName].filter(e=>e);return t.length?`${t.join(" / ")} - SMV`:"SourceMapViewer"},panels(){const{resource:e}=this.$ctrl;return[{displayName:"Original",name:"original",hidden:null==e.selectedFileName,content:e.selectedView,lineNumber:!0,promoteText:`Drop ${o.a.basename(e.selectedFileName||"")} here`,promoteTips:e.selectedFileName||""},{displayName:"Generated",name:"generated",lineNumber:!0,content:e.generatedView,promoteText:`Drop ${e.expectedGeneratedFileName||"generated file"} here`},{displayName:"SourceMap",name:"sourceMap",lineNumber:!this.enabledPanels.generated||"portrait"===this.orientation,content:e.mappingsView,promoteText:`Drop ${e.expectedSourceMapFileName||"sourcemap file"} here`}]}},watch:{title(){document.title=this.title}},created(){this.onCopy=this.onCopy.bind(this),this.onPaste=this.onPaste.bind(this)},mounted(){this.match=window.matchMedia("screen and (orientation: portrait)"),this.match.onchange=this.onOrientationChange.bind(this),this.onOrientationChange(this.match),window.addEventListener("copy",this.onCopy),window.addEventListener("paste",this.onPaste),location.hash&&this.restoreFromHash()},beforeDestroy(){this.match&&(this.match.onchange=null),window.removeEventListener("copy",this.onCopy),window.removeEventListener("paste",this.onPaste)},methods:{onUpload(e,t){this.displayFileList=!1,this.$ctrl.resource.handleFiles(e,t)},onHoverNode(e){this.highlighted=e},onSelectNode(e,t){if("original"===t)return this.scrollToLine(e.generatedLine,"generated"),this.scrollToLine(e.generatedLine,"sourceMap");this.$ctrl.resource.selectedIndex=e.source,this.$nextTick(()=>{this.scrollToLine(e.originalLine,"original")})},onMouseOver(e,t){this.hovering=t},onPanelScroll(e,t){for(const n of this.$refs[p[t]]||[])n.scrollTo(e)},onOrientationChange(e){e.matches?this.orientation="portrait":this.orientation="landscape"},onTogglePanel(e){this.enabledPanels[e]=!this.enabledPanels[e]},onCopy(e){const t=document.getSelection();if(t.anchorNode!==t.focusNode||t.anchorOffset!==t.focusOffset)return;const n=this.serialize();encodeURIComponent(n).length>4e4?(e.clipboardData.setData("text/plain",n),this.$ctrl.tips.suc("Case data copied to clipboard")):(e.clipboardData.setData("text/plain",`${u}${encodeURIComponent(n)}`),this.$ctrl.tips.suc("Shareable link copied to clipboard")),e.preventDefault()},onPaste(e){const t=s()(e.clipboardData.items,{type:"text/plain"});t&&t.getAsString(e=>{if(e.startsWith(u))return this.restore(e.slice(u.length));let t=!1;try{t=JSON.parse(e).isSMVData}catch(e){}if(t)return this.restore(e);this.hovering&&this.$ctrl.resource.handleText(e,this.hovering)})},scrollToLine(e,t){for(const n of this.$refs[t]||[])n.scrollToLine(e)},serialize(){return JSON.stringify({isSMVData:!0,resource:this.$ctrl.resource.serialize(),highlighted:this.highlighted,enabledPanels:this.enabledPanels,offset:{generated:this.$refs.generated[0].getOffset()||this.$refs.sourceMap[0].getOffset(),original:this.$refs.original[0].getOffset()}})},restore(e){e=JSON.parse(e),this.$ctrl.resource.restore(e.resource),this.highlighted=e.highlighted,this.enabledPanels=e.enabledPanels,this.$nextTick(()=>{this.$refs.generated[0].scrollTo(e.offset.generated||0),this.$refs.sourceMap[0].scrollTo(e.offset.generated||0),this.$refs.original[0].scrollTo(e.offset.original||0)})},async restoreFromHash(){try{let e=null;if(location.hash.startsWith("#/url/")){const{files:t}=await fetch(decodeURIComponent(location.hash.slice(6))).then(e=>e.json());e=await fetch(Object.values(t)[0].raw_url).then(e=>e.text())}else location.hash.startsWith("#/raw/")?e=await fetch(decodeURIComponent(location.hash.slice(6))).then(e=>e.text()):location.hash.startsWith("#/json/")&&(e=decodeURIComponent(location.hash.slice(7)));this.restore(e)}catch(e){this.$ctrl.tips.err("Failed to restore data from url"),console.error(e.stack)}}}}},,,,,,,,function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$.app},[n("Tips"),e._v(" "),n("Nav",{attrs:{panels:e.panels,"enabled-panels":e.enabledPanels},on:{toggle:e.onTogglePanel}}),e._v(" "),n("div",{class:e.$.container},e._l(e.panels,function(t){return n("SourcePanel",{directives:[{name:"show",rawName:"v-show",value:!t.hidden&&e.enabledPanels[t.name],expression:"!item.hidden && enabledPanels[item.name]"}],key:t.name,ref:t.name,refInFor:!0,class:e.$.panel,attrs:{content:t.content,highlighted:e.highlighted,"line-number":t.lineNumber},on:{hover:e.onHoverNode,upload:function(n){e.onUpload(n,t.name)},scroll:function(n){e.onPanelScroll(n,t.name)},select:function(n){e.onSelectNode(n,t.name)},mouseover:function(n){e.onMouseOver(n,t.name)}}},[n("div",{class:e.$.promoteText},[e._v(e._s(t.promoteText))]),e._v(" "),t.promoteTips?n("div",{class:e.$.promoteTips},[e._v(e._s(t.promoteTips))]):e._e()])}))],1)},o=[];i._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$.container,on:{dragover:function(e){e.preventDefault()},mouseover:e.onMouseOver,drop:function(t){return t.preventDefault(),e.onDropFiles(t)}}},[e.content?n("SourceView",{ref:"sourceView",class:e.$.sourceView,attrs:{content:e.content,highlighted:e.highlighted,"line-number":e.lineNumber},on:{hover:e.onHover,select:e.onSelect,scroll:e.onScroll}}):n("div",{class:e.$.promote},[n("input",{class:e.$.promoteFilePicker,attrs:{type:"file",multiple:""},on:{change:e.onSelectFiles}}),e._v(" "),n("div",{class:e.$.promoteContent},[e._t("default")],2)])],1)},o=[];i._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$.container,on:{click:e.onCancelSelect,scroll:e.onViewportUpdate}},[n("div",{style:{height:e.content.length*e.lineHeight+2+"px",minWidth:e.maxWidth+"px"}},[n("table",{style:{transform:"translateY("+e.translateY+"px)"}},[n("tbody",e._l(e.displayLines,function(t,i){return n("tr",{key:e.displayRange[0]+i,class:e.$.line},[e.lineNumber?n("td",{class:e.$.lineNumber,attrs:{"data-line":e.displayRange[0]+i+1}}):e._e(),e._v(" "),n("td",{class:e.$.lineContent},[e._l(t,function(t,i){return n("span",{key:i,class:[e.$.chunk,(o={},o[e.$.mapped]=t.id,o[e.$.highlighted]=t.id===e.highlighted,o)],attrs:{title:e._f("names")(t.names)},on:{click:function(n){n.stopPropagation(),e.onSelect(t)},mouseover:function(n){e.onHover(t)}}},[[e._v(e._s(t.content))]],2);var o}),n("br")],2)])}))])]),e._v(" "),n("iframe",{ref:"resizeDetector",class:e.$.resizeDetector})])},o=[];i._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e,t=this,n=t.$createElement,i=t._self._c||n;return i("transition",{attrs:{name:"fade"}},[t.display?i("div",{class:t.$.container},[i("span",{class:[t.$.content,(e={},e[t.$.suc]="suc"===t.type,e[t.$.err]="err"===t.type,e)]},[t._v(t._s(t.msg))])]):t._e()])},o=[];i._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$.nav},[e.$ctrl.resource.sources.length?n("Menu",{class:e.$.navMenu,nativeOn:{click:function(t){return e.onToggleFileList(t)}}}):e._e(),e._v(" "),e.displayFileList?n("ul",{class:e.$.fileList,on:{mousedown:function(e){e.stopPropagation()}}},e._l(e.$ctrl.resource.sources,function(t,i){return n("li",{key:i,class:[e.$.fileListItem,(o={},o[e.$.active]=e.$ctrl.resource.selectedIndex===i,o[e.$.missingContent]=!e.$ctrl.resource.sourceContents[i]&&!e.$ctrl.resource.overrides[i],o)],attrs:{title:t},on:{click:function(t){e.onSelectOriginal(i)}}},[e._v("\n      "+e._s(t)+"\n    ")]);var o})):e._e(),e._v(" "),n("span",{class:e.$.navTitle,attrs:{title:e.$ctrl.resource.selectedFileName}},[e._v("\n    "+e._s(e.$ctrl.resource.selectedFileName)+"\n  ")]),e._v(" "),n("span",{class:e.$.panelButtonGroup},e._l(e.panels,function(t){return n("a",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!item.hidden"}],key:t.name,class:[e.$.panelButton,(i={},i[e.$.active]=!t.hidden&&e.enabledPanels[t.name],i)],attrs:{href:"javascript:"},on:{click:function(n){e.onTogglePanel(t.name)}}},[e._v("\n      "+e._s(t.displayName)+"\n    ")]);var i}))],1)},o=[];i._withStripped=!0},,function(e,t,n){var i=n(75);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(3).default)("1cb56054",i,!1,{})},function(e,t,n){var i=n(76);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(3).default)("3f5badee",i,!1,{})},function(e,t,n){var i=n(77);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(3).default)("eb6d28f4",i,!1,{})},function(e,t,n){var i=n(78);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(3).default)("315e61a4",i,!1,{})},,function(e,t,n){var i=n(86);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(3).default)("4bec3eca",i,!1,{})},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";(function(e){var i=n(20),o=n(34),r=n(1),s=!1,a={};e.hot&&e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourceView.vue'],function(){var e=a.$;if(e){var t=n(38);JSON.stringify(t)!==JSON.stringify(e)&&(a.$=t,n(6).rerender("data-v-a9a608e0"))}});var l=function(e){s||(a.$=n(38),Object.defineProperty(this,"$",{get:function(){return a.$}}))},c=Object(r.a)(i.a,o.a,o.b,!1,l,null,null);c.options.__file="src/components/SourceView.vue",t.a=c.exports}).call(this,n(7)(e))},function(e,t,n){"use strict";(function(e){var i=n(21),o=n(33),r=n(1),s=!1,a={};e.hot&&e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourcePanel.vue'],function(){var e=a.$;if(e){var t=n(39);JSON.stringify(t)!==JSON.stringify(e)&&(a.$=t,n(6).rerender("data-v-7b0f67ae"))}});var l=function(e){s||(a.$=n(39),Object.defineProperty(this,"$",{get:function(){return a.$}}))},c=Object(r.a)(i.a,o.a,o.b,!1,l,null,null);c.options.__file="src/components/SourcePanel.vue",t.a=c.exports}).call(this,n(7)(e))},function(e,t,n){"use strict";(function(e){var i=n(22),o=n(35),r=n(1),s=!1,a={};e.hot&&e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Tips.vue'],function(){var e=a.$;if(e){var t=n(40);JSON.stringify(t)!==JSON.stringify(e)&&(a.$=t,n(6).rerender("data-v-6028a368"))}});var l=function(e){s||(a.$=n(40),Object.defineProperty(this,"$",{get:function(){return a.$}}))},c=Object(r.a)(i.a,o.a,o.b,!1,l,null,null);c.options.__file="src/components/Tips.vue",t.a=c.exports}).call(this,n(7)(e))},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t("path",{attrs:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}})])},toString:function(){return"/Users/jasonhzhang/source-map-viewer/src/components/icons/Menu.svg"}}},function(e,t,n){"use strict";(function(e){var i=n(23),o=n(36),r=n(1),s=!1,a={};e.hot&&e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Nav.vue'],function(){var e=a.$;if(e){var t=n(41);JSON.stringify(t)!==JSON.stringify(e)&&(a.$=t,n(6).rerender("data-v-65af85a3"))}});var l=function(e){s||(a.$=n(41),Object.defineProperty(this,"$",{get:function(){return a.$}}))},c=Object(r.a)(i.a,o.a,o.b,!1,l,null,null);c.options.__file="src/components/Nav.vue",t.a=c.exports}).call(this,n(7)(e))},,function(e,t,n){"use strict";(function(e){var i=n(24),o=n(32),r=n(1),s=!1,a={};e.hot&&e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[local]_[hash:base64:8]_1","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=1!./App.vue'],function(){var e=a.$;if(e){var t=n(43);JSON.stringify(t)!==JSON.stringify(e)&&(a.$=t,n(6).rerender("data-v-617ab0be"))}});var l=function(e){s||(n(85),a.$=n(43),Object.defineProperty(this,"$",{get:function(){return a.$}}))},c=Object(r.a)(i.a,o.a,o.b,!1,l,null,null);c.options.__file="src/components/App.vue",t.a=c.exports}).call(this,n(7)(e))},,,function(e,t,n){"use strict";n.r(t);var i=n(13),o=n.n(i);var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};var s=n(72),a=n.n(s),l=n(37),c=n(71);const p=Object.create(c.BasicSourceMapConsumer.prototype);function u(e){if(null!=e.source)return`${e.source} ${e.originalLine} ${e.originalColumn}`}var h={resource:{data:()=>({generatedContent:null,sourceMapData:null,overrides:{},selectedIndex:null,generatedFileName:"",sourceMapFileName:""}),computed:{missingGenerated(){return null==this.generatedContent},expectedGeneratedFileName(){if(this.sourceMapData)return this.sourceMapData.file},generatedInfo(){if(null==this.generatedContent)return{};const e=Object(l.fromSource)(this.generatedContent);if(e)return{inlineSourceMap:e.sourcemap};const t=l.mapFileCommentRegex.exec(this.generatedContent);return{sourceMapFile:t&&(t[1]||t[2])}},missingSourceMap(){return null==this.sourceMapData},expectedSourceMapFileName(){return this.generatedInfo.sourceMapFile},sources(){return this.sourceMapData?this.sourceMapData.sources:[]},sourceContents(){return this.sourceMapData&&this.sourceMapData.sourcesContent||[]},mappings(){return this.sourceMapData?(p._parseMappings(this.sourceMapData.mappings),{generated:p.__generatedMappings,original:p.__originalMappings}):{generated:[],original:[]}},selectedFileName(){return this.sources[this.selectedIndex]},generatedView(){if(!this.generatedContent)return;const e=this.generatedContent.split(/\r?\n/g),t=e.map(()=>[]),n=this.mappings.generated;for(let i=n.length-1;i>=0;i--){const o=n[i],r=o.generatedLine-1;t[r]||(t[r]=[],e[r]="");const s=e[r].slice(o.generatedColumn);t[r].unshift({content:s,mapping:o,id:u(o),title:o.name}),e[r]=e[r].slice(0,o.generatedColumn)}for(let n=0,i=e.length;n<i;n++)e[n]&&t[n].unshift({content:e[n]});return t},mappingsView(){if(!this.sourceMapData)return;const e=this.mappings.generated,t=[];this.generatedContent&&(t.length=this.generatedContent.split(/\r?\n/g).length);for(const n of e){const e=n.generatedLine-1;t[e]||(t[e]=[]);const i=`${n.generatedColumn} => ${n.originalLine}:${n.originalColumn}`;t[e].push({content:i,mapping:n,id:u(n),names:[this.sources[n.source],n.name]}),t[e].push({content:" "})}return t},selectedView(){const e=this.overrides[this.selectedIndex]||this.sourceContents[this.selectedIndex];if(!e)return;const t=e.split(/\r?\n/g),n=t.map(()=>[]),i=this.mappings.original;for(let e=a()(i,this.selectedIndex,"source")-1;e>=0;e--){const o=i[e];if(o.source!==this.selectedIndex)continue;const r=o.originalLine-1;n[r]||(n[r]=[],t[r]="");const[s]=n[r];if(s&&s.mapping&&s.mapping.originalColumn===o.originalColumn){s.names.push(o.name);continue}const a=t[r].slice(o.originalColumn);n[r].unshift({content:a,mapping:o,id:u(o),names:[o.name]}),t[r]=t[r].slice(0,o.originalColumn)}for(let e=0,i=t.length;e<i;e++)t[e]&&n[e].unshift({content:t[e]});return n}},methods:{async handleFiles(e,t){if(e&&e.length)return 1===e.length||"original"===t?this.handleFile(e[0],t):e[0].name.endsWith(".map")||e[0].name.endsWith(".json")?(await this.handleFile(e[1],"generated"),this.handleFile(e[0],"sourceMap")):(await this.handleFile(e[0],"generated"),this.handleFile(e[1],"sourceMap"))},async handleFile(e,t){this.handleText(await function(e){return new Promise((t,n)=>{const i=new FileReader;i.onerror=n,i.onload=(()=>t(i.result)),i.readAsText(e)})}(e),t,e.name)},handleText(e,t,n=null){switch(t){case"generated":this.generatedFileName=n,this.setGeneratedContent(e);break;case"sourceMap":try{this.sourceMapFileName=n,this.setSourceMapData(JSON.parse(e))}catch(e){this.$ctrl.tips.err("Invalid sourcemap")}break;case"original":this.$set(this.overrides,this.selectedIndex,e)}},setGeneratedContent(e){this.generatedContent=e,this.generatedInfo.inlineSourceMap&&this.setSourceMapData(this.generatedInfo.inlineSourceMap)},setSourceMapData(e){this.sourceMapData=Object.freeze(e),this.selectedIndex=0,this.overrides={}},serialize(){const e={generatedContent:this.generatedContent,overrides:this.overrides,selectedIndex:this.selectedIndex,generatedFileName:this.generatedFileName,sourceMapFileName:this.sourceMapFileName};return this.generatedInfo.inlineSourceMap!==this.sourceMapData&&(e.sourceMapData=this.sourceMapData),e},restore(e){this.setGeneratedContent(e.generatedContent),this.overrides=e.overrides,this.selectedIndex=e.selectedIndex,this.generatedFileName=e.generatedFileName,this.sourceMapFileName=e.sourceMapFileName,e.sourceMapData&&(this.$ctrl.resource.sourceMapData=e.sourceMapData)}}},tips:{data:()=>({type:"suc",msg:null,display:!1}),methods:{suc(e){this.show("suc",e)},err(e){this.show("err",e)},show(e,t){this.type=e,this.msg=t,this.display=!0,setTimeout(()=>{this.hide()},3e3)},hide(){this.display=!1}}}},d=n(70),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};o.a.use(function(e,t){const n=`__inherit_val_${t}`,i=`__inherit_root_${t}`;return{install(o){o.mixin({beforeCreate(){this.$options[e]?(this[i]=this,this[n]=this.$options[e]):this[i]=this.$parent&&this.$parent[i]||this}}),Object.defineProperty(o.prototype,t,{get(){return this[i][n]}})}}}("ctrl","$ctrl")),window.app=new o.a(f({el:"#app",ctrl:new class{constructor(e={}){for(const[t,n]of Object.entries(e))this.$register(t,n)}$register(e,t){this[e]=new o.a(r({},t,{ctrl:this}))}}(h)},d.a))},,function(e,t,n){(t=e.exports=n(4)(!1)).push([e.i,"\n.container_FWJu2fSE {\n  position: relative;\n  overflow: scroll;\n}\n.container_FWJu2fSE *::selection {\n  background: rgba(0, 0, 255, .2);\n}\n.line_1KpGgtx1 {\n  font-size: 12px;\n  white-space: pre;\n  font-family: monospace;\n  color: #222;\n}\n.lineNumber_1et-8UOG {\n  padding: 0 10px;\n  min-width: 30px;\n  text-align: right;\n  vertical-align: top;\n  color: #999;\n}\n.lineNumber_1et-8UOG:before {\n  content: attr(data-line);\n}\n.chunk_1zenM2p3.mapped_3NAvB82m {\n  border-left: 2px solid lightgray;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.chunk_1zenM2p3.highlighted_3m1wbUxx {\n  color: white;\n  background: black;\n  border-left-color: black !important;\n}\n.resizeDetector_91DsD8gF {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  pointer-events: none;\n}\n",""]),t.locals={container:"container_FWJu2fSE",line:"line_1KpGgtx1",lineNumber:"lineNumber_1et-8UOG",chunk:"chunk_1zenM2p3",mapped:"mapped_3NAvB82m",highlighted:"highlighted_3m1wbUxx",resizeDetector:"resizeDetector_91DsD8gF"}},function(e,t,n){(t=e.exports=n(4)(!1)).push([e.i,"\n.sourceView_9PK-Uk8p {\n  height: 100%;\n}\n.promote_bYxHqak5 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  overflow: hidden;\n}\n.promoteFilePicker_1felvwxg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.promoteContent_2w2gQ7XA {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n  font-family: sans-serif;\n  border: 2px dashed #ccc;\n}\n",""]),t.locals={sourceView:"sourceView_9PK-Uk8p",promote:"promote_bYxHqak5",promoteFilePicker:"promoteFilePicker_1felvwxg",promoteContent:"promoteContent_2w2gQ7XA"}},function(e,t,n){(t=e.exports=n(4)(!1)).push([e.i,"\n.container_1Dr5hlmZ {\n  position: fixed;\n  top: 50px;\n  width: 100%;\n  text-align: center;\n  z-index: 200;\n}\n.content_33UhbFYC {\n  position: relative;\n  padding: 6px 20px;\n  color: #fff;\n  background: #55D041;\n  border-radius: 2px;\n}\n.content_33UhbFYC.err_3ufaz-it {\n  background: #FB6500;\n}\n",""]),t.locals={container:"container_1Dr5hlmZ",content:"content_33UhbFYC",err:"err_3ufaz-it"}},function(e,t,n){(t=e.exports=n(4)(!1)).push([e.i,"\n.nav_17UGPuM_ {\n  position: relative;\n  display: flex;\n  flex: 0 0 auto;\n  line-height: 24px;\n  padding: 8px;\n  color: #bbb;\n  background: #444;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n}\n.navMenu_30Qu5vQl {\n  flex: 0 0 auto;\n  cursor: pointer;\n  fill: #bbb;\n}\n.fileList_3cf2bW38 {\n  position: fixed;\n  top: 46px;\n  left: 6px;\n  min-width: 200px;\n  max-width: 90%;\n  max-width: calc(100% - 12px);\n  max-height: 90%;\n  max-height: calc(100% - 52px);\n  overflow: auto;\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n  color: #888;\n  background: #fff;\n  z-index: 100;\n  user-select: none;\n}\n.fileListItem_3HrjcoZ7 {\n  padding: 5px 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.fileListItem_3HrjcoZ7:hover {\n  background: #f6f6f6;\n}\n.fileListItem_3HrjcoZ7.active_pBg5-tuh {\n  background: #eaeaea;\n  color: #333;\n}\n.fileListItem_3HrjcoZ7.missingContent_2jLS0Ihr {\n  color: #CD5C5C;\n}\n.navTitle_30NIrETT {\n  margin-left: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.navTitle_30NIrETT::selection {\n  background: #777;\n}\n.panelButtonGroup__cogD9LQ {\n  flex: 0 0 auto;\n  margin-left: auto;\n  user-select: none;\n}\n.panelButton_3LGS49HU {\n  display: inline-block;\n  margin-left: 8px;\n  color: #bbb;\n  text-decoration: none;\n}\n.panelButton_3LGS49HU.active_pBg5-tuh {\n  color: white;\n}\n",""]),t.locals={nav:"nav_17UGPuM_",navMenu:"navMenu_30Qu5vQl",fileList:"fileList_3cf2bW38",fileListItem:"fileListItem_3HrjcoZ7",active:"active_pBg5-tuh",missingContent:"missingContent_2jLS0Ihr",navTitle:"navTitle_30NIrETT",panelButtonGroup:"panelButtonGroup__cogD9LQ",panelButton:"panelButton_3LGS49HU"}},,,,,,function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  font-size: 14px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n*::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n*::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: #bbb;\n}\n*::-webkit-scrollbar-track {\n  background: #eee;\n}\n.fade-enter-active, .fade-leave-active {\n  transition: opacity .2s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n",""])},function(e,t,n){var i=n(84);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(3).default)("0dc3e16f",i,!1,{})},function(e,t,n){(t=e.exports=n(4)(!1)).push([e.i,"\n.app_19kGcjW1_1 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.container_1CIp8ojQ_1 {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n.panel_bGpApUay_1 {\n  position: relative;\n  flex: 1 auto;\n  width: 1px;\n  height: 100%;\n}\n.promoteText_2JhSrxGt_1 {\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 1.5em;\n  color: #aaa;\n}\n.promoteTips_1jX9igSA_1 {\n  white-space: nowrap;\n  font-size: .9em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #999;\n}\n@media screen and (orientation: portrait) {\n.container_1CIp8ojQ_1 {\n    flex-direction: column;\n}\n.panel_bGpApUay_1 {\n    height: 1px;\n    width: 100%;\n}\n}\n",""]),t.locals={app:"app_19kGcjW1_1",container:"container_1CIp8ojQ_1",panel:"panel_bGpApUay_1",promoteText:"promoteText_2JhSrxGt_1",promoteTips:"promoteTips_1jX9igSA_1"}},,,,,,function(e,t){e.exports=null}]));