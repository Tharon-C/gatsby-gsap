import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrismCode from 'react-prism'
import 'prismjs'
import 'prism-themes/themes/prism-atom-dark.css'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ marginBottom: "8px" }}>Using GSAP with Gatsby!</h1>
    <h2>Part one of... many?</h2>
    <p>Today we are looking at what GSAP (Green Sock Animation Plugin) is how to use it with React, specifically Gatsby, and some basic concepts for getting started with your own animations.</p>
    <h3>What is GSAP?</h3>
    <a href="https://greensock.com/gsap/" target="blank">Green Sock Website</a>
    <PrismCode component="pre" className="language-js">
      {`
        const myElement = document.getElementById("my-element");
        TweenLite.to(myElement, 1, {width: 100, backgroundColor: "red"});
      `}
    </PrismCode>
    <h3 style={{ marginTop: '50px' }}>The React Way</h3>
    <PrismCode component="pre" className="language-js">
      {`
        class MyComponent extends Component {
          componentDidMount(){
            TweenLite.to(this.myElement, 1, {x: 100, y: 100});
          }

          render(){
            return <div ref={div => this.myElement = div} />;
          }
        }
      `}
    </PrismCode>
    <h3 style={{ marginTop: '50px' }}>Controlling Animations</h3>
    <PrismCode component="pre" className="language-js">
      {`
        class MyComponent extends Component {
          constructor(props){
            super(props);
            // reference to the DOM node
            this.myElement = null;
            // reference to the animation
            this.myTween = new TimelineLite({paused: true});
          }

          componentDidMount(){
            this.myTween
              .to(this.myElement, 0.5, {x: 100})
              .to(this.myElement, 0.5, {y: 100, rotation: 180})
              .play();
          }

          render(){
            return <div ref={div => this.myElement = div} />;
          }
        }
      `}
    </PrismCode>
    <Link to="/first-example/">First Example</Link>
  </Layout>
)

export default IndexPage
