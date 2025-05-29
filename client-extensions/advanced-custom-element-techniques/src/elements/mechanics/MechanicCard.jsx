import React, { useState } from 'react';
import { MappingContext } from './MappingContext';
import SlotParserComponent from './SlotParserComponent';
import MappingSlots from './MappingSlots';

const MechanicCard = ({ id }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div {...(id && { key: id })}>
      <MappingContext.Provider value={{ name, description, imageUrl, setName, setDescription, setImageUrl }}>
        <SlotParserComponent />
        <MappingSlots />
      </MappingContext.Provider>
    </div>
  );
};

export default MechanicCard;