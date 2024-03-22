import React, { Component } from 'react';
import Nav from './Nav';

export default class Life extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        };
        console.warn('constructor');
    }

    componentDidMount() {
        console.warn('didMount');
    }

    render() {
        return (
            <div>
                <h1>Life cycle</h1>
                {
                    this.state.show ?
                        <Nav />
                        : null
                }
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>Toggle button</button>
            </div>
        );
    }
}
