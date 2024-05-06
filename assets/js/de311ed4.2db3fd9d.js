"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71625],{79790:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(24246),l=s(71670);const r={title:"Setting up and running a Kubernetes cluster locally with Podman Desktop",description:"Setting up and running a Kubernetes cluster locally with Podman Desktop",slug:"running-a-local-kubernetes-cluster-with-podman-desktop",authors:["themr0c"],tags:["podman-desktop","story","kubernetes","kind"],hide_table_of_contents:!1},t="Setting up and running a Kubernetes cluster locally with Podman Desktop",o={permalink:"/blog/running-a-local-kubernetes-cluster-with-podman-desktop",source:"@site/blog/2023-04-19-running-a-local-kubernetes-cluster-with-podman-desktop.md",title:"Setting up and running a Kubernetes cluster locally with Podman Desktop",description:"Setting up and running a Kubernetes cluster locally with Podman Desktop",date:"2023-04-19T00:00:00.000Z",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"story",permalink:"/blog/tags/story"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kind",permalink:"/blog/tags/kind"}],readingTime:8.86,hasTruncateMarker:!0,authors:[{name:"Fabrice Flore-Thebault",title:"Technical writer",url:"https://github.com/themr0c",imageURL:"https://github.com/themr0c.png",key:"themr0c"}],frontMatter:{title:"Setting up and running a Kubernetes cluster locally with Podman Desktop",description:"Setting up and running a Kubernetes cluster locally with Podman Desktop",slug:"running-a-local-kubernetes-cluster-with-podman-desktop",authors:["themr0c"],tags:["podman-desktop","story","kubernetes","kind"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Release Notes - Podman Desktop 0.15",permalink:"/blog/podman-desktop-release-0.15"},nextItem:{title:"Release Notes - Podman Desktop 0.14",permalink:"/blog/podman-desktop-release-0.14"}},d={authorsImageUrls:[void 0]},c=[{value:"Installing Podman Desktop",id:"installing-podman-desktop",level:2},{value:"Installing and initializing your container engine: Podman",id:"installing-and-initializing-your-container-engine-podman",level:2},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Installing and starting your local Kubernetes provider: Kind",id:"installing-and-starting-your-local-kubernetes-provider-kind",level:2},{value:"Verification",id:"verification-1",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"Starting the Redis leader",id:"starting-the-redis-leader",level:2},{value:"Procedure",id:"procedure-1",level:4},{value:"Verification",id:"verification-2",level:4},{value:"Starting the Redis followers",id:"starting-the-redis-followers",level:2},{value:"Procedure",id:"procedure-2",level:4},{value:"Verification",id:"verification-3",level:4},{value:"Starting the default frontend",id:"starting-the-default-frontend",level:2},{value:"Procedure",id:"procedure-3",level:4},{value:"Verification",id:"verification-4",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{Icon:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In this blog post you will learn to use Podman Desktop to run the ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tutorials/stateless-application/guestbook/",children:"Kubernetes documentation example: Deploying PHP Guestbook application with Redis"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"On the agenda:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Installing Podman Desktop."}),"\n",(0,i.jsx)(n.li,{children:"Installing and initializing your container engine: Podman."}),"\n",(0,i.jsx)(n.li,{children:"Installing and starting your local Kubernetes provider: Kind."}),"\n",(0,i.jsx)(n.li,{children:"Starting the Redis leader."}),"\n",(0,i.jsx)(n.li,{children:"Starting and scaling the Redis followers."}),"\n",(0,i.jsx)(n.li,{children:"Starting and exposing the Guestbook frontend."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installing-podman-desktop",children:"Installing Podman Desktop"}),"\n",(0,i.jsx)(n.p,{children:"You need Podman Desktop."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.a,{href:"/docs/installation",children:"Podman Desktop installation documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on your platform name: ",(0,i.jsx)(n.a,{href:"/docs/installation/windows-install",children:"Windows"}),", ",(0,i.jsx)(n.a,{href:"/docs/installation/macos-install",children:"macOS"}),", or ",(0,i.jsx)(n.a,{href:"/docs/installation/linux-install",children:"Linux"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Follow the instructions. Stick to the default installation method."}),"\n",(0,i.jsxs)(n.li,{children:["Start ",(0,i.jsx)(n.strong,{children:"Podman Desktop"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"At this point, you have a graphical user interface to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Install Podman and Kind."}),"\n",(0,i.jsx)(n.li,{children:"Control and work with your container engines and Kubernetes clusters."}),"\n",(0,i.jsx)(n.li,{children:"Run your application on your container engine and migrate it to Kubernetes."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installing-and-initializing-your-container-engine-podman",children:"Installing and initializing your container engine: Podman"}),"\n",(0,i.jsx)(n.p,{children:"Podman Desktop can control various container engines, such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Docker"}),"\n",(0,i.jsx)(n.li,{children:"Lima"}),"\n",(0,i.jsx)(n.li,{children:"Podman"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Consider installing the Podman container engine for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added security"}),"\n",(0,i.jsx)(n.li,{children:"No daemon"}),"\n",(0,i.jsx)(n.li,{children:"Open source"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Containers are a Linux technology."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On Linux, you can install Podman natively.\nSee: ",(0,i.jsx)(n.a,{href:"https://podman.io/docs/installation#installing-on-linux",children:"Installing Podman on Linux"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"On macOS and Windows, Podman requires to run in a Linux virtual machine: the Podman machine.\nUse Podman Desktop to install Podman and initialize your Podman machine:"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open Podman Desktop ",(0,i.jsx)(n.strong,{children:"Dashboard"})]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Dashboard"})," displays ",(0,i.jsx)(n.em,{children:"Podman Desktop was not able to find an installation of Podman"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Install"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Podman Desktop checks the prerequisites to install Podman Engine. When necessary, follow the instructions to install prerequisites."}),"\n",(0,i.jsxs)(n.li,{children:["Podman displays the dialog: ",(0,i.jsx)(n.em,{children:"Podman is not installed on this system, would you like to install Podman?"}),". Click on ",(0,i.jsx)(n.strong,{children:"Yes"})," to install Podman."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Initialize and start"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Dashboard"})," displays ",(0,i.jsx)(n.em,{children:"Podman is running"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Podman is running",src:s(65986).Z+"",width:"611",height:"219"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"At this point, you can start working with containers."}),"\n",(0,i.jsx)(n.h2,{id:"installing-and-starting-your-local-kubernetes-provider-kind",children:"Installing and starting your local Kubernetes provider: Kind"}),"\n",(0,i.jsx)(n.p,{children:"You want to deploy your application to a local Kubernetes cluster."}),"\n",(0,i.jsx)(n.p,{children:"Podman Desktop can help you run Kind-powered local Kubernetes clusters on a container engine, such as Podman."}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop helps you ",(0,i.jsxs)(n.a,{href:"/docs/kind/installing",children:["installing the ",(0,i.jsx)(n.code,{children:"kind"})," CLI"]}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the status bar, click on ",(0,i.jsx)(n.strong,{children:"Kind"}),", and follow the prompts."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"kind"})," CLI is available, the status bar does not display ",(0,i.jsx)(n.strong,{children:"Kind"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On Windows, ",(0,i.jsx)(n.a,{href:"/docs/kind/configuring-podman-for-kind-on-windows",children:"configure Podman in rootful mode"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ podman system connection default podman-machine-default-root\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)("img",{src:"/img/podman-icon.png",alt:"Podman icon",style:{height:"1.5em",display:"inline"}})," Podman"]})," tile, click on the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(r,{icon:"fa-solid fa-repeat",size:"lg"})})," icon to restart the Podman container engine."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)("img",{src:"/img/kind-icon.png",alt:"Kind icon",style:{height:"1.5em",display:"inline"}})," Kind"]})," tile, click on the ",(0,i.jsx)(n.strong,{children:"Create new"})," button."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": enter ",(0,i.jsx)(n.code,{children:"kind-cluster"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Provider Type"}),": select ",(0,i.jsx)(n.code,{children:"podman"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"HTTP Port"}),": select ",(0,i.jsx)(n.code,{children:"9090"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"HTTPS Port"}),": select ",(0,i.jsx)(n.code,{children:"9443"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Setup an ingress controller"}),": ",(0,i.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Create"})," button.\n",(0,i.jsx)(n.img,{alt:"Create a Kind cluster screen",src:s(76893).Z+"",width:"793",height:"711"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After successful creation, click on the ",(0,i.jsx)(n.strong,{children:"Go back to resources"})," button"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"verification-1",children:"Verification"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]})," your Kind cluster is running/"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Kind cluster is running",src:s(30712).Z+"",width:"452",height:"189"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Podman Desktop"})," tray, open the ",(0,i.jsx)(n.strong,{children:"Kubernetes"})," menu: you can set the context to your Kind cluster: ",(0,i.jsx)(n.code,{children:"kind-kind-cluster"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Kind cluster Kubernetes context in the tray",src:s(10141).Z+"",width:"273",height:"309"})}),"\n",(0,i.jsx)(n.p,{children:"At this point, you can start working with containers, and your local Kubernetes cluster."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/kind/creating-a-kind-cluster",children:"Creating a local Kind-powered Kubernetes cluster"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"starting-the-redis-leader",children:"Starting the Redis leader"}),"\n",(0,i.jsx)(n.p,{children:"The Guestbook application uses Redis to store its data."}),"\n",(0,i.jsxs)(n.p,{children:["With Podman Desktop, you can prepare the Redis leader image and container on your local container engine, and deploy the results to a Kubernetes pod and service.\nThis is functionally equal to the ",(0,i.jsx)(n.code,{children:"redis-leader"})," deployment that the Kubernetes example propose."]}),"\n",(0,i.jsx)(n.h4,{id:"procedure-1",children:"Procedure"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,i.jsx)(r,{icon:"fa-solid fa-arrow-circle-down",size:"lg"})," Pull an image"]}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Image to Pull"}),": enter ",(0,i.jsx)(n.code,{children:"docker.io/redis:6.0.5"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Pull image"})," to pull the image to your container engine local image registry."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Done"})," to get back to the images list."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cloud",size:"lg"})," Search images"]}),": enter ",(0,i.jsx)(n.code,{children:"redis:6.0.5"})," to find the image."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(r,{icon:"fa-solid fa-play",size:"lg"})})," to open the ",(0,i.jsx)(n.strong,{children:"Create a container from image"})," dialog."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Container name"}),": enter ",(0,i.jsx)(n.code,{children:"leader"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["Local port for ",(0,i.jsx)(n.code,{children:"6379/tcp"})]}),": ",(0,i.jsx)(n.code,{children:"6379"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-play",size:"lg"})," Start Container"]})," to start the container in your container engine."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"]}),": enter ",(0,i.jsx)(n.code,{children:"leader"})," to find the running container."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(r,{icon:"fa-solid fa-stop",size:"lg"})})," to stop the container, and leave the ",(0,i.jsx)(n.code,{children:"6379"})," port available for the Redis follower container."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,i.jsx)(r,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes"]})," to open the ",(0,i.jsx)(n.strong,{children:"Deploy generated pod to Kubernetes"})," screen."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pod Name"}),": enter ",(0,i.jsx)(n.code,{children:"redis-leader"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use Kubernetes Services"}),": select ",(0,i.jsxs)(n.strong,{children:["Replace ",(0,i.jsx)(n.code,{children:"hostPort"})," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,i.jsx)(n.code,{children:"hostPort"}),"."]})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Expose service locally using Kubernetes Ingress"}),": deselect ",(0,i.jsxs)(n.strong,{children:["Create a Kubernetes ingress to get access to the ports that this pod exposes, at the default ingress controller location. Example: on a default Kind cluster created with Podman Desktop: ",(0,i.jsx)(n.code,{children:"http://localhost:9090"}),". Requirements: your cluster has an ingress controller`"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes namespaces"}),": select ",(0,i.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"]}),".\n",(0,i.jsx)(n.img,{alt:"Deploy generated leader pod to Kubernetes screen",src:s(61781).Z+"",width:"1292",height:"968"})]}),"\n",(0,i.jsxs)(n.li,{children:["Wait for the pod to reach the state: ",(0,i.jsx)(n.strong,{children:"Phase: Running"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"verification-2",children:"Verification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cubes",size:"lg"})," Pods"]})," screen lists the running ",(0,i.jsx)(n.code,{children:"redis-leader"})," pod."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"leader pod is running",src:s(39272).Z+"",width:"684",height:"231"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"starting-the-redis-followers",children:"Starting the Redis followers"}),"\n",(0,i.jsx)(n.p,{children:"Although the Redis leader is a single Pod, you can make it highly available and meet traffic demands by adding a few Redis followers, or replicas."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"With Podman Desktop, you can prepare the Redis follower image and container on your local container engine, and deploy the results to Kubernetes pods and services."}),"\nThis is functionally equal to the ",(0,i.jsx)(n.code,{children:"redis-follower"})," deployment that the Kubernetes example propose."]}),"\n",(0,i.jsx)(n.h4,{id:"procedure-2",children:"Procedure"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,i.jsx)(r,{icon:"fa-solid fa-arrow-circle-down",size:"lg"})," Pull an image"]}),".","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Image to Pull"}),": enter ",(0,i.jsx)(n.code,{children:"gcr.io/google_samples/gb-redis-follower:v2"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Pull image"})," to pull the image to your container engine local image registry."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Done"})," to get back to the images list."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cloud",size:"lg"})," Search images"]}),": enter ",(0,i.jsx)(n.code,{children:"gb-redis-follower:v2"})," to find the image."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(r,{icon:"fa-solid fa-play",size:"lg"})})," to open the ",(0,i.jsx)(n.strong,{children:"Create a container from image"})," dialog.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Container name"}),": enter ",(0,i.jsx)(n.code,{children:"follower"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["Local port for ",(0,i.jsx)(n.code,{children:"6379/tcp"})]}),": ",(0,i.jsx)(n.code,{children:"6379"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-play",size:"lg"})," Start Container"]})," to start the container in your container engine."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"]}),": enter ",(0,i.jsx)(n.code,{children:"follower"})," to find the running container."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(r,{icon:"fa-solid fa-stop",size:"lg"})})," to stop the container: you do not need it to run in the container engine."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,i.jsx)(r,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes"]})," to open the ",(0,i.jsx)(n.strong,{children:"Deploy generated pod to Kubernetes"})," screen.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pod Name"}),": enter ",(0,i.jsx)(n.code,{children:"redis-follower"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use Kubernetes Services"}),": select ",(0,i.jsxs)(n.strong,{children:["Replace ",(0,i.jsx)(n.code,{children:"hostPort"})," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,i.jsx)(n.code,{children:"hostPort"}),"."]})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Expose service locally using Kubernetes Ingress"}),": deselect ",(0,i.jsxs)(n.strong,{children:["Create a Kubernetes ingress to get access to the ports that this pod exposes, at the default ingress controller location. Example: on a default Kind cluster created with Podman Desktop: ",(0,i.jsx)(n.code,{children:"http://localhost:9090"}),". Requirements: your cluster has an ingress controller`"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes namespaces"}),": select ",(0,i.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"]}),".\n",(0,i.jsx)(n.img,{alt:"Deploy generated follower pod to Kubernetes screen",src:s(18738).Z+"",width:"1292",height:"968"})]}),"\n",(0,i.jsxs)(n.li,{children:["Wait for the pod to reach the state: ",(0,i.jsx)(n.strong,{children:"Phase: Running"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["To add replicas, repeat the last step with another ",(0,i.jsx)(n.strong,{children:"Pod Name"})," value."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"verification-3",children:"Verification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cubes",size:"lg"})," Pods"]})," screen lists the running ",(0,i.jsx)(n.code,{children:"redis-follower"})," pods."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"follower pods are running",src:s(15740).Z+"",width:"668",height:"286"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"starting-the-default-frontend",children:"Starting the default frontend"}),"\n",(0,i.jsx)(n.p,{children:"Now that you have the Redis storage of your Guestbook up and running, start the Guestbook web servers.\nLike the Redis followers, deploy the frontend using Kubernetes pods and services."}),"\n",(0,i.jsx)(n.p,{children:"The Guestbook app uses a PHP frontend.\nIt is configured to communicate with either the Redis follower or leader Services, depending on whether the request is a read or a write.\nThe frontend exposes a JSON interface, and serves a jQuery-Ajax-based UX."}),"\n",(0,i.jsxs)(n.p,{children:["With Podman Desktop, you can prepare the Guestbook frontend image and container on your local container engine, and deploy the results to Kubernetes pods and services.\nThis is functionally equal to the ",(0,i.jsx)(n.code,{children:"frontend"})," deployment that the Kubernetes example propose."]}),"\n",(0,i.jsx)(n.h4,{id:"procedure-3",children:"Procedure"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,i.jsx)(r,{icon:"fa-solid fa-arrow-circle-down",size:"lg"})," Pull an image"]}),".","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Image to Pull"}),": enter ",(0,i.jsx)(n.code,{children:"gcr.io/google_samples/gb-frontend:v5"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Pull image"})," to pull the image to your container engine local image registry."]}),"\n",(0,i.jsx)(n.li,{children:"Wait for the pull to complete."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Done"})," to get back to the images list."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cloud",size:"lg"})," Search images"]}),": enter ",(0,i.jsx)(n.code,{children:"gb-frontend:v5"})," to find the image."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(r,{icon:"fa-solid fa-play",size:"lg"})})," to open the ",(0,i.jsx)(n.strong,{children:"Create a container from image"})," dialog.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Container name"}),": enter ",(0,i.jsx)(n.code,{children:"frontend"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["Local port for ",(0,i.jsx)(n.code,{children:"80/tcp"})]}),": ",(0,i.jsx)(n.code,{children:"9000"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-play",size:"lg"})," Start Container"]})," to start the container in your container engine."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"]}),": enter ",(0,i.jsx)(n.code,{children:"frontend"})," to find the running container."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(r,{icon:"fa-solid fa-stop",size:"lg"})})," to stop the container: you do not need it to run in the container engine."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,i.jsx)(r,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes"]})," to open the ",(0,i.jsx)(n.strong,{children:"Deploy generated pod to Kubernetes"})," screen.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pod Name"}),": enter ",(0,i.jsx)(n.code,{children:"frontend"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use Kubernetes Services"}),": select ",(0,i.jsxs)(n.strong,{children:["Replace ",(0,i.jsx)(n.code,{children:"hostPort"})," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,i.jsx)(n.code,{children:"hostPort"}),"."]})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Expose service locally using Kubernetes Ingress"}),": select ",(0,i.jsxs)(n.strong,{children:["Create a Kubernetes ingress to get access to the ports that this pod exposes, at the default ingress controller location. Example: on a default Kind cluster created with Podman Desktop: ",(0,i.jsx)(n.code,{children:"http://localhost:9090"}),". Requirements: your cluster has an ingress controller`"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes namespaces"}),": select ",(0,i.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"]}),".\n",(0,i.jsx)(n.img,{alt:"Deploy generated frontend pod to Kubernetes screen",src:s(67104).Z+"",width:"1292",height:"968"})]}),"\n",(0,i.jsxs)(n.li,{children:["Wait for the pod to reach the state: ",(0,i.jsx)(n.strong,{children:"Phase: Running"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Done"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"verification-4",children:"Verification"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(r,{icon:"fa-solid fa-cubes",size:"lg"})," Pods"]})," screen lists the running ",(0,i.jsx)(n.code,{children:"frontend"})," pod."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"frontend pod is running",src:s(99992).Z+"",width:"674",height:"222"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.code,{children:"http://localhost:9090"}),": the Guestbook application is running."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},76893:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/create-a-kind-cluster-341ca1312e2e05d63d82a93726825a05.png"},18738:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/deploy-generated-follower-pod-to-kubernetes-dd643e002a1dbf69e29ef7863f0774d8.png"},67104:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/deploy-generated-frontend-pod-to-kubernetes-cf7e13dbd73427575b2cf583e223df38.png"},61781:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/deploy-generated-leader-pod-to-kubernetes-e812812296742ec54cd822d0ba969c28.png"},15740:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/follower-pods-are-running-be90e0689f30209b0694469405ecd6a9.png"},99992:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/frontend-pod-is-running-f6f55d91d200f35629788d3c550ae463.png"},10141:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/kind-cluster-context-in-the-tray-5bb9338bb1437bbcf79bf50dd401400e.png"},30712:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/kind-cluster-is-running-e721d473aa52100d8179cbb3d06e0ef9.png"},39272:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/leader-pod-is-running-a8caa174a15c06b287dff81b08041f7c.png"},65986:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/podman-is-running-745db8684c4d0240922a5aeb63e517d3.png"},71670:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(27378);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);