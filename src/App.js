import React, { Component } from 'react'

import Toggle from './Toggle';
import Modal from './Modal';
export default class App extends Component {
  render() {
    return (
      <>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Inside a modal!</h1>
              </Modal>
            </>
          )}
        </Toggle>
      </>
    )
  }
}
