import React from 'react';
import ClayCard from '@clayui/card';
import './MechanicCard.css';

const MechanicCard = ({ id, name, description, imageUrl, imageAlt }) => {
	return (
		<ClayCard className="mechanic-card" key={id}>
			<div
				className="mechanic-card-img"
				style={{ backgroundImage: `url(${imageUrl})` }}
				role="img"
				aria-label={imageAlt || name}
			>
				<div className="mechanic-card-overlay">
					<div className="mechanic-card-name">{name}</div>
					<div className="mechanic-card-description">{description}</div>
				</div>
			</div>
		</ClayCard>
	);
};

export default MechanicCard;
