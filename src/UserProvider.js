import React, { Component } from 'react';
import { UserContext } from './UserContext';

export default class UserProvider extends Component {
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
