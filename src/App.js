import React, { Component } from 'react';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import User from './User';
import { UserContext } from './UserContext';

class UserProvider extends Component {
  state = {
    name: 'Henry',
    id: '123',
    email: 'henry@henry.com',
  }

  logout = () => {
    this.setState({
      name: '',
      id: null,
      email: '',
    });
  }

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout,
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
