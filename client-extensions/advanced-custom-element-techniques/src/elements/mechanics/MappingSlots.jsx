import React from 'react';
import { useMapping } from './MappingContext';
import MechanicInfoCard from './MechanicInfoCard';

const MappingSlots = () => {
  const { name, description, imageUrl } = useMapping();

  return (
    <>
      <MechanicInfoCard
        src={imageUrl}
        alt={name}
        name={name}
        description={description}
        useOverlay={true}
      />
    </>
  );
};

export default MappingSlots;
