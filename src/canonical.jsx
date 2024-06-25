import React, { createContext, useContext, useEffect, useState } from "react";

const CanonicalContext = createContext();

export const useCanonical = () => useContext(CanonicalContext);

export const CanonicalProvider = ({ children }) => {
  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    // Set the default canonical URL here if needed
    setCanonicalUrl("https://protyrefitters.co.uk/");
  }, []);

  return (
    <CanonicalContext.Provider value={{ canonicalUrl, setCanonicalUrl }}>
      {children}
    </CanonicalContext.Provider>
  );
};
