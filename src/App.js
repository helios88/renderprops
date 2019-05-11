import React, { Component } from 'react'
import Toggle from './Toggle'

export default class App extends Component {
  render() {
    return (
      <div>
        <Toggle
          render={({ on, toggle }) => (
            <>
              {on && <p>This from Toggle but from App</p>}
              <button onClick={toggle}>Show &amp; Hide</button>
            </>
          )}
        />
      </div >
    )
  }
}

