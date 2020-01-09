import React from 'react'
import PrismCode from 'react-prism'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from '../components/NextButton'
import SimpleTween from '../animations/SimpleTweenWithClass'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Basic Example</h1>
    <PrismCode component="pre" className="language-js">
      {`
       export default class SimpleTween extends Component {
        constructor(props) {
          super(props)
          // logo container
          this.imgRef = null
          // logo tween
          this.animation = new TimelineLite({ paused: true })
        }
      
        componentDidMount() {
          // create logo tween
          this.animation
            .to(this.imgRef, 2, { x: 500 })
            .to(this.imgRef, 2, { rotation: 360, transformOrigin: "center" })
        }
      
        render() {
          return (
            <>
              <div>
                <button onClick={() => this.animation.play()}>Play</button>
                <button onClick={() => this.animation.pause()}>Pause</button>
                <button onClick={() => this.animation.reverse()}>Reverse</button>
                <button onClick={() => this.animation.restart()}>Restart</button>
              </div>
      
              <div
                style={{ width: '200px', margin: '50px 0' }}
                ref={element => this.imgRef = element}
              >
                <Image />
              </div>
            </>
          )
        }
      }
      `}
    </PrismCode>
    <SimpleTween />
    <NextButton to="/second-example" />
  </Layout>
)

export default SecondPage
