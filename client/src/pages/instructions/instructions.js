import React from 'react';
import './instructions.css';

export default class Instructions extends React.Component{
    render(){
        return(
            <div id="instructions">
                <h2>How Do I Play?</h2><br></br>
                <div id="boxes">
                    <div className="box" id="box1">
                        <h4>Starting a Game</h4>
                        <h5>Creating a Room</h5>
                        <p>You can choose to create either a public room, to play with
                            anyone online, or a private room for friends and family. If 
                            you create a private room, you will be given a room code, like 
                            "XP2R" to share.
                        </p>
                        <h5>Joining a Room</h5>
                        <p>You can join a private room with your friend's room code, or 
                            any available public room. 
                        </p>
                    </div>
                    <div className="box" id="box2">
                        <h4>Playing the Game</h4>
                        <p>There are three rounds total, each with the same layout. 
                            Each person playing will get two prompts, and 60 seconds to
                            come up with an answer for each. When everyone has given their 
                            answers, the prompts will be displayed, along with answers from 
                            two different people. Everyone, except the players who wrote answers, 
                            can vote on their favorite one. <br></br>
                            After all the prompts have been cycled through, the current scores 
                            for the players are shown. Players can get double and triple the points 
                            in the second and third rounds. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}