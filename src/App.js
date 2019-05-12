import React, { Component } from 'react'
import Toggle from './Toggle'
import Portal from './Portal'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Not in a portal</h1>
        <Toggle>
          {({ on, toggle }) => (
            <>
              {on && <p>This from Toggle with children but from App</p>}
              <button onClick={toggle}>Show &amp; Hide</button>
              <Portal>
                {on && <p>"On" works inside a portal too!</p>}
              </Portal>
            </>
          )}
        </Toggle>
      </div >
    )
  }
}

