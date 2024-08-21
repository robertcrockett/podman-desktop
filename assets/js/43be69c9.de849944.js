"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86661],{48168:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var c=n(24246),t=n(71670);const s={},r="Interface: QuickPickItem",d={id:"interfaces/QuickPickItem",title:"Interface: QuickPickItem",description:"Represents an item that can be selected from",source:"@site/api/interfaces/QuickPickItem.md",sourceDirName:"interfaces",slug:"/interfaces/QuickPickItem",permalink:"/api/interfaces/QuickPickItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"QuickInputButton",permalink:"/api/interfaces/QuickInputButton"},next:{title:"QuickPickOptions",permalink:"/api/interfaces/QuickPickOptions"}},a={},o=[{value:"Properties",id:"properties",level:2},{value:"alwaysShow?",id:"alwaysshow",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"buttons?",id:"buttons",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"description?",id:"description",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"detail?",id:"detail",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"kind?",id:"kind",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"label",id:"label",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"picked?",id:"picked",level:3},{value:"See",id:"see",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.header,{children:(0,c.jsx)(i.h1,{id:"interface-quickpickitem",children:"Interface: QuickPickItem"})}),"\n",(0,c.jsx)(i.p,{children:"Represents an item that can be selected from\na list of items."}),"\n",(0,c.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(i.h3,{id:"alwaysshow",children:"alwaysShow?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"alwaysShow"}),": ",(0,c.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(i.p,{children:"Always show this item."}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/robertcrockett/podman-desktop/blob/69c3736ea7ce2aecc3206accc1e9cd8e844e9667/packages/extension-api/src/extension-api.d.ts#L1329",children:"packages/extension-api/src/extension-api.d.ts:1329"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"buttons",children:"buttons?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"buttons"}),": readonly ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickInputButton",children:(0,c.jsx)(i.code,{children:"QuickInputButton"})}),"[]"]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["Optional buttons that will be rendered on this particular item. These buttons will trigger\nan QuickPickItemButtonEvent when clicked. Buttons are only rendered when using a quickpick\ncreated by the window.createQuickPick createQuickPick() API. Buttons are not rendered when using\nthe ",(0,c.jsx)(i.a,{href:"/api/namespaces/window/functions/showQuickPick",children:"showQuickPick()"})," API."]}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/robertcrockett/podman-desktop/blob/69c3736ea7ce2aecc3206accc1e9cd8e844e9667/packages/extension-api/src/extension-api.d.ts#L1339",children:"packages/extension-api/src/extension-api.d.ts:1339"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"description",children:"description?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"description"}),": ",(0,c.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["A human-readable string which is rendered less prominent in the same line. Supports rendering of\nThemeIcon theme icons via the ",(0,c.jsx)(i.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/robertcrockett/podman-desktop/blob/69c3736ea7ce2aecc3206accc1e9cd8e844e9667/packages/extension-api/src/extension-api.d.ts#L1301",children:"packages/extension-api/src/extension-api.d.ts:1301"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"detail",children:"detail?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"detail"}),": ",(0,c.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["A human-readable string which is rendered less prominent in a separate line. Supports rendering of\nThemeIcon theme icons via the ",(0,c.jsx)(i.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/robertcrockett/podman-desktop/blob/69c3736ea7ce2aecc3206accc1e9cd8e844e9667/packages/extension-api/src/extension-api.d.ts#L1309",children:"packages/extension-api/src/extension-api.d.ts:1309"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"kind",children:"kind?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"kind"}),": ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind",children:(0,c.jsx)(i.code,{children:"QuickPickItemKind"})})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["The kind of QuickPickItem that will determine how this item is rendered in the quick pick. When not specified,\nthe default is ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#default",children:"QuickPickItemKind.Default"}),"."]}),"\n",(0,c.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/robertcrockett/podman-desktop/blob/69c3736ea7ce2aecc3206accc1e9cd8e844e9667/packages/extension-api/src/extension-api.d.ts#L1293",children:"packages/extension-api/src/extension-api.d.ts:1293"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"label",children:"label"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"label"}),": ",(0,c.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["A human-readable string which is rendered prominent. Supports rendering of ThemeIcon theme icons via\nthe ",(0,c.jsx)(i.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,c.jsx)(i.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/robertcrockett/podman-desktop/blob/69c3736ea7ce2aecc3206accc1e9cd8e844e9667/packages/extension-api/src/extension-api.d.ts#L1287",children:"packages/extension-api/src/extension-api.d.ts:1287"})}),"\n",(0,c.jsx)(i.hr,{}),"\n",(0,c.jsx)(i.h3,{id:"picked",children:"picked?"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"optional"})," ",(0,c.jsx)(i.strong,{children:"picked"}),": ",(0,c.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["Optional flag indicating if this item is picked initially. This is only honored when using\nthe ",(0,c.jsx)(i.a,{href:"/api/namespaces/window/functions/showQuickPick",children:"showQuickPick()"})," API. To do the same thing with\nthe window.createQuickPick createQuickPick() API, simply set the QuickPick.selectedItems\nto the items you want picked initially.\n(",(0,c.jsx)(i.em,{children:"Note:"})," This is only honored when the picker allows multiple selections.)"]}),"\n",(0,c.jsx)(i.h4,{id:"see",children:"See"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickOptions#canpickmany",children:"QuickPickOptions.canPickMany"})}),"\n",(0,c.jsxs)(i.p,{children:["Note: this property is ignored when ",(0,c.jsx)(i.a,{href:"/api/interfaces/QuickPickItem#kind",children:"kind"})," is set to ",(0,c.jsx)(i.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,c.jsx)(i.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/robertcrockett/podman-desktop/blob/69c3736ea7ce2aecc3206accc1e9cd8e844e9667/packages/extension-api/src/extension-api.d.ts#L1322",children:"packages/extension-api/src/extension-api.d.ts:1322"})})]})}function l(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},71670:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>r});var c=n(27378);const t={},s=c.createContext(t);function r(e){const i=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(s.Provider,{value:i},e.children)}}}]);