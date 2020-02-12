import React, { Component } from 'react';
import './Clear.css';

class Clear extends Component {

    render() {
        return (
            <div 
            className="clear"
            onClick={() => this.props.handleClear()} //passing through the onlick method from app.js
            
            >
                {this.props.children}
            </div>
        )
    }
}

export default Clear;