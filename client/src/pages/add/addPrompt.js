import React from 'react';
import './add.css';
import {Form, Button} from 'react-bootstrap';

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
                    <Form>
                        {/* <Form.Label>Add a prompt</Form.Label> */}
                        <Form.Control placeholder="Add a prompt"/>
                    </Form><br></br>
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </>
        )
    }
}