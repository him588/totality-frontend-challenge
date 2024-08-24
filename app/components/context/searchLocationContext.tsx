"use client";

import React, { createContext, useState } from "react";

type searchField = {
  minValue: number;
  maxValue: number;
  location: string;
  rooms: string;
};
type state = {
  searchCriteria?: searchField | null;
  setSearchCriteria?: React.Dispatch<React.SetStateAction<searchField | null>>;
};

const searchCriteriaContext = createContext<state | null>(null);
function SearchCriteraContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchCriteria, setSearchCriteria] = useState<searchField | null>(
    null
  );
  return (
    <searchCriteriaContext.Provider
      value={{ searchCriteria, setSearchCriteria }}
    >
      {children}
    </searchCriteriaContext.Provider>
  );
}

export { searchCriteriaContext, SearchCriteraContextProvider };
