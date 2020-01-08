import React, { Component } from "react";
import styled from 'styled-components';
import { TimelineLite} from "gsap/all";
import { dataArray } from "../data";

const Card = styled.div`
  opacity: 0;
  visibility: hidden;
`
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
		this.tl.staggerTo( this.cards , 0.5, { autoAlpha: 1, y: -20 }, 0.1);
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
				
        {// map through the elements
        dataArray.map((element, index) => (
          <Card
            key={element.id}
            innerRef={div => this.cards[index] = div}
          >
            <div>
              <div>
                <div>
                  <img
                    src="https://via.placeholder.com/64"
                    alt="Generic placeholder"
                  />
                  <div>
                    <h5>{element.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </>
    );
	}
}

export default MultipleElements;
