import React from 'react';
import './home.css';
import About from '../about/about';
import Instructions from '../instructions/instructions';

export default class Home extends React.Component{
    render(){
        return(
            <>
            <div id="home">
                <h1 id="title">Quip Thinking</h1>
                <h4 id="byline">the online game of witty lines</h4> 
            </div>
            <div className="arrow"></div>
            <About/>
            <Instructions/>
            </>
        )
    }
}