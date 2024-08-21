"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76518],{79961:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=s(24246),t=s(71670);const o={},r="Function: getSession()",c={id:"namespaces/authentication/functions/getSession",title:"Function: getSession()",description:"getSession(providerId, scopes, options)",source:"@site/api/namespaces/authentication/functions/getSession.md",sourceDirName:"namespaces/authentication/functions",slug:"/namespaces/authentication/functions/getSession",permalink:"/api/namespaces/authentication/functions/getSession",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"authentication",permalink:"/api/namespaces/authentication/"},next:{title:"onDidChangeSessions",permalink:"/api/namespaces/authentication/functions/onDidChangeSessions"}},d={},a=[{value:"getSession(providerId, scopes, options)",id:"getsessionproviderid-scopes-options",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Defined in",id:"defined-in",level:3},{value:"getSession(providerId, scopes, options)",id:"getsessionproviderid-scopes-options-1",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Defined in",id:"defined-in-1",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"function-getsession",children:"Function: getSession()"})}),"\n",(0,i.jsx)(n.h2,{id:"getsessionproviderid-scopes-options",children:"getSession(providerId, scopes, options)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getSession"}),"(",(0,i.jsx)(n.code,{children:"providerId"}),", ",(0,i.jsx)(n.code,{children:"scopes"}),", ",(0,i.jsx)(n.code,{children:"options"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(n.code,{children:"AuthenticationSession"})})," | ",(0,i.jsx)(n.code,{children:"undefined"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Get an authentication session matching the desired scopes. Rejects if a provider with providerId is not\nregistered, or if the user does not consent to sharing authentication information with\nthe extension. If there are multiple sessions with the same scopes, the user will be shown a\nquickpick to select which account they would like to use."}),"\n",(0,i.jsx)(n.p,{children:"Currently, there are only two authentication providers that are contributed from built in extensions\nto VS Code that implement GitHub and Microsoft authentication: their providerId's are 'github' and 'microsoft'."}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"providerId"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"The id of the provider to use"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"scopes"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(n.p,{children:"A list of scopes representing the permissions requested. These are dependent on the authentication provider"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"options"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationGetSessionOptions",children:(0,i.jsx)(n.code,{children:"AuthenticationGetSessionOptions"})})," & ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"#GetSessionOptions",children:"getSessionOptions"})," to use"]}),"\n",(0,i.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(n.code,{children:"AuthenticationSession"})})," | ",(0,i.jsx)(n.code,{children:"undefined"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves to an authentication session"}),"\n",(0,i.jsx)(n.h3,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/robertcrockett/podman-desktop/blob/69c3736ea7ce2aecc3206accc1e9cd8e844e9667/packages/extension-api/src/extension-api.d.ts#L3915",children:"packages/extension-api/src/extension-api.d.ts:3915"})}),"\n",(0,i.jsx)(n.h2,{id:"getsessionproviderid-scopes-options-1",children:"getSession(providerId, scopes, options)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getSession"}),"(",(0,i.jsx)(n.code,{children:"providerId"}),", ",(0,i.jsx)(n.code,{children:"scopes"}),", ",(0,i.jsx)(n.code,{children:"options"}),"?): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(n.code,{children:"AuthenticationSession"})})," | ",(0,i.jsx)(n.code,{children:"undefined"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Get an authentication session matching the desired scopes. Rejects if a provider with providerId is not\nregistered, or if the user does not consent to sharing authentication information with\nthe extension. If there are multiple sessions with the same scopes, the user will be shown a\nquickpick to select which account they would like to use."}),"\n",(0,i.jsx)(n.p,{children:"Currently, there are only two authentication providers that are contributed from built in extensions\nto VS Code that implement GitHub and Microsoft authentication: their providerId's are 'github' and 'microsoft'."}),"\n",(0,i.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"providerId"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.p,{children:"The id of the provider to use"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"scopes"}),": ",(0,i.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,i.jsx)(n.p,{children:"A list of scopes representing the permissions requested. These are dependent on the authentication provider"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.strong,{children:"options?"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationGetSessionOptions",children:(0,i.jsx)(n.code,{children:"AuthenticationGetSessionOptions"})})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"#GetSessionOptions",children:"getSessionOptions"})," to use"]}),"\n",(0,i.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,i.jsx)(n.code,{children:"AuthenticationSession"})})," | ",(0,i.jsx)(n.code,{children:"undefined"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"A promise that resolves to an authentication session if available, or undefined if there are no sessions"}),"\n",(0,i.jsx)(n.h3,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/robertcrockett/podman-desktop/blob/69c3736ea7ce2aecc3206accc1e9cd8e844e9667/packages/extension-api/src/extension-api.d.ts#L3934",children:"packages/extension-api/src/extension-api.d.ts:3934"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(27378);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);