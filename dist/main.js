!function(e){function t(t){for(var i,s,a=t[0],l=t[1],c=t[2],d=0,p=[];d<a.length;d++)s=a[d],r[s]&&p.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={1:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;o.push([174,0]),n()}({168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(167)),r=n(84),o=n(78),s=a(n(72));function a(e){return e&&e.__esModule?e:{default:e}}const l=Object.create(o.BasicSourceMapConsumer.prototype);function c(e){if(null!=e.source)return`${e.source} ${e.originalLine} ${e.originalColumn}`}t.default={data:()=>({generatedContent:null,sourceMapData:null,overrides:{},selectedIndex:null}),computed:{missingGenerated(){return null==this.generatedContent},generatedFileName(){if(this.sourceMapData)return this.sourceMapData.file},generatedInfo(){if(null==this.generatedContent)return{};const e=(0,r.fromSource)(this.generatedContent);if(e)return{inlineSourceMap:e.sourcemap};const t=r.mapFileCommentRegex.exec(this.generatedContent);return{sourceMapFile:t&&(t[1]||t[2])}},missingSourceMap(){return null==this.sourceMapData},sourceMapFileName(){return this.generatedInfo.sourceMapFile},sources(){return this.sourceMapData?this.sourceMapData.sources:[]},sourceContents(){return this.sourceMapData&&this.sourceMapData.sourcesContent||[]},mappings(){return this.sourceMapData?(l._parseMappings(this.sourceMapData.mappings),{generated:l.__generatedMappings,original:l.__originalMappings}):{generated:[],original:[]}},selectedFileName(){return this.sources[this.selectedIndex]},generatedView(){if(!this.generatedContent)return;const e=this.generatedContent.split(/\r?\n/g),t=e.map(()=>[]),n=this.mappings.generated;for(let i=n.length-1;i>=0;i--){const r=n[i],o=r.generatedLine-1;t[o]||(t[o]=[],e[o]="");const s=e[o].slice(r.generatedColumn);t[o].unshift({content:s,mapping:r,id:c(r),title:r.name}),e[o]=e[o].slice(0,r.generatedColumn)}for(let n=0,i=e.length;n<i;n++)e[n]&&t[n].unshift({content:e[n]});return t},mappingsView(){if(!this.sourceMapData)return;const e=this.mappings.generated,t=[];this.generatedContent&&(t.length=this.generatedContent.split(/\r?\n/g).length);for(const n of e){const e=n.generatedLine-1;t[e]||(t[e]=[]);const i=`${n.generatedColumn} => ${n.originalLine}:${n.originalColumn}`;t[e].push({content:i,mapping:n,id:c(n),names:[this.sources[n.source],n.name]}),t[e].push({content:" "})}return t},selectedView(){const e=this.overrides[this.selectedIndex]||this.sourceContents[this.selectedIndex];if(!e)return;const t=e.split(/\r?\n/g),n=t.map(()=>[]),r=this.mappings.original;for(let e=(0,i.default)(r,this.selectedIndex,"source")-1;e>=0;e--){const i=r[e];if(i.source!==this.selectedIndex)continue;const o=i.originalLine-1;n[o]||(n[o]=[],t[o]="");const[s]=n[o];if(s&&s.mapping&&s.mapping.originalColumn===i.originalColumn){s.names.push(i.name);continue}const a=t[o].slice(i.originalColumn);n[o].unshift({content:a,mapping:i,id:c(i),names:[i.name]}),t[o]=t[o].slice(0,i.originalColumn)}for(let e=0,i=t.length;e<i;e++)t[e]&&n[e].unshift({content:t[e]});return n}},methods:{async handleFiles(e,t){if(!e||!e.length)return;if(1===e.length||"original"===t)return this.handleFile(await(0,s.default)(e[0]),t);const n=await Promise.all([(0,s.default)(e[0]),(0,s.default)(e[1])]);return e[0].name.endsWith(".map")?(await this.handleFile(n[1],"generated"),this.handleFile(n[0],"sourceMap")):(await this.handleFile(n[0],"generated"),this.handleFile(n[1],"sourceMap"))},async handleFile(e,t){switch(t){case"generated":this.setGeneratedContent(e);break;case"sourceMap":try{this.setSourceMapData(JSON.parse(e))}catch(e){this.$ctrl.tips.err("Invalid sourcemap")}break;case"original":this.$set(this.overrides,this.selectedIndex,e)}},setGeneratedContent(e){this.generatedContent=e,this.generatedInfo.inlineSourceMap&&this.setSourceMapData(this.generatedInfo.inlineSourceMap)},setSourceMapData(e){this.sourceMapData=e,this.selectedIndex=0,this.overrides={}}}}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(168)),r=o(n(71));function o(e){return e&&e.__esModule?e:{default:e}}t.default={resource:i.default,tips:r.default}},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=n(56),s=(i=o)&&i.__esModule?i:{default:i};t.default=class{constructor(e={}){for(const[t,n]of Object.entries(e))this.$register(t,n)}$register(e,t){this[e]=new s.default(r({},t,{ctrl:this}))}}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const n=`__inherit_val_${t}`,i=`__inherit_root_${t}`;return{install(r){r.mixin({beforeCreate(){this.$options[e]?(this[i]=this,this[n]=this.$options[e]):this[i]=this.$parent&&this.$parent[i]||this}}),Object.defineProperty(r.prototype,t,{get(){return this[i][n]}})}}}},174:function(e,t,n){"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=c(n(56)),o=c(n(171)),s=c(n(170)),a=c(n(169)),l=c(n(70));function c(e){return e&&e.__esModule?e:{default:e}}r.default.use((0,o.default)("ctrl","$ctrl")),window.app=new r.default(i({el:"#app",ctrl:new s.default(a.default)},l.default))},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(59),o=(i=r)&&i.__esModule?i:{default:i};t.default={filters:{names:e=>(e||[]).filter(e=>e).join(",")},props:{content:{type:Array,required:!0},hovering:{type:String},lineNumber:{type:Boolean,default:!1}},data:()=>({maxWidth:0,viewport:[0,0],dragging:null}),computed:{displayRange(){return[Math.max(0,Math.floor((this.viewport[0]-2)/this.lineHeight)-10),Math.floor(this.viewport[1]/this.lineHeight)+20]},displayLines(){return this.content.slice(this.displayRange[0],this.displayRange[0]+this.displayRange[1]+2)},translateY(){return this.displayRange[0]*this.lineHeight}},created(){this.lineHeight=18,this.currentScrollTop=null,this.onHover=(0,o.default)(this.onHover).bind(this),this.onDragEnd=(0,o.default)(this.onDragEnd).bind(this),this.onDragMove=(0,o.default)(this.onDragMove).bind(this),this.onViewportUpdate=this.onViewportUpdate.bind(this)},mounted(){this.onViewportUpdate(),window.addEventListener("mousemove",this.onDragMove),window.addEventListener("mouseup",this.onDragEnd),this.$refs.resizeDetector.contentWindow.addEventListener("resize",this.onViewportUpdate)},beforeDestroy(){window.removeEventListener("mousemove",this.onDragMove),window.removeEventListener("mouseup",this.onDragEnd),this.$refs.resizeDetector.contentWindow&&this.$refs.resizeDetector.contentWindow.removeEventListener("resize",this.onViewportUpdate)},watch:{content(){this.$nextTick(()=>{this.maxWidth=this.$el.scrollWidth})}},methods:{scrollTo(e){this.currentScrollTop!==e&&(this.currentScrollTop=e,this.$el.scrollTop=e)},scrollToLine(e){this.scrollTo(e*this.lineHeight-this.lineHeight/2+2-this.$el.offsetHeight/2)},getOffset(){return this.currentScrollTop},onViewportUpdate(){const{scrollTop:e,offsetHeight:t}=this.$el;this.viewport=[e,t],this.currentScrollTop=e,this.$emit("scroll",e),this.$nextTick(()=>{this.maxWidth=Math.max(this.maxWidth,this.$el.scrollWidth)})},onSelect(e){e.id&&this.$emit("select",e.mapping)},onHover(e){e.id&&this.$emit("hover",e.id)},onDragStart(e){e.ctrlKey||e.button||(e.preventDefault(),this.dragging={x:this.$el.scrollLeft+2*e.clientX,y:this.$el.scrollTop+2*e.clientY})},onDragMove(e){this.dragging&&(this.$el.scrollLeft=this.dragging.x-2*e.clientX,this.$el.scrollTop=this.dragging.y-2*e.clientY)},onDragEnd(){this.dragging=null}}}},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(61),o=(i=r)&&i.__esModule?i:{default:i};t.default={components:{SourceView:o.default},props:{content:{type:Array},hovering:{type:String},lineNumber:{type:Boolean,default:!1}},methods:{scrollTo(e){this.$refs.sourceView&&this.$refs.sourceView.scrollTo(e)},scrollToLine(e){this.$refs.sourceView&&this.$refs.sourceView.scrollToLine(e)},getOffset(){if(this.$refs.sourceView)return this.$refs.sourceView.getOffset()},onHover(e){this.$emit("hover",e)},onSelect(e){this.$emit("select",e)},onScroll(e){this.$emit("scroll",e)},onSelectFiles(e){this.$emit("upload",e.target.files)},onDropFiles(e){this.$emit("upload",e.dataTransfer.files)}}}},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{display(){return this.$ctrl.tips.display},msg(){return this.$ctrl.tips.msg},type(){return this.$ctrl.tips.type}}}},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(37)),r=a(n(66)),o=a(n(64)),s=a(n(63));function a(e){return e&&e.__esModule?e:{default:e}}const l={generated:"sourceMap",sourceMap:"generated"};t.default={components:{Tips:r.default,Menu:o.default,SourcePanel:s.default},data:()=>({hovering:null,displayFileList:!1,enabledPanels:{generated:!0,sourceMap:!0,original:!0}}),computed:{panels(){const{resource:e}=this.$ctrl;return[{displayName:"Generated",name:"generated",content:e.generatedView,lineNumber:!0,promoteText:`Drop ${e.generatedFileName||"generated file"} here`},{displayName:"SourceMap",name:"sourceMap",content:e.mappingsView,promoteText:`Drop ${e.sourceMapFileName||"sourcemap file"} here`},{displayName:"Original",name:"original",hidden:null==e.selectedFileName,content:e.selectedView,lineNumber:!0,promoteText:`Drop ${i.default.basename(e.selectedFileName||"")} here`,promoteTips:e.selectedFileName||""}]}},created(){this.onHideFileList=this.onHideFileList.bind(this)},async mounted(){if(window.addEventListener("mousedown",this.onHideFileList),location.hash&&location.hash.startsWith("#/url/"))try{const{files:e}=await fetch(decodeURIComponent(location.hash.slice(6))).then(e=>e.json()),t=await fetch(Object.values(e)[0].raw_url).then(e=>e.text());this.restore(t),this.$ctrl.tips.suc("Restore success")}catch(e){this.$ctrl.tips.err("Failed to restore data from url")}},beforeDestroy(){window.removeEventListener("mousedow",this.onHideFileList)},methods:{onUpload(e,t){this.displayFileList=!1,this.$ctrl.resource.handleFiles(e,t)},onHover(e){this.hovering=e},onSelect(e,t){if("original"===t)return this.scrollToLine(e.generatedLine,"generated"),this.scrollToLine(e.generatedLine,"sourceMap");this.$ctrl.resource.selectedIndex=e.source,this.$nextTick(()=>{this.scrollToLine(e.originalLine,"original")})},onScroll(e,t){for(const n of this.$refs[l[t]]||[])n.scrollTo(e)},onToggleFileList(){this.displayFileList=!this.displayFileList},onHideFileList(){this.displayFileList=!1},onSelectOriginal(e){this.displayFileList=!1,this.$ctrl.resource.selectedIndex=e},scrollToLine(e,t){for(const n of this.$refs[t]||[])n.scrollToLine(e)},togglePanel(e){this.enabledPanels[e]=!this.enabledPanels[e]},serialize(){const e={generatedContent:this.$ctrl.resource.generatedContent,overrides:this.$ctrl.resource.overrides,selectedIndex:this.$ctrl.resource.selectedIndex,hovering:this.hovering,enabledPanels:this.enabledPanels,offset:{generated:this.$refs.generated[0].getOffset()||this.$refs.sourceMap[0].getOffset(),original:this.$refs.original[0].getOffset()}};return this.$ctrl.resource.generatedInfo.inlineSourceMap!==this.$ctrl.resource.sourceMapData&&(e.sourceMapData=this.$ctrl.resource.sourceMapData),JSON.stringify(e)},restore(e){e=JSON.parse(e),this.$ctrl.resource.setGeneratedContent(e.generatedContent),this.$ctrl.resource.overrides=e.overrides,this.$ctrl.resource.selectedIndex=e.selectedIndex,this.hovering=e.hovering,this.enabledPanels=e.enabledPanels,e.sourceMapData&&(this.$ctrl.resource.sourceMapData=e.sourceMapData),this.$nextTick(()=>{this.$refs.generated[0].scrollTo(e.offset.generated||0),this.$refs.sourceMap[0].scrollTo(e.offset.generated||0),this.$refs.original[0].scrollTo(e.offset.original||0)})}}}},27:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$.app},[n("Tips"),e._v(" "),n("div",{class:e.$.nav},[e.$ctrl.resource.sources.length?n("Menu",{class:e.$.navMenu,nativeOn:{click:function(t){return e.onToggleFileList(t)}}}):e._e(),e._v(" "),e.displayFileList?n("ul",{class:e.$.fileList,on:{mousedown:function(e){e.stopPropagation()}}},e._l(e.$ctrl.resource.sources,function(t,i){return n("li",{key:i,class:[e.$.fileListItem,(r={},r[e.$.active]=e.$ctrl.resource.selectedIndex===i,r[e.$.missingContent]=!e.$ctrl.resource.sourceContents[i]&&!e.$ctrl.resource.overrides[i],r)],attrs:{title:t},on:{click:function(t){e.onSelectOriginal(i)}}},[e._v("\n        "+e._s(t)+"\n      ")]);var r})):e._e(),e._v(" "),n("span",{class:e.$.navTitle,attrs:{title:e.$ctrl.resource.selectedFileName}},[e._v("\n      "+e._s(e.$ctrl.resource.selectedFileName)+"\n    ")]),e._v(" "),n("span",{class:e.$.panelButtonGroup},e._l(e.panels,function(t){return n("a",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!item.hidden"}],key:t.name,class:[e.$.panelButton,(i={},i[e.$.active]=!t.hidden&&e.enabledPanels[t.name],i)],attrs:{href:"javascript:"},on:{click:function(n){e.togglePanel(t.name)}}},[e._v("\n        "+e._s(t.displayName)+"\n      ")]);var i}))],1),e._v(" "),n("div",{class:e.$.container},e._l(e.panels,function(t){return n("SourcePanel",{directives:[{name:"show",rawName:"v-show",value:!t.hidden&&e.enabledPanels[t.name],expression:"!item.hidden && enabledPanels[item.name]"}],key:t.name,ref:t.name,refInFor:!0,class:e.$.panel,attrs:{content:t.content,hovering:e.hovering,"line-number":t.lineNumber},on:{hover:e.onHover,select:function(n){e.onSelect(n,t.name)},scroll:function(n){e.onScroll(n,t.name)},upload:function(n){e.onUpload(n,t.name)}}},[n("div",{class:e.$.promoteText},[e._v(e._s(t.promoteText))]),e._v(" "),t.promoteTips?n("div",{class:e.$.promoteTips},[e._v(e._s(t.promoteTips))]):e._e()])}))],1)},r=[];i._withStripped=!0},28:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$.container,on:{dragover:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),e.onDropFiles(t)}}},[e.content?n("SourceView",{ref:"sourceView",class:e.$.sourceView,attrs:{content:e.content,hovering:e.hovering,"line-number":e.lineNumber},on:{hover:e.onHover,select:e.onSelect,scroll:e.onScroll}}):n("div",{class:e.$.promote},[n("input",{class:e.$.promoteFilePicker,attrs:{type:"file",multiple:""},on:{change:e.onSelectFiles}}),e._v(" "),n("div",{class:e.$.promoteContent},[e._t("default")],2)])],1)},r=[];i._withStripped=!0},29:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});var i=function(){var e,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{class:[t.$.container,(e={},e[t.$.dragging]=t.dragging,e)],on:{scroll:t.onViewportUpdate,mousedown:t.onDragStart}},[i("div",{style:{height:t.content.length*t.lineHeight+2+"px",minWidth:t.maxWidth+"px"}},[i("table",{style:{transform:"translateY("+t.translateY+"px)"}},[i("tbody",t._l(t.displayLines,function(e,n){return i("tr",{key:t.displayRange[0]+n,class:t.$.line},[t.lineNumber?i("td",{class:t.$.lineNumber,attrs:{"data-line":t.displayRange[0]+n+1}}):t._e(),t._v(" "),i("td",{class:t.$.lineContent},[t._l(e,function(e,n){return i("span",{key:n,class:[t.$.chunk,(r={},r[t.$.mapped]=e.id,r[t.$.hovering]=e.id===t.hovering,r)],attrs:{title:t._f("names")(e.names)},on:{click:function(n){t.onSelect(e)},mouseover:function(n){t.onHover(e)}}},[[t._v(t._s(e.content))]],2);var r}),i("br")],2)])}))])]),t._v(" "),i("iframe",{ref:"resizeDetector",class:t.$.resizeDetector})])},r=[];i._withStripped=!0},30:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});var i=function(){var e,t=this,n=t.$createElement,i=t._self._c||n;return i("transition",{attrs:{name:"fade"}},[t.display?i("div",{class:t.$.container},[i("span",{class:[t.$.content,(e={},e[t.$.suc]="suc"===t.type,e[t.$.err]="err"===t.type,e)]},[t._v(t._s(t.msg))])]):t._e()])},r=[];i._withStripped=!0},32:function(e,t,n){var i=n(60);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4).default)("4db0d0d6",i,!1,{})},33:function(e,t,n){var i=n(62);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4).default)("64c04cee",i,!1,{})},34:function(e,t,n){var i=n(65);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4).default)("9d6ca6f4",i,!1,{})},35:function(e,t,n){var i=n(69);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4).default)("bd0500ca",i,!1,{})},60:function(e,t,n){(t=e.exports=n(5)(!1)).push([e.i,"\n.container_3Xnt43eV {\n  position: relative;\n  overflow: scroll;\n  cursor: -webkit-grab;\n}\n.container_3Xnt43eV.dragging_2LE3rFdy {\n  cursor: -webkit-grabbing;\n}\n.line_1CmPeHm0 {\n  font-size: 12px;\n  white-space: pre;\n  font-family: monospace;\n  color: #222;\n}\n.lineNumber_s8owU3pP {\n  padding: 0 10px;\n  min-width: 30px;\n  text-align: right;\n  vertical-align: top;\n  color: #999;\n}\n.lineNumber_s8owU3pP:before {\n  content: attr(data-line);\n}\n.chunk_2gj4DN1o.mapped_3INzDSc6 {\n  border-left: 2px solid lightgray;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.chunk_2gj4DN1o.hovering_1BY-G3g9 {\n  color: white;\n  background: black;\n  border-left-color: black !important;\n}\n.resizeDetector_1RdDzutV {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  pointer-events: none;\n}\n",""]),t.locals={container:"container_3Xnt43eV",dragging:"dragging_2LE3rFdy",line:"line_1CmPeHm0",lineNumber:"lineNumber_s8owU3pP",chunk:"chunk_2gj4DN1o",mapped:"mapped_3INzDSc6",hovering:"hovering_1BY-G3g9",resizeDetector:"resizeDetector_1RdDzutV"}},61:function(e,t,n){"use strict";n.r(t),function(e){var i=n(19),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var s=n(29),a=n(2),l=!1,c={};e.hot&&e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourceView.vue'],function(){var e=c.$;if(e){var t=n(32);JSON.stringify(t)!==JSON.stringify(e)&&(c.$=t,n(11).rerender("data-v-6c1b7520"))}});var u=function(e){l||(c.$=n(32),Object.defineProperty(this,"$",{get:function(){return c.$}}))},d=Object(a.a)(r.a,s.a,s.b,!1,u,null,null);d.options.__file="src\\components\\SourceView.vue",t.default=d.exports}.call(this,n(12)(e))},62:function(e,t,n){(t=e.exports=n(5)(!1)).push([e.i,"\n.sourceView_2K35-qiW {\n  height: 100%;\n}\n.promote_1mRhL9Hi {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  overflow: hidden;\n}\n.promoteFilePicker_caE44L4P {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.promoteContent_2qFnMvFg {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n  font-family: sans-serif;\n  border: 2px dashed #ccc;\n}\n",""]),t.locals={sourceView:"sourceView_2K35-qiW",promote:"promote_1mRhL9Hi",promoteFilePicker:"promoteFilePicker_caE44L4P",promoteContent:"promoteContent_2qFnMvFg"}},63:function(e,t,n){"use strict";n.r(t),function(e){var i=n(20),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var s=n(28),a=n(2),l=!1,c={};e.hot&&e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SourcePanel.vue'],function(){var e=c.$;if(e){var t=n(33);JSON.stringify(t)!==JSON.stringify(e)&&(c.$=t,n(11).rerender("data-v-7c5c3e49"))}});var u=function(e){l||(c.$=n(33),Object.defineProperty(this,"$",{get:function(){return c.$}}))},d=Object(a.a)(r.a,s.a,s.b,!1,u,null,null);d.options.__file="src\\components\\SourcePanel.vue",t.default=d.exports}.call(this,n(12)(e))},64:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t("path",{attrs:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}})])},toString:function(){return"C:\\Users\\jason\\source-map-viewer\\src\\components\\icons\\Menu.svg"}}},65:function(e,t,n){(t=e.exports=n(5)(!1)).push([e.i,"\n.container_3rQ7WAof {\n  position: fixed;\n  top: 50px;\n  width: 100%;\n  text-align: center;\n  z-index: 200;\n}\n.content_3und4w3W {\n  position: relative;\n  padding: 6px 20px;\n  color: #fff;\n  background: #55D041;\n  border-radius: 2px;\n}\n.content_3und4w3W.err_2D6Na1Ui {\n  background: #FB6500;\n}\n",""]),t.locals={container:"container_3rQ7WAof",content:"content_3und4w3W",err:"err_2D6Na1Ui"}},66:function(e,t,n){"use strict";n.r(t),function(e){var i=n(21),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var s=n(30),a=n(2),l=!1,c={};e.hot&&e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[local]_[hash:base64:8]","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Tips.vue'],function(){var e=c.$;if(e){var t=n(34);JSON.stringify(t)!==JSON.stringify(e)&&(c.$=t,n(11).rerender("data-v-27a2d548"))}});var u=function(e){l||(c.$=n(34),Object.defineProperty(this,"$",{get:function(){return c.$}}))},d=Object(a.a)(r.a,s.a,s.b,!1,u,null,null);d.options.__file="src\\components\\Tips.vue",t.default=d.exports}.call(this,n(12)(e))},67:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  font-size: 14px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n*::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n*::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: #bbb;\n}\n*::-webkit-scrollbar-track {\n  background: #eee;\n}\n.fade-enter-active, .fade-leave-active {\n  transition: opacity .2s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n",""])},68:function(e,t,n){var i=n(67);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4).default)("5590ff22",i,!1,{})},69:function(e,t,n){(t=e.exports=n(5)(!1)).push([e.i,"\n.app_3mlJZuUU_1 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.nav_bTwnlzJJ_1 {\n  position: relative;\n  display: flex;\n  flex: 0 0 auto;\n  line-height: 24px;\n  padding: 8px;\n  color: #bbb;\n  background: #444;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n}\n.navMenu_35Fwks0I_1 {\n  flex: 0 0 auto;\n  cursor: pointer;\n  fill: #bbb;\n}\n.fileList_2a_VsYD9_1 {\n  position: fixed;\n  top: 6px;\n  left: 6px;\n  max-width: 90%;\n  max-width: calc(100% - 12px);\n  max-height: 90%;\n  max-height: calc(100% - 12px);\n  overflow: auto;\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n  color: #888;\n  background: #fff;\n  z-index: 100;\n  user-select: none;\n}\n.fileListItem_2Fb4P--p_1 {\n  padding: 5px 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.fileListItem_2Fb4P--p_1:hover {\n  background: #f6f6f6;\n}\n.fileListItem_2Fb4P--p_1.active_2MSkmqRf_1 {\n  background: #eaeaea;\n  color: #333;\n}\n.fileListItem_2Fb4P--p_1.missingContent_3topMqSx_1 {\n  color: #CD5C5C;\n}\n.navTitle_LABcRnAo_1 {\n  margin-left: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.navTitle_LABcRnAo_1::selection {\n  background: #777;\n}\n.panelButtonGroup_2GOAK0wv_1 {\n  flex: 0 0 auto;\n  margin-left: auto;\n  user-select: none;\n}\n.panelButton_vd4i_gq4_1 {\n  display: inline-block;\n  margin-left: 8px;\n  color: #bbb;\n  text-decoration: none;\n}\n.panelButton_vd4i_gq4_1.active_2MSkmqRf_1 {\n  color: white;\n}\n.container_3Im7j72i_1 {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n.panel_103e1GeR_1 {\n  position: relative;\n  flex: 1 auto;\n  width: 1px;\n  height: 100%;\n}\n.promoteText_2xVSONMg_1 {\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 1.5em;\n  color: #aaa;\n}\n.promoteTips_DNb9ft0T_1 {\n  white-space: nowrap;\n  font-size: .9em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #999;\n}\n@media screen and (orientation: portrait) {\n.container_3Im7j72i_1 {\n    flex-direction: column;\n}\n.panel_103e1GeR_1 {\n    height: 1px;\n    width: 100%;\n}\n}\n",""]),t.locals={app:"app_3mlJZuUU_1",nav:"nav_bTwnlzJJ_1",navMenu:"navMenu_35Fwks0I_1",fileList:"fileList_2a_VsYD9_1",fileListItem:"fileListItem_2Fb4P--p_1",active:"active_2MSkmqRf_1",missingContent:"missingContent_3topMqSx_1",navTitle:"navTitle_LABcRnAo_1",panelButtonGroup:"panelButtonGroup_2GOAK0wv_1",panelButton:"panelButton_vd4i_gq4_1",container:"container_3Im7j72i_1",panel:"panel_103e1GeR_1",promoteText:"promoteText_2xVSONMg_1",promoteTips:"promoteTips_DNb9ft0T_1"}},70:function(e,t,n){"use strict";n.r(t),function(e){var i=n(22),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var s=n(27),a=n(2),l=!1,c={};e.hot&&e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[local]_[hash:base64:8]_1","importLoaders":1,"modules":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=1!./App.vue'],function(){var e=c.$;if(e){var t=n(35);JSON.stringify(t)!==JSON.stringify(e)&&(c.$=t,n(11).rerender("data-v-38cab9c1"))}});var u=function(e){l||(n(68),c.$=n(35),Object.defineProperty(this,"$",{get:function(){return c.$}}))},d=Object(a.a)(r.a,s.a,s.b,!1,u,null,null);d.options.__file="src\\components\\App.vue",t.default=d.exports}.call(this,n(12)(e))},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:()=>({type:"suc",msg:null,display:!1}),methods:{suc(e){this.show("suc",e)},err(e){this.show("err",e)},show(e,t){this.type=e,this.msg=t,this.display=!0,setTimeout(()=>{this.hide()},3e3)},hide(){this.display=!1}}}},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise((t,n)=>{const i=new FileReader;i.onerror=n,i.onload=(()=>t(i.result)),i.readAsText(e)})}},79:function(e,t){e.exports=null}});