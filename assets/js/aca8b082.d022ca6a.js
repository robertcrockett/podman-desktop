"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95576],{4342:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(62540),o=i(43023);const s={title:"Configuration",description:"Podman Desktop configuration reference",tags:["podman-desktop","extension"],keywords:["podman desktop","extension"]},a="Commands",r={id:"extensions/developing/config",title:"Configuration",description:"Podman Desktop configuration reference",source:"@site/docs/extensions/developing/config.md",sourceDirName:"extensions/developing",slug:"/extensions/developing/config",permalink:"/docs/extensions/developing/config",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/extensions/developing/config.md",tags:[{inline:!0,label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{inline:!0,label:"extension",permalink:"/docs/tags/extension"}],version:"current",frontMatter:{title:"Configuration",description:"Podman Desktop configuration reference",tags:["podman-desktop","extension"],keywords:["podman desktop","extension"]},sidebar:"mySidebar",previous:{title:"Commands",permalink:"/docs/extensions/developing/commands"},next:{title:"Menus",permalink:"/docs/extensions/developing/menu"}},c={},d=[{value:"Configuration details",id:"configuration-details",level:2},{value:"<code>package.json</code> Example",id:"packagejson-example",level:3},{value:"JSON Schema",id:"json-schema",level:3},{value:"Verification",id:"verification",level:3}];function l(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"commands",children:"Commands"})}),"\n",(0,t.jsx)(e.h2,{id:"configuration-details",children:"Configuration details"}),"\n",(0,t.jsx)(e.p,{children:"This section details the configurable settings introduced by the extension to enhance or modify its behavior. The settings allow users to customize aspects of the extension's functionality. For example a modified path to a binary, or a performance setting."}),"\n",(0,t.jsxs)(e.h3,{id:"packagejson-example",children:[(0,t.jsx)(e.code,{children:"package.json"})," Example"]}),"\n",(0,t.jsxs)(e.p,{children:["This example illustrates how configuration settings are structured within ",(0,t.jsx)(e.code,{children:"package.json"})," for the extension. It includes various settings related to the environment and hardware resources that the extension will manage or monitor."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "contributes": {\n    "configuration": {\n      "title": "Podman",\n      "properties": {\n        "podman.binary.path": {\n          "type": "string",\n          "format": "file",\n          "default": "",\n          "description": "Custom path to Podman binary (Default is blank)"\n        },\n        "podman.machine.cpus": {\n          "type": "number",\n          "format": "cpu",\n          "minimum": 1,\n          "default": "HOST_HALF_CPU_CORES",\n          "maximum": "HOST_TOTAL_CPU",\n          "scope": "ContainerConnection",\n          "description": "CPU(s)"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"And within the TypeScript code, you can retrieve as well as use the configurations as so:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"// Get configuration for this connection\nconst containerConfiguration = extensionApi.configuration.getConfiguration('podman', containerProviderConnection);\n\n// Set a value\nawait containerConfiguration.update('machine.cpus', machineInfo.cpus);\n\n// Get a value\nawait containerConfiguration.get('machine.cpus');\n\n// Has a value\nawait containerConfiguration.has('machine.cpus');\n"})}),"\n",(0,t.jsx)(e.h3,{id:"json-schema",children:"JSON Schema"}),"\n",(0,t.jsxs)(e.p,{children:["Within the schema, you may add any type of value such as ",(0,t.jsx)(e.code,{children:'"foo":"bar"'})," which can be retrieved similar to the above TypeScript example."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "contributes": {\n    "configuration": {\n      "title": "string",\n      "properties": {\n        "string": {\n          "type": "string",\n          "default": "integer if type is integer, string if type is string, etc.",\n          "format": "string",\n          "minimum": "string or int",\n          "maximum": "string or int",\n          "description": "string",\n          "scope": "string or array, ex. [\'DEFAULT\', \'ONBOARDING\']",\n          "hidden": "boolean",\n          "placeholder": "string",\n          "markdownDescription": "string",\n          "readonly": "boolean",\n          "enum": "array",\n          "step": "number",\n          "when": "string"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"verification",children:"Verification"}),"\n",(0,t.jsx)(e.p,{children:"To verify that your commands are working as expected:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Adjust the configuration settings within package.json"}),"\n",(0,t.jsx)(e.li,{children:"Restart the extension or Podman Desktop"}),"\n",(0,t.jsx)(e.li,{children:"Verify the change within the Settings page."}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},43023:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>r});var t=i(63696);const o={},s=t.createContext(o);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);