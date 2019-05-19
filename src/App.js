import React, { Component } from 'react';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import User from './User';
import UserProvider from './UserProvider';

export default class App extends Component {
  render() {
    return (
      <UserProvider>
        <>
          <User />
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
      </UserProvider>
    );
  }
}
