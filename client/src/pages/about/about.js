import React from 'react';
import './about.css';
import ImageCarousel from "../../components/ImageCarousel";

export default class About extends React.Component{
    render(){
        return(
            <div id="about">
                <h2>What is Quip Thinking?</h2>
                <div id="boxes">
                    <div className="box" id="box1">
                        <ImageCarousel />
                    </div>
                    <div className="box" id="box2">
                        <p>Quip Thinking is all about coming up with the funniest 
                        lines, to fun prompts! Just use your device to answer prompts, like: <br></br><br></br>
                        "The name of your new plumbing company"<br></br><br></br>
                        You can play with anyone, no matter where they are. If you only 
                        want to play with friends and family, you can generate your 
                        own private room code, like "XP2R" that they can use to join your room. If your 
                        friends aren't online, you can always join a public room and play 
                        with some potential new friends!
                        <br></br>
                        There are three rounds total, each with the same layout. 
                        Each person playing will get two prompts, and 60 seconds to
                        come up with an answer for each. When everyone has given their 
                        answers, the prompts will be displayed, along with answers from 
                        two different people. Everyone, except the players who wrote answers, 
                        can vote on their favorite one. <br></br>
                        After all the prompts have been cycled through, the current scores 
                        for the players are shown. Players can get double and triple the points 
                        in the second and third rounds. </p>
                    </div>
                </div>
            </div>
        )
    }
}