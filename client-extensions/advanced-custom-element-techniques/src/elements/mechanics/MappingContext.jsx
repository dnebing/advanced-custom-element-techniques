import React, { createContext, useContext } from 'react';

export const MappingContext = createContext({
  name: '',
  description: '',
  imageUrl: '',
  setName: () => {},
  setDescription: () => {},
  setImageUrl: () => {},
});

export const useMapping = () => useContext(MappingContext);

