import { createContext } from "react";
import { useState } from "react";

const CustomCursorContext = createContext({
  type: "default",
  setType: () => {},
});

export const CustomCursorProvider = ({ children }) => {
  const [type, setType] = useState("default");
  return (
    <CustomCursorContext.Provider
      value={{
        type,
        setType,
      }}
    >
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorContext;
