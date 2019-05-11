import React, { Component } from 'react'
import styled from 'styled-components'
import Portal from './Portal'


export class Modal extends Component {
 render() {
  return (
   <Portal>
    <ModalWrapper>
     {this.props.children}
    </ModalWrapper>
   </Portal>
  )
 }
}

export default Modal


const ModalWrapper = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 length: 100%;
 background: whitesmoke;
`;