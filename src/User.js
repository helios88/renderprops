import React, { Component } from 'react';

import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            {context.user.name}
            <button type="submit" onClick={context.logout}>Logout</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
