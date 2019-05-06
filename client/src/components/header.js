import React from 'react';
import '../App.css';
import logo from '../logo.png';
import { Nav, Navbar, Button } from 'react-bootstrap';
// import { LinkContainer } from "react-router-bootstrap"
import { withRouter } from "react-router-dom"
import { PublicModal } from './PublicModal';
import { AddModal } from './AddModal';

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = { publicModalShow: false, addModalShow: false };
  }

  render(){
    const { history } = this.props;
    return(
      <>
        <Navbar fixed="top" style={{backgroundColor: '#00649b'}} expand="lg">
          <Navbar.Brand onClick={() => history.push('/')}>
            <img alt="quip logo" src={logo} style={{color: 'black'}} width="85" height="44.25" className="d-inline-block align-top" onClick={this.scrollToTop}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{ float: 'right'}}>
            <Nav>
                <Nav.Link>
                  <Button style={{backgroundColor: '#66BB6A',color: 'white'}} onClick={() =>history.push('/create/private')}>Create a Private Room</Button>
                </Nav.Link>
                <Nav.Link><Button style={{backgroundColor: '#26A69A'}} onClick={() => this.setState({ publicModalShow: true })}>Create a Public Room</Button></Nav.Link>
                <Nav.Link><Button style={{backgroundColor: '#EF5350'}} onClick={() => this.setState({addModalShow: true})}>Add a Prompt</Button></Nav.Link>
                <Nav.Link><Button style={{backgroundColor: '#BA68C8'}} onClick={() => history.push('/join/public')}>Join a Room</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <PublicModal show={this.state.publicModalShow} onHide={() => this.setState({ publicModalShow: false })}/>
        <AddModal show={this.state.addModalShow} onHide={() => this.setState({ addModalShow: false })}/>
      </>
    )
  }
}
export default withRouter(Header);

