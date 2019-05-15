import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal, absolute } from 'Utilities';
import { Card } from './Cards';
import Icon from './Icon';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on
          && (
            <>
              <ModalWrapper>
                <ModalCard>
                  <CloseButton onClick={toggle}>
                    <Icon name="close" />
                  </CloseButton>
                  <h1>{children}</h1>
                </ModalCard>
                <Background onClick={toggle} />
              </ModalWrapper>
            </>
          )
        }
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
background-color: papayawhip;
${absolute({})}
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const ModalCard = styled(Card)`
position: relative;
min-width: 500px;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
`;

const CloseButton = styled.button`
position: absolute;
top: 0;
right: 0;
border: none;
background: transparent;
padding: 15px;
`;

const Background = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background: black;
opacity: 0.7;
`;
