import React from "react";
import { Link } from "react-router-dom";
import NameSlot from "../slots/name";

export default function HomePage() {
	return (
		<div>
			<NameSlot />
			<Link to="/cards">Cards</Link>
		</div>
	);
}
