webpackJsonp([0],{2548:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(2552);e.d(t,"default",function(){return i.a})},2549:function(n,t,e){"use strict";e.d(t,"a",function(){return A});var i=e(13),r=e.n(i),o=e(2),a=e.n(o),c=e(3),l=e.n(c),u=e(5),s=e.n(u),f=e(8),d=e.n(f),p=e(4),h=e.n(p),v=e(26),y=e.n(v),m=e(6),g=e.n(m),k=e(7),C=e.n(k),b=e(2550),x=console,w=x.warn,A=function(n){function t(n){var e;return a()(this,t),e=s()(this,h()(t).call(this,n)),C()(d()(e),"context",void 0),C()(d()(e),"handlers",void 0),C()(d()(e),"hasFired",void 0),C()(d()(e),"clone",function(){return e.hasFired?(w("Cannot clone an event after it's been fired."),null):new t({context:r()(e.context),handlers:r()(e.handlers),payload:JSON.parse(JSON.stringify(e.payload))})}),C()(d()(e),"fire",function(n){if(e.hasFired)return void w("Cannot fire an event twice.");e.handlers.forEach(function(t){t(d()(e),n)}),e.hasFired=!0}),e.context=n.context||[],e.handlers=n.handlers||[],e.hasFired=!1,e}return g()(t,n),l()(t,[{key:"update",value:function(n){return this.hasFired?(w("Cannot update an event after it's been fired."),this):y()(h()(t.prototype),"update",this).call(this,n)}}]),t}(b.a)},2550:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var i=e(10),r=e.n(i),o=e(15),a=e.n(o),c=e(2),l=e.n(c),u=e(3),s=e.n(u),f=e(7),d=e.n(f),p=function(){function n(t){var e=this;l()(this,n),d()(this,"payload",void 0),d()(this,"clone",function(){return new n({payload:JSON.parse(JSON.stringify(e.payload))})}),this.payload=t.payload}return s()(n,[{key:"update",value:function(n){return"function"===typeof n?this.payload=n(this.payload):"object"===a()(n)&&(this.payload=r()({},this.payload,n)),this}}]),n}()},2551:function(n,t,e){"use strict";e.d(t,"a",function(){return w});var i=e(13),r=e.n(i),o=e(2),a=e.n(o),c=e(3),l=e.n(c),u=e(5),s=e.n(u),f=e(4),d=e.n(f),p=e(8),h=e.n(p),v=e(6),y=e.n(v),m=e(7),g=e.n(m),k=e(0),C=(e.n(k),e(11)),b=e.n(C),x={getAtlaskitAnalyticsContext:b.a.func},w=function(n){function t(){var n,e;a()(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return e=s()(this,(n=d()(t)).call.apply(n,[this].concat(o))),g()(h()(e),"getChildContext",function(){return{getAtlaskitAnalyticsContext:e.getAnalyticsContext}}),g()(h()(e),"getAnalyticsContext",function(){var n=e.props.data,t=e.context.getAtlaskitAnalyticsContext,i="function"===typeof t&&t()||[];return[].concat(r()(i),[n])}),e}return y()(t,n),l()(t,[{key:"render",value:function(){return k.Children.only(this.props.children)}}]),t}(k.Component);g()(w,"contextTypes",x),g()(w,"childContextTypes",x)},2552:function(n,t,e){"use strict";var i=e(2),r=e.n(i),o=e(3),a=e.n(o),c=e(5),l=e.n(c),u=e(4),s=e.n(u),f=e(8),d=e.n(f),p=e(6),h=e.n(p),v=e(7),y=e.n(v),m=e(0),g=e.n(m),k=e(2553),C=e(67),b=e.n(C),x=e(2559),w=e(2561),A=(e.n(w),e(2562)),E=function(n){function t(){var n,e;r()(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=l()(this,(n=s()(t)).call.apply(n,[this].concat(o))),y()(d()(e),"containerRef",null),y()(d()(e),"triggerRef",null),y()(d()(e),"handleClickOutside",function(n){var t=e.props,i=t.isOpen,r=t.onClose;if(!n.defaultPrevented){var o=e.containerRef,a=e.triggerRef,c=n.target;a&&a.contains(c)||i&&o&&!o.contains(c)&&r({isOpen:!1,event:n})}}),e}return h()(t,n),a()(t,[{key:"componentDidUpdate",value:function(n){"undefined"!==typeof window&&(!n.isOpen&&this.props.isOpen?window.addEventListener("click",this.handleClickOutside,!0):n.isOpen&&!this.props.isOpen&&window.removeEventListener("click",this.handleClickOutside))}},{key:"componentDidMount",value:function(){"undefined"!==typeof window&&this.props.isOpen&&window.addEventListener("click",this.handleClickOutside,!0)}},{key:"componentWillUnMount",value:function(){"undefined"!==typeof window&&window.removeEventListener("click",this.handleClickOutside)}},{key:"render",value:function(){var n=this,t=this.props,e=t.children,i=t.placement,r=t.isOpen,o=t.content,a=t.onContentBlur,c=t.onContentFocus,l=t.onContentClick,u=r?g.a.createElement(x.b,{placement:i},function(t){var e=t.ref,i=t.style,r=t.outOfBoundaries;return g.a.createElement(A.a,{onBlur:a,onFocus:c,onClick:l,outOfBoundaries:r,innerRef:function(t){n.containerRef=t,e(t)},style:i},o)}):null;return g.a.createElement(x.a,null,g.a.createElement(x.c,null,function(t){var i=t.ref;return g.a.createElement(b.a,{innerRef:function(t){n.triggerRef=t,i(t)}},e)}),u)}}]),t}(m.Component);y()(E,"defaultProps",{children:null,content:null,isOpen:!1,onContentBlur:function(){},onContentClick:function(){},onContentFocus:function(){},onClose:function(){},placement:"bottom-start"});var O=Object(k.a)("atlaskit");t.a=Object(k.b)({componentName:"inlineDialog",packageName:w.name,packageVersion:w.version})(Object(k.c)({onClose:O({action:"closed",actionSubject:"inlineDialog",attributes:{componentName:"inlineDialog",packageName:w.name,packageVersion:w.version}})})(E))},2553:function(n,t,e){"use strict";var i=(e(2550),e(2549),e(2554),e(2551),e(2555));e.d(t,"b",function(){return i.a});var r=e(2556);e.d(t,"c",function(){return r.a});var o=e(2557);e.d(t,"a",function(){return o.a});e(2558)},2554:function(n,t,e){"use strict";var i=e(13),r=e.n(i),o=e(2),a=e.n(o),c=e(3),l=e.n(c),u=e(5),s=e.n(u),f=e(4),d=e.n(f),p=e(8),h=e.n(p),v=e(6),y=e.n(v),m=e(7),g=e.n(m),k=e(0),C=(e.n(k),e(11)),b=e.n(C),x=(e(2549),{getAtlaskitAnalyticsEventHandlers:b.a.func}),w=function(n){function t(){var n,e;a()(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return e=s()(this,(n=d()(t)).call.apply(n,[this].concat(o))),g()(h()(e),"getChildContext",function(){return{getAtlaskitAnalyticsEventHandlers:e.getAnalyticsEventHandlers}}),g()(h()(e),"getAnalyticsEventHandlers",function(){var n=e.props,t=n.channel,i=n.onEvent,o=e.context.getAtlaskitAnalyticsEventHandlers,a="function"===typeof o&&o()||[];return[function(n,e){"*"!==t&&t!==e||i(n,e)}].concat(r()(a))}),e}return y()(t,n),l()(t,[{key:"render",value:function(){return this.props.children}}]),t}(k.Component);g()(w,"contextTypes",x),g()(w,"childContextTypes",x)},2555:function(n,t,e){"use strict";function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var e=f.a.forwardRef(function(e,i){var r=e.analyticsContext,a=void 0===r?{}:r,l=u()(e,["analyticsContext"]),s=c()({},n,a);return f.a.createElement(d.a,{data:s},f.a.createElement(t,o()({},l,{ref:i})))});return e.displayName="WithAnalyticsContext(".concat(t.displayName||t.name,")"),e}}t.a=i;var r=e(9),o=e.n(r),a=e(10),c=e.n(a),l=e(12),u=e.n(l),s=e(0),f=e.n(s),d=e(2551)},2556:function(n,t,e){"use strict";function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var e=w.a.forwardRef(function(e,i){return w.a.createElement(N,null,function(r){var a=j(n,function(n,t){return R(n,t,e,r)});return w.a.createElement(t,o()({},e,a,{createAnalyticsEvent:r,ref:i}))})});return e.displayName="WithAnalyticsEvents(".concat(t.displayName||t.name,")"),e}}t.a=i;var r=e(9),o=e.n(r),a=e(10),c=e.n(a),l=e(2),u=e.n(l),s=e(3),f=e.n(s),d=e(5),p=e.n(d),h=e(4),v=e.n(h),y=e(8),m=e.n(y),g=e(6),k=e.n(g),C=e(7),b=e.n(C),x=e(0),w=e.n(x),A=e(11),E=e.n(A),O=e(2549),N=function(n){function t(){var n,e;u()(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=p()(this,(n=v()(t)).call.apply(n,[this].concat(r))),b()(m()(e),"createAnalyticsEvent",function(n){var t=e.context,i=t.getAtlaskitAnalyticsEventHandlers,r=t.getAtlaskitAnalyticsContext,o="function"===typeof r&&r()||[],a="function"===typeof i&&i()||[];return new O.a({context:o,handlers:a,payload:n})}),e}return k()(t,n),f()(t,[{key:"render",value:function(){return this.props.children(this.createAnalyticsEvent)}}]),t}(x.Component);b()(N,"contextTypes",{getAtlaskitAnalyticsEventHandlers:E.a.func,getAtlaskitAnalyticsContext:E.a.func});var R=function(n,t,e,i){return function(){var r="function"===typeof t?t(i,e):i(t),o=e[n];if(o){for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];o.apply(void 0,c.concat([r]))}}},j=function(n,t){return Object.keys(n).reduce(function(e,i){return c()({},e,b()({},i,t(i,n[i])))},{})}},2557:function(n,t,e){"use strict";t.a=function(n){return function(t){return function(e){var i=e(t);return i.clone().fire(n),i}}}},2558:function(n,t,e){"use strict";var i=e(12);e.n(i)},2559:function(n,t,e){"use strict";var i=e(2560);e.d(t,"a",function(){return i.a}),e.d(t,"c",function(){return i.c}),e.d(t,"b",function(){return i.b})},2560:function(n,t,e){"use strict";e.d(t,"b",function(){return A});var i=e(9),r=e.n(i),o=e(2),a=e.n(o),c=e(3),l=e.n(c),u=e(5),s=e.n(u),f=e(4),d=e.n(f),p=e(8),h=e.n(p),v=e(6),y=e.n(v),m=e(7),g=e.n(m),k=e(0),C=e.n(k),b=e(27),x=e(40);e.d(t,"a",function(){return x.a}),e.d(t,"c",function(){return x.c});var w=function(n){return{auto:[],top:["top","bottom","top"],right:["right","left","right"],bottom:["bottom","top","bottom"],left:["left","right","left"]}[n]},A=function(n){function t(){var n,e;a()(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=s()(this,(n=d()(t)).call.apply(n,[this].concat(r))),g()(h()(e),"getModifiers",Object(b.a)(function(n){return{flip:{enabled:!0,behavior:w(n.split("-")[0]),boundariesElement:"viewport"},hide:{enabled:!0,boundariesElement:"scrollParent"},offset:{enabled:!0,offset:e.props.offset},preventOverflow:{enabled:!0,escapeWithReference:!1,boundariesElement:"window"}}})),e}return y()(t,n),l()(t,[{key:"render",value:function(){var n=this.props,t=n.placement,e=n.children,i=n.referenceElement,o=this.getModifiers(this.props.placement);return C.a.createElement(x.b,r()({positionFixed:!0,modifiers:o,placement:t},i?{referenceElement:i}:{}),e)}}]),t}(k.Component);g()(A,"defaultProps",{children:function(){},offset:"0, 8px",placement:"bottom-start"})},2561:function(n,t){n.exports={name:"@atlaskit/inline-dialog",version:"10.0.5",sideEffects:!1}},2562:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var i=e(1),r=e(22),o=Object(r.themed)({light:r.colors.N0,dark:r.colors.DN50}),a=Object(r.themed)({light:r.colors.N900,dark:r.colors.DN600}),c=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-1v7azd6-0"})(["\n  background: ",";\n  border-radius: ","px;\n  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */\n  color: ",";\n  max-height: ","px;\n  max-width: ","px;\n  padding: ","px ","px;\n  z-index: ",";\n\n  ",";\n\n  &:focus {\n    outline: none;\n  }\n"],o,r.borderRadius,a,r.math.multiply(r.gridSize,56),r.math.multiply(r.gridSize,56),r.math.multiply(r.gridSize,2),r.math.multiply(r.gridSize,3),r.layers.dialog,r.elevation.e200)}});
//# sourceMappingURL=0.e3929bc8.chunk.js.map