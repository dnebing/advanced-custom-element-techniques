import React from "react";

export default function NameSlot() {
	return (
		<div>
			<slot name="slotWithRouterName"></slot>
		</div>
	);
}
