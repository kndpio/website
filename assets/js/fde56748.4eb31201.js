"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22],{4755:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>g});var t=i(8168),l=i(6540),a=i(5680),s=i(2355),o=i(4586);function r(){const{siteConfig:{customFields:e}}=(0,o.A)();return l.createElement(s.A,{language:"bash"},`VERSION="${e.version}"\nARCH="linux-amd64"\ncurl -Lo ./kndp.tar.gz "https://github.com/kndpio/cli/releases/download/$VERSION/kndp-$VERSION-$ARCH.tar.gz"; tar -xf ./kndp.tar.gz; rm ./kndp.tar.gz\nsudo mv ./kndp /usr/local/bin/kndp`)}const d={type:"overview",title:"CLI Installation",sidebar_label:"Installation",sidebar_position:1,pagination_next:null,pagination_prev:null},u="Install the KNDP command-line",p={unversionedId:"cli/installation",id:"cli/installation",title:"CLI Installation",description:"Prerequisites",source:"@site/docs/cli/installation.mdx",sourceDirName:"cli",slug:"/cli/installation",permalink:"/docs/cli/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{type:"overview",title:"CLI Installation",sidebar_label:"Installation",sidebar_position:1,pagination_next:null,pagination_prev:null},sidebar:"myAutogeneratedSidebar"},c={},g=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing from GitHub Releases",id:"installing-from-github-releases",level:3},{value:"Verify installation",id:"verify-installation",level:3}],m={toc:g},b="wrapper";function y(e){let{components:n,...i}=e;return(0,a.yg)(b,(0,t.A)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"install-the-kndp-command-line"},"Install the KNDP command-line"),(0,a.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Linux-based operating system. This script is designed for Linux-based operating systems, specifically tested on Ubuntu."),(0,a.yg)("li",{parentName:"ol"},"Internet access for package downloads."),(0,a.yg)("li",{parentName:"ol"},"Kubernetes engine installed locally, supported: KinD, k3s, k3d")),(0,a.yg)("h3",{id:"installing-from-github-releases"},"Installing from GitHub Releases"),(0,a.yg)("p",null,"Install the latest version of the KNDP command-line via shell script by downloading the install script from KNDP GitHub Releases.\nDownloading packages requires both the version and CPU architecture (linux-amd64)."),(0,a.yg)(r,{mdxType:"RenderCodeblock"}),(0,a.yg)("h3",{id:"verify-installation"},"Verify installation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"kndp --version\n")))}y.isMDXComponent=!0}}]);