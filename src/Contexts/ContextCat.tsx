import { Cat } from '@models/Cat';
import React, { useState, createContext, useMemo } from 'react';

const ContextCat = createContext([]);

interface IContextCatParams {
  children: JSX.Element;
}

export const ProvidertCat = ({ children }: IContextCatParams) => {
  const [cats, setCats] = useState<Cat[]>([]);
  const valueCats = useMemo(() => ({ cats, setCats }), [cats]);

  return <ContextCat.Provider value={valueCats}>{useMemo(() => children, [])}</ContextCat.Provider>;
};
