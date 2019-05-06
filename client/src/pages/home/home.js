import React, {Component} from 'react';
import './home.css';
import About from '../about/about';
import Arrow from '../../components/Arrow/Arrow';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-scroll";
import { joinPrivateRoom } from '../../utils/api';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: undefined,
            playerName: "",
        }
    }

    joinGame() {
        const { roomCode, playerName } = this.state
        joinPrivateRoom(roomCode, playerName, (res) => {
            const { roomName, msg } = res
            if (msg === 'success') {
                this.props.history.push({
                    pathname: '/waiting/private',
                    state: {
                        roomCode,
                        playerName,
                        roomName
                    }
                })
            }
        });
    }

    render() {
        return (
            <>
                <div id="home">
                    <h1 id="title">Quip Thinking</h1>
                    <h4 id="byline">the online game of witty lines</h4>
                    <Form>
                        <Form.Control style={{ margin: '10px 0' }} onChange={(e) => this.setState({ roomCode: e.target.value })} placeholder="Enter room code" />
                        <Form.Control style={{ margin: '10px 0' }} onChange={(e) => this.setState({ playerName: e.target.value })} placeholder="Enter your player name" />
                        <Button style={{ margin: '10px 0' }} onClick={this.joinGame.bind(this)} variant="primary">Submit</Button>
                    </Form>
                </div>
                <Link to="about" smooth={true}><Arrow /></Link>
                <About id="about" />
            </>
        )
    }
}

export default withRouter(Home)
