import React from 'react';

export default class GenButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buttonText: 'Click me' };
    }

    handleClick = () => {
        this.setState({
            buttonText: (this.state.buttonText === 'Click me') ? 'Click me not': 'Click me' 
        });
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.buttonText}</button>
        )
    }
}