

import React, { Component } from 'react'
import './App.scss'

export namespace App {
 
  export interface IProps {
     name: string
  }
}


class App extends Component<App.IProps> {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default App