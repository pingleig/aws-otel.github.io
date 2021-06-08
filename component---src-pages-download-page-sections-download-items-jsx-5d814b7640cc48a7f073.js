(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"3ZzI":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n("OA4S"))},"8KHB":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n("lSNA")),i=a(n("QILm")),s=a(n("pVnL")),o=a(n("q1tI")),l=(a(n("17x9")),a(n("TSYQ"))),c=(a(n("2W6z")),n("j4Xf"),a(n("Hk+Y"))),u=function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),(0,s.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:e.shape.borderRadius}},t)};function d(e){var t=e.classes,n=e.className,a=e.component,c=e.square,u=e.elevation,d=(0,i.default)(e,["classes","className","component","square","elevation"]),f=(0,l.default)(t.root,t["elevation".concat(u)],(0,r.default)({},t.rounded,!c),n);return o.default.createElement(a,(0,s.default)({className:f},d))}t.styles=u,d.defaultProps={component:"div",elevation:2,square:!1};var f=(0,c.default)(u,{name:"MuiPaper"})(d);t.default=f},OA4S:function(e,t,n){"use strict";n("RUBk");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n("lSNA")),i=a(n("QILm")),s=a(n("pVnL")),o=a(n("q1tI")),l=(a(n("17x9")),a(n("TSYQ"))),c=(n("j4Xf"),a(n("Hk+Y"))),u=n("Th4q"),d=(a(n("gz/h")),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var x=function(e){return(0,s.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return d.forEach((function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})})),n}(0,"xs"),u.keys.reduce((function(t,n){return function(e,t,n){var a={};f.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,s.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))};function p(e){var t,n=e.alignContent,a=e.alignItems,c=e.classes,u=e.className,d=e.component,f=e.container,x=e.direction,g=e.item,m=e.justify,v=e.lg,w=e.md,b=e.sm,y=e.spacing,h=e.wrap,j=e.xl,S=e.xs,P=e.zeroMinWidth,C=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),I=(0,l.default)((t={},(0,r.default)(t,c.container,f),(0,r.default)(t,c.item,g),(0,r.default)(t,c.zeroMinWidth,P),(0,r.default)(t,c["spacing-xs-".concat(String(y))],f&&0!==y),(0,r.default)(t,c["direction-xs-".concat(String(x))],x!==p.defaultProps.direction),(0,r.default)(t,c["wrap-xs-".concat(String(h))],h!==p.defaultProps.wrap),(0,r.default)(t,c["align-items-xs-".concat(String(a))],a!==p.defaultProps.alignItems),(0,r.default)(t,c["align-content-xs-".concat(String(n))],n!==p.defaultProps.alignContent),(0,r.default)(t,c["justify-xs-".concat(String(m))],m!==p.defaultProps.justify),(0,r.default)(t,c["grid-xs-".concat(String(S))],!1!==S),(0,r.default)(t,c["grid-sm-".concat(String(b))],!1!==b),(0,r.default)(t,c["grid-md-".concat(String(w))],!1!==w),(0,r.default)(t,c["grid-lg-".concat(String(v))],!1!==v),(0,r.default)(t,c["grid-xl-".concat(String(j))],!1!==j),t),u);return o.default.createElement(d,(0,s.default)({className:I},C))}t.styles=x,p.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var g=(0,c.default)(x,{name:"MuiGrid"})(p);t.default=g},aoJa:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=(n("q1tI"),n("Hk+Y")),s=n.n(i),o=n("3ZzI"),l=n.n(o),c=n("qKvR");function u(e){var t=Object.assign({},e),n=t.classes,i=t.children,s=t.className,o=Object(r.a)(t,["classes","children","className"]);return Object(c.d)(l.a,Object(a.a)({container:!0},o,{className:n.grid+" "+s}),i)}u.defaultProps={className:""},t.a=s()({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(u)},"gz/h":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return function(){return null}};t.default=a},pPbJ:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n("8KHB"))}}]);
//# sourceMappingURL=component---src-pages-download-page-sections-download-items-jsx-5d814b7640cc48a7f073.js.map