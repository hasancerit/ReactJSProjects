import React, { Component } from 'react'


class Navbar extends Component {
    render() {
        return (
            <div>
                <h2> {this.props.title} </h2>
                <hr></hr>
            </div>
        )
    }
}


export default Navbar;
