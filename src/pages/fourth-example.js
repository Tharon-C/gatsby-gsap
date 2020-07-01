import React from 'react'
import PrismCode from 'react-prism'
import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from '../components/NextButton'
import Modal from '../animations/modal'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Implementing a Modal</h1>
    <h2>Managing animation state with props</h2>
    <h3>index.js</h3>
    <PrismCode component="pre" className="language-js">
      {`
      const ModalExample = () => {
        const [ modalVisible, setModalVisible ] = React.useState(false)
        return (
          <div>
            <Button
              style={{ marginBottom: "50px" }}
              onClick={() => setModalVisible(true)}
            >
              Show Modal
            </Button>
            <ModalComponent
              visible={modalVisible}
              close={() => setModalVisible(false)}
            />
          </div>
        );
      }
      `}
    </PrismCode>
    <h3>ModalComponent.js</h3>
    <PrismCode component="pre" className="language-js">
      {`
      import React, { Component } from 'react';
      import styled from 'styled-components';
      import { TimelineLite } from 'gsap/all';
      import Button from '../../components/Button'
      
      const ModalDialog = styled.div\`
        opacity: 0;
        visibility: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 600px;
        background-color: #fff;
        box-shadow: 1px 1px 10px 1px black;
        border-radius: .3rem;
        outline: 0;
        padding: 20px;
      \`;
      const Modal = styled.div\`
        background-color: rgba(30, 30, 30, 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1050;
        overflow: hidden;
        outline: 0;
      \`;
      
      class ModalComponent extends Component {
      
        constructor(props){
          super(props);
      
          this.modalWrap = null;
          this.modalDialog = null;
          this.modalTween = new TimelineLite({ paused: true });
      
          this.keyDownHandler = this.keyDownHandler.bind(this);
        }
      
      
        keyDownHandler = e => {
          if ( e.keyCode === 27 ) this.props.close();
        }
      
        componentDidMount() {
          this.modalTween
            .to(this.modalWrap, 0.01, { autoAlpha: 1 })
            .to(this.modalDialog, 0.25, { y: 50, autoAlpha: 1 }, 0)
            .reversed(true)
            .paused(false);
        }
      
        componentDidUpdate() {
          if ( this.props.visible ) {
            window.addEventListener('keydown', this.keyDownHandler);
          } else {
            window.removeEventListener('keydown', this.keyDownHandler);
          }
          this.modalTween.reversed(!this.props.visible);
        }
      
        render() {
          return (
            <Modal
              ref={div => this.modalWrap = div}
              onClick={this.props.close}
            >
              <ModalDialog
                ref={div => this.modalDialog = div}
                onClick={event => event.stopPropagation()}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h4>A Simple Modal Tween</h4>
                  </div>
                  <div className="modal-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam velit provident sunt iusto ratione dolore veritatis deserunt ullam vel doloribus.</p>
                  </div>
                  <div className="modal-footer">
                    <Button
                      className="btn btn-secondary"
                      onClick={this.props.close}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </ModalDialog>
            </Modal>
          );
        }
      
      }
      
      export default ModalComponent;
      
      `}
    </PrismCode>
    <Modal />
    <NextButton to="/fifth-example" />
  </Layout>
)

export default ThirdPage
