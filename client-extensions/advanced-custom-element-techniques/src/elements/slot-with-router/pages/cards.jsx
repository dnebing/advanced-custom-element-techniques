import React from "react";
import { Link } from "react-router-dom";
import Cards from "../slots/cards";

export default function CardsPage() {
	return (
		<div>
			<Link to="/">Home Page</Link>
			<Cards />
		</div>
	);
}
