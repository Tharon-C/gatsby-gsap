import React, { Component } from 'react'
import { TimelineMax } from 'gsap'
import styled from 'styled-components'
import Face from './Face'
import Button from '../../components/Button'

const ArtBoard = styled.div`
  position: relative;
  height: 400px;
  width: 600px;
  background: cornflowerblue;
  overflow: hidden;
`

const PolarBear = styled.svg`
  position: absolute;
  bottom: 0;
  right: 50px;
  transform: translatey(100%);
`
const ButtonGroup = styled.div`
  margin-bottom: 16px;
`
export default class Animation extends Component {
  constructor(props) {
    super(props)
    this.bodyRef = null
    this.faceRef = null
    this.bodyAnimation = new TimelineMax({ paused: true })
    this.faceAnimation = new TimelineMax({ paused: true })

  }

  componentDidMount() {
    this.bodyAnimation
      .to(this.bodyRef, 2, {})
      .to(this.bodyRef, 2, { y: "0" })

    this.faceAnimation
      .to(this.faceRef, 7, { x: 0 })
      .to(this.faceRef, 1, { x: -12 })
      .to(this.faceRef, 3, { x: -12 })
      .to(this.faceRef, 1, { x: 0 }).repeat(-1)
  }

  play = () => {
    this.bodyAnimation.play()
    this.faceAnimation.play()
  }
  pause = () => {
    this.bodyAnimation.pause()
    this.faceAnimation.pause()
  }
  reverse = () => {
    this.bodyAnimation.reverse()
    this.faceAnimation.reverse()
  }
  restart = () => {
    this.bodyAnimation.restart()
    this.faceAnimation.restart()
  }

  render() {
    return (
      <>
        <ButtonGroup>
          <Button onClick={ this.play }>Play</Button>
          <Button onClick={this.pause }>Pause</Button>
          <Button onClick={ this.reverse }>Reverse</Button>
          <Button onClick={ this.restart }>Restart</Button>
        </ButtonGroup>
        <ArtBoard>
          <PolarBear ref={ element => this.bodyRef = element } width="183" viewBox="0 0 139 183" fill="none">
            <path className="Body" d="M138.579 182.952H0C3.92119 141.756 14.691 107.311 35.2069 90.6359C27.8231 82.8866 28.1023 72.1852 28.4052 60.5726C28.4671 58.2022 28.5299 55.7937 28.5288 53.3647C28.5286 26.2191 46.5215 4.21341 68.7175 4.2131C90.9138 4.21286 108.907 26.2187 108.907 53.3647C108.904 55.9386 108.981 58.4896 109.058 60.997C109.398 72.1817 109.712 82.4979 102.679 90.1035C123.537 106.533 134.574 141.271 138.579 182.952Z" fill="white"/>
            <path className="Belly" d="M24.7648 182.952H114.702C114.147 178.688 113.429 174.499 112.551 170.419C110.212 159.557 106.784 149.687 102.462 141.373C99.6901 136.04 96.5852 131.415 93.2249 127.596L90.7184 128.573L91.3642 125.59C90.9277 125.145 90.4873 124.713 90.0432 124.294L86.9132 126.609L88.6102 122.999C88.2082 122.652 87.8034 122.316 87.396 121.991L81.4172 126.019L84.9501 120.191C80.0079 116.858 74.8026 115.15 69.5531 115.15C57.21 115.15 45.3724 124.583 36.6445 141.373C30.9676 152.294 26.9088 165.746 24.7648 180.35V182.952Z" fill="#D4D4D4"/>
            <Face ref={ element => this.faceRef = element }/>
            <g className="RightEar">
              <path className="OuterEar" d="M111.689 3.00416C116.578 5.75318 119.895 11.0997 119.895 17.2448C119.895 26.1975 112.855 33.4552 104.169 33.4552C95.4837 33.4552 88.4428 26.1975 88.4428 17.2448C88.4428 8.29202 95.4837 1.03438 104.169 1.03438C105.113 1.03438 106.038 1.12014 106.936 1.28452L108.544 0L108.618 1.69225C108.751 1.73247 108.883 1.77445 109.014 1.81815L110.069 1.03576L110.165 2.25438C110.345 2.33086 110.523 2.41067 110.7 2.49375L112.765 0.705773L111.689 3.00416Z" fill="white"/>
              <path className="InnerEar" d="M103.45 6.77134C89.7574 7.58856 93.2979 31.6812 107.158 27.1708C117.148 23.7026 115.044 6.17917 103.45 6.77134Z" fill="#D4D4D4"/>
            </g>
            <g className="LeftEar">
              <path className="OuterEar" d="M48.4526 17.2582C48.4526 26.211 41.4117 33.4686 32.7263 33.4686C24.0409 33.4686 17 26.211 17 17.2582C17 14.7904 17.535 12.4513 18.492 10.3576L18.3281 10.3189L17.4448 7.32695L19.8026 8.01906C19.8511 7.94719 19.9001 7.87573 19.9496 7.80471L19.4097 5.70843L21.2523 6.17232C21.3608 6.05307 21.471 5.93552 21.5829 5.81969L20.2741 1.94L22.8313 4.65813C25.5337 2.40044 28.9767 1.04782 32.7263 1.04782C41.4117 1.04782 48.4526 8.30546 48.4526 17.2582Z" fill="white"/>
              <path className="InnerEar" d="M31.9764 6.34959C18.2841 7.16681 21.8246 31.2595 35.6843 26.749C45.6742 23.2808 43.571 5.75742 31.9764 6.34959Z" fill="#D4D4D4"/>
            </g>
          </PolarBear>
        </ArtBoard>
      </>
    )
  }
};
