"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93089],{8787:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(27378);var a=n(40624),i=n(50353),r=n(88676),o=n(75484),s=n(95988),l=n(20013),d=n(60505),c=n(2134),g=n(7092),u=n(84267),p=n(24246);function m(e){const t=(0,u.C)(e);return(0,p.jsx)(g.Z,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.Z)(),{blogDescription:a,blogTitle:o,permalink:s}=t,l="/"===s?n:o;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.d,{title:l,description:a}),(0,p.jsx)(d.Z,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:a}=e;return(0,p.jsxs)(s.Z,{sidebar:a,children:[(0,p.jsx)(c.Z,{items:n}),(0,p.jsx)(l.Z,{metadata:t})]})}function f(e){return(0,p.jsxs)(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(m,{...e}),(0,p.jsx)(b,{...e})]})}},20013:(e,t,n)=>{n.d(t,{Z:()=>o});n(27378);var a=n(99213),i=n(14582),r=n(24246);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.Z,{permalink:n,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.Z,{permalink:o,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},2134:(e,t,n)=>{n.d(t,{Z:()=>o});n(27378);var a=n(70412),i=n(23952),r=n(24246);function o(e){let{items:t,component:n=i.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.n,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},84267:(e,t,n)=>{n.d(t,{C:()=>c,i:()=>g});var a=n(98948),i=n(50353),r=n(74909);var o=n(70412);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,n){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function c(e){const{siteConfig:t}=(0,i.Z)(),{withBaseUrl:n}=(0,a.C)(),{metadata:{blogDescription:r,blogTitle:o,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:o,title:c,description:g,lastUpdatedAt:u}=r,p=a.image??i.image,m=i.keywords??[],h=`${t.url}${r.permalink}`,b=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...d(p,n,c),...m?{keywords:m}:{}}}(e.content,t,n)))}}function g(){const e=function(){const e=(0,r.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,o.C)(),{siteConfig:c}=(0,i.Z)(),{withBaseUrl:g}=(0,a.C)(),{date:u,title:p,description:m,frontMatter:h,lastUpdatedAt:b}=n,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,Z=`${c.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":Z,mainEntityOfPage:Z,url:Z,headline:p,name:p,description:m,datePublished:u,...j?{dateModified:j}:{},...l(n.authors),...d(f,g,p),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},85978:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(10610),i=(n(27378),n(24246));function r(e){const t={...e};return t?.code?.length>2&&("$ "===t.code.substring(0,2)||"# "===t.code.substring(0,2)||"> "===t.code.substring(0,2))&&(t.code=t.code.substring(2)),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.Z,{...t})})}},35654:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(30537),i=n(9928),r=n(19374),o=n(92739),s=n(13067);a.vI.add(i.vnX,r.mRB);const l={...s.Z,Icon:o.G}}}]);