import React from 'react';
import PropTypes from 'prop-types';
import ClayCard from '@clayui/card';
import './MechanicInfoCard.css';

const MechanicInfoCard = ({ src, alt, name, description, useOverlay = true }) => {
  return (
    <ClayCard className="mechanic-info-card">
      <div className="image-wrapper">
        <img className="mechanic-image" src={src} alt={alt} />
        <div className={`overlay-text ${useOverlay ? 'with-gradient' : ''}`}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </ClayCard>
  );
};

MechanicInfoCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  useOverlay: PropTypes.bool,
};

export default MechanicInfoCard;

