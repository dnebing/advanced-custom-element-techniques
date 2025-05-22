import React, { createContext, useContext } from 'react';

// Define the shape of the context
export const MappingContext = createContext({
  name: '',
  description: '',
  setName: () => {},
  setDescription: () => {},
});

// Optional convenience hook
export const useMapping = () => useContext(MappingContext);

