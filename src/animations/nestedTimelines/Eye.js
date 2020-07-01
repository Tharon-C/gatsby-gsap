import React, { Component } from 'react'
import { TimelineMax } from 'gsap'

export default class Eyes extends Component {
  constructor(props) {
    super(props)
    this.imgRef = null
    this.animation = new TimelineMax()
  }

  componentDidMount() {
    this.animation
      .to(this.imgRef, 4, { scaleY: 1 })
      .to(this.imgRef, .2, { scaleY: .2 })
      .to(this.imgRef, .2, { scaleY: 1 })
      .to(this.imgRef, 7, { scaleY: 1 })
      .to(this.imgRef, .2, { scaleY: .2 })
      .to(this.imgRef, .2, { scaleY: 1 }).play().repeat(-1)
  }

  render() {
    return (
      <path { ...this.props } ref={ element => this.imgRef = element } className="LeftEye" />
    )
  }
};
