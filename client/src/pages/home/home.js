import React, {Component} from 'react';
import './home.css';
import About from '../about/about';
import Arrow from '../../components/Arrow/Arrow';
import {Form, Button} from 'react-bootstrap';
import { Link } from "react-scroll";
import io from 'socket.io-client'
const socket = io('http://localhost:8000/');




 class Home extends Component{
   constructor(props){
     super(props);
     this.state = {

     }
   }








    render(){
      const {list} = this.state;
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
            <Link to="about" smooth={true}><Arrow /></Link>
            <About id="about"/>
            </>
        )
    }
}

export default Home;
