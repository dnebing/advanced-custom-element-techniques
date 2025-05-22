import React from 'react';
import { useMapping } from './MappingContext';

const MappingSlots = () => {
  const { name, description } = useMapping();

  return (
    <div className="mapping-slots">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default MappingSlots;