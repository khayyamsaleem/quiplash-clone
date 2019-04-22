import React from 'react';
import './home.css';
import About from '../about/about';
import Arrow from '../../components/Arrow/Arrow';
import {Form, Button} from 'react-bootstrap';

export default class Home extends React.Component{
    render(){
        return(
            <>
            <div id="home">
                <h1 id="title">Quip Thinking</h1>
                <h4 id="byline">the online game of witty lines</h4><br></br>
                <Form>
                    <Form.Control placeholder="Enter room code"/><br></br>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
            <Arrow />
            <About />
            </>
        )
    }
}