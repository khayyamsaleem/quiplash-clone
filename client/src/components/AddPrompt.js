import React from "react";
import "../App.css";
import Header from "./header";
import { Nav, Form, Row, Col, Button } from "react-bootstrap";

const AddPrompt = () => {
	return (
		<>
		<Header/>
		<div className="AddPrompt">

			<h1>Enter Prompt:</h1>

			<br/>

			<Form>

				<Row>
					<Col>
						<Form.Control as="textarea" rows="3" placeholder="prompt"/>
					</Col>
				</Row>
				<Nav.Link href="/Game"><Button variant="primary" type="submit">Submit!</Button></Nav.Link>
			</Form>

		</div>
		</>
	)
}

export default AddPrompt;
