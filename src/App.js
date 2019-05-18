import React, { Component, createContext } from 'react';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import User from './User';
import { UserContext } from './UserContext';

class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Henry',
    email: 'henry@henry.com',
  }

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider
        value={{
          user: this.state,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

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
