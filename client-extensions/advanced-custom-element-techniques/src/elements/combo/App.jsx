import React, { useState } from 'react';
import { MappingContext } from './MappingContext';
import SlotParserComponent from './SlotParserComponent';
import MappingSlots from './MappingSlots';

const convertToBoolean = (value) => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true';
  }
  return false;
};

const App = ({ id, isEditMode }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const isEditModeBoolean = convertToBoolean(isEditMode);

  return (
    <div key={id}>
      <MappingContext.Provider value={{ name, description, setName, setDescription }}>
        <SlotParserComponent isEditMode={isEditModeBoolean} />
        {!isEditModeBoolean && <MappingSlots />}
      </MappingContext.Provider>
    </div>
  );
};

export default App;
