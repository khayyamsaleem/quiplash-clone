import React from 'react';
import './home.css';
import About from '../about/about';
import Arrow from '../../components/Arrow/Arrow';
import {Form, Button} from 'react-bootstrap';
import { Link } from "react-scroll";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            roomCode: undefined,
            playerName: "",
        }
    }
    render(){
        return(
            <>
            <div id="home">
                <h1 id="title">Quip Thinking</h1>
                <h4 id="byline">the online game of witty lines</h4>
                <Form>
                    <Form.Control style={{margin: '10px 0'}} placeholder="Enter room code"/>
                    <Form.Control style={{margin: '10px 0'}} placeholder="Enter your player name" />
                    <Button       style={{margin: '10px 0'}} variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
            <Link to="about" smooth={true}><Arrow /></Link>
            <About id="about"/>
            </>
        )
    }
}