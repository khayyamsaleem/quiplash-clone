import React from "react";
import "./create.css";
import { Form, Row, Col } from "react-bootstrap";
import Header from "../../components/header";

const ExitPages = () => {
	return (

		<><Header>

		<div className="exit">

			<Form>
				<h1>Continue Playing?</h1> <br/>

				<Row>
					<Col>
						<span class="close">&times;</span>
						<p> play with the same people </p>
					</Col>
					<Col>
						<span class="close">&times;</span>
						<p> exit </p>
					</Col>
				</Row>
			</Form>

		</div>
	)
}

export default ExitPages;