import React, { useEffect, useRef, useState } from 'react';
import ClayLayout from '@clayui/layout';
import MechanicCard from './MechanicCard';


const FeaturedMechanicsList = ({ isEditMode }) => {
	const editMode =
		typeof isEditMode === 'string'
			? isEditMode.toLowerCase() === 'true'
			: !!isEditMode;

	const slotRef = useRef(null);
	const [mechanics, setMechanics] = useState([]);

	useEffect(() => {
		if (editMode || !slotRef.current) return;

		const slot = slotRef.current;

		const extractMechanics = () => {
			const elements = slot.assignedElements({ flatten: true });
			const rows = elements[0]?.querySelectorAll('.row') || [];

			const newMechanics = Array.from(rows).map((row) => {
				const paragraphs = row.querySelectorAll(
					'.component-paragraph[data-lfr-editable-type="rich-text"]'
				);
				const image = row.querySelector(
					'img[data-lfr-editable-type="image"]'
				);

				return {
					id: paragraphs[0]?.textContent.trim() || '',
					name: paragraphs[1]?.textContent.trim() || '',
					description: paragraphs[2]?.textContent.trim() || '',
					imageUrl: image?.src || '',
					imageAlt: image?.alt || '',
				};
			});

			setMechanics(newMechanics);
		};

		const observer = new MutationObserver(extractMechanics);
		observer.observe(slot, { childList: true, subtree: true });

		extractMechanics();

		return () => observer.disconnect();
	}, [editMode]);

	return (
		<ClayLayout.ContainerFluid>
			<slot name="dropZoneSlot" ref={slotRef} />

			{!editMode && (
				<div className="d-flex flex-wrap justify-content-center gap-3">
					{mechanics.length === 0 ? (
						<div className="placeholder-text">
							Featured mechanics will appear here.
						</div>
					) : (
						mechanics.map((mech) => <MechanicCard key={mech.id} {...mech} />)
					)}
				</div>
			)}
		</ClayLayout.ContainerFluid>
	);
};

export default FeaturedMechanicsList;