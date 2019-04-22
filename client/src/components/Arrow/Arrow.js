import React from 'react';
import './arrow.css';
const $ = window.$;

export default class Arrow extends React.Component{
    constructor(props){
        super(props);
        this.scrollPage=this.scrollPage.bind(this);
    }
    scrollPage(){
        const $target = $('html,body');
        $target.animate({scrollTop: $target.height()},500);
    }
    render(){
        return(
            <>
            <div className="arrow" onClick={this.scrollPage}></div>
            </>
        )
    }
}