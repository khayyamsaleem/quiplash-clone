import React from 'react';
import './add.css';
import { Form, Button, Nav } from 'react-bootstrap';

export default class AddPrompt extends React.Component{
    render(){
        return(
            <>
                <div id="about">
                    <h1>Add a Prompt</h1>
                    <p>Wanna see your own prompts featured in a game? Add a prompt here,
                      and we'll vet it and add it to the game! You never know, maybe you'll
                      even see it in your own game!
                    </p>
                        {/* <Form.Label>Add a prompt</Form.Label>
                        // <Form.Control as="textarea" rows="3" cols="10" placeholder="Add a prompt"/>*/}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control as="textarea" rows="3" placeholder="Fill prompt here..."/>
                        </Form.Group>
                    <br></br>
                    <Nav.Link href="/"><Button variant="primary" type="submit">Submit</Button></Nav.Link>
                </div>
            </>
        )
    }
}
