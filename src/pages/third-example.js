import React from 'react'
import PrismCode from 'react-prism'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from '../components/NextButton'
import AnimatingLists from '../animations/AnimatingLists'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Mapping Over Elements</h1>
    <PrismCode component="pre" className="language-js">
      {`
       class MultipleElements extends Component {

        constructor(props){
          super(props);
          // cards, elements tha will be used in the tween
          this.cards = [];
          // the timeline instance
          this.tl = new TimelineLite({ paused: true });
          this.cardsTween = null;
        }
      
        componentDidMount(){
          this.tl.staggerTo( this.cards , 0.5, { autoAlpha: 1, y: 0 }, 0.1);
        }
      
        render(){
          this.tl.kill().clear().pause(0);
          return (
            <>
              <div>
                <button onClick={() =>  this.tl.play()}>Play</button>
                <button onClick={() => this.tl.pause()}>Pause</button>
                <button onClick={() => this.tl.reverse()}>Reverse</button>
                <button onClick={() => this.tl.restart()}>Restart</button>
              </div>
              <CardList>
              {
              dataArray.map((element, index) => (
                <Card
                  key={element.id}
                  ref={div => this.cards[index] = div}
                >
                  <Avatar
                    src="https://via.placeholder.com/64"
                    alt="Generic placeholder"
                  />
                  <Title>{element.name}</Title>
                </Card>
              ))}
              </CardList>
            </>
          );
        }
      }
      
      export default MultipleElements;
      
      `}
    </PrismCode>
    <AnimatingLists />
    <NextButton to="/fourth-example" />
  </Layout>
)

export default ThirdPage
