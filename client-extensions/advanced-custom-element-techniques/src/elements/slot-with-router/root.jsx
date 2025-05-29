import React from "react";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import CardsPage from "./pages/cards";
import HomePage from "./pages/home";

export default function SlotWithRouterRoot() {
	return (
		<MemoryRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/cards" element={<CardsPage />} />
			</Routes>
		</MemoryRouter>
	);
}
