import React, { Component } from "react"
import Image from "../components/image"
import Button from '../components/Button'
import { TimelineLite } from "gsap/all"

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
          <Button onClick={() => this.animation.play()}>Play</Button>
          <Button onClick={() => this.animation.pause()}>Pause</Button>
          <Button onClick={() => this.animation.reverse()}>Reverse</Button>
          <Button onClick={() => this.animation.restart()}>Restart</Button>
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