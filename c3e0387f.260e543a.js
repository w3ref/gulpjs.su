(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,O=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return t?a.a.createElement(O,b(b({ref:n},i),{},{components:t})):a.a.createElement(O,b({ref:n},i))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=d;var b={};for(var l in n)hasOwnProperty.call(n,l)&&(b[l]=n[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<c;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),c=(t(0),t(107)),o={id:"tree",title:"tree()",hide_title:!0,sidebar_label:"tree()"},b={unversionedId:"api/tree",id:"api/tree",isDocsHomePage:!1,title:"tree()",description:"tree()",source:"@site/docs/api/tree.md",slug:"/api/tree",permalink:"/docs/ru/api/tree",version:"current",sidebar_label:"tree()",sidebar:"docs",previous:{title:"registry()",permalink:"/docs/ru/api/registry"},next:{title:"Vinyl",permalink:"/docs/ru/api/vinyl"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Signature",id:"signature",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Options",id:"options",children:[]}]}],i={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"tree"},"tree()"),Object(c.b)("p",null,"Fetches the current task dependency tree - in the rare case that it is needed."),Object(c.b)("p",null,"Generally, ",Object(c.b)("inlineCode",{parentName:"p"},"tree()")," won't be used by gulp consumers, but it is exposed so the CLI can show the dependency graph of the tasks defined in a gulpfile."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Example gulpfile:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\nconst { series, parallel } = require('gulp');\n\nfunction one(cb) {\n  // body omitted\n  cb();\n}\n\nfunction two(cb) {\n  // body omitted\n  cb();\n}\n\nfunction three(cb) {\n  // body omitted\n  cb();\n}\n\nconst four = series(one, two);\n\nconst five = series(four,\n  parallel(three, function(cb) {\n    // Body omitted\n    cb();\n  })\n);\n\nmodule.exports = { one, two, three, four, five };\n")),Object(c.b)("p",null,"Output for ",Object(c.b)("inlineCode",{parentName:"p"},"tree()"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"{\n  label: 'Tasks',\n  nodes: [ 'one', 'two', 'three', 'four', 'five' ]\n}\n")),Object(c.b)("p",null,"Output for ",Object(c.b)("inlineCode",{parentName:"p"},"tree({ deep: true })"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  label: "Tasks",\n  nodes: [\n    {\n      label: "one",\n      type: "task",\n      nodes: []\n    },\n    {\n      label: "two",\n      type: "task",\n      nodes: []\n    },\n    {\n      label: "three",\n      type: "task",\n      nodes: []\n    },\n    {\n      label: "four",\n      type: "task",\n      nodes: [\n        {\n          label: "<series>",\n          type: "function",\n          branch: true,\n          nodes: [\n            {\n              label: "one",\n              type: "function",\n              nodes: []\n            },\n            {\n              label: "two",\n              type: "function",\n              nodes: []\n            }\n          ]\n        }\n      ]\n    },\n    {\n      label: "five",\n      type: "task",\n      nodes: [\n        {\n          label: "<series>",\n          type: "function",\n          branch: true,\n          nodes: [\n            {\n              label: "<series>",\n              type: "function",\n              branch: true,\n              nodes: [\n                {\n                  label: "one",\n                  type: "function",\n                  nodes: []\n                },\n                {\n                  label: "two",\n                  type: "function",\n                  nodes: []\n                }\n              ]\n            },\n            {\n              label: "<parallel>",\n              type: "function",\n              branch: true,\n              nodes: [\n                {\n                  label: "three",\n                  type: "function",\n                  nodes: []\n                },\n                {\n                  label: "<anonymous>",\n                  type: "function",\n                  nodes: []\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),Object(c.b)("h2",{id:"signature"},"Signature"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"tree([options])\n")),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"note"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"options"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"object"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Detailed in ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"#options"}),"Options")," below.")))),Object(c.b)("h3",{id:"returns"},"Returns"),Object(c.b)("p",null,"An object detailing the tree of registered tasks - containing nested objects with ",Object(c.b)("inlineCode",{parentName:"p"},"'label'")," and ",Object(c.b)("inlineCode",{parentName:"p"},"'nodes'")," properties (which is ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/archy"}),"archy")," compatible)."),Object(c.b)("p",null,"Each object may have a ",Object(c.b)("inlineCode",{parentName:"p"},"type")," property that can be used to determine if the node is a ",Object(c.b)("inlineCode",{parentName:"p"},"task")," or ",Object(c.b)("inlineCode",{parentName:"p"},"function"),"."),Object(c.b)("p",null,"Each object may have a ",Object(c.b)("inlineCode",{parentName:"p"},"branch")," property that, when ",Object(c.b)("inlineCode",{parentName:"p"},"true"),", indicates the node was created using ",Object(c.b)("inlineCode",{parentName:"p"},"series()")," or ",Object(c.b)("inlineCode",{parentName:"p"},"parallel()"),"."),Object(c.b)("h3",{id:"options"},"Options"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"default"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"note"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"deep"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"If true, the entire tree will be returned. When false, only top level tasks will be returned.")))))}p.isMDXComponent=!0}}]);