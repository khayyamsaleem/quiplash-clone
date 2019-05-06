import React from 'react';
import '../App.css';
import logo from '../logo.png';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { PublicModal } from './PublicModal';
import { PrivateModal } from './PrivateModal';
import { AddModal } from './AddModal';

// const socket = io();
// socket.on("connect", () => socket.emit("connectEvent", "message"));

export default class Header extends React.Component{
  constructor(...args) {
    super(...args);
    this.state = { publicModalShow: false, privateModalShow: false, addModalShow: false };
  }

  render(){
    let publicModalClose = () => this.setState({ publicModalShow: false });
    let privateModalClose = () => this.setState({ privateModalShow: false });
    let addModalClose = () => this.setState({ addModalShow: false });
    return(
      <>
        <Navbar fixed="top" style={{backgroundColor: '#00649b'}} expand="lg">
          <Navbar.Brand href="/">
            <img alt="quip logo" src={logo} style={{color: 'black'}} width="85" height="44.25" className="d-inline-block align-top" onClick={this.scrollToTop}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{ float: 'right'}}>
            <Nav>
              <Nav.Link href="#" style={{color: 'white'}}><Button style={{backgroundColor: '#66BB6A'}} onClick={() => this.setState({privateModalShow: true})} id="public">Create a Private Room</Button></Nav.Link>
              <Nav.Link href="#" style={{color: 'white'}}><Button style={{backgroundColor: '#26A69A'}} onClick={() => this.setState({ publicModalShow: true })} id="private">Create a Public Room</Button></Nav.Link>
              <Nav.Link href="/JoinRoom" style={{color: 'white'}}><Button style={{backgroundColor: '#BA68C8'}}>Join a Room</Button></Nav.Link>
              <Nav.Link href="#" style={{color: 'white'}}><Button style={{backgroundColor: '#EF5350'}} onClick={() => this.setState({addModalShow: true})}>Add a Prompt</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <PublicModal show={this.state.publicModalShow} onHide={publicModalClose}/>
        <PrivateModal show={this.state.privateModalShow} onHide={privateModalClose}/>
        <AddModal show={this.state.addModalShow} onHide={addModalClose}/>
      </>
    )
  }
}
