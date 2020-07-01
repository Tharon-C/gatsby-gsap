import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineMax, Power0 } from "gsap";
import clouds from '../../assets/snow.svg';

const Wrapper = styled.div({
    overflow: 'hidden',
    width: '100%'
});

const CloudImg = styled.img({
  height: "800px",
  width: "100%",
  maxWidth: "none",
  margin: 0,
});

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
`;

class Clouds extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.clouds = null;
    this.wrapper = null;
    // reference to the animation
    this.tween = null;
  }
  componentDidMount() {
    const height = this.wrapper.offsetHeight;
    this.tween = new TimelineMax({repeat: -1})
    .fromTo(
      this.clouds, 50,
      { y: - height, ease: Power0.easeNone },
      { y: 0, ease: Power0.easeNone })
    .play();
  }
  render() {
    return (
      <Wrapper {...this.props} ref={wrapper => this.wrapper = wrapper}>
        <CloudImg ref={clouds => this.clouds = clouds} src={clouds} />
        <Overlay />
      </Wrapper>
    )
  }
}

export default Clouds
