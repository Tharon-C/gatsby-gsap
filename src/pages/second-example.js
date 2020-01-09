import React from "react"
import PrismCode from 'react-prism'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from '../components/NextButton'
import SimpleTween from '../animations/SimpleTweenWithHooks'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Basic Example With Hooks</h1>
    <PrismCode component="pre" className="language-js">
      {`
       export default () => {
        let imgRef = useRef(null);
      
        const [animation, setAnimation] = useState(null);
      
        useEffect(() => {
          let logoTween = new TimelineLite({ paused: true })
          setAnimation(
            logoTween
              .to(imgRef, 2, { x: 500 })
              .to(imgRef, 2, { rotation: 360, transformOrigin: "center" })
          );
        }, []);
      
        return (
          <>
            <div>
              <button onClick={() => animation.play()}>Play</button>
              <button onClick={() => animation.pause()}>Pause</button>
              <button onClick={() => animation.reverse()}>Reverse</button>
              <button onClick={() => animation.restart()}>Restart</button>
            </div>
            <div
              style={{ width: '200px', margin: '50px 0' }}
              ref={element => imgRef = element }
            >
              <Image />
            </div>
          </>
        );
      };
      `}
    </PrismCode>
    <SimpleTween />
    <NextButton to="/third-example" />
  </Layout>
)

export default SecondPage
