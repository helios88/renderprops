import React, { Component } from 'react'
import Toggle from './ToggleRenderProps';

export class App extends Component {
  render() {
    return (
      <div>
        <Toggle
          render={({ toggle, on }) => (
            <div>
              {on && <h1>Hello</h1>}
              <button onClick={toggle}>Show me</button>
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
