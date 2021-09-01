/*! For license information please see 2.3fa8e5f6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{115:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},117:function(e,t,n){"use strict";var a=n(0),r=n(141);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},119:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(112),o=n(59),l=n.n(o);var u=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=n(109),i=n(137),m=n(60),f=n.n(m);var d=function(){var e,t=Object(i.a)(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var l=o.content,u=o.backgroundColor,m=o.textColor,d=o.isCloseable;return!l||d&&n?null:r.a.createElement("div",{className:f.a.announcementBar,style:{backgroundColor:u,color:m},role:"banner"},r.a.createElement("div",{className:Object(c.a)(f.a.announcementBarContent,(e={},e[f.a.announcementBarCloseable]=d,e)),dangerouslySetInnerHTML:{__html:l}}),d?r.a.createElement("button",{type:"button",className:f.a.announcementBarClose,onClick:a,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=n(121),b=n(3),v=n(8),g=n(111),E=n(110),p=n(62),O=n.n(p);function j(e){var t=e.to,n=e.href,a=e.label,c=e.prependBaseUrlToHref,o=Object(v.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(E.a)(t),u=Object(E.a)(n,{forcePrependBaseUrl:!0});return r.a.createElement(g.a,Object(b.a)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:c?u:n}:{to:l},o),a)}var y=function(e){var t=e.url,n=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:n,src:t})};var C=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},n=t.copyright,a=t.links,o=void 0===a?[]:a,l=t.logo,u=void 0===l?{}:l,i=Object(E.a)(u.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(j,e))}))):null)}))),(u||n)&&r.a.createElement("div",{className:"footer__bottom text--center"},u&&u.src&&r.a.createElement("div",{className:"margin-bottom--sm"},u.href?r.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:O.a.footerLogoLink},r.a.createElement(y,{alt:u.alt,url:i})):r.a.createElement(y,{alt:u.alt,url:i})),n?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},k=n(7),S="light",w="dark",L=function(e){return e===w?w:S},N=function(){return k.a.canUseDOM?L(document.documentElement.getAttribute("data-theme")):S},T=function(e){try{localStorage.setItem("theme",L(e))}catch(t){console.error(t)}},_=function(){var e=Object(s.useThemeConfig)().colorMode,t=e.disableSwitch,n=e.respectPrefersColorScheme,r=Object(a.useState)(N),c=r[0],o=r[1],l=Object(a.useCallback)((function(){o(S),T(S)}),[]),u=Object(a.useCallback)((function(){o(w),T(w)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",L(c))}),[c]),Object(a.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(L(e))}catch(n){console.error(n)}}),[o]),Object(a.useEffect)((function(){t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?w:S)}))}),[]),{isDarkTheme:c===w,setLightTheme:l,setDarkTheme:u}},A=n(141);var D=function(e){var t=_(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(A.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)},I="docusaurus.tab.",P=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(I))e[a.substring(I.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},B="docusaurus.announcement.dismiss",M="docusaurus.announcement.id",x=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){localStorage.setItem(B,"true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(M);"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem(M,t),a&&localStorage.setItem(B,"false"),(a||"false"===localStorage.getItem(B))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},U=n(138);var R=function(e){var t=P(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=x(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(U.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function H(e){var t=e.children;return r.a.createElement(D,null,r.a.createElement(R,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}var F=n(22),V=n(21);function G(e){var t=e.locale,n=e.version,a=e.tag,c=t;return r.a.createElement(F.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),n&&r.a.createElement("meta",{name:"docsearch:version",content:n}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}function K(e){var t=Object(V.default)(),n=t.siteConfig,a=t.i18n.currentLocale,c=n.favicon,o=n.themeConfig,l=o.image,u=o.metadatas,i=n.url,m=e.title,f=e.description,d=e.image,h=e.keywords,v=e.permalink,g=e.searchMetadatas,p=Object(s.useTitleFormatter)(m),O=d||l,j=Object(E.a)(O,{absolute:!0}),y=Object(E.a)(c),C=a.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,null,r.a.createElement("html",{lang:C}),p&&r.a.createElement("title",null,p),p&&r.a.createElement("meta",{property:"og:title",content:p}),c&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),h&&h.length&&r.a.createElement("meta",{name:"keywords",content:h.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:j}),O&&r.a.createElement("meta",{name:"twitter:image",content:j}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),v&&r.a.createElement("meta",{property:"og:url",content:i+v}),v&&r.a.createElement("link",{rel:"canonical",href:i+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(G,Object(b.a)({tag:s.DEFAULT_SEARCH_TAG,locale:a},g)),r.a.createElement(F.a,null,u.map((function(e,t){return r.a.createElement("meta",Object(b.a)({key:"metadata_"+t},e))}))))}n(63);var q=function(){Object(a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(64);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName;return q(),r.a.createElement(H,null,r.a.createElement(K,e),r.a.createElement(u,null),r.a.createElement(d,null),r.a.createElement(h.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",a)},t),!n&&r.a.createElement(C,null))}},120:function(e,t,n){"use strict";var a=n(3),r=n(8),c=n(0),o=n.n(c),l=n(111),u=n(112),s=n(21),i=n(117),m=n(61),f=n.n(m),d=function(e){var t=Object(s.default)().isClient,n=Object(i.a)().isDarkTheme,c=e.sources,l=e.className,m=e.alt,d=void 0===m?"":m,h=Object(r.a)(e,["sources","className","alt"]),b=t?n?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,b.map((function(e){return o.a.createElement("img",Object(a.a)({key:e,src:c[e],alt:d,className:Object(u.a)(f.a.themedImage,f.a["themedImage--"+e],l)},h))})))},h=n(110),b=n(109),v=n(114);t.a=function(e){var t=Object(s.default)().isClient,n=Object(b.useThemeConfig)().navbar,c=n.title,u=n.logo,i=void 0===u?{src:""}:u,m=e.imageClassName,f=e.titleClassName,g=Object(r.a)(e,["imageClassName","titleClassName"]),E=Object(h.a)(i.href||"/"),p=i.target?{target:i.target}:Object(v.a)(E)?{}:{rel:"noopener noreferrer",target:"_blank"},O={light:Object(h.a)(i.src),dark:Object(h.a)(i.srcDark||i.src)};return o.a.createElement(l.a,Object(a.a)({to:E},g,p),i.src&&o.a.createElement(d,{key:t,className:m,sources:O,alt:i.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:f},c))}},122:function(e,t,n){"use strict";var a=n(0),r=n(113),c=n(142);t.a=function(e){var t=Object(r.useLocation)(),n=Object(a.useState)(!e),o=n[0],l=n[1],u=Object(a.useRef)(!1),s=Object(a.useState)(0),i=s[0],m=s[1],f=Object(a.useState)(0),d=f[0],h=f[1],b=Object(a.useCallback)((function(e){null!==e&&h(e.getBoundingClientRect().height)}),[]);return Object(c.a)((function(t){var n=t.scrollY;if(e&&!(n<d)){if(u.current)return u.current=!1,l(!1),void m(n);i&&0===n&&l(!0);var a=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&n>=i?l(!1):n+r<a&&l(!0),m(n)}}),[i,d,u]),Object(a.useEffect)((function(){e&&i&&l(!0)}),[t.pathname]),Object(a.useEffect)((function(){e&&(u.current=!0)}),[t.hash]),{navbarRef:b,isNavbarVisible:o}}},123:function(e,t,n){"use strict";var a=n(3),r=n(8),c=n(0),o=n.n(c),l=n(25),u=n(21),s=n(113),i=n(110),m=n(111),f=n(22),d=n(139);function h(){return o.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var b=n(140);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(u){r=!0,c=u}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p="Ctrl";var O=o.a.forwardRef((function(e,t){var n=g(Object(c.useState)(null),2),a=n[0],r=n[1];return Object(c.useEffect)((function(){"undefined"!=typeof navigator&&r(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":p)}),[]),o.a.createElement("button",v({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),o.a.createElement("div",{className:"DocSearch-Button-Container"},o.a.createElement(b.a,null),o.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search")),null!==a?o.a.createElement("div",{className:"DocSearch-Button-Keys"},o.a.createElement("span",{className:"DocSearch-Button-Key"},a===p?o.a.createElement(h,null):a),o.a.createElement("span",{className:"DocSearch-Button-Key"},"K")):null)})),j=n(116),y=n(109);function C(){var e=function(){var e=Object(u.default)().i18n,t=Object(j.useAllDocsData)(),n=Object(j.useActivePluginAndVersion)(),a=Object(y.useDocsPreferredVersionByPluginId)(),r=[y.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var r,c,o=(null==n||null===(r=n.activePlugin)||void 0===r?void 0:r.pluginId)===e?n.activeVersion:void 0,l=a[e],u=t[e].versions.find((function(e){return e.isLast})),s=null!==(c=null!=o?o:l)&&void 0!==c?c:u;return Object(y.docVersionSearchTag)(e,s.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var k=null;function S(e){var t=e.hit,n=e.children;return o.a.createElement(m.a,{to:t.url},n)}function w(e){var t=e.state,n=e.onClose,a=Object(d.a)().generateSearchPageLink;return o.a.createElement(m.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function L(e){var t,m,d=e.contextualSearch,h=Object(r.a)(e,["contextualSearch"]),b=Object(u.default)().siteMetadata,v=C(),g=null!==(t=null===(m=h.searchParameters)||void 0===m?void 0:m.facetFilters)&&void 0!==t?t:[],E=d?[].concat(v,g):g,p=Object.assign({},h.searchParameters,{facetFilters:E}),j=Object(i.b)().withBaseUrl,y=Object(s.useHistory)(),L=Object(c.useRef)(null),N=Object(c.useState)(!1),T=N[0],_=N[1],A=Object(c.useState)(null),D=A[0],I=A[1],P=Object(c.useCallback)((function(){return k?Promise.resolve():Promise.all([n.e(41).then(n.bind(null,189)),Promise.all([n.e(0),n.e(42)]).then(n.bind(null,188)),n.e(0).then(n.t.bind(null,107,7))]).then((function(e){var t=e[0].DocSearchModal;k=t}))}),[]),B=Object(c.useCallback)((function(){P().then((function(){_(!0)}))}),[P,_]),M=Object(c.useCallback)((function(){_(!1)}),[_]),x=Object(c.useCallback)((function(e){P().then((function(){_(!0),I(e.key)}))}),[P,_,I]),U=Object(c.useRef)({navigate:function(e){var t=e.itemUrl;y.push(t)}}).current,R=Object(c.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:j(""+t.pathname+t.hash)})}))})).current,H=Object(c.useMemo)((function(){return function(e){return o.a.createElement(w,Object(a.a)({},e,{onClose:M}))}}),[M]),F=Object(c.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",b.docusaurusVersion),e}),[b.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,c=e.searchButtonRef;o.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),c&&c.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,c])}({isOpen:T,onOpen:B,onClose:M,onInput:x,searchButtonRef:L}),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement("link",{rel:"preconnect",href:"https://"+h.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.a.createElement(O,{onTouchStart:P,onFocus:P,onMouseOver:P,onClick:B,ref:L}),T&&Object(l.createPortal)(o.a.createElement(k,Object(a.a)({onClose:M,initialScrollY:window.scrollY,initialQuery:D,navigator:U,transformItems:R,hitComponent:S,resultsFooterComponent:H,transformSearchClient:F},h,{searchParameters:p})),document.body))}t.a=function(){var e=Object(u.default)().siteConfig;return o.a.createElement(L,e.themeConfig.algolia)}},137:function(e,t,n){"use strict";var a=n(0),r=n(138);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},138:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},139:function(e,t,n){"use strict";var a=n(113),r=n(7),c=n(21);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.default)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},141:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},142:function(e,t,n){"use strict";var a=n(0),r=n(7),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],l=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}}}]);