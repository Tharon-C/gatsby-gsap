import React, { Component } from "react"
import Image from "./image"
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
      .to(this.imgRef, 2, { rotation: 360, transformOrigin: "center" }).play()
  }

  render() {
    return (
      <>
        <div>
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