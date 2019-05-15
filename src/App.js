import React, { Component } from 'react';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';


export default class App extends Component {
  render() {
    return (
      <>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <button type="submit" onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Inside a modal!</h1>
              </Modal>
            </>
          )}
        </Toggle>
      </>
    );
  }
}
