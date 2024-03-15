"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>f});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9318:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(8168),a=(t(6540),t(5680));const o={id:"command-reference",title:"Command Reference",sidebar_label:"Command Reference",sidebar_position:2,pagination_next:null,pagination_prev:null},i="Command Reference",l={unversionedId:"cli/command-reference",id:"cli/command-reference",title:"Command Reference",description:"Welcome to the official documentation for the KNDP Command-Line Interface (CLI) tool!",source:"@site/docs/cli/command-reference.md",sourceDirName:"cli",slug:"/cli/command-reference",permalink:"/docs/cli/command-reference",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"command-reference",title:"Command Reference",sidebar_label:"Command Reference",sidebar_position:2,pagination_next:null,pagination_prev:null},sidebar:"myAutogeneratedSidebar"},c={},s=[{value:"Basic Usage",id:"basic-usage",level:2}],m={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"command-reference"},"Command Reference"),(0,a.yg)("p",null,"Welcome to the official documentation for the KNDP Command-Line Interface (CLI) tool!"),(0,a.yg)("p",null,"This guide will provide you with all the information you need to get started with KNDP CLI, including:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Basic Usage: Learn the fundamental commands and options available in KNDP CLI."),(0,a.yg)("li",{parentName:"ul"},"Installation: Install KNDP CLI on your system quickly and easily."),(0,a.yg)("li",{parentName:"ul"},"Uninstallation: Remove KNDP CLI from your system if you no longer need it.")),(0,a.yg)("p",null,"Let's dive in! \ud83c\udfca\u200d\u2640\ufe0f"),(0,a.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.yg)("p",null,"Here's the basic syntax for using KNDP CLI:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"kndp [options] \n\nOptions:\n- `help`, `-h`: Display a list of available commands and options. \u2753\n- `install`, `-i`: Install KNDP platform on your system.\n- `uninstall`, `-u`: Uninstall KNDP platform from your system.\n- `upgrade`: upgrade KNDP platform.\n\n")),(0,a.yg)("p",null,"We encourage you to explore and experiment with KNDP CLI to discover all its capabilities. \ud83e\uddd1\u200d\ud83d\udcbb"))}p.isMDXComponent=!0}}]);