(window.webpackJsonp=window.webpackJsonp||[]).push([[40,6,28],{120:function(e,a,t){"use strict";var n=t(3),r=t(7),i=t(0),l=t.n(i),o=t(114),c=t.n(o),s=t(110),m=t(21),b=t(109),v=t(113),u=t(112),f=t(122),d=t(116),h=t(121),_=t(119),g=t(56),p=t.n(g);function E(){}function O(e){var a=e.activeBasePath,t=e.to,i=e.href,o=e.logo,u=e.label,f=(e.position,Object(r.a)(e,["activeBasePath","to","href","logo","label","position"])),h=Object(b.a)(t),_=Object(b.a)(a),g=function(e){void 0===e&&(e={});var a=Object(m.default)().siteConfig,t=(a=void 0===a?{}:a).baseUrl,n=Object(d.a)().isDarkTheme,r=e.href||t;e.target?e.target:Object(v.a)(r);var i=e.srcDark&&n?e.srcDark:e.src;return{logoImageUrl:Object(b.a)(i),logoAlt:e.alt}}(o),E=g.logoImageUrl,O=g.logoAlt,j=null!=E?l.a.createElement("img",{className:c()(p.a.navbarIcon),src:E,alt:O}):u;return l.a.createElement(s.a,Object(n.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:i}:Object.assign({activeClassName:"navbar__link--active",to:h},a?{isActive:function(e,a){return a.pathname.startsWith(_)}}:null),f),j)}function j(e){var a,t=e.items,i=e.emphasis,o=e.position,s=Object(r.a)(e,["items","emphasis","position"]);return t?l.a.createElement("div",{className:c()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===o,"dropdown--right":"right"===o})},l.a.createElement(O,Object(n.a)({className:"navbar__item navbar__link"},s),s.label),l.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(O,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):l.a.createElement(O,Object(n.a)({className:c()("navbar__item","navbar__link",(a={"navbar__link--icon":s.logo},a[p.a.emphasis]=i,a[p.a.noWrap]=!0,a))},s))}function N(e){return"/plugins"!==e&&"/plugins/"!==e}a.a=function(){var e,a=Object(m.default)().siteConfig.themeConfig.navbar,t=(a=void 0===a?{}:a).items,r=void 0===t?[]:t,o=a.hideOnScroll,s=void 0!==o&&o,b=Object(u.useLocation)(),v=Object(i.useState)(N(b.pathname)),d=v[0],g=v[1];Object(i.useEffect)((function(){g(N(b.pathname))}),[b]);var O=Object(h.a)(s),k=O.navbarRef,w=O.isNavbarVisible;return l.a.createElement("nav",{ref:k,className:c()("navbar","navbar--light","navbar--fixed-top",(e={},e[p.a.navbarHideable]=s,e[p.a.navbarHidden]=!w,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},l.a.createElement(_.a,{className:"navbar__brand",imageClassName:"navbar__logo"}),r.filter((function(e){return"left"===e.position})).map((function(e,a){return l.a.createElement(j,Object(n.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},r.filter((function(e){return"right"===e.position})).map((function(e,a){return l.a.createElement(j,Object(n.a)({},e,{key:a}))})),d&&l.a.createElement(f.a,{handleSearchBarToggle:E,isSearchBarExpanded:!0}))))}},132:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(118);a.default=function(){return r.a.createElement(i.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);