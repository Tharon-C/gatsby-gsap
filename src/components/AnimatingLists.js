import React, { Component } from "react"
import styled from 'styled-components'
import { TimelineLite} from "gsap/all"
import { dataArray } from "../data"

const CardList = styled.div`
  padding: 50px 0;
`
const Card = styled.div`
  transform: matrix(1, 0, 0, 1, 0, 20);
  opacity: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  margin-bottom: 8px;
  padding: 8px;
`
const Avatar = styled.img`
  margin: 0 16px 0 0;
`
const Title = styled.h2`
  font-size: 18px;
  margin: 0;
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
