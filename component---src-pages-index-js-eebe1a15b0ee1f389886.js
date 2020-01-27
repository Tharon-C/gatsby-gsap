(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),r=t("Bl7J"),l=t("vrFN"),m=t("uoQ+"),i=t.n(m),s=t("er+3");n.default=function(){return o.a.createElement(r.a,null,o.a.createElement(l.a,{title:"Home"}),o.a.createElement("h1",{style:{marginBottom:"8px"}},"Using GSAP with Gatsby and Styled Components!"),o.a.createElement("h2",null,"Part one of..."),o.a.createElement("p",null,"Today we are looking at what GSAP (Green Sock Animation Plugin) is how to use it with React, specifically Gatsby, and some basic concepts for getting started with your own animations."),o.a.createElement("h3",null,"What is GSAP?"),o.a.createElement("a",{href:"https://greensock.com/gsap/",target:"blank"},"Green Sock Website"),o.a.createElement(i.a,{component:"pre",className:"language-js"},'\n        const myElement = document.getElementById("my-element");\n        TweenLite.to(myElement, 1, {width: 100, backgroundColor: "red"});\n      '),o.a.createElement("h3",{style:{marginTop:"50px"}},"The React Way"),o.a.createElement(i.a,{component:"pre",className:"language-js"},"\n        class MyComponent extends Component {\n          componentDidMount(){\n            TweenLite.to(this.myElement, 1, {x: 100, y: 100});\n          }\n\n          render(){\n            return <div ref={div => this.myElement = div} />;\n          }\n        }\n      "),o.a.createElement("h3",{style:{marginTop:"50px"}},"Controlling Animations"),o.a.createElement(i.a,{component:"pre",className:"language-js"},"\n        class MyComponent extends Component {\n          constructor(props){\n            super(props);\n            // reference to the DOM node\n            this.myElement = null;\n            // reference to the animation\n            this.myTween = new TimelineLite({paused: true});\n          }\n\n          componentDidMount(){\n            this.myTween\n              .to(this.myElement, 0.5, {x: 100})\n              .to(this.myElement, 0.5, {y: 100, rotation: 180});\n          }\n\n          render(){\n            return <div ref={div => this.myElement = div} />;\n          }\n        }\n      "),o.a.createElement("h3",{style:{marginTop:"50px"}},"Gatsby Gotcha"),o.a.createElement("p",null,"Contrary to many examples online, make sure to import from gasp module root directory"),o.a.createElement(i.a,{component:"pre",className:"language-js"},'\n        import { TimelineLite} from "gsap" // Good!\n        import { TimelineLite} from "gsap/all" // Bad! Will work fine on local dev server but will break when compiled to static site.\n      '),o.a.createElement(s.a,{to:"/first-example/"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-eebe1a15b0ee1f389886.js.map