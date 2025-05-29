import React from "react";

export default function CardsSlot() {
	return (
		<div>
			<slot name="slotWithRouterCards"></slot>
		</div>
	);
}
