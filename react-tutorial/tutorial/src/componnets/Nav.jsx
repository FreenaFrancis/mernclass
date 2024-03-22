import React, { Component } from 'react'

export default class Nav extends Component {
    componentWillUnmount(){
        console.warn('componentwillmunt')
    }
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}
