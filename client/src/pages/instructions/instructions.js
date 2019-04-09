import React from 'react';
import './instructions.css';

export default class Instructions extends React.Component{
    render(){
        return(
            <div id="instructions">
                <h2>How Do I Play?</h2>
                <div id="boxes">
                    <div className="box" id="box1">
                        <h4>Starting a Game</h4>
                        <h5>Creating a Room</h5>
                        <h5>Joining a Room</h5>
                    </div>
                    <div className="box" id="box2">
                        <h4>Playing the Game</h4>
                    </div>
                </div>
            </div>
        )
    }
}