import React from "react";
import "../App.css";
import Header from "./header";

const AddPrompt = () => {
	return (
		<><Header/>

		<div className="AddPrompt">

			<h1>Enter Prompt:</h1>

			<br/>

			<Form>

				<Row>
					<Col>
						<Form.Control placeholder="prompt"/>
					</Col>
				</Row>

				<Button variant="primary" type="submit">Submit!</Button>

			</Form>

		</div>
	)
}

export default AddPrompt;